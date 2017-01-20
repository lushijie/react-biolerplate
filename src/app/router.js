/*
* @Author: lushijie
* @Date:   2016-12-28 18:10:44
* @Last Modified by:   lushijie
* @Last Modified time: 2017-01-20 15:23:10
*/
// import Inbox from 'app/inbox'
// import Outbox from 'app/outbox'
// import InboxRouter from 'app/inbox/router'

// 路由配置
export default [
  {
    path: 'inbox',

    //一、非动态加载
    component: require('./inbox/layout').default,
    //component: Inbox,
    //二、动态加载
    // getComponent: (nextState, cb) => {
    //   require.ensure([], () => {
    //     cb(null, require('./inbox/layout').default)
    //   }, 'inbox_index');
    // },

    //第一种indexRoute在inbox页面中 {this.props.children || <InboxHome />}
    //第二种indexRoute方式路由中配置indexRoute
    indexRoute: {
      //一、非动态加载 component
      component: require('./inbox/home').default
      //二、动态加载 getComponent
    },
    childRoutes: require('./inbox/router').default,

    onEnter: function(){
      // arg < nextState, replaceState >
      console.log('Inbox onEnter');
    }
  },
  {
    path: 'outbox',
    component: require('./outbox').default
  }
]
