const express = require("express");
const router = express.Router();
const { addreviewcontroller ,getreviews} = require("../controllers/review-controller");



// Create a new product
router.post("/", addreviewcontroller);
router.get("/:id", getreviews);




module.exports = router;