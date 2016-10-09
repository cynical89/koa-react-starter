import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory } from 'react-router';

// Pages
import NotFound from "./pages/not-found";
import Home from "./pages/home";

render((
	<Router history={ browserHistory }>
		<Route path="/" component={ Home } />
	</Router>
), document.getElementById("app"));
