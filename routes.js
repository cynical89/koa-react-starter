"use strict";

const config = require("./config.json");

const app = require("./server.js").app;
const Router = require("koa-router");

const routes = new Router();

const main = require("./server/controllers/main.js");

routes.get("/", main.index);

app.use(routes.middleware());
