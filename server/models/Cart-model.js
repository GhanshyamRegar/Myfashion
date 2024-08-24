const mongoose = require("mongoose");

const Cartschema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    productname: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
})

const Cart = new mongoose.model("Cart",Cartschema)

module.exports = {Cart};