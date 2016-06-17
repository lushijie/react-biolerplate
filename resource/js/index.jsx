import React, {Component} from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory} from 'react-router';
import App from 'components/app.jsx';
import Dashboard from 'components/dashboard.jsx';
//import About from 'components/about.jsx';
import Inbox from 'components/inbox.jsx';
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
// const routeConfig = [
//   { path: '/',
//     component: App,
//     indexRoute: { component: Dashboard },
//     childRoutes: [
//       { path: 'about', component: About },
//       { path: 'inbox',
//         component: Inbox,
//         childRoutes: [
//           { 
//              path: 'messages/:id', component: Message
//           }
//         ]
//       }
//     ]
//   }
// ]

//路由实现方式2_URL路径修改
// const routeConfig = [
//  { 
//      path: 'step',
//      component: App,
//      indexRoute: { component: Dashboard },
//      childRoutes: [
//        { path: 'about', component: About },
//        { path: 'inbox',
//          component: Inbox,
//          childRoutes: [
//            { path: '/messages/:id', component: Message },
//            { path: 'messages/:id',
//              onEnter: function (nextState, replace) {
//                 replace('/messages/' + nextState.params.id)//路由替换
//              },//onEnter hook会从最外层的父路由开始直到最下层子路由结束
//              onLeave: function () {
//              }//onLeave hook 会在所有将离开的路由中触发，从最下层的子路由开始直到最外层父路由结束
//            }
//          ]
//        }
//      ]
//  },  
//  {
//    path: '*',
//    component: NotFound,
//  }
// ]


// render(<Router history={browserHistory} routes={routeConfig} />, document.getElementById('app2'))



//路由实现方式——动态路由

const routeConfig = [
    { 
        path: 'step',
        component: App,
        indexRoute: { component: Dashboard },
        // indexRoute:{
        //  getComponent: (location, cb) => {
        //          require.ensure([], (require) => {
        //              cb(null, require('../../components/dashboard.jsx'))
        //          })
        //     }
        // },
        childRoutes: [
            { 
                path: 'about', 
                getComponent: (nextState, cb) => {
                    require.ensure([], (require) => {
                         cb(null, require('../../components/about.jsx').default)
                    },'about')
                }
            },
            //{ path: 'about', component: About },
            { 
                path: 'inbox',
                component: Inbox,
                childRoutes: [
                  { path: '/messages/:id', component: Message },
                  { path: 'messages/:id',
                    onEnter: function (nextState, replace) {
                       replace('/messages/' + nextState.params.id)//路由替换
                    },//onEnter hook会从最外层的父路由开始直到最下层子路由结束
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