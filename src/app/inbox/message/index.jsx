import React, {Component} from 'react';
import {render} from 'react-dom';
import './index.css';

export default class extends Component {
  componentDidMount() {
    //console.info(this.props.params);
    //console.info(this.props);
  }
  render() {
    return (
      <div>
        <h3>Inbox-Message</h3>
        <h4>This is message {this.props.params.id}</h4>
      </div>
    )
  }
}
