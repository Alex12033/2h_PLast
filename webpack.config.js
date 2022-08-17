const path = require("path");

const TerserPlugin = require("terser-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
    categories: path.resolve(__dirname, "./src/categories.js"),
    drainageSystems: path.resolve(__dirname, "./src/drainage-system.js"),
    industrialWater: path.resolve(
      __dirname,
      "./src/main-industrial-water-cooling.js"
    ),
    waterPurification: path.resolve(
      __dirname,
      "./src/main-water-purification-and-treatment.js"
    ),
    productlList: path.resolve(__dirname, "./src/product-list.js"),
    fishFarming: path.resolve(__dirname, "./src/src-fish-farming.js"),
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },

  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, "./"),
    open: true,
    compress: true,
    port: 8080,
  },

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /.(s*)css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },

      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      //for unpack css styles in bundle
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),

    new TerserPlugin(), //for minification js code

    new OptimizeCssAssetsPlugin(), //for minification css

    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",

      excludeChunks: [
        "categories",
        "drainageSystems",
        "industrialWater",
        "waterPurification",
      ],


      chunks: ["main"],
    }),

    new HtmlWebpackPlugin({
      filename: "assortment.html",
      template: "./public/assortment.html",

      // excludeChunks: [
      //   "login_form",
      //   "sign_up_form",
      // ],
      chunks: ["categories"],
    }),

    new HtmlWebpackPlugin({
      filename: "drainage-systems.html",
      template: "./public/drainage-systems.html",

      // excludeChunks: [
      //   "login_form",
      //   "sign_up_form",
      // ],

      chunks: ["drainageSystems"],
    }),

    new HtmlWebpackPlugin({
      filename: "industrial-water-cooling.html",
      template: "./public/industrial-water-cooling.html",

      // excludeChunks: [
      //   "login_form",
      //   "sign_up_form",
      // ],

      chunks: ["industrialWater"],
    }),

    new HtmlWebpackPlugin({
      filename: "water-purification-and-treatment.html",
      template: "./public/water-purification-and-treatment.html",
      // excludeChunks: [
      //   "login_form",
      //   "sign_up_form",
      // ],
      chunks: ["waterPurification"],
    }),
    new HtmlWebpackPlugin({
      filename: "fish-farming.html",
      template: "./public/fish-farming.html",
      // excludeChunks: [
      //   "login_form",
      //   "sign_up_form",
      // ],
      chunks: ["fishFarming"],
    }),
  ],
};
