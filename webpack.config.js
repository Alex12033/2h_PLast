const path = require("path");

const TerserPlugin = require("terser-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
    categories: path.resolve(__dirname, "./src/categories.js"),
    dSystems: path.resolve(__dirname, "./src/drainage-system.js"),
    industrWaterCooling: path.resolve(
      __dirname,
      "./src/main-industrial-water-cooling.js"
    ),
    waterPurification: path.resolve(
      __dirname,
      "./src/main-water-purification-and-treatment.js"
    ),
    productlList: path.resolve(__dirname, "./src/product-list.js"),
    aboutUs: path.resolve(__dirname, "./src/components/about-us.js"),
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
      {
        test: /\.pug$/,
        loader: '@webdiscus/pug-loader',
      }
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
      template: path.join(__dirname, './public/pug/categories_cards/drainage-systems.pug'),
      filename: 'dSystems.html',
      chunks: ["dSystems"],
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/pug/categories_cards/industrial-water-cooling.pug'),
      filename: 'industrWaterCooling.html',
      chunks: ["industrWaterCooling"],
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/pug/categories_cards/water-purification-and-treatment.pug'),
      filename: 'waterPurification.html',
      chunks: ["waterPurification"],
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/pug/about-us.pug'),
      filename: 'aboutUs.html',
      chunks: ["aboutUs"],
    }),
  ],
};
