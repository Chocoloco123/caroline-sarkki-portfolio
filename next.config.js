/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  images: {
    domains: [],
    // Optimize images for better performance
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  // Railway deployment configuration
  output: 'standalone',
  // Ensure proper port handling
  env: {
    PORT: process.env.PORT || '3000',
  },
}

module.exports = nextConfig