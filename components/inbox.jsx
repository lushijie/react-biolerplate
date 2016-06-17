import React, {Component} from 'react';
import {render} from 'react-dom';

export default class extends Component {
	render() {
		return (
			<div>
			  	<h2>Inbox</h2>
			 	{this.props.children || "Welcome to your Inbox"}
			</div>
		)
	}
}
