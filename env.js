/*
* @Author: lushijie
* @Date:   2016-12-14 10:41:05
* @Last Modified by:   lushijie
* @Last Modified time: 2016-12-14 10:43:12
*/
let API_BASE_URL;
if (location.host.includes('etest.mall.360.com')){
    //测试环境使用e1接口
    API_BASE_URL = 'http://e1.mall.360.com'
}else {
    API_BASE_URL = location.protocol + '//' + location.host;
}
export function isDevENV(){
  return (['etest.mall.360.com', 'e1.mall.360.com'].indexOf(location.host) > -1);
}

export default API_BASE_URL;
