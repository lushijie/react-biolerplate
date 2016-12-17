//相当于layouts模板页，所有路由的父类模板
import React, {Component} from 'react';
import {BaseComponent} from 'components/baseComponent';
import {withRouter} from 'react-router';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import Menu from 'components/menu';

import './index.css';

// export default class extends BaseComponent {
export default withRouter(class extends BaseComponent {

  render(){
    return (
      <div>
        <Menu />
        {this.props.children}
      </div>
    )
  }
})
