"use strict";

const config = require("./config.json");

const app = require("./server.js").app;
const passport = require("./server.js").passport;
const send = require("koa-send");
const Router = require("koa-router");
const serve = require("koa-static");

const main = require("./server/controllers/main");

const routes = new Router();

app.use(serve("./public"));

// Routes for passport
routes.get("/auth/github",
	passport.authenticate("github")
);

routes.get("/auth/github/callback",
	passport.authenticate("github", {
		successRedirect: "/",
		failureRedirect: "/auth"
	})
);

// all other routes
// routes.get("/auth/verify", main.verify);

// Final route to catch all pages not found.
routes.get("*", function* all() {
	this.body = yield send(this, `${__dirname}/index.html`);
});

app.use(routes.routes());

// app.use(function* index() {
// 	yield send(this, `${__dirname}/public/index.html`);
// });
