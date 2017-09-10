/**
 * Created by hqq on 2017/4/19.
 */
var devServer = require('webpack-dev-server')
var webpack = require('webpack')
var webpackConfig = require('./webpack.demo.conf')

devServer.disableHostCheck = false

new devServer(webpack(webpackConfig), {
  hot: true
}).listen(9000, "0.0.0.0", function () {
  console.log('server start at http://localhost')
})
