/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    // Return the modified config
    return {
      ...config,
      resolve: {
        ...config.resolve,
        fallback: {
          fs: false,
          path: false,
          os: false,
        },
      },
    };
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};

module.exports = nextConfig; 