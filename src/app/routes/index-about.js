/*
* @Author: lushijie
* @Date:   2016-09-28 17:51:44
* @Last Modified by:   lushijie
* @Last Modified time: 2016-09-29 15:36:50
*/

//如果about组件使用动态路由，此处不能以这样的方式引入about了，否则about的动态加载失败！
// import About from 'components/about.jsx';
import AboutDashBoard from 'components/about-dashboard.jsx';

export const indexAboutRoute = {
    //非动态加载About的时候使用这种方式
    //{ path: 'about', component: About },
    path: 'about',
    indexRoute: { component: AboutDashBoard },//index路由加载项
    getComponent: (nextState, cb) => {
        require.ensure([], () => {
             cb(null, require('components/about').default)
        },'about');
    },
    onEnter: function(nextState, replaceState){
      //console.log('about,nextState', nextState);
    }
}
