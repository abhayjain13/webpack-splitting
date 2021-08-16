const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    button: "./src/component/Button/Button",
    header: "./src/component/Header/Header",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname + "/dist"),
    publicPath: "/static/",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["transform-class-properties"],
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: "**/*",
    }),
    new HtmlWebpackPlugin({
      title: "Basic Webpack Setup Configuration",
      meta: {
        description: "Description of page",
      },
    }),
  ],
};
