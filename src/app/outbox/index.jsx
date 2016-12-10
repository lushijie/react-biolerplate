import React, {Component} from 'react';
import {render} from 'react-dom';
import './index.css';

export default class extends Component {
  static contextTypes = {
    history: React.PropTypes.object.isRequired,
    router: React.PropTypes.object.isRequired,
    location: React.PropTypes.object.isRequired
  }

  state = {
    // 初始化state,替代原getInitialState, 注意前面没有static
    unsaved: true
  }

  componentDidMount() {
    console.log('this.props->', this.props);
    console.log('this.context.history', this.context.history);
    console.log('this.context.router', this.context.router);
    console.log('this.context.location', this.context.location);

    this.context.router.setRouteLeaveHook(this.props.route, () => {
      // if (userShouldntLeaveYet) {
      //     return false
      // }
    })
  }

  render() {
    return (
      <div>
        <h2>Outbox</h2>
        <h3>This is Outbox page!</h3>
      </div>
    )
  }
}
