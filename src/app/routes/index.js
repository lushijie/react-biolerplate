/*
* @Author: lushijie
* @Date:   2016-09-28 17:19:43
* @Last Modified by:   lushijie
* @Last Modified time: 2016-09-28 17:53:27
*/

import App from 'components/app.jsx';
import Dashboard from 'components/dashboard.jsx';
import NotFound from 'components/notfound.jsx';
import {indexInboxRoute} from 'routes/index-inbox.js';
import {indexAboutRoute} from 'routes/index-about.js';

// 配置路由实现方式——动态路由
export const indexRoute = [
    {
        path: '/',
        component: App,
        indexRoute: { component: Dashboard },//index路由加载项
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
