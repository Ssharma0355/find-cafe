const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  coffeeShop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CoffeeShop",
  },
});

module.exports = mongoose.model("Product", ProductSchema);
