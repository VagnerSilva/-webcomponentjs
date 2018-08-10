
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
  devtool: 'source-map',
  entry: {
    polyfills: path.resolve('test/polyfiils.js'),
    app: glob.sync(path.resolve('test/template/**/*.js')),

  },
  output: {
    filename: '[name].bundle.[hash].js',
    path: path.resolve(__dirname, 'test/build'),
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
  module: {

    rules: [

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
            presets: [['env', {
              modules: false,
            }]],
            plugins: [
              'transform-decorators-legacy',
              'transform-custom-element-classes',
              'transform-class-properties',
            ],
          },
        },
      },
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
              collapseWhitespace: true,
              minimize: true,
              removeAttributeQuotes: false,
              caseSensitive: true,
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
