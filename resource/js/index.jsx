import React, {Component} from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory} from 'react-router';
import App from 'components/app.jsx';
import Dashboard from 'components/dashboard.jsx';
//如果about组件使用动态路由，此处不能以这样的方式引入about了，否则about的动态加载失败！
// import About from 'components/about.jsx';
//import Inbox from 'components/inbox.jsx';
import Message from 'components/message.jsx';
import NotFound from 'components/notfound.jsx';
import 'resource/css/index.scss';

// 路由实现方式1
// render(
//  (
//      <Router>
//          <Route path="/" component={App}>
//              <IndexRoute component={Dashboard} />
//              <Route path="about" component={About} />
//              <Route path="inbox" component={Inbox}>
//                {/* 使用 /messages/:id 替换 messages/:id */}
//                {/* <Route path="/messages/:id" component={Message} /> */}
//                {/* 跳转 /inbox/messages/:id 到 /messages/:id 来兼容旧的url */}
//                {/*<Redirect from="messages/:id" to="/messages/:id" /> */}
//                <Route path="messages/:id" component={Message} />
//              </Route>
//          </Route>
//      </Router>
//  ),document.getElementById('app2')
// );


// 路由实现方式2
//路由实现方式——动态路由
const routeConfig = [
    {
        path: '/',
        component: App,
        indexRoute: { component: Dashboard },//index路由加载项
        childRoutes: [
            {
                path: 'about',
                getComponent: (nextState, cb) => {
                    require.ensure([], (require) => {
                         cb(null, require('components/about.jsx').default)
                    },'about');
                }
            },
            //非动态加载About的时候使用这种方式
            //{ path: 'about', component: About },
            {
                path: 'inbox',
                //非动态加载Inbox的时候使用这种方式
                //component: Inbox,
                getComponent: (nextState, cb) => {
                    require.ensure([], (require) => {
                         cb(null, require('components/inbox.jsx').default)
                    },'inbox');
                },
                childRoutes: [
                  { path: '/messages/:id', component: Message },
                  { path: 'messages/:id',
                    onEnter: function (nextState, replace) {
                      //onEnter hook会从最外层的父路由开始直到最下层子路由结束
                      // replace('/messages/' + nextState.params.id)//路由替换
                    },
                    onLeave: function () {
                    }//onLeave hook 会在所有将离开的路由中触发，从最下层的子路由开始直到最外层父路由结束
                  }
                ]
            }
        ]
    },
    {
      path: '*',
      component: NotFound,
    }
]

render(<Router history={browserHistory} routes={routeConfig} />, document.getElementById('app2'))
