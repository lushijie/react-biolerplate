import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import {Link, IndexLink, browserHistory} from 'react-router';
import {rootRoute} from './router';


ReactDOM.render(
  <Router history={browserHistory} routes={rootRoute} />,
  document.getElementById('app')
)
