import React, {Component} from 'react';
import {render} from 'react-dom';
import { withRouter } from 'react-router';

export default class extends Component {

	// static contextTypes: {
	//     router: React.PropTypes.func.isRequired
	// }
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
	}

	render() {
		return (
			<div>
				<h2>About</h2>
				{this.props.children || "Welcome to your About"}
			</div>
		)
	}
}
