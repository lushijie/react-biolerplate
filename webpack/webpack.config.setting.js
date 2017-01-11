/*
 * @Author: lushijie
 * @Date:   2016-11-11 17:20:12
 * @Last Modified by:   lushijie
 * @Last Modified time: 2017-01-11 14:56:47
 */
var path = require('path');
var moment = require('moment');

var IS_DEV = JSON.parse(JSON.stringify(process.env.NODE_ENV || 'development')) == 'development';
var htmlPluginOptions = {
  filename: 'index.html',
  title: 'route',
  hash: true,
  inject: false,
  template: path.resolve(__dirname, '..','src/index.html'),
  // favicon: './src/resource/images/favicon.ico',
  minify: {
    removeComments: false,
    collapseWhitespace: false,
    minifyCSS: false
  },
};

var providePluginOptions = {
  autobind: 'autobind-decorator'
}

module.exports = {
  IS_DEV: IS_DEV,
  htmlPluginOptions: htmlPluginOptions,
  providePluginOptions
};
