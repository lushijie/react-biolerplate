import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'

// root路由配置
let rootRoute = [
  {
    path: '/',
    component: require('./layout').default,
    indexRoute: {
      component: require('./home').default
      //onEnter: (nextState, replace) => replace('/inbox')  // 可以通过 onEnter 跳转到一个默认的路由页面
    },
    childRoutes: require('./router').default
  },
  {
    path: '*',
    component: require('./page404').default
  }
]

ReactDOM.render(
  <Router history={browserHistory} routes={rootRoute} />,
  document.getElementById('app')
)
