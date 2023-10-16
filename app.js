const express = require("express");

const connectDB = require("./src/config/db");

const api = require("./src/api");
const globalMiddleware = require("./src/middlewares/globalMiddleware");

connectDB();
const app = express();

globalMiddleware(app);

app.use("/api", api);

module.exports = app;
    