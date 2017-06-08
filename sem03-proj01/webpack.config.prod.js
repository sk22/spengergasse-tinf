/* eslint-disable import/no-extraneous-dependencies */

const webpack = require('webpack');
const config = require('./webpack.config');

config.plugins.push(new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false,
  },
}));

config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: '"production"',
  },
}));

module.exports = config;
