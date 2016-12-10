/*
* @Author: lushijie
* @Date:   2016-09-28 17:51:44
* @Last Modified by:   lushijie
* @Last Modified time: 2016-12-10 14:47:20
*/

//如果outbox组件使用动态路由，此处不能以下面的方式引入outbox了，否则outbox的动态加载失败！
//import OutboxIndex from 'components/outbox/index';

import Outbox from 'app/outbox';

export default {
  path: 'outbox',
  //非动态加载哦outbox的时候,直接定义component;动态加载使用下面getComponent
  // component: Outbox,

  getComponent: (nextState, cb) => {
    require.ensure([], () => {
      cb(null, require('app/outbox/index').default)
    },'outbox');//outbox 可选，是动态加载的文件名
  },
  onEnter: function(nextState, replaceState){
    //console.log('outbox,nextState', nextState);
  }
}
