const cesiumPlugin = require.resolve("./cesium.config.js");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/react",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    cesiumPlugin,
  ],
};
