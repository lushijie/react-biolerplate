import React, {Component} from 'react';
import {BaseComponent} from 'components/baseComponent';
import {withRouter} from 'react-router';
import './index.css';

export default withRouter(class extends BaseComponent {
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <h3>Inbox-Home</h3>
        <h4>This is Inbox-Home page!</h4>
      </div>
    )
  }
})
