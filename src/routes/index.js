/*
* @Author: lushijie
* @Date:   2016-09-28 17:19:43
* @Last Modified by:   lushijie
* @Last Modified time: 2016-12-10 12:00:18
*/

import App from 'app/app';
import AppDashboard from 'app/home';
import NotFound from 'components/404';
import indexInboxRoute from 'routes/index_inbox';
import indexOutboxRoute from 'routes/index_outbox';

// 配置路由实现方式——动态路由
export default [
    {
        path: '/',
        component: App,
        indexRoute: { component: AppDashboard },//index路由加载项
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
