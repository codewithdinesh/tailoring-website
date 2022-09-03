const express = require("express");

const Login = require("../Controller/login");
const register = require("../Controller/register");
const Sample = require("../Controller/Sample");
const Contact = require("../Controller/contact");

// Auth 
const Auth = require("../Middleware/auth");
const authentication = require("../Controller/authentication");

// Product related imports
const AddProduct = require("../Controller/product/add_product");
const ShowProducts = require("../Controller/product/show_products");
const Product = require("../Controller/product/Product");
const Order = require("../Controller/product/Order");
const Profile = require("../Controller/user/profile");
const app = express.Router();

// auth and profile
app.post("/register", register);
app.post("/login", Login);
app.get("/profile", Auth, Profile);

// Contact
app.post("/contact", Contact)

// product
app.post("/product/add", Auth, AddProduct);
app.get("/products", ShowProducts);
app.get("/product/:ProductId", Product);

// order
app.post("/product/order/:ProductId", Auth, Order);

app.get("/secret", Auth, Sample);

// auth 
app.post("/auth", Auth, authentication);


module.exports = app;