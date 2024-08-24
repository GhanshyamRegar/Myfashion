const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    },
    productname: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    paymentmethod: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default:"pending",
    },
    price: {
        type: Number,
        required: true,
    },
    order_date: {
        type: Date,
        default: Date.now,
    },
    
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = { Order };
