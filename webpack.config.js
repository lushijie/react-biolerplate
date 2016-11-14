/*
 * @Author: lushijie
 * @Date:   2016-02-25 15:33:13
 * @Last Modified by:   lushijie
 * @Last Modified time: 2016-11-14 11:52:14
 */

var webpack = require('webpack');
var path = require('path');
var setting = require('./webpack.setting.js');
var Pconf = require('./webpack.plugin.conf.js');

module.exports = {
  devtool: setting.isDev ? 'inline-source-map' : 'cheap-module-source-map',
  context: __dirname,
  entry: {
    index: './src/index.jsx',
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
      'constants': path.join(__dirname, 'src/common'),
      'common': path.join(__dirname, 'src/common'),
      'components': path.join(__dirname, 'src/components'),
      'routes': path.join(__dirname, 'src/routes'),
      'images': path.join(__dirname, 'src/public/images'),
      'styles': path.join(__dirname, 'src/public/styles')
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
    //historyApiFallback: true //如果是index.html直接这一项就可以了
    historyApiFallback: {
      //warning 1.这里不要使用__dirname! 2.使用生成的dist时要/dist，区别于src/app/index.html
      index: '/dist/index.html',
      // rewrites: [
      //     { from: /\/soccer/, to: '/soccer.html'}
      // ]
    }
  }
};
