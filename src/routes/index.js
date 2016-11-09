/*
* @Author: lushijie
* @Date:   2016-09-28 17:19:43
* @Last Modified by:   lushijie
* @Last Modified time: 2016-11-09 22:08:51
*/

import App from 'components/app.jsx';
import AppDashboard from 'components/app_dashboard.jsx';
import NotFound from 'components/common/404.jsx';
import indexInboxRoute from 'routes/index-inbox.js';
import indexAboutRoute from 'routes/index-about.js';

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
