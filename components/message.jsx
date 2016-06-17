import React, {Component} from 'react';
import {render} from 'react-dom';

export default class extends Component {
	componentDidMount() {
		console.info(this.props.params.id);
	  	console.info(this.props.location.query);
	}
	render() {
		return (
			<h3>This is message {this.props.params.id}</h3>
		)
	}
}
