/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  basePath: "/impasto-web",
  assetPrefix: "/impasto-web/",
};

module.exports = nextConfig;