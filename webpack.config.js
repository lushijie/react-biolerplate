/* 
 * @Author: lushijie
 * @Date:   2016-06-13 11:49:13
 * @Last Modified by:   lushijie
 * @Last Modified time: 2016-06-17 17:47:30
 */
var webpack = require('webpack');
var config = {
    entry: './resource/js/index.jsx',
    output: {
        path: 'src/build',
        filename: 'index.js',
        chunkFilename: '[name].[chunkhash:8].chunk.js',//chunkFilename好奇怪的大小写
        publicPath: '/build/' //编译之后的访问路径
    },
    devServer: {
        contentBase: '.',
        inline: true,
        port: 5055,
        host: '0.0.0.0',
        //historyApiFallback: true //如果是index.html直接这一项就可以了
        historyApiFallback: {
            index: '/views/main.html' //tips 这里不要使用__dirname!
            // rewrites: [
            //     { from: /\/soccer/, to: '/soccer.html'}
            // ]
        }
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias:{
            components: __dirname + '/components',
            resource: __dirname + '/resource'
        }
    },
    module: {
        preLoaders: [
          {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'eslint-loader' //配置eslintrc
          }
        ],
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-0', 'react'] //stage-0
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader!postcss-loader'
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!postcss-loader!sass-loader'
        }, {
            test: /\.(png|jpg|gif|ttf|eot|svg|woff|woff2)$/,
            loader: 'url-loader?name=[path][name].[ext]&limit=9182'
        }]
    },
    postcss: function() {
        return [
            require('precss'),
            require('autoprefixer'),
        ]
    },
    plugins:
        process.env.NODE_ENV === 'production' ?
        [
            new webpack.DefinePlugin({
              "process.env": { 
                 NODE_ENV: JSON.stringify("production") 
               }
            })//fix Warning: It looks like you're using a minified copy of the development build of React.
            ,new webpack.optimize.DedupePlugin() //删除重复的依赖。
            ,new webpack.optimize.OccurrenceOrderPlugin()//通过一些计算方式减少chunk的大小的插件
            ,new webpack.optimize.UglifyJsPlugin(
                {
                    mangle: {
                        except: ['$super', '$', 'exports', 'require']
                    },
                    compress: {
                        warnings: false
                    }
                }
            )//压缩
            ,new webpack.NoErrorsPlugin()//跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误
        ]
        :
        [

        ]
}
console.log(process.env.NODE_ENV);
module.exports = config;