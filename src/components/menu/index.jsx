import React, {Component} from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';

import './index.css';

export default class extends Component {
  render(){
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><Link to="/outbox" activeClassName="active">Outbox</Link></li>
            {/*IndexLink可以保证在子节点激活的状态下，父节点不会同样的被激活*/}
          <li><IndexLink to="/inbox" activeClassName="active">Inbox</IndexLink></li>
          <li style={{marginLeft: '20px'}}>
            <Link to="/messages/123" activeClassName="active" query={{q:'querytest'}} >Message</Link>
          </li>
        </ul>
      </div>
    )
  }
}
