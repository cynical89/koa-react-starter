import React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

// Layouts
import MainLayout from "./components/main-layout";
import InnerLayout from "./components/inner-layout";

// Pages
import NotFound from "./pages/not-found";
import Home from "./pages/index";
import Auth from "./pages/auth";
import Success from "./pages/success";

export default (
	<Router history={browserHistory}>
		<Route component={MainLayout}>
			<Route path="/" component={Home} />
			<Route path="/auth" component={Auth} />
			<Route path="/success" component={Success} />
		</Route>
	</Router>
);
