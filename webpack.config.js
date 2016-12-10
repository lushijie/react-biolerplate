/*
 * @Author: lushijie
 * @Date:   2016-02-25 15:33:13
 * @Last Modified by:   lushijie
 * @Last Modified time: 2016-12-10 15:04:14
 */

var webpack = require('webpack');
var path = require('path');
var setting = require('./webpack.config.setting.js');
var Pconf = require('./webpack.plugin.conf.js');

module.exports = {
  devtool: setting.isDev ? 'inline-source-map' : 'cheap-module-source-map',
  context: __dirname,
  entry: {
    index: './src/app/index.jsx',
  },
  output: {
    publicPath: '/dist/',
    path: 'dist',
    filename: '[name].bundle.js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
  },
  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],
    loaders: [{
      test: /\.css$/,
      loader: setting.isDev ? "style!css?sourceMap!postcss?sourceMap" : "style!css!postcss"
    }, {
      test: /\.scss$/,
      loader: setting.isDev ? "style!css?sourceMap!postcss?sourceMap!sass?sourceMap" : "style!css!postcss!sass"
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader?limit=8192&name=./img/[name].[ext]'
    }, {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: [
        path.join(__dirname, 'node_modules'),
      ],
      query: {
        cacheDirectory: true,
        plugins: ['transform-runtime'],
        presets: ['es2015', 'stage-0', 'react']
      }
    }]
  },
  plugins: [
    setting.isDev ? Pconf.noopPluginConf() : Pconf.uglifyJsPluginConf(),
    Pconf.commonsChunkPluginConf(),
    Pconf.htmlWebPackPluginConf(setting.htmlPluginOptions),
    Pconf.dllPluginConf(),
  ],
  resolve: {
    root: [
      path.join(__dirname)
    ],
    extensions: ['', '.js', '.jsx'],
    alias: {
      'app':  path.join(__dirname, 'src/app'),
      'routes': path.join(__dirname, 'src/app/routes'),
      'common': path.join(__dirname, 'src/common'),
      'components': path.join(__dirname, 'src/components'),
      'constants': path.join(__dirname, 'src/constants'),
      'models': path.join(__dirname, 'src/models'),
      'resource': path.join(__dirname, 'src/resource'),
    }
  },
  devServer: {
    stats: {
      cached: false,
      colors: true
    },
    contentBase: '.',
    //hot: true,
    //inline: true,
    port: 5050,
    host: '0.0.0.0',
    historyApiFallback: {
      index: '/dist/index.html',
    }
  }
};
