/*
* @Author: lushijie
* @Date:   2016-09-28 17:19:43
* @Last Modified by:   lushijie
* @Last Modified time: 2016-11-09 22:22:48
*/

import App from 'components/index/app';
import AppDashboard from 'components/index/dashboard';
import NotFound from 'components/common/404';
import indexInboxRoute from 'routes/index_inbox';
import indexAboutRoute from 'routes/index_outbox';

// 配置路由实现方式——动态路由
export default [
    {
        path: '/',
        component: App,
        indexRoute: { component: AppDashboard },//index路由加载项
        childRoutes: [
            indexAboutRoute,
            indexInboxRoute
        ]
    },
    {
      path: '*',
      component: NotFound,
    }
]
