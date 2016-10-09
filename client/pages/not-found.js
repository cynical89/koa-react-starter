import React from "react";

import Navigation from '../components/navigation';

import {  } from "react-bootstrap";

export default class NotFound extends React.Component {
	render() {
		return (
			<div>
				<Navigation />

				<div className="container">
					<h1>Not Found</h1>
				</div>
			</div>
		);
	}
}
