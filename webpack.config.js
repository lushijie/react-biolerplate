/*
* @Author: lushijie
* @Date:   2016-02-25 15:33:13
* @Last Modified by:   lushijie
* @Last Modified time: 2016-09-27 15:23:15
*/

var webpack = require('webpack');
var path = require('path');
var moment = require('moment');
var Pconf = require('./webpack.plugin.conf.js');

var NODE_ENV = JSON.parse(JSON.stringify(process.env.NODE_ENV || 'development'));
var DEFINE_INJECT = {
    ENV:{
        'process.env': {
            //Note: by default, React will be in development mode, which is slower, and not advised for production.
            NODE_ENV: JSON.stringify('development')
        }
    },
    PUB:{
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }
};
var definePluginOptions = {DEFINE_INJECT: DEFINE_INJECT[NODE_ENV == 'development' ? 'ENV':'PUB']};
var bannerOptions = 'This file is modified by lushijie at ' + moment().format('YYYY-MM-DD h:mm:ss');


module.exports = {
    //dev = cheap-module-eval-source-map
    //online = cheap-module-source-map
    devtool: (NODE_ENV == 'development') ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',

    context: __dirname,

    entry: {
        index: './resource/js/index.jsx'
    },
    output: {
        publicPath: '/dist/',
        path: 'dist',
        filename: '[name].bundle.js',
        chunkFilename: '[name].[chunkhash:8].chunk.js'//当时entry使用对象形式时，[hash]不可以使用，[id]、[chunkhash]与[name]可以使用
    },
    module: {
        preLoaders: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              loader: 'eslint-loader'
            }
        ],
        loaders: [
            {
                test:/\.css$/,
                loader: "style!css!postcss"
            },
            {
                test:/\.scss$/,
                loader: "style!css!sass"
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
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    },
    plugins: [
        Pconf.cleanPluginConf(['dist']),
        Pconf.bannerPluginConf(bannerOptions),
        Pconf.definePluginConf(definePluginOptions),
        Pconf.uglifyJsPluginConf(),
        Pconf.commonsChunkPluginConf(),
        Pconf.minChunkSizePluginConf(),
        Pconf.hotModuleReplacementPluginConf(),
        //Pconf.extractTextPluginConf(),
        //Pconf.transferWebpackPluginConf(),
        //Pconf.dedupePluginConf(),
        //Pconf.providePluginConf({$: 'jquery'}),
        //Pconf.htmlWebPackPluginConf(htmlPluginOptions)
    ],
    resolve:{
        root: [
            path.join(__dirname)
        ],
        extensions: ['', '.js', '.jsx'],
        alias:{
            'components': __dirname + '/components',
            'resource': __dirname + '/resource'
        }
    },
    devServer: {
        stats: {
            cached: false,
            colors: true
        },
        contentBase: '.',
        hot: true,
        inline: true,
        port: 5050,
        host: '0.0.0.0',
        //historyApiFallback: true //如果是index.html直接这一项就可以了
        historyApiFallback: {
            index: '/views/main.html' //warning 这里不要使用__dirname!
            // rewrites: [
            //     { from: /\/soccer/, to: '/soccer.html'}
            // ]
        }
    }
};
