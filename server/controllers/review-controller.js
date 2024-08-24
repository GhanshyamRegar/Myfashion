const { Review } = require('../models/review-model');

// Place an order
const addreviewcontroller = async (req, res) => {
    try {
        const reviewdata = req.body;
        console.log(reviewdata)
        const newreview = new Review(reviewdata);
        await newreview.save();

        res.status(201).json({ message: "review successfully", userreview: newreview });
    } catch (error) {
        console.error("Error  review:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};



const getreviews = async (req, res) => {
    try {
        const productId = req.params.id;
        const review = await Review.find({productid:productId});

        if (!review) {
            return res.status(404).json({ message: "review not found" });
        }

        res.status(200).json(review);
    } catch (error) {
        console.error("Error fetching review:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};


module.exports = {addreviewcontroller,getreviews}