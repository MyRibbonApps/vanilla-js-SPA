const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "production",
  entry: {
    index: "./frontend/src/index.js",
  },
  output: {
    // filename: "test.[contenthash].js",
    filename: "main.js",
    path: path.resolve(__dirname, "bundle"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./frontend/src/index.html",
      chunks: ["index"],
    }),
  ],
  // module: {
  //   rules: [
  //     {
  //       test: /\.m?js$/,
  //       exclude: "/node_modules",
  //       use: {
  //         loader: "babel-loader",
  //         options: {
  //           presets: ["@babel/preset-env"],
  //         },
  //       },
  //     },
  //   ],
  // },
};
