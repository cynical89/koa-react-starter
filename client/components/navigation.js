import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav} from "react-bootstrap";

export default class Navigation extends React.Component {

	render() {
		return (
			-			<Navbar inverse>
			 -				<Navbar.Header>
			 -					<Navbar.Brand>
			 -						<Link to="/">Koa-React-Starter</Link>
			 -					</Navbar.Brand>
			 -				<Navbar.Toggle />
			 -				</Navbar.Header>
			 -				<Navbar.Collapse>
			 -					<Nav pullRight>
			 -						<NavItem to="/auth">Sign In</NavItem>
			 -						<NavItem to="/">Sign In</NavItem>
			 -					</Nav>
			 -				</Navbar.Collapse>
			 -			</Navbar>
		);
	}

}
