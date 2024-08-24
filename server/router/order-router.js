// order-router.js
const express = require('express');
const { placeorder, getOrderById,getorder,getsuccessOrderByuserId,getcancelrderByuserId ,updateorder,getpendingOrderByuserId} = require('../controllers/order-controller');

const router = express.Router();

// Route for placing an order
router.post('/placeorder', placeorder);
router.get('/', getorder);

// Route for getting an order by ID
router.get('/order/:id', getOrderById);
router.put('/order/:id', updateorder);
router.get('/order/success/:id', getsuccessOrderByuserId);  //by user id
router.get('/order/pending/:id', getpendingOrderByuserId);  //by user id
router.get('/order/cancel/:id', getcancelrderByuserId);  //by user id

module.exports = router;
