const CoffeeShop = require("../models/coffeeShop");

exports.getCoffeeShops = async (req, res) => {
  try {
    const coffeeShops = await CoffeeShop.find();
    res.status(200).json(coffeeShops);
  } catch (error) {
    res.status(500).json({ message: "Error fetching coffee shops" });
  }
};

exports.getCoffeeShopById = async (req, res) => {
  try {
    const coffeeShop = await CoffeeShop.findById(req.params.id);
    if (!coffeeShop) {
      return res.status(404).json({ message: "Coffee shop not found" });
    }
    res.status(200).json(coffeeShop);
  } catch (error) {
    res.status(500).json({ message: "Error fetching coffee shop" });
  }
};
