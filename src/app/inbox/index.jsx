import React, {Component} from 'react';
import {render} from 'react-dom';
import {withRouter} from 'react-router';
import InboxHome from 'app/inbox/home';
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
          {/*{this.props.children || <InboxHome />}*/}
          {this.props.children}
      </div>
    )
  }
})
