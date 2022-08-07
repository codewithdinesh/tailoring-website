const express = require("express");
const register = require("../Controller/register");
const app = express.Router();

app.post("/register", register);


module.exports = app;