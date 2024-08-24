const { Order } = require('../models/order-model');

// Place an order
const placeorder = async (req, res) => {
    try {
        const orderData = req.body;
        const newOrder = new Order(orderData);
        await newOrder.save();

        res.status(201).json({ message: "Order placed successfully", order: newOrder });
    } catch (error) {
        console.error("Error placing order:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Get order by ID
const getOrderById = async (req, res) => {
    try {
        const userId = req.params.id;
        const order = await Order.find({user_id:userId});

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.status(200).json(order);
    } catch (error) {
        console.error("Error retrieving order:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
const getorder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const order = await Order.find();

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.status(200).json(order);
    } catch (error) {
        console.error("Error retrieving order:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
const getsuccessOrderByuserId = async (req, res) => {
    try {
        const userId = req.params.id;
        const order = await Order.find({user_id:userId,status:"success"});

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.status(200).json(order);
    } catch (error) {
        console.error("Error retrieving order:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
const getpendingOrderByuserId = async (req, res) => {
    try {
        const userId = req.params.id;
        const order = await Order.find({user_id:userId,status:"pending"});

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.status(200).json(order);
    } catch (error) {
        console.error("Error retrieving order:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
const getcancelrderByuserId = async (req, res) => {
    try {
        const userId = req.params.id;
        const order = await Order.find({user_id:userId,status:"cancel"});


        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.status(200).json(order);
    } catch (error) {
        console.error("Error retrieving order:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};



const updateorder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const updatedData = req.body;
        
        // Validate the updatedData here if necessary
        
        const updateorder = await Order.findByIdAndUpdate(orderId, updatedData, { new: true });
        console.log(updateorder)

        if (!updateorder) {
            return res.status(404).json({ message: "order not found" });
        }

        res.status(200).json({ message: "order updated successfully", order: updateorder });
    } catch (error) {
        console.error("Error updating order:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};


module.exports = {getcancelrderByuserId, placeorder, getOrderById,getorder,getsuccessOrderByuserId,updateorder,getpendingOrderByuserId };
