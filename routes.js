"use strict";

const config = require("./config.json");

const app = require("./server.js").app;
const Router = require("koa-router");

const routes = new Router();

const main = require("./server/controllers/main.js");

routes.use(function* route(next) {
	this.type = "json";
	yield next;
});

routes.get("/", function* index() {
	this.type = "html";
	yield main.index.apply(this);
});

app.use(routes.routes());
