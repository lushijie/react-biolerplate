/*
* @Author: lushijie
* @Date:   2016-09-28 17:19:43
* @Last Modified by:   lushijie
* @Last Modified time: 2016-09-28 17:47:20
*/

import App from 'components/app.jsx';
import Dashboard from 'components/dashboard.jsx';
import AboutDashBoard from 'components/about-dashboard.jsx';
//如果about组件使用动态路由，此处不能以这样的方式引入about了，否则about的动态加载失败！
// import About from 'components/about.jsx';
import NotFound from 'components/notfound.jsx';
import {indexInboxRoute} from 'routes/index-inbox.js';


// 配置路由实现方式——动态路由
export const indexRoute = [
    {
        path: '/',
        component: App,
        indexRoute: { component: Dashboard },//index路由加载项
        childRoutes: [
            {
                //非动态加载About的时候使用这种方式
                //{ path: 'about', component: About },
                path: 'about',
                indexRoute: { component: AboutDashBoard },//index路由加载项
                getComponent: (nextState, cb) => {
                    require.ensure([], (require) => {
                         cb(null, require('components/about').default)
                    },'about');
                },
                onEnter: function(nextState, replaceState){
                  //console.log('about,nextState', nextState);
                }
            },
            indexInboxRoute
        ]
    },
    {
      path: '*',
      component: NotFound,
    }
]
