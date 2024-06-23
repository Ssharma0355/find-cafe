const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Ensure this path is correct and points to the actual coffeeShops.js file
const coffeeShopRoutes = require("./routes/coffeeShops");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/coffeeShops", coffeeShopRoutes);

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server running on port ${port}`));
