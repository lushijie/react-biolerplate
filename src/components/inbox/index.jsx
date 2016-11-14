import React, {Component} from 'react';
import {render} from 'react-dom';
import {withRouter} from 'react-router';

export default withRouter(class extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "This is Inbox default!!"}
      </div>
    )
  }
})
