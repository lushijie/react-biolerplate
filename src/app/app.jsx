import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute} from 'react-router'
import {Link, IndexLink, browserHistory} from 'react-router'

// 路由配置
let rootRoute = [
  {
    path: '/',
    component: require('./').default,
    indexRoute: {
      component: require('./home').default
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
