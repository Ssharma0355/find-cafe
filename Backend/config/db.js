// app.js (or main file where you initialize the application)

const express = require("express");
const connectDB = require("./config/db"); // Adjust the path based on your directory structure

const app = express();

// Connect to MongoDB
connectDB();

// Other application setup and middleware

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
