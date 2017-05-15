/*
* @Author: lushijie
* @Date:   2017-01-04 17:36:43
* @Last Modified by:   lushijie
* @Last Modified time: 2017-05-15 09:23:01
*/
var webpack = require('webpack');
var path = require('path');
var OPTIONS = require('./webpack/webpack2.options.js');
var PLUGINS = require('./webpack/webpack2.plugins.js');
let argv = require('yargs').argv;

module.exports = function(env) {
  const isDev = (env.NODE_ENV === 'development');
  let workflow = {
    entry: {
      index: './src/app/app.jsx',
      vendors: [
        'antd/lib/icon',
        'autobind-decorator',
        'babel-polyfill',
        'classnames',
        'react',
        'react-dom',
        'react-router',
        'reqwest',
      ]
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
          test: /\.jsx?$/,
          enforce: 'pre',
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            fix: true
          }
        },
        {
          test: /\.s?css$/,
          use:[
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDev ? true : false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: isDev ? true : false,
                plugins: function() {
                  return [
                    require('cssnano'),
                    require('precss'),
                    require('postcss-cssnext')
                  ]
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDev ? true : false
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
          loader: 'babel-loader',
          exclude: [
            path.join(__dirname, 'node_modules'),
          ],
          query: {
            cacheDirectory: true,
            //plugins: ['transform-runtime', 'transform-decorators-legacy'],
            //presets: ['es2015', 'stage-0', 'react']
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
        'resources': path.join(__dirname, 'resources'),
      }
    },
    devtool: isDev ? 'inline-source-map' : 'cheap-module-source-map',
    plugins: [
      PLUGINS.providePluginConf(OPTIONS.providePluginOptions),
      PLUGINS.definePluginConf(),
      PLUGINS.commonsChunkPluginConf({
        name: 'vendors',
        filename: 'vendors.bundle.js'
      }),
      PLUGINS.commonsChunkPluginConf({
        name: 'common',
        filename: 'common.bundle.js'
      }),
      PLUGINS.uglifyJsPluginConf(),
      PLUGINS.compressionWebpackPluginConf(),
      PLUGINS.hotModuleReplacementPluginConf()
    ],
    devServer: {
      stats: {
        cached: false,
        colors: true
      },
      hot: true,
      inline: true,
      compress: true,
      contentBase: '.',
      port: 5050,
      host: '0.0.0.0',
      historyApiFallback: {
        index: '/dist/index.html',
      },
      proxy: {
        '/static/**': {
          target: 'http://127.0.0.1:5050/resources/',
          secure: false,
          changeOrigin: true,
          pathRewrite: {"^/static" : ""}
        }
      }
    },
    performance: {
      hints: false
    }
  }
  workflow.plugins = workflow.plugins.concat(PLUGINS.htmlWebPackPluginConf(OPTIONS.htmlPluginOptions));
  return workflow;
}
