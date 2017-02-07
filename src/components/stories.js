/*
* @Author: lushijie
* @Date:   2017-02-07 14:29:48
* @Last Modified by:   lushijie
* @Last Modified time: 2017-02-07 18:31:51
*/

let req = require.context('./', true, /story\.js$/);
req.keys().forEach(function(key){
  req(key);
});

// require('./Welcome/story')
// require('./Button/story')


