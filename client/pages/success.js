import React from 'react';

const Success = React.createClass({
	render: function() {
		return (
			<div className="auth-page">
				<div className="container">
							<div>
								<p className="text-success">You have successfully logged in!</p>
						</div>
					</div>
				</div>
		);
	}
});

export default Success;
