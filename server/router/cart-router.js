const express = require("express");
const router = express.Router();
const { createusercart,getusercart,removecart } = require("../controllers/cart-controller");


// Get all cart of userid
router.post("/", createusercart);
router.get("/:id", getusercart);
router.delete("/:id", removecart);





module.exports = router;