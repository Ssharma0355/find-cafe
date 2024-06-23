const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // Optional, but doesn't harm to include.
      useUnifiedTopology: true, // Optional, but doesn't harm to include.
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process with a failure code
  }
};

module.exports = connectDB;
