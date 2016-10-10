import React from 'react';
import { browserHistory } from "react-router";

const Home = React.createClass({
	getInitialState: function() {
    return {
      username: null,
			displayname: null,
			authenticated: false
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get("auth/verify", function (result) {
			const user = result;
			console.log(user);
			if (user !== null && user !== undefined) {
      this.setState({
        username: user.username,
				displayname: user.displayName,
				authenticated: true
      });
		}
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
		let loggedIn;
		if(this.state.authenticated) {
			browserHistory.push("/success")
		} else {
			loggedIn = <p className="lead">This is a simple and sweet react and koa starter!</p>
		}
    return (
      <div>
				{ loggedIn }
		</div>
    );
	}
});

export default Home;
