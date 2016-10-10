"use strict";

const config = require("./config.json");

const app = require("./server.js").app;
const passport = require("./server.js").passport;
const send = require("koa-send");
const Router = require("koa-router");
const serve = require("koa-static");

const routes = new Router();

app.use(serve("./public"));

routes.get("/", function* all() {
	this.body = yield send(this, `${__dirname}/index.html`);
});

routes.get("/auth/github",
	passport.authenticate("github")
);

routes.get("/auth/github/callback",
	passport.authenticate("github", {
		successRedirect: "/",
		failureRedirect: "/auth"
	})
);

app.use(routes.routes());

app.use(function* index() {
	yield send(this, `${__dirname}/public/index.html`);
});
