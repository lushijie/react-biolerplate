/*
 * @Author: lushijie
 * @Date:   2016-03-04 11:28:41
 * @Last Modified by:   lushijie
 * @Last Modified time: 2017-01-20 18:02:13
 */
var webpack = require('webpack')
var path = require('path')
var moment = require('moment')
var ObjectAssign = require('object-assign')
var CleanPlugin = require('clean-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin')
var TransferWebpackPlugin = require('transfer-webpack-plugin')
var CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {

  //为打包之后的各个文件添加说明头部
  'bannerPluginConf': function(options) {
    options = ObjectAssign({
      banner: 'This file last modified is at ' + moment().format('YYYY-MM-DD h:mm:ss'),
      raw: true,
      entryOnly: true
    }, options);
    return (
      new webpack.BannerPlugin(bannerText)
    )
  },

  //下次打包清除上一次打包文件
  'cleanPluginConf': function(paths, options) {
    paths = paths || ['dist'];
    options = ObjectAssign({
      root: __dirname,
      verbose: true,
      dry: false
    }, options);
    return (
      new CleanPlugin(paths, options)
    )
  },

  compressionWebpackPluginConf: function(options) {
    options = ObjectAssign({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' + ['js', 'css'].join('|') + ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    }, options);
    return new CompressionWebpackPlugin(options);
  },

  //提取common文件模块
  'commonsChunkPluginConf': function(options) {
    options = ObjectAssign({
      //1.如果不存在 chunk 为 common 的模块，则从所有模块提取公共到 common 这一公共模块;
      //2.如果存在 chunk 的 name 为 common 的模块，
      //则以common 为基础，提取其他模块和common相同的部分并合并到 common 模块
      name: "common",
      filename: "common.bundle.js",
      minChunks: 2 //最少两个模块中存在才进行抽离common
      // chunks:['home','admin']//指定只从哪些chunks中提取common
    }, options);
    return (
      new webpack.optimize.CommonsChunkPlugin(options)
    )
  },

  //definePlugin 会把定义的string 变量插入到所有JS代码中
  //注意与providePluginConf的区分
  'definePluginConf': function(options) {
    options = ObjectAssign({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }, options);
    return (
      new webpack.DefinePlugin(options)
    )
  },

  'dllPluginConf': function(options) {
    options = ObjectAssign({
      path: path.join(__dirname, 'manifest.json'),
      name: '[name]_[chunkhash]',
      context: __dirname,
    }, options);
    return new webpack.DllPlugin({
      path: path.join(__dirname, 'manifest.json'),
      name: '[name]_[chunkhash]',
      context: __dirname,
    })
  },

  //常用并且不常变化的打包成dll引入
  'dllReferencePluginConf': function(options) {
    options = ObjectAssign({
      context: __dirname,
      manifest: require('./manifest.json'),
    }, options);
    return (
      new webpack.DllReferencePlugin(options)
    )
  },

  //css 以文件类型引入而不再内嵌到HTML中
  'extractTextPluginConf': function(fileName, options) {
    fileName = fileName || "[name].bundle.css";
    //options = ObjectAssign({}, options);
    return (
      new ExtractTextPlugin(fileName)
    )
  },

  //js重新编译动态刷新浏览器插件
  'hotModuleReplacementPluginConf': function() {
    return (
      new webpack.HotModuleReplacementPlugin()
    )
  },

  //如果有多个页面需要写多个htmlWebPackPluginConf
  'htmlWebPackPluginConf': function(options) {
    options = ObjectAssign({}, options);
    return (
      new HtmlWebpackPlugin(options)
    )
  },

  //最小分块大小，小于minChunkSize将不生成分块
  'minChunkSizePluginConf': function(minChunkSize) {
    minChunkSize = minChunkSize || 51200;
    return (
      new webpack.optimize.MinChunkSizePlugin({
        minChunkSize: minChunkSize
      })
    )
  },

  //noop plugin
  'noopPluginConf': function() {
    return (
      function() {}
    )
  },

  //jquery(其他类库亦如此)引入全局的方案，之后不用在每个文件中require('jquery')
  //eg: options = {$: 'jquery'} 相当于每个页面中 var $ = require('jquery')
  //注意与definePluginConf的区分
  'providePluginConf': function(options) {
    options = ObjectAssign({}, options);
    return (
      new webpack.ProvidePlugin(options)
    )
  },

  //文件拷贝插件
  'transferWebpackPluginConf': function(froms, cwd) {
    froms = froms || [];
    cwd = cwd || path.join(__dirname, 'dist');
    return (
      new TransferWebpackPlugin(froms, cwd)
    )
  },

  //js压缩组件
  'uglifyJsPluginConf': function(options) {
    options = ObjectAssign({
      //sourceMap: true,
      compress: {
        warnings: false
      },
      except: ['$super', '$', 'exports', 'require']
    }, options);
    return (
      new webpack.optimize.UglifyJsPlugin(options)
    )
  }
}
