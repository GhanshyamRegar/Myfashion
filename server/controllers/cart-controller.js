const { Cart } = require('../models/Cart-model');

// Place an order
const createusercart = async (req, res) => {
    try {

        const cartdetails = req.body
        console.log(cartdetails)
        
        const exist = await Cart.find({product_id:cartdetails.product_id})
        console.log(exist)

        if(exist.length ===0)
        {
        const newcart = new Cart(cartdetails);

        await newcart.save();
            res.status(201).json({ message: "Product Added to cart", cart: newcart });
        }
        else
        {
            return res.status(400).json({ msg: "cart already exists" });
        }    
    } catch (error) {
        console.error("Error adding to cart:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
const getusercart = async (req, res) => {
    try {
        const userId = req.params.id;
        const cart = await Cart.find({userId:userId});

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        res.status(200).json(cart);
    } catch (error) {
        console.error("Error retrieving Cart:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


const removecart = async (req, res) => {
    try {
        const userId = req.params.id;
        const cart = await Cart.findByIdAndDelete(userId);

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        res.status(200).json(cart);
    } catch (error) {
        console.error("Error retrieving Cart:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};



module.exports = {createusercart,getusercart,removecart}