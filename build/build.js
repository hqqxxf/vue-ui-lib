var webpack = require('webpack')
var webpackConfig = require('./webpack.config')
var webpackMinConfig = require('./webpack.min.config')
var shelljs = require('shelljs')

shelljs.rm('-rf', 'dist')
webpack(webpackConfig, function () {
  console.log('build success!')
})

webpack(webpackMinConfig, () => {
  console.log('min build success!')
})

