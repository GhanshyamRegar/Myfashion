const fs = require('fs');
const path = require('path');
const { Product } = require("../models/product-model");
const { Interestlists } = require("../models/Browse-model");

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

// Get product by ID
const getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(product);
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

// Create a new product
const createProduct = async (req, res) => {
    try {
        const productData = req.body;
        console.log(req.body);
        // Validate the productData here if necessary

        const newProduct = new Product(productData);
        await newProduct.save();

        res.status(201).json({ message: "Product created successfully" , product: newProduct});
        // res.json({ message: "Product created successfully" });

    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

// Update a product by ID
const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const updatedData = req.body;

        // Validate the updatedData here if necessary

        const updatedProduct = await Product.findByIdAndUpdate(productId, updatedData, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(productId);
        console.log("runned 8 8 8 8 ")
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        
        if (deletedProduct.images && deletedProduct.images.length > 0) {
            deletedProduct.images.forEach(imagePath => {
                const fullImagePath = path.join(__dirname, '../public/images', imagePath);
                
                // Delete each image file
                fs.unlink(fullImagePath, (err) => {
                    if (err) {
                        console.error(`Error deleting image ${imagePath}:`, err);
                        // Continue to attempt deleting other images
                    }
                });
            });
        }

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

// add a user interest list
const addToList = async (req, res) => {
    try {
        const listdata = req.body;
        console.log(req.body);
        // Validate the productData here if necessary

        const exist = await Interestlists.find(listdata)

        if(exist.length===0)
        {
            const newProduct = new Interestlists(listdata);
            await newProduct.save();
            res.status(201).json({ message: "interest created successfully" , product: newProduct});
            
        }
        else{
            
            res.status(404).json({ message: "interest not created successfully"});
        }

    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};


const getToList = async (req, res) => {
    try {
        // Validate the productData here if necessary

        const id = req.params.id
        const fetch = await Interestlists.find({user_id:id})

        if(fetch)
        {
            res.status(201).json(fetch);
        }
        else{
            
            res.status(404).json({ message: "list not fetched successfully"});
        }

    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ message: "Internal server error (getlist)", error: error.message });
    }
};


module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    addToList,
    getToList
};
