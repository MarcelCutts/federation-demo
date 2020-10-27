const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./gateway.js",
  plugins: [new webpack.ProgressPlugin()],

  target: "node",
};
