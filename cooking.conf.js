var path = require('path');
var cooking = require('cooking');

cooking.set({
  entry: {
    app: ['babel-polyfill', './src/main.js']
  },
  dist: './dist',
  template: './index.tpl',
  devServer: {
    port: 8080,
    publicPath: '/'
  },

  // production
  clean: true,
  hash: true,
  sourceMap: true,
  minimize: true,
  chunk: true, // see https://cookingjs.github.io/zh-cn/configuration.html#chunk
  postcss: [
    // require('...')
  ],
  publicPath: '/dist/',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  static: true,
  extractCSS: '[name].[contenthash:7].css',
  alias: {
    'src': path.join(__dirname, 'src'),
    'vue$': 'vue/dist/vue',
    'assets': path.resolve(__dirname, './src/assets'),
    'components': path.resolve(__dirname, './src/components'),
    'styles': path.resolve(__dirname, './src/styles'),
  },
  extends: ['vue2',, 'less', 'autoprefixer']
});

module.exports = cooking.resolve();
