var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.assetsPath = function (_path) {
  // const assetsSubDirectory = 'static'
  const assetsSubDirectory = '/static/'
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function(options) {
  options = options || {}

  var cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: false,
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) {
    var loaders = [cssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  var sassResourcesLoader = {
    loader: 'sass-resources-loader',
    options: {
      // Provide path to the file with resources
      resources: 'src/assets/css/flexible.scss',

      // Or array of paths
      // resources: ['./path/to/vars.scss', './path/to/mixins.scss']
    },
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', {
      indentedSyntax: true
    }),
    scss: generateLoaders('sass').concat([sassResourcesLoader]),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function(options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}
