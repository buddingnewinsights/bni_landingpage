const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfiguration = {
  reactStrictMode: true,
  jsxRuntime: 'classic',
};

module.exports = withPlugins([optimizedImages], {
  ...nextConfiguration,
});
