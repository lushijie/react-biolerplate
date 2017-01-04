import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {render} from 'react-dom'
import {Link, IndexLink} from 'react-router'
import {BaseComponent, Menu, Alert} from 'components'
import './index.scss'

// export default class extends BaseComponent {
export default withRouter(class extends BaseComponent {
  render(){
    return (
      <div>
        <Menu />
        <Alert stack={{limit: 3}} />
        {this.props.children}
      </div>
    )
  }
})
