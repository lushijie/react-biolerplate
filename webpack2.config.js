/*
* @Author: lushijie
* @Date:   2017-01-04 17:36:43
* @Last Modified by:   lushijie
* @Last Modified time: 2017-01-23 09:32:01
*/
var webpack = require('webpack')
var path = require('path')
var Settings = require('./webpack/webpack2.config.setting.js')
var Pconf = require('./webpack/webpack2.plugin.conf.js')

module.exports = function(env) {
  const IS_DEV = (env.NODE_ENV === 'development');
  return {
    entry: {
      index: './src/app/app.jsx',
      vendors: [
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
                sourceMap: IS_DEV ? true : false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: IS_DEV ? true : false,
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
                sourceMap: IS_DEV ? true : false
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
    devtool: IS_DEV ? 'inline-source-map' : 'cheap-module-source-map',
    plugins: [
      Pconf.providePluginConf(Settings.providePluginOptions),
      Pconf.htmlWebPackPluginConf(Settings.htmlPluginOptions),
      Pconf.definePluginConf(),
      Pconf.commonsChunkPluginConf({
        name: 'vendors',
        filename: 'vendors.bundle.js'
      }),
      Pconf.commonsChunkPluginConf({
        name: 'common',
        filename: 'common.bundle.js'
      }),
      Pconf.uglifyJsPluginConf(),
      Pconf.compressionWebpackPluginConf(),
    ],
    devServer: {
      stats: {
        cached: false,
        colors: true
      },
      compress: true,
      contentBase: '.',
      port: 5050,
      host: '0.0.0.0',
      historyApiFallback: {
        index: '/dist/index.html',
      },
      proxy: {
        '/resources/**': {
          target: 'http://127.0.0.1:5050/src/resources/',
          secure: false,
          pathRewrite: {
            '/resources' : ''
          }
        }
      }
    },
    performance: {
      hints: false
    }
  }
}
