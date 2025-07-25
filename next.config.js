/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "devimages-cdn.apple.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
