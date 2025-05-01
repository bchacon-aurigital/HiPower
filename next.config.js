const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  output: 'export',  // Genera una exportación estática
  trailingSlash: true,
  images: {
    unoptimized: true, // Necesario para exportación estática
  },
  webpack: (config, { dev, isServer }) => {
    // Solo aplicamos las optimizaciones en producción y para el cliente
    if (!dev && !isServer) {
      config.plugins.push(
        // Configuración GZIP
        new CompressionPlugin({
          filename: '[path][base].gz',
          algorithm: 'gzip',
          test: /\.(js|css|html|svg)$/,
          threshold: 10240, // Solo comprimir archivos más grandes que 10KB
          minRatio: 0.8,
          deleteOriginalAssets: false,
        }),
        // Configuración Brotli
        new BrotliPlugin({
          asset: '[path].br[query]',
          test: /\.(js|css|html|svg)$/,
          threshold: 10240,
          minRatio: 0.8,
          deleteOriginalAssets: false,
        })
      );
    }
    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
