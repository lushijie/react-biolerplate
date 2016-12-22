//相当于layouts模板页，所有路由的父类模板
import React, {Component} from 'react';
import {BaseComponent} from 'components/baseComponent';
import {withRouter} from 'react-router';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import Menu from 'components/Menu';

import Alert from 'components/Alert/SAlert';
import 'components/Alert/s-alert-default.css';


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
