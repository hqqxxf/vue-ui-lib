'use strict';
const components = require('../../components.json')
const path = require('path')
const webpack = require('webpack')
const fs = require('fs')

const template = `
var path = require('path')
var options = require('../../../build/webpack.base')
var merge = require('webpack-merge')
var webpack = require('webpack')
var utils = require('../../../build/utils')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var currentDir = path.basename(__dirname)

module.exports = merge(options, {
  entry: path.join(__dirname, 'index.js'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '../../../dist/' + currentDir),
    library: currentDir,
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
    new webpack.optimize.UglifyJsPlugin({
      compress: {
         warnings: false,
         drop_debugger: true,
         drop_console: true
      }
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: './style.css',
      disable: false,
      allChunks: true
    })
  ]
})
`
let componentPaths = []
Object.keys(components).forEach(key => {
  const OUTPUT_PATH = path.join(__dirname, `../../src/components/${key}/webpack.config.js`);
  componentPaths.push(OUTPUT_PATH);
  fs.writeFileSync(OUTPUT_PATH, template);
});

componentPaths.map(function (conf) {
  webpack(require(conf), function () {
    console.log('build single success', conf)
  })
})
