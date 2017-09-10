// This is the webpack config used for unit tests.

var utils = require('./utils')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base')

var webpackConfig = merge(baseConfig, {
  // use inline sourcemap for karma-sourcemap-loader
  module: {
    rules: utils.styleLoaders()
  },
  devtool: '#inline-source-map'
})

// no need for app entry during tests
delete webpackConfig.entry

module.exports = webpackConfig
