const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "title required"],
    },
    subtitle: {
        type: String,
        required: [true, "subtitle required"],
    },
    description: {
        type: String,
        required: [true, "description required"],
    },
    price: {
        type: Number,
        required: [true, "Price required"],
    },
    mrp: {
        type: Number,
        required: [true, "Mrp required"],
    },
    rating: {
        type: Number,
        required: [true, "Rating required"],
    },
    ratingCount: {
        type: Number,
        required: [true, "Rating Count required"],
    }
});

const Product = mongoose.model("product", ProductSchema);

module.exports = User;