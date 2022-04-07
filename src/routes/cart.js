const express = require('express');
const { addItemsToCart } = require('../controller/cart');
const { requireSignin, userMiddleware } = require('../middleWare');
const router = express.Router();

router.post("/user/cart/addtocart", requireSignin , userMiddleware , addItemsToCart);

module.exports = router;
