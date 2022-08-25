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
    contactsPage: path.resolve(__dirname, "./src/our-contacts-page.js"),
    aboutUs: path.resolve(__dirname, "./src/components/about-us.js"),
    blocksWBOX: path.resolve(__dirname, "./src/components/categories/cards-descr.js"),
    block2HTKR: path.resolve(__dirname, "./src/components/categories/cards-descr.js"),
    download2HNET: path.resolve(__dirname, "./src/components/categories/cards-descr.js"),
    freeFloatingBCN: path.resolve(__dirname, "./src/components/categories/cards-descr.js"),
    irrMachine2HFKP: path.resolve(__dirname, "./src/components/categories/cards-descr.js"),
    irrMachine2HFСP: path.resolve(__dirname, "./src/components/categories/cards-descr.js"),
    meshSprinkler2HNET: path.resolve(__dirname, "./src/components/categories/cards-descr.js"),
    dripCatcherTER: path.resolve(__dirname, "./src/components/categories/cards-descr.js"),
    polypropyleneDropCatcher: path.resolve(__dirname, "./src/components/categories/cards-descr.js"),
    airIntakeLouvers: path.resolve(__dirname, "./src/components/categories/cards-descr.js"),
    irrigationNozzles: path.resolve(__dirname, "./src/components/categories/cards-descr.js"),
    polypropyLoading2HTKR: path.resolve(__dirname, "./src/components/categories/cards-descr.js"),
    loadVerticalChutes: path.resolve(__dirname, "./src/components/categories/cards-descr.js"),
    netDownload2HNET: path.resolve(__dirname, "./src/components/categories/cards-descr.js"),
    freeFloating: path.resolve(__dirname, "./src/components/categories/cards-descr.js"),
    coalescentFilter: path.resolve(__dirname, "./src/components/categories/cards-descr.js"),
    lamellarModules: path.resolve(__dirname, "./src/components/categories/cards-descr.js"),
    download2GKLP: path.resolve(__dirname, "./src/components/categories/cards-descr.js"),
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

  // devtool: "source-map",

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
        "contactsPage"
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
      template: path.join(__dirname, './public/pug/our-contacts.pug'),
      filename: 'contactsPage.html',
      chunks: ["contactsPage"],
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/pug/about-us.pug'),
      filename: 'aboutUs.html',
      chunks: ["aboutUs"],
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/pug/categories_cards/cards-description/drainage-system/1_drainage-blocksWBOX.pug'),
      filename: 'blocksWBOX.html',
      chunks: ["blocksWBOX"],
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/pug/categories_cards/cards-description/drainage-system/2_ block-loading2HTKR-312.pug'),
      filename: 'block2HTKR.html',
      chunks: ["block2HTKR"],
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/pug/categories_cards/cards-description/drainage-system/3_net-download2HNET-150.pug'),
      filename: 'download2HNET.html',
      chunks: ["download2HNET"],
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/pug/categories_cards/cards-description/drainage-system/4_ BCN-free-floating-polypropylene-loading.pug'),
      filename: 'freeFloatingBCN.html',
      chunks: ["freeFloatingBCN"],
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/pug/categories_cards/cards-description/industrial-water-cooling/1_irrigation-machine2HFKP.pug'),
      filename: 'irrMachine2HFKP.html',
      chunks: ["irrMachine2HFKP"],
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/pug/categories_cards/cards-description/industrial-water-cooling/2_irrigation-machine2HFСP.pug'),
      filename: 'irrMachine2HFСP.html',
      chunks: ["irrMachine2HFСP"],
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/pug/categories_cards/cards-description/industrial-water-cooling/3_mesh-sprinkler2HNET-150.pug'),
      filename: 'meshSprinkler2HNET.html',
      chunks: ["meshSprinkler2HNET"],
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/pug/categories_cards/cards-description/industrial-water-cooling/4_drip-catcher-TER-130.pug'),
      filename: 'dripCatcherTER.html',
      chunks: ["dripCatcherTER"],
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/pug/categories_cards/cards-description/industrial-water-cooling/5_polypropylene-droplet-catcher-TAR-155.pug'),
      filename: 'polypropyleneDropCatcher.html',
      chunks: ["polypropyleneDropCatcher"],
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/pug/categories_cards/cards-description/industrial-water-cooling/6_air-intake-louvers2H-LEP-065.pug'),
      filename: 'airIntakeLouvers.html',
      chunks: ["airIntakeLouvers"],
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/pug/categories_cards/cards-description/industrial-water-cooling/7_ irrigation-nozzles-2H-SPN.pug'),
      filename: 'irrigationNozzles.html',
      chunks: ["irrigationNozzles"],
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/pug/categories_cards/cards-description/water-purification/1_polypropylene-loading-2H-TKR.pug'),
      filename: 'polypropyLoading2HTKR.html',
      chunks: ["polypropyLoading2HTKR"],
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/pug/categories_cards/cards-description/water-purification/2_loading-with-vertical-chutes.pug'),
      filename: 'loadVerticalChutes.html',
      chunks: ["loadVerticalChutes"],
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/pug/categories_cards/cards-description/water-purification/3_net-download-2H-NET-150.pug'),
      filename: 'netDownload2HNET.html',
      chunks: ["netDownload2HNET"],
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/pug/categories_cards/cards-description/water-purification/4_free-floating-BCN.pug'),
      filename: 'freeFloating.html',
      chunks: ["freeFloating"],
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/pug/categories_cards/cards-description/water-purification/5_coalescent-filter-2H-FAR.pug'),
      filename: 'coalescentFilter.html',
      chunks: ["coalescentFilter"],
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/pug/categories_cards/cards-description/water-purification/6_lamellar-modules.pug'),
      filename: 'lamellarModules.html',
      chunks: ["lamellarModules"],
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/pug/categories_cards/cards-description/water-purification/7_download-2G-KLP-638.pug'),
      filename: 'download2GKLP.html',
      chunks: ["download2GKLP"],
    })
  ],
};
