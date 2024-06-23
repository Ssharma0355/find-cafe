const Product = require("../models/product");

exports.getProductsByCoffeeShop = async (req, res) => {
  try {
    const products = await Product.find({
      coffeeShop: req.params.coffeeShopId,
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};
