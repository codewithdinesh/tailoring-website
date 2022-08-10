const mongoose = require("mongoose");

const order = new mongoose.Schema({

    productId: {
        type: mongoose.Types.ObjectId,
        required: [true, "Product ID required"]
    },

    orderedOn: {
        type: String,
        default: new Date().toLocaleString()
    },

    OrderPrice: {
        type: String,
        required: true
    },
    userID: {
        type: mongoose.Types.ObjectId,
        required: [true, "user ID required"]
    },

    description: {
        type: String,
    },

    location: {
        type: String,
        required: true
    },

    Customization: {
        fabrictype: {
            type: String
        },
        size: {
            type: String,
            required: true
        },
        title: {
            type: String,

        },
        subtitle: {
            type: String,

        }
    }

});

module.exports = mongoose.model("order", order);