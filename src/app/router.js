/*
* @Author: lushijie
* @Date:   2016-12-28 18:10:44
* @Last Modified by:   lushijie
* @Last Modified time: 2016-12-29 19:35:36
*/
import Layout from 'app/layout'
import IndexHome from 'app/home'
import Inbox from 'app/inbox'
import Outbox from 'app/outbox'
import {Page404} from 'components'
import InboxRouter from 'app/inbox/router'

// 路由配置
export let rootRoute = [
  {
    path: '/',
    component: Layout,
    indexRoute: {component: IndexHome},
    childRoutes: [
      {
        path: 'inbox',

        //第一种indexRoute(推荐)在inbox页面中 {this.props.children || <InboxHome />}
        //第二种indexRoute方式路由中配置indexRoute
        // indexRoute: {
            //请参照下方Inbox的定义方式
            //一、非动态加载 component
            //二、动态加载 getComponent

        // },

        //一、非动态加载
        //component: require('app/inbox').default,
        component: Inbox,
        //二、动态加载
        // getComponent: (nextState, cb) => {
        //   require.ensure([], () => {
        //     cb(null, require('app/inbox').default)
        //   }, 'inbox_index');
        // },
        onEnter: function(nextState, replaceState){
          console.log('Inbox onEnter');
        },
        childRoutes: InboxRouter
      },
      {
        path: 'outbox',
        component: Outbox,
      }
    ]
  },
  {
    path: '*',
    component: Page404,
  }
]
