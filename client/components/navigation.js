import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

export default class Navigation extends React.Component {

	render() {
		return (
			<Navbar inverse>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">Koa-React-Starter</a>
					</Navbar.Brand>
				<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem eventKey={1} href="#">Sign In</NavItem>
						<NavItem eventKey={2} href="#">Sign Up</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}

}
