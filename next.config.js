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
  output: 'export',
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  
  // Configuración de imágenes mejorada para Core Web Vitals
  images: {
    unoptimized: true, // Para export estático
    formats: ['image/avif', 'image/webp'], // Formatos optimizados
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Tamaños comunes
    imageSizes: [16, 32, 48, 64, 96, 128, 256], // Para íconos
    minimumCacheTTL: 31536000, // 1 año de cache
    dangerouslyAllowSVG: true,
  },
  
  // Headers optimizados para performance
  async headers() {
    return [
      {
        // Cache headers para assets estáticos
        source: '/assets/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Headers generales para todas las páginas
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          // Preload hints para recursos críticos
          {
            key: 'Link',
            value: '</assets/landing/LogoHiPower.svg>; rel=preload; as=image; type=image/svg+xml'
          }
        ],
      },
    ];
  },
  
  // Optimizaciones experimentales
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    // Nuevas optimizaciones para Core Web Vitals
    optimizePackageImports: ['react-icons', 'lucide-react'], // Reduce bundle de iconos
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  
  webpack: (config, { dev, isServer }) => {
    // Optimizaciones para desarrollo también
    if (!isServer) {
      // Resolver alias para reducir bundle size
      config.resolve.alias = {
        ...config.resolve.alias,
        // Reduce el bundle de react-icons
        '@react-icons/all-files': false,
      };
    }

    // Optimizaciones de producción
    if (!dev && !isServer) {
      // TerserPlugin optimizado para Core Web Vitals
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ['console.info', 'console.debug', 'console.warn'],
              passes: 2, // Múltiples pasadas para mejor compresión
            },
            mangle: {
              safari10: true, // Compatibilidad Safari
            },
            output: {
              ecma: 2015, // ES2015+ para mejor compresión
              comments: false,
              ascii_only: true,
            },
          },
          extractComments: false,
          parallel: true,
        }),
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: [
              'default',
              {
                discardComments: { removeAll: true },
                normalizeWhitespace: true,
                minifyFontValues: true,
                minifySelectors: true,
                // Optimizaciones adicionales CSS
                reduceIdents: true,
                mergeLonghand: true,
                mergeRules: true,
                colormin: true,
              },
            ],
          },
        })
      );

      // Runtime chunk optimizado
      config.optimization.runtimeChunk = {
        name: 'runtime',
      };
      
      // SplitChunks optimizado para mejor carga inicial
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 20, // Reducido para mejor LCP
        maxAsyncRequests: 25,
        minSize: 15000, // Tamaño mínimo reducido
        maxSize: 60000, // Tamaño máximo reducido para chunks más pequeños
        enforceSizeThreshold: 45000,
        cacheGroups: {
          default: false,
          vendors: false,
          
          // Framework crítico (React, etc.)
          framework: {
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
            name: 'framework',
            chunks: 'all',
            priority: 50,
            enforce: true,
          },
          
          // Bibliotecas de UI críticas (se cargan temprano)
          uiLibs: {
            test: /[\\/]node_modules[\\/](framer-motion|react-slick|aos)[\\/]/,
            name: 'ui-libs',
            chunks: 'all',
            priority: 45,
            enforce: true,
          },
          
          // React Icons (lazy load)
          reactIcons: {
            test: /[\\/]node_modules[\\/]react-icons[\\/]/,
            name: 'react-icons',
            chunks: 'async', // Carga asíncrona
            priority: 40,
          },
          
          // Bibliotecas grandes que pueden cargarse después
          heavyLibs: {
            test: /[\\/]node_modules[\\/](three|plotly|d3)[\\/]/,
            name: 'heavy-libs',
            chunks: 'async',
            priority: 35,
          },
          
          // Bibliotecas comunes
          lib: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 30,
            minChunks: 2,
            reuseExistingChunk: true,
            maxSize: 50000, // Chunks de vendor más pequeños
          },
          
          // CSS crítico
          criticalStyles: {
            name: 'critical-styles',
            test: /\.(css|scss|sass)$/,
            chunks: 'initial', // Carga inmediata para CSS crítico
            enforce: true,
            priority: 25,
          },
          
          // CSS no crítico
          styles: {
            name: 'styles',
            test: /\.(css|scss|sass)$/,
            chunks: 'async',
            enforce: true,
            priority: 20,
          },
          
          // Commons para código de la app
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 15,
            maxSize: 40000,
          },
        },
      };

      // Plugins de compresión optimizados
      config.plugins.push(
        new CompressionPlugin({
          filename: '[path][base].gz',
          algorithm: 'gzip',
          test: /\.(js|css|html|svg|json)$/,
          threshold: 4096, // Reducido a 4KB
          minRatio: 0.85,
          deleteOriginalAssets: false,
          compressionOptions: {
            level: 9, // Máxima compresión
            memLevel: 8,
          },
        }),
        new BrotliPlugin({
          asset: '[path].br[query]',
          test: /\.(js|css|html|svg|json)$/,
          threshold: 4096,
          minRatio: 0.85,
          deleteOriginalAssets: false,
          quality: 11, // Máxima calidad Brotli
        })
      );

      // Optimización adicional: Tree shaking mejorado
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
      
      // Module concatenation para bundles más pequeños
      config.optimization.concatenateModules = true;
    }

    // Plugin para analizar y optimizar el bundle
    if (process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
          reportFilename: 'bundle-analysis.html',
        })
      );
    }

    return config;
  },
  
  // Timeout aumentado para exportación compleja
  staticPageGenerationTimeout: 180,
  
  // Optimización de páginas estáticas
  generateBuildId: async () => {
    // Build ID determinístico para mejor caching
    return process.env.GIT_HASH || 'development';
  },
};

module.exports = withBundleAnalyzer(nextConfig);