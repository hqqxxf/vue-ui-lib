var path = require('path')
var vueLoaderConfig = require('./vue-loader.conf')
var webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  output: {
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: 'img/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'components': path.resolve(__dirname, '../src/components'),
      '~': path.resolve(__dirname, '../src'),
      'vue$': 'vue/dist/vue.common.js',
      'assets': path.resolve(__dirname, '../src/assets')
    }
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}
