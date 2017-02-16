/*
* @Author: lushijie
* @Date:   2016-09-28 17:36:51
* @Last Modified by:   lushijie
* @Last Modified time: 2017-02-16 10:12:16
*/
import Util from 'common/utils';

export default [
  {
    path: 'inbox',

    //一、非动态加载
    component: require('./layout').default,
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
      component: require('./home').default,
      //二、动态加载 getComponent
    },

    childRoutes: Util.getChildRoutes([
      require('./message/router').default,
    ]),

    onEnter: function(){
      // arg < nextState, replaceState >
      console.log('Inbox onEnter');
    },
  },
]
