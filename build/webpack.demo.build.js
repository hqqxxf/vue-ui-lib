var baseWebpackConfig = require('./webpack.base')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var merge = require('webpack-merge')
var webpack = require('webpack')
var utils = require('./utils')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var publicPath = './'

var options = merge(baseWebpackConfig, {
  entry: __dirname + '/../demo/index.js',
  output: {
    filename: '[name].[chunkhash].js',
    path: __dirname + '/../demo/dist',
    publicPath: publicPath
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: false
    })
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: __dirname + '/../demo/index.html',
      inject: true
    }),
    new ExtractTextPlugin({
      filename: utils.assetsPath('[name].[chunkhash].css'),
      disable: false,
      allChunks: true
    })
  ]
})
module.exports = options
