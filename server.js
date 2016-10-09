"use strict";

// configuration file
const config = require("./config.json");

// koa files
const koa = require("koa");
const bodyParser = require("koa-bodyparser");
const session = require("koa-generic-session");
const serve = require("koa-static");

const app = koa();

exports.app = app;

// trust proxy
app.proxy = true;

// sessions
app.keys = [config.site.secret];
app.use(session());

// body parser
app.use(bodyParser());

app.use(serve("./public"));

app.use(function* error(next) {
	try {
		yield next;
	} catch (err) {
		this.status = err.status || 500;
		this.body = err.message;
		this.app.emit("error", err, this);
	}
});

require("./routes");

console.log(`${config.site.name} is now listening on port ${config.site.port}`);
app.listen(config.site.port);

process.on("SIGINT", function exit() {
	process.exit();
});
