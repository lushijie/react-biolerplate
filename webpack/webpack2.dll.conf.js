/*
 * @Author: lushijie
 * @Date:   2016-11-11 16:28:28
 * @Last Modified by:   lushijie
 * @Last Modified time: 2017-01-20 17:23:21
 */

var path = require('path')
var webpack = require('webpack')
var base = path.join(__dirname)
var Pconf = require('./webpack2.plugin.conf.js')

var vendors = [
  'antd/lib/icon',
  'autobind-decorator',
  'babel-polyfill',
  'classnames',
  // 'moment',
  'react',
  'react-dom',
  'react-router',
  'reqwest',
]

module.exports = {
  cache: true,
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, '..','dist'),
    library: '[name]_[chunkhash]',
    filename: '[name].bundle.js',
  },
  entry: {
    vendor: vendors,
  },
  plugins: [
    Pconf.dllPluginConf(),
    Pconf.definePluginConf(),
    Pconf.uglifyJsPluginConf()
  ],
};
