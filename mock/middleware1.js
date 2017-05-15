/*
* @Author: lushijie
* @Date:   2016-12-14 17:07:37
* @Last Modified by:   lushijie
* @Last Modified time: 2016-12-14 17:09:46
*/
module.exports = function (req, res, next) {
  res.header('X-Hello', 'World')
  next()
}
