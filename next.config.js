const withSvgr = require('next-plugin-svgr')
const { PHASE_PRODUCTION_BUILD } = require('next/constants');

/** @type {import('next').NextConfig} */
module.exports = (phase) => {
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const env = {
    APP_HOST: isProd ? 'https://cardonum.vercel.app' : 'http://localhost:3000',
  };

  return withSvgr({
    env,
    reactStrictMode: true,
    fileLoader: true,
    svgrOptions: {
      titleProp: true,
    },
  })
}
