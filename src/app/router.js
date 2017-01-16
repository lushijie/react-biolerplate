/*
* @Author: lushijie
* @Date:   2016-12-28 18:10:44
* @Last Modified by:   lushijie
* @Last Modified time: 2017-01-16 10:02:03
*/
// import Inbox from 'app/inbox'
// import Outbox from 'app/outbox'
// import InboxRouter from 'app/inbox/router'

// 路由配置
export default [
  {
    path: 'inbox',

    //第一种indexRoute在inbox页面中 {this.props.children || <InboxHome />}
    //第二种indexRoute方式路由中配置indexRoute
    // indexRoute: {
        //请参照下方Inbox的定义方式
        //一、非动态加载 component
        //二、动态加载 getComponent
    // },

    //一、非动态加载
    component: require('./inbox').default,
    //component: Inbox,
    //二、动态加载
    // getComponent: (nextState, cb) => {
    //   require.ensure([], () => {
    //     cb(null, require('./inbox').default)
    //   }, 'inbox_index');
    // },

    childRoutes: require('./inbox/router').default,

    onEnter: function(nextState, replaceState){
      console.log('Inbox onEnter');
    },
  },
  {
    path: 'outbox',
    component: require('./outbox').default,
  }
]
