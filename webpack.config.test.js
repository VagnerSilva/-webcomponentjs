
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


// utils
const path = require('path');
const webpack = require('webpack');
const glob = require('glob');


module.exports = {
  mode: 'development',
  entry: {
    'babel-polyfill': 'babel-polyfill',
    polyfills: path.resolve('node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js'),
    app: glob.sync(path.resolve('test/template/**/*.js')),

  },
  output: {
    filename: '[name].bundle.[hash].js',
    path: path.resolve(__dirname, 'test/build'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {

    rules: [

      // templateUrl
      {
        test: /\.js$/,
        use: [
          { loader: 'template-url-webpack' },
          { loader: 'style-url-webpack' },
        ],
        exclude: ['node_modules'],
        include: [
        //  path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'test'),
        ],
      },
      // html
      {
        test: /\.html$/,
        use: [
          {
            loader: 'raw-loader',
            options: {
              // exportAsEs6Default: 'es6',
              collapseWhitespace: true,
              minimize: true,
              removeAttributeQuotes: false,
              caseSensitive: true,
              // customAttrSurround: [[/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/]],
              // customAttrAssign: [/\)?\]?=/],
            },

          }],
      },
      {
        test: /\.(eot|svg|cur)$/,
        loader: 'file-loader',
        options: {
          name: '[name][hash].[ext]',
          limit: 10000,
        },
      },
      {
        test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
        loader: 'url-loader',
        options: {
          name: '[name][hash].[ext]',
          limit: 10000,
        },
      },

      // js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'test'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: [
              'transform-decorators-legacy',
              'transform-custom-element-classes',
              'transform-es2015-classes',
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
  //  new CleanWebpackPlugin(['test/build']),
    new HtmlWebpackPlugin({
      title: 'WC',
      template: 'test/index.html',
    }),
    new webpack.IgnorePlugin(/vertx/),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
  ],
  devServer: {
    watchContentBase: true,
    inline: true,
    compress: true,
    progress: true,
    historyApiFallback: true,
    stats: 'errors-only',
    open: true,
  },
};
