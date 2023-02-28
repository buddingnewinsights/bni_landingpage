const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfiguration = {
  reactStrictMode: true,
};

module.exports = withPlugins([optimizedImages], {
  ...nextConfiguration,
  // // Remove any invalid properties or fix the issues with the properties
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback.fs = false;
  //   }
  //   return config;
  // },
  // // Add any other valid configuration properties you need
});