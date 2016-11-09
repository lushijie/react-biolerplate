import React, {Component} from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory} from 'react-router';

import './index.scss';
import {indexRoute} from 'routes';

// 路由实现方式1
//render(
// (
//     <Router history={hashHistory}>
//         <Route path="/" component={App}>
//             <IndexRoute component={Dashboard} />
//             <Route path="about" component={About} />
//             <Route path="inbox" component={Inbox}>
//               {/* 使用 /messages/:id 替换 messages/:id */}
//               {/* <Route path="/messages/:id" component={Message} /> */}
//               {/* 跳转 /inbox/messages/:id 到 /messages/:id 来兼容旧的url */}
//               {/*<Redirect from="messages/:id" to="/messages/:id" /> */}
//               <Route path="messages/:id" component={Message} />
//             </Route>
//         </Route>
//     </Router>
// ),document.getElementById('app2')
//);

render(
  <Router history={browserHistory} routes={indexRoute} />,
  document.getElementById('app')
)
