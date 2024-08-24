const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    subcategory: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    topFabric: {
        type: String,
        required: true,
    },
    bottomFabric: {
        type: String,
        required: true,
    },
    sleeveLength: {
        type: String,
        required: true,
    },
    topPattern: {
        type: String,
        required: true,
    },
    bottomPattern: {
        type: String,
        required: true,
    },
    netQuantity: {
        type: String,
        required: true,
    },
    addOns: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    colors: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    countryOfOrigin: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model("Products", ProductSchema);

module.exports = { Product };
