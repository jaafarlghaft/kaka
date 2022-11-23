/** @type {import('next').NextConfig} */
const webpack = require("webpack");

module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },

  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
};
