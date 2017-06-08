/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: path.resolve(__dirname, './src/index.js'),
    vendor: ['vue', 'vue-router', 'dashify'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'file-loader', // svg-url-loader?noquotes
      },
      {
        test: /.png$/,
        loader: 'file-loader',
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.js',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    new BundleAnalyzerPlugin(),
  ],
};
