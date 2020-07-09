const path = require("path");

const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

function resolveApp(dir) {
  return path.resolve(process.cwd(), dir);
}
function resolveSrc(dir) {
  return path.resolve(process.cwd(), "src", dir);
}
function resolvePublic(dir) {
  return path.resolve(process.cwd(), "public", dir);
}

module.exports = {
  entry: {
    popup: resolveSrc("popup.js"),
    background: resolveSrc("background.js"),
    options: resolveSrc("options.js"),
    content: resolveSrc("content.js"),
    injected: resolveSrc("injected.js"),
  },
  output: {
    path: resolveApp("build"),
    filename: "[name].js",
    // publicPath: resolveApp("public"),
  },
  plugins: [
    new HtmlWebpackPlugin({
    //   inject: true,
      template: resolvePublic("popup.html"),
      filename: "popup.html",
      chunks: ["popup"],
    }),
    new HtmlWebpackPlugin({
    //   inject: true,
      template: resolvePublic("options.html"),
      filename: "options.html",
      chunks: ["options"],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "public/icons",
          to: "icons",
        },
        {
          from: "public/manifest.json",
          to: "manifest.json",
        },
      ],
    }),
    new webpack.SourceMapDevToolPlugin({}),
  ]
};
