import React, {Component} from 'react';
import {render} from 'react-dom';

export default class extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
    location: React.PropTypes.object.isRequired
  }

  state = {
    // 初始化state,替代原getInitialState, 注意前面没有static
    unsaved: true
  }

  componentDidMount() {
    console.log('this.props->', this.props);
    console.log('this.context.router', this.context.router);
    console.log('this.context.location', this.context.location);
  }

  render() {
    return (
      <div>
        <h2>About</h2>
        {this.props.children || "This is outbox default!"}
      </div>
    )
  }
}
