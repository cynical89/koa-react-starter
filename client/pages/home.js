import React from "react";

import Navigation from '../components/navigation';
import Footer from '../components/footer';

import {  } from "react-bootstrap";

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<Navigation />

				<div className="body">
					<header className="main-header" role="banner">
					</header>

					<div className="container">
						<center>
						</center>
					</div>
				</div>

				<Footer
					header={ footerConfig.header }
					description={ footerConfig.description }
				/>
			</div>
		);
	}
}

const footerConfig = {
	header: "Koa-React-Starter",
	description: "An awesome, simple, koa and react starter!"
}
