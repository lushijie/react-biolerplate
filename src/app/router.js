/*
* @Author: lushijie
* @Date:   2016-12-28 18:10:44
* @Last Modified by:   lushijie
* @Last Modified time: 2017-02-16 10:09:56
*/
// import Inbox from 'app/inbox'
// import Outbox from 'app/outbox'
// import InboxRouter from 'app/inbox/router'
import Util from 'common/utils';

// 路由配置
export default [
  {
    path: '/',
    component: require('./layout').default,
    indexRoute: {
      component: require('./home').default,
      //onEnter: (nextState, replace) => replace('/inbox')  // 可以通过 onEnter 跳转到一个默认的路由页面
    },
    childRoutes: Util.getChildRoutes(
      [
        require('app/inbox/router').default,
        require('app/outbox/router').default,
      ]
    ),
  },
  {
    path: '*',
    component: require('./page404').default,
  },
]


