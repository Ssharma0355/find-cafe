const express = require("express");
const CoffeeShop = require("./models/CoffeeShopRoutes");
const router = express.Router();

// Create a coffee shop
router.post("/", async (req, res) => {
  try {
    const newCoffeeShop = new CoffeeShop(req.body);
    const coffeeShop = await newCoffeeShop.save();
    res.status(201).json(coffeeShop);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all coffee shops
router.get("/", async (req, res) => {
  try {
    const coffeeShops = await CoffeeShop.find();
    res.json(coffeeShops);
    console.log("sachin")
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single coffee shop by ID
router.get("/:id", async (req, res) => {
  try {
    const coffeeShop = await CoffeeShop.findById(req.params.id);
    res.json(coffeeShop);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get top featured coffee shops
router.get("/featured/top", async (req, res) => {
  try {
    const topCoffeeShops = await CoffeeShop.find()
      .sort({ rating: -1 })
      .limit(5);
    res.json(topCoffeeShops);
    console.log("sachin");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
