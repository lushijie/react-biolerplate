//相当于layouts模板页，所有路由的父类模板
import React, {Component} from 'react';
import {BaseComponent} from 'components/baseComponent';
import {withRouter} from 'react-router';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import Menu from 'components/menu';

import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';


import './index.css';

// export default class extends BaseComponent {
export default withRouter(class extends BaseComponent {

  render(){
    return (
      <div>
        <Menu />
        <Alert stack={{limit: 3}} />
        {this.props.children}
      </div>
    )
  }
})
