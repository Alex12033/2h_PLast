const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = {
  devtool: 'source-map',
  stats: 'minimal',

  // Note: using pug-plugin, entry-points are Pug files
  // all scripts and styles must be specified in Pug.
  // PugPlugin extracts JS, CSS, images, fonts etc. form theirs sources loaded in Pug via require()

  entry: {
    index: './src/pug/index.pug', // => dist/index.html
    aboutUs: './src/pug/about-us.pug', // => dist/aboutUs.html
    assortment: './src/pug/assortment.pug',
    contactsPage: './src/pug/our-contacts.pug',

    // industrial-water-cooling
    industrWaterCooling: './src/pug/categories_cards/industrial-water-cooling.pug',
    irrMachine2HFKP: './src/pug/categories_cards/cards-description/industrial-water-cooling/1_irrigation-machine2HFKP.pug',
    irrMachine2HFCP: './src/pug/categories_cards/cards-description/industrial-water-cooling/2_irrigation-machine2HFCP.pug',
    meshSprinkler2HNET: './src/pug/categories_cards/cards-description/industrial-water-cooling/3_mesh-sprinkler2HNET-150.pug',
    dripCatcherTER: './src/pug/categories_cards/cards-description/industrial-water-cooling/4_drip-catcher-TER-130.pug',
    polypropyleneDropCatcher: './src/pug/categories_cards/cards-description/industrial-water-cooling/5_polypropylene-droplet-catcher-TAR-155.pug',
    airIntakeLouvers: './src/pug/categories_cards/cards-description/industrial-water-cooling/6_air-intake-louvers2H-LEP-065.pug',
    irrigationNozzles: './src/pug/categories_cards/cards-description/industrial-water-cooling/7_ irrigation-nozzles-2H-SPN.pug',

    // drainage-systems
    dSystems: './src/pug/categories_cards/drainage-systems.pug',
    blocksWBOX: './src/pug/categories_cards/cards-description/drainage-system/1_drainage-blocksWBOX.pug',
    block2HTKR: './src/pug/categories_cards/cards-description/drainage-system/2_ block-loading2HTKR-312.pug',
    download2HNET: './src/pug/categories_cards/cards-description/drainage-system/3_net-download2HNET-150.pug',
    freeFloatingBCN: './src/pug/categories_cards/cards-description/drainage-system/4_ BCN-free-floating-polypropylene-loading.pug',

    // water-purification-and-treatment
    waterPurification: './src/pug/categories_cards/water-purification-and-treatment.pug',
    polypropyLoading2HTKR: './src/pug/categories_cards/cards-description/water-purification/1_polypropylene-loading-2H-TKR.pug',
    loadVerticalChutes: './src/pug/categories_cards/cards-description/water-purification/2_loading-with-vertical-chutes.pug',
    netDownload2HNET: './src/pug/categories_cards/cards-description/water-purification/3_net-download-2H-NET-150.pug',
    freeFloating: './src/pug/categories_cards/cards-description/water-purification/4_free-floating-BCN.pug',
    coalescentFilter: './src/pug/categories_cards/cards-description/water-purification/5_coalescent-filter-2H-FAR.pug',
    lamellarModules: './src/pug/categories_cards/cards-description/water-purification/6_lamellar-modules.pug',
    download2GKLP: './src/pug/categories_cards/cards-description/water-purification/7_download-2G-KLP-638.pug',
  },

  output: {
    // Note: the ./dist directory must be empty.
    // Webpack automatically copies all resources loaded via require() in Pug, JS or via url() in SCSS to this directory.
    path: path.resolve(__dirname, './dist'),
    // before start, the ./dist dir will be cleaned
    clean: true,
    filename: 'assets/js/[name].[contenthash:8].js', // unique filename for JS bundles
  },

  resolve: {
    alias: {
      // use aliases instead of relative paths in Pug, JS, SCSS
      Views: path.join(__dirname, 'src/pug/'),
      Images: path.join(__dirname, 'src/assets/'),
      Styles: path.join(__dirname, 'src/scss/'),
      Scripts: path.join(__dirname, 'src/js/'),
      Components: path.join(__dirname, 'src/components/'),
    },
  },

  plugins: [
    // enable processing of Pug files specified in Webpack entry
    new PugPlugin({
      // PugPlugin extract styles from Pug files, MiniCssExtractPlugin is not needed
      extractCss: {
        // output filename of styles
        filename: 'assets/css/[name].[contenthash:8].css',
      },
    }),

    // Note: Webpack 5 self minify JS and CSS in production mode,
    // therefore TerserPlugin and OptimizeCssAssetsPlugin are needless.
  ],

  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader, // PugPlugin already contain the '@webdiscus/pug-loader'
      },

      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

      {
        test: /.(s*)css$/,
        use: ['css-loader', 'sass-loader'],
      },

      {
        test: /\.(png|svg|jpe?g|webp)$/i,
        type: 'asset/resource',
        include: /assets[\\/]/, // images from `assets/images` directory only, match posix and win paths
        generator: {
          // output filename of images
          filename: 'assets/img/[name].[hash:8][ext]', // Note: the hashed output name is important for images with same name, e.g. 1.png exists in many folders
        },
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    //open: true,
    //port: 8080,
    // watch changes in all sources for live reload
    watchFiles: {
      paths: ['src/**/*.*'],
      options: {
        usePolling: true,
      },
    },
  },
};