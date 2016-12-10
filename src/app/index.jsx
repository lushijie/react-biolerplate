import React, {Component} from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory} from 'react-router';
import indexRoute from 'routes';
import './index.css';

render(
  <Router history={browserHistory} routes={indexRoute} />,
  document.getElementById('app')
)
