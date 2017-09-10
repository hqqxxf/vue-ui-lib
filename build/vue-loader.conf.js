var utils = require('./utils')

const AUTOPREFIXER_BROWSERS = ['Android >= 4', 'Chrome >= 35', 'iOS >= 7', 'Safari >= 7.1']
module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: false,
    extract: false,
    vue: true
  }),
  postcss: [
    require('autoprefixer')({
      browsers: AUTOPREFIXER_BROWSERS
    })
  ]
}
