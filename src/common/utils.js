/*
* @Author: lushijie
* @Date:   2016-12-10 11:39:02
* @Last Modified by:   lushijie
* @Last Modified time: 2017-02-16 10:13:40
*/
import * as querystring from 'querystring';

export let Utils = {
  /**
   * 返回解析赋值的结果
   * let queryObejct = Util.getDestructResult(['houseId', 'item:item1'], this.state);
  */
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

  /**
   * 把对象拼接成url参数
   * Util.getQueryJoin(queryObejct)
  */
  getQueryJoin(queryObject) {
    return querystring.stringify(queryObject);
  },

  getChildRoutes(childs) {
    let childRoutes = [];
    if(Array.isArray(childs)) {
      console.log(childs)
      for(let i = 0; i < childs.length; i++) {
        if(Array.isArray(childs[i])) {
          childRoutes = childRoutes.concat(childs[i]);
        }
        if(typeof(childs[i]) === 'string') {
          childRoutes.push(childs[i]);
        }
      }
    }
    return childRoutes;
  },
}

export {Utils as default};
