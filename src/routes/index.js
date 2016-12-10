/*
* @Author: lushijie
* @Date:   2016-09-28 17:19:43
* @Last Modified by:   lushijie
* @Last Modified time: 2016-12-10 13:59:18
*/

import App from 'app/app';
import AppHome from 'app/home';
import NotFound from 'components/404';
import indexInboxRoute from 'routes/index_inbox';
import indexOutboxRoute from 'routes/index_outbox';

export default [
  {
    path: '/',
    component: App,
    indexRoute: { component: AppHome },
    childRoutes: [
      indexOutboxRoute,
      indexInboxRoute
    ]
  },
  {
    path: '*',
    component: NotFound,
  }
]
