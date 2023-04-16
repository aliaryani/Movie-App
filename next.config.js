/** @type {import('next').NextConfig} */

const withPwa = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  // disable: process.env.NODE_ENV === "development",
});

const nextConfig = withPwa({
  reactStrictMode: false,
  images: {
    domains: ["m.media-amazon.com"],
  },
  swcMinify: true,
});

module.exports = nextConfig;
