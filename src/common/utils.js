/*
* @Author: lushijie
* @Date:   2016-12-10 11:39:02
* @Last Modified by:   lushijie
* @Last Modified time: 2016-12-10 11:40:20
*/
import * as querystring from 'querystring';

export let Utils = {
  //返回解析赋值的结果
  getDestructResult(properties,sourceObject) {
    let destObject = {}, aliasMap = {};
    properties = Array.isArray(properties) ? properties : [properties];

    //建立别名映衬
    properties = properties.map(function(ele) {
      if(ele.indexOf(':') > -1) {
        aliasMap[ele.split(':')[0]] = ele.split(':')[1];
      }
      return ele.split(':')[0];
    });

    //如果存在别名，新对象使用别名
    Object.keys(sourceObject).forEach(function(ele) {
      if(properties.indexOf(ele) > -1) {
        destObject[aliasMap[ele] || ele] = sourceObject[ele];
      }
    });
    return destObject;
  },

  //把对象拼接成url参数
  getQueryJoin(queryObject) {
    return querystring.stringify(queryObject);
  }
}

export {Utils as default};
