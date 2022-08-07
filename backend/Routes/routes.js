const express = require("express");
const Login = require("../Controller/login");
const register = require("../Controller/register");
const Sample = require("../Controller/Sample");
const Auth = require("../Middleware/auth");
const app = express.Router();

app.post("/register", register);
app.post("/login", Login);
app.get("/secret", Auth, Sample)


module.exports = app;