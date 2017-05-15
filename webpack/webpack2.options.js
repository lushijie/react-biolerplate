/*
 * @Author: lushijie
 * @Date:   2016-11-11 17:20:12
 * @Last Modified by:   lushijie
 * @Last Modified time: 2017-05-15 09:19:55
 */
const path = require('path');
const argv = require('yargs').argv;
const isDev = argv.env === 'development';
const BASE_ROOT = path.join(__dirname, '..');

let defaultHtmlPluginOption = {
  hash: true,
  inject: true,
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    minifyCSS: true
  },
}

let htmlPluginOptions = [
  Object.assign({}, defaultHtmlPluginOption, {
    filename: `index.html`,
    title: 'Hello World',
    template: `${BASE_ROOT}/src/index.html`,
    // chunks: [],
    // excludeChunks: [],
  }),
];

console.log(htmlPluginOptions);

var providePluginOptions = {
  autobind: 'autobind-decorator'
};

module.exports = {
  htmlPluginOptions,
  providePluginOptions
};
