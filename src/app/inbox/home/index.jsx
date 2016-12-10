import React, {Component} from 'react';
import {render} from 'react-dom';
import {withRouter} from 'react-router';
import './index.css';

export default withRouter(class extends Component {
  componentDidMount() {
    console.log(this.props);
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
