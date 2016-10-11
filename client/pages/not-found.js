import React from "react";
import { Link } from 'react-router';

export default class NotFound extends React.Component {
	render() {
		return (
			<div>
				<div className="container">
					<h1>Not Found</h1>
					<p className="lead">Sorry the page you are looking for cannot be found!</p>
					<br />
					<p><Link to="/">Return Home</Link></p>
				</div>
			</div>
		);
	}
}
