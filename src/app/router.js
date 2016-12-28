/*
* @Author: lushijie
* @Date:   2016-12-28 18:10:44
* @Last Modified by:   lushijie
* @Last Modified time: 2016-12-28 19:54:12
*/
import Layout from 'app/layout';
import AppHome from 'app/home';
import NotFound from 'components/404';
//import Inbox from 'app/inbox';

// 路由配置
export let rootRoute = [
  {
    path: '/',
    component: Layout,
    indexRoute: { component: AppHome },
    childRoutes: [
      {
        path: 'inbox',
        // indexRoute 1.第一种方式路由中配置indexRoute
        // indexRoute 2.第二种方式在inbox页面中 {this.props.children || <InboxHome />}

        // indexRoute: {
        //   //一、非动态加载1
        //   //component: require('app/inbox/home').default
        //   //二、非动态加载2
        //   //component: InboxHome
        //   //三、动态加载
        //   getComponent: (nextState, cb) => {
        //     require.ensure([], () => {
        //       cb(null, require('app/inbox/home').default)
        //     }, 'inbox_home');
        //   },
        // },

        //一、非动态加载1
        component: require('app/inbox').default,
        //二、非动态加载2
        //component: Inbox,
        //三、动态加载
        // getComponent: (nextState, cb) => {
        //   require.ensure([], () => {
        //     cb(null, require('app/inbox').default)
        //   }, 'inbox_index');
        // },
        onEnter: function(nextState, replaceState){
          console.log('Inbox onEnter');
        },
        childRoutes: require('app/inbox/router').default
      },
      {
        path: 'outbox',
        component: require('app/outbox').default,
      }
    ]
  },
  {
    path: '*',
    component: NotFound,
  }
]
