/*
* @Author: lushijie
* @Date:   2016-12-14 10:41:05
* @Last Modified by:   lushijie
* @Last Modified time: 2016-12-14 12:05:55
*/
let API_BASE_URL;
if (location.host.includes('etest.mall.360.com')){
    //测试环境使用e1接口
    API_BASE_URL = 'http://e1.mall.360.com'
}else {
    API_BASE_URL = location.protocol + '//' + location.host;
}
function isDevENV(){
  return (['127.0.0.1:5050'].indexOf(location.host) > -1);
}

export {API_BASE_URL, isDevENV};
