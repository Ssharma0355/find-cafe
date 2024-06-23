const express = require("express");
const router = express.Router();
const { getProductsByCoffeeShop } = require("../controllers/productController");

router.get("/:coffeeShopId/products", getProductsByCoffeeShop);

module.exports = router;
