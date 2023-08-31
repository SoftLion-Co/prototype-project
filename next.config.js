/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["s3-alpha-sig.figma.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
