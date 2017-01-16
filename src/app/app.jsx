import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import {Link, IndexLink, browserHistory} from 'react-router';
// import {rootRoute} from './router';


import Layout from 'app/layout'
import IndexHome from 'app/home'
import {Page404} from 'components'

// 路由配置
let rootRoute = [
  {
    path: '/',
    component: Layout,
    indexRoute: {component: IndexHome},
    childRoutes: require('app/router').default
  },
  {
    path: '*',
    component: Page404,
  }
]



ReactDOM.render(
  <Router history={browserHistory} routes={rootRoute} />,
  document.getElementById('app')
)
