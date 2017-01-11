/*
 * @Author: lushijie
 * @Date:   2016-02-25 15:33:13
 * @Last Modified by:   lushijie
 * @Last Modified time: 2017-01-11 14:56:27
 */

var webpack = require('webpack');
var path = require('path');
var setting = require('./webpack/webpack.config.setting.js');
var Pconf = require('./webpack/webpack.plugin.conf.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: setting.IS_DEV ? 'inline-source-map' : 'cheap-module-source-map',
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
    loaders: [
    {
      test: /\.css$/,
      //loader: setting.IS_DEV ? "style!css?sourceMap!postcss?sourceMap" : "style!css!postcss"
      loader: setting.IS_DEV ? "style!css?sourceMap" : "style!css"
    },
    {
      test: /\.scss$/,
      //loader: ExtractTextPlugin.extract(['css', 'postcss'])
      loader: setting.IS_DEV ? "style!css?sourceMap!postcss?sourceMap" : "style!css!postcss"
      // loader: setting.IS_DEV ? "style!css?sourceMap!postcss?sourceMap!sass?sourceMap" : "style!css!postcss!sass"
    },
    {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader?limit=8192&name=./img/[name].[ext]'
    },
    {
      test: /\.json$/,
      loader: 'json'
    },
    {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: [
        path.join(__dirname, 'node_modules'),
      ],
      query: {
        cacheDirectory: true,
        plugins: ['transform-runtime', 'transform-decorators-legacy'],
        presets: ['es2015', 'stage-0', 'react']
      }
    }]
  },
  plugins: [
    setting.IS_DEV ? Pconf.noopPluginConf() : Pconf.uglifyJsPluginConf(),
    Pconf.commonsChunkPluginConf(),
    Pconf.htmlWebPackPluginConf(setting.htmlPluginOptions),
    Pconf.providePluginConf(setting.providePluginOptions),
    Pconf.dllPluginConf(),
    //Pconf.extractTextPluginConf(),
  ],
  resolve: {
    root: [
      path.join(__dirname)
    ],
    extensions: ['', '.js', '.jsx'],
    alias: {
      'base': path.join(__dirname),
      'app':  path.join(__dirname, 'src/app'),
      'common': path.join(__dirname, 'src/common'),
      'components': path.join(__dirname, 'src/components'),
      'constants': path.join(__dirname, 'src/constants'),
      'models': path.join(__dirname, 'src/models'),
      'resources': path.join(__dirname, 'src/resources'),
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
  },
  postcss: function () {
    return [
      //require('autoprefixer'),
      require('cssnano'),
      require('precss'),
      require('cssnext')
    ];
  }
};
