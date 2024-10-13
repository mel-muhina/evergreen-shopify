/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // Define the pattern for images from Shopify's CDN
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        port: '', // Leave blank for default
        pathname: '/**', // Allows any path after the domain
      },
    ],
  },
};

module.exports = nextConfig;