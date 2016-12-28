/*
* @Author: lushijie
* @Date:   2016-12-28 18:10:44
* @Last Modified by:   lushijie
* @Last Modified time: 2016-12-28 18:11:51
*/
import Layout from 'app/layout';
import AppHome from 'app/home';
import NotFound from 'components/404';
import indexInboxRoute from 'app/inbox/route';
import indexOutboxRoute from 'app/outbox/route';

// 路由配置
export let rootRoute = [
  {
    path: '/',
    component: Layout,
    indexRoute: { component: AppHome },
    childRoutes: [
      // require('./inbox/route').default,
      // require('./outbox/route').default
      indexInboxRoute,
      indexOutboxRoute
    ]
  },
  {
    path: '*',
    component: NotFound,
  }
]
