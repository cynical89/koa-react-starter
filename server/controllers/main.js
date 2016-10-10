"use strict";

let user = null;

module.exports.verify = function* verify() {
	if (this.isAuthenticated()) {
		user = this.session.passport.user;
		return this.body = user;
	}
	return this.body = null;
};
