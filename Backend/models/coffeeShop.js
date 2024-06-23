const mongoose = require("mongoose");

const CoffeeShopSchema = new mongoose.Schema({
  name: String,
  distance: Number,
  review: String,
  menu: [
    {
      item: String,
      price: Number,
    },
  ],
  address: String,
  location: {
    lat: Number,
    lng: Number,
  },
  rating: Number,
});

module.exports = mongoose.model("CoffeeShop", CoffeeShopSchema);
