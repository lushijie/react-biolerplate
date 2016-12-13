/*
 * @Author: lushijie
 * @Date:   2016-11-11 17:20:12
 * @Last Modified by:   lushijie
 * @Last Modified time: 2016-12-13 17:05:11
 */
var path = require('path');
var moment = require('moment');

var isDev = JSON.parse(JSON.stringify(process.env.NODE_ENV || 'development')) == 'development';
var htmlPluginOptions = {
  filename: 'index.html',
  title: 'route',
  hash: true,
  inject: false,
  template: path.resolve(__dirname, 'src/index.html'),
  // favicon: './src/resource/images/favicon.ico',
  minify: {
    removeComments: false,
    collapseWhitespace: false,
    minifyCSS: false
  },
};

module.exports = {
  isDev: isDev,
  htmlPluginOptions: htmlPluginOptions,
};
