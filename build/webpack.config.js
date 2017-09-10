/**
 * Created by hqq on 2017/2/20.
 */
var path = require('path')
var options = require('./webpack.base')
var merge = require('webpack-merge')
var webpack = require('webpack')
var utils = require('./utils')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(options, {
  entry: {
    spinner: path.join(__dirname, '../src/components/spinner'),
    loading: path.join(__dirname, '../src/components/loading')
  },
  output: {
    filename: '[name]/index.js',
    path: path.resolve(__dirname, '../dist'),
    library: 'ypUiLib',
    libraryTarget: 'umd'
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: false,
      extract: true
    })
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './style.css',
      disable: false,
      allChunks: true
    })
  ]
})
