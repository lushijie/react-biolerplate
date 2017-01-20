/*
 * @Author: lushijie
 * @Date:   2016-11-11 17:20:12
 * @Last Modified by:   lushijie
 * @Last Modified time: 2017-01-20 15:26:13
 */
var path = require('path');
var moment = require('moment');

var ISDEV = JSON.parse(JSON.stringify(process.env.NODE_ENV || 'development')) == 'development';
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
  ISDEV: ISDEV,
  htmlPluginOptions: htmlPluginOptions,
  providePluginOptions
};
