const express = require("express");
const router = express.Router();
const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    addToList,
    getToList,
} = require("../controllers/product-controller");


// Get all products
router.get("/", getAllProducts);

// Get product by ID
router.get("/:id", getProductById);

// Create a new product
router.post("/", createProduct);

// interest list
router.post("/addToList", addToList);
router.get("/getList/:id", getToList);


// Update a product by ID
router.put("/:id", updateProduct);

// Delete a product by ID
router.delete("/:id", deleteProduct);


module.exports = router;