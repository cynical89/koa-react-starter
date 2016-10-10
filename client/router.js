import React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

// Layouts
import MainLayout from "./components/main-layout";
import InnerLayout from "./components/inner-layout";

// Pages
import Home from "./pages/index";
import Auth from "./pages/auth";

export default (
	<Router history={browserHistory}>
		<Route component={MainLayout}>
			<Route path="/" component={Home} />

			<Route path="/auth">
				<Route component={InnerLayout}>
					<IndexRoute component={Auth} />
				</Route>
			</Route>

		</Route>
	</Router>
);
