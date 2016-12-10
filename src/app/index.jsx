import React, {Component} from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory} from 'react-router';
import Layout from 'app/layout';
import AppHome from 'app/home';
import NotFound from 'components/404';
import indexInboxRoute from 'app/inbox/route';
import indexOutboxRoute from 'app/outbox/route';

import './index.css';


let rootRoute = [
  {
    path: '/',
    component: Layout,
    indexRoute: { component: AppHome },
    childRoutes: [
      // require('./inbox/route').default,
      // require('./outbox/route').default
      indexInboxRoute,
      indexOutboxRoute
    ]
  },
  {
    path: '*',
    component: NotFound,
  }
]


render(
  <Router history={browserHistory} routes={rootRoute} />,
  document.getElementById('app')
)
