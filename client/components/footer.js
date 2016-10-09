import React from 'react';
import { Col } from "react-bootstrap";

const styles = {
	justifyCenter: {
		justifyContent: 'center'
	}
};

export default class Footer extends React.Component {
	render() {
		return (
						<Col md={7}>
							<h2>{ this.props.header }</h2>
							<p>{ this.props.description }</p>
							</Col>
		);
	}
}

Footer.propTypes = {
	header: React.PropTypes.string,
	description: React.PropTypes.string
};
