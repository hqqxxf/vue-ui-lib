/**
 * Created by hqq on 2017/2/22.
 */
var baseWebpackConfig = require('./webpack.base')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var merge = require('webpack-merge')
var webpack = require('webpack')
var utils = require('./utils')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

var options = merge(baseWebpackConfig, {
  entry: __dirname + '/../demo/index.js',
  output: {
    filename: 'app.js',
    path: __dirname + '/../demo/dist'
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: true
    })
  },
  devtool: 'source-map',
  plugins: [
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: __dirname + '/../demo/index.html',
      inject: true
    }),
    new ExtractTextPlugin({
      filename: utils.assetsPath('style.css'),
      disable: false,
      allChunks: true
    }),
    new OpenBrowserPlugin({ url: 'http://localhost' })
  ],
  devServer : {
    inline: true,
    host: '0.0.0.0',
    port: 80,
    hot: true,
    https: false,
    noInfo: true,
    historyApiFallback: true,
    disableHostCheck: true
  }
})
module.exports = options
