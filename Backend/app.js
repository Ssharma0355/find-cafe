const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const coffeeShopRoutes = require("./routes/coffeeShopRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Enable CORS for all origins
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
connectDB()
  .then(() => console.log("MongoDB connection established"))
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Exit process with failure
  });

// Define routes for the API
app.use("/api/coffee-shops", coffeeShopRoutes);
app.use("/api/products", productRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error("Error: ", err.message); // Log error details
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = app;
