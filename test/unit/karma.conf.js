var webpackConfig = require('../../build/webpack.test.conf')

module.exports = function (config) {
  config.set({
    // 浏览器（phantomJS是一个无需浏览器即可测试的工具）
    browsers: ['PhantomJS'],
    // 测试框架karma-mocha
    frameworks: ['mocha', 'sinon-chai'],
    // 测试报告
    reporters: ['spec', 'coverage'],
    // 测试入口文件
    files: ['./index.js'],
    // 预处理器 karma-webpack
    preprocessors: {
      './index.js': ['webpack', 'sourcemap', 'coverage']
    },
    // Webpack配置
    webpack: webpackConfig,
    // Webpack中间件
    webpackMiddleware: {
      noInfo: true
    },
    // 测试覆盖率报告
    // https://github.com/karma-runner/karma-coverage/blob/master/docs/configuration.md
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  })
}
