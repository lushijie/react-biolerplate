import React, {Component} from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import Menu from 'components/common/menu';

export default class extends Component {
  render(){
    return (
      <div>
        <Menu />
        {this.props.children}
      </div>
    )
  }
}
