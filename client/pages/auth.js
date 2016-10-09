import React from 'react';

const Auth = React.createClass({
	render: function() {
		return (
			<div className="auth-page">
				<div className="container">
							<div>
								<a className="btn btn-block btn-social btn-lg btn-github">
									<span className="fa fa-github"></span>
										Sign in with Github
								</a>
						</div>
					</div>
				</div>
		);
	}
});

export default Auth;
