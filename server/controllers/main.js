"use strict";
const send = require("koa-send");
const serve = require("koa-static-folder");
const app = require("../../server.js").app;
const path = "../../public";

module.exports.index = function index() {
	app.use(serve(`${__dirname}/index.html`));
};
