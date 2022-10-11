const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "index.bundle.js",
    publicPath: "/",
  },
  mode: process.env.NODE_ENV || "development",
  devServer: {
    static: { directory: path.join(__dirname, "src") },
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", "*", ".js", ".jsx", ".ts"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};
