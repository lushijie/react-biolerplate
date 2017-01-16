import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute} from 'react-router'
import {Link, IndexLink, browserHistory} from 'react-router'

// root路由配置
let rootRoute = [
  {
    path: '/',
    component: require('./layout').default,
    indexRoute: {
      component: require('./home').default,
      // 可以通过 onEnter 跳转到一个默认的路由页面
      //onEnter: (nextState, replace) => replace('/inbox')
    },
    childRoutes: require('./router').default
  },
  {
    path: '*',
    component: require('./page404').default,
  }
]

ReactDOM.render(
  <Router history={browserHistory} routes={rootRoute} />,
  document.getElementById('app')
)
