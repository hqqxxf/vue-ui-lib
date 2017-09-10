var webpack = require('webpack')
var webpackConfig = require('./webpack.demo.build')
// var shelljs = require('shelljs')

webpack(webpackConfig, () => {
  console.log('build success!')
})

