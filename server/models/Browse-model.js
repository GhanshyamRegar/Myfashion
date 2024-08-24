const mongoose = require("mongoose");

const Interestlistschema = new mongoose.Schema({
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
    productname: {
        type: String,
        required: true,
    },
})

const Interestlists = new mongoose.model("Interestlists",Interestlistschema)

module.exports = {Interestlists};