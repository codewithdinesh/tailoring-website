require("dotenv").config();
const router = require("./Routes/routes");

const bodyParser = require("body-parser");

const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

// middeleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// Router
app.use("/", router);


app.listen(PORT, () => {
    console.log("Server started on Port:", PORT)
});
