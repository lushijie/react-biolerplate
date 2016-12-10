import React, {Component} from 'react';
import {render} from 'react-dom';
import {withRouter} from 'react-router';
import HomePage from 'app/inbox/home';
import './index.css';

export default withRouter(class extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    console.log(this.props.children);
    return (
      <div>
        <h2>Inbox</h2>
          {/*{this.props.children || <HomePage />}*/}
          {this.props.children}
      </div>
    )
  }
})
