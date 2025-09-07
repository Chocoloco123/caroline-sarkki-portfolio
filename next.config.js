/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  images: {
    domains: [],
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  // Railway deployment configuration
  output: 'standalone',
  // Ensure proper port handling
  env: {
    PORT: process.env.PORT || '3000',
  },
}

module.exports = nextConfig