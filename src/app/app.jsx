import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'

// root路由配置
let rootRoute = require('./router').default;

ReactDOM.render(
  <Router history={browserHistory} routes={rootRoute} />,
  document.getElementById('app')
)
