import React from 'react'
import {withRouter} from 'react-router'
import {BaseComponent} from 'components'
import './index.css';

export default withRouter(class extends BaseComponent {
  componentDidMount() {
    //console.info(this.props.params);
    //console.info(this.props);
  }
  render() {
    return (
      <div>
        <h3>Inbox-Message</h3>
        <h4>This is message {this.props.params.id} page!</h4>
      </div>
    )
  }
})
