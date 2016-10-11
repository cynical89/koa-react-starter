import React from "react";
import { Link } from "react-router";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { PageHeader } from "react-bootstrap";

const MainLayout = React.createClass({
	render: function() {
		return (
			<div className="app">
				<header className="primary-header"></header>
					<Navigation />
					<PageHeader>
						{ footerConfig.header }
					</PageHeader>
				<main>
					{this.props.children}
				</main>
				<Footer
					header={ footerConfig.header }
					footerText={ footerConfig.footerText }
				/>
			</div>
		);
	}
});

const footerConfig = {
	header: "Koa-React-Starter",
	footerText: "This site was built with react!"
}

export default MainLayout;
