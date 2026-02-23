/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  reactStrictMode: true,
  webpack: (config, { webpack, buildId }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
    };
    return config;
  },
};

module.exports = nextConfig;
