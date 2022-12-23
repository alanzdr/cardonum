const withSvgr = require('next-plugin-svgr')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  fileLoader: true,
  svgrOptions: {
    titleProp: true,
  },
}

module.exports = withSvgr(nextConfig)
