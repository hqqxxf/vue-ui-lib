/**
 * Created by hqq on 2017/4/20.
 */
var path = require('path')
var options = require('./webpack.config')
var merge = require('webpack-merge')
var webpack = require('webpack')
var utils = require('./utils')

module.exports = merge(options, {
  entry: __dirname + '/../src/index.js',
  output: {
    filename: 'ypUiLib.min.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
      }
    })
  ]
})
