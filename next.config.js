const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  output: 'export',  // Genera una exportación estática
  trailingSlash: true,
  poweredByHeader: false, // Elimina el header X-Powered-By por seguridad
  reactStrictMode: true,
  swcMinify: true, // Usar minificador SWC para mejor rendimiento
  images: {
    unoptimized: true, // Necesario para exportación estática
  },
  
  // Optimizaciones experimentales compatibles con tu versión
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    // Elimina modularizeImports que no es compatible
  },
  
  webpack: (config, { dev, isServer }) => {
    // Solo aplicamos las optimizaciones en producción y para el cliente
    if (!dev && !isServer) {
      // Configuración optimizada de TerserPlugin
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, // Elimina console.log
              drop_debugger: true, // Elimina debugger
              pure_funcs: ['console.info', 'console.debug', 'console.warn'], // Elimina otras funciones console
            },
            mangle: true, // Minimiza nombres de variables
            output: {
              comments: false, // Elimina todos los comentarios
              ascii_only: true, // Evita problemas con caracteres no ASCII
            },
          },
          extractComments: false, // Evita archivos de licencia separados
          parallel: true, // Utiliza múltiples hilos
        }),
        // Optimiza y minimiza CSS
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: [
              'default',
              {
                discardComments: { removeAll: true },
                normalizeWhitespace: true,
                minifyFontValues: true,
                minifySelectors: true,
              },
            ],
          },
        })
      );

      // Mejorar la deduplicación
      config.optimization.runtimeChunk = 'single';
      
      // Configuración de división de chunks
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 25,
        minSize: 20000,
        maxSize: 70000,
        cacheGroups: {
          default: false,
          vendors: false,
          // Framework bundle
          framework: {
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
            name: 'framework',
            chunks: 'all',
            priority: 40,
            enforce: true,
          },
          // Bibliotecas comunes
          lib: {
            test: /[\\/]node_modules[\\/]/,
            priority: 30,
            minChunks: 2,
            reuseExistingChunk: true,
          },
          // Estilo común
          styles: {
            name: 'styles',
            test: /\.(css|scss|sass)$/,
            chunks: 'all',
            enforce: true,
          },
          // Commons para el código de la aplicación
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 20,
          },
        },
      };

      // Plugins de compresión
      config.plugins.push(
        // Configuración GZIP optimizada
        new CompressionPlugin({
          filename: '[path][base].gz',
          algorithm: 'gzip',
          test: /\.(js|css|html|svg)$/,
          threshold: 8192, // Reducido a 8KB para más archivos
          minRatio: 0.8,
          deleteOriginalAssets: false,
        }),
        // Configuración Brotli optimizada
        new BrotliPlugin({
          asset: '[path].br[query]',
          test: /\.(js|css|html|svg)$/,
          threshold: 8192,
          minRatio: 0.8,
          deleteOriginalAssets: false,
        })
      );
    }
    return config;
  },
  // Optimización de rutas estáticas
  staticPageGenerationTimeout: 120,
};

module.exports = withBundleAnalyzer(nextConfig);