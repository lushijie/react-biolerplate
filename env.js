/*
* @Author: lushijie
* @Date:   2016-12-14 10:41:05
* @Last Modified by:   lushijie
* @Last Modified time: 2017-01-11 14:59:31
*/
let TEST_SERVER_ADDRESS = location.protocol + '//127.0.0.1:5050';
let API_SERVER_ADDRESS = 'http://127.0.0.1:3000';
let CURRENT_SERVER_ADDRESS = location.protocol + '//' + location.host;

function isDevEnv(){
  return (CURRENT_SERVER_ADDRESS == TEST_SERVER_ADDRESS);
}

let API_BASE_URL = isDevEnv ? API_SERVER_ADDRESS : CURRENT_SERVER_ADDRESS;

export {API_BASE_URL, isDevEnv};
