"use strict";

module.exports.index = function* index() {
	this.body = yield this.render("index");
};
