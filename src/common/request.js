/*
* @Author: lushijie
* @Date:   2016-12-14 10:38:02
* @Last Modified by:   lushijie
* @Last Modified time: 2016-12-14 11:51:26
*/
import reqwest from 'reqwest';
import path from 'path';
import API_BASE_URL from 'base/env';

function trimObject(obj) {
  Object.keys(obj).forEach(function(key){
    if(typeof(obj[key]) === 'string'){
      obj[key] = obj[key].trim();
    }
    if(obj[key] !== null && typeof obj[key] === 'object') {
      trimObject(obj[key]);
    }
  });
}

function request(obj) {
  var params = {
    data: {},
    method: 'get',
    type: 'json',
    crossOrigin: true,
    withCredentials: true
  };

  if( typeof(obj) === 'string' ) {
    if(obj.indexOf('/') != 0) {
      throw '请检查提供的 url 格式';
    }
    params.url = `${API_BASE_URL}${obj}`;
  } else if(typeof(obj) === 'object') {
    Object.assign(params, obj);

    console.log(params.url.indexOf('/'))
    if(params.url.indexOf('/') != 0) {
      throw '请检查提供的 url 格式';
    }
    params.url = `${API_BASE_URL}${params.url}`;
  }

  params.data._t = Date.now();
  trimObject(params.data);

  if(!params.url) {
    throw '请提供 url 参数';
  }

  return new Promise((resolve, reject) => {
    reqwest({url: params.url, ...params}).then(
     resp => {
        if( resp.errno == 0 ) {
          return resolve(resp);
        }else {
          console.warn(resp.errmsg);
          reject(resp);
        }
      }
    );
  });
}

export default request;
