/*
 * @Author: lushijie
 * @Date:   2016-11-11 17:20:12
 * @Last Modified by:   lushijie
 * @Last Modified time: 2017-01-22 12:00:48
 */
var path = require('path');

var htmlPluginOptions = {
  filename: 'index.html',
  title: 'route',
  hash: true,
  inject: true,
  template: path.resolve(__dirname, '..','src/index.html'),
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    minifyCSS: true
  },
};

var providePluginOptions = {
  autobind: 'autobind-decorator'
}

module.exports = {
  htmlPluginOptions: htmlPluginOptions,
  providePluginOptions
};
