const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const coffeeShopRoutes = require("./routes/coffeeShopRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/coffee-shops", coffeeShopRoutes);
app.use("/api/products", productRoutes);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = app;
