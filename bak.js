/*
* @Author: lushijie
* @Date:   2017-01-04 17:36:43
* @Last Modified by:   lushijie
* @Last Modified time: 2017-01-20 14:08:00
*/
var webpack = require('webpack');
var path = require('path');
var setting = require('./webpack/webpack2.config.setting.js');
var Pconf = require('./webpack/webpack2.plugin.conf.js');
//var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
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
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        // loader: ExtractTextPlugin.extract({
        //     fallbackLoader: 'style-loader',
        //     loader: [
        //         'css-loader',
        //         'postcss-loader'
        //     ]
        // })
        use:[
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: setting.isDev ? true : false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: setting.isDev ? true : false,
              plugins: function() {
                return [
                  require('cssnano'),
                  require('precss'),
                  require('cssnext')
                ]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: setting.isDev ? true : false
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192&name=./img/[name].[ext]'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader', // Do not use "use" here
        exclude: [
          path.join(__dirname, 'node_modules'),
        ],
        query: {
          cacheDirectory: true,
          plugins: ['transform-runtime', 'transform-decorators-legacy'],
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
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
  devtool: setting.isDev ? 'inline-source-map' : 'cheap-module-source-map',
  plugins: [
    setting.isDev ? Pconf.noopPluginConf() : Pconf.uglifyJsPluginConf(),
    Pconf.commonsChunkPluginConf(),
    Pconf.htmlWebPackPluginConf(setting.htmlPluginOptions),
    Pconf.providePluginConf(setting.providePluginOptions),
    Pconf.dllPluginConf(),
    //Pconf.extractTextPluginConf(),
    // new webpack.LoaderOptionsPlugin({
    //   options: {
    //     postcss: [
    //       require('cssnano'),
    //       require('precss'),
    //       require('cssnext')
    //     ]
    //   }
    // }),
  ],
  devServer: {
    stats: {
      cached: false,
      colors: true
    },
    contentBase: '.',
    port: 5050,
    host: '0.0.0.0',
    historyApiFallback: {
      index: '/dist/index.html',
    }
  },
  performance: { hints: false }
}
