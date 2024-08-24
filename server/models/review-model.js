const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    productid: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    userid: {
        type: String,
        required: true,
    },
    pname: {
        type: String,
        required: true,
    },
    pdescription: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
    pprice: {
        type: Number,
        required: true,
    },
    review_date: {
        type: Date,
        default: Date.now,
    },
    
});

const Review = mongoose.model("Review", ReviewSchema);

module.exports = { Review };
