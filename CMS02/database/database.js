const mongoose = require("mongoose");

exports.connectDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Root:password%2A%23@cluster0.2nvsf5h.mongodb.net/?appName=Cluster0"
    );
    console.log("✅ Database connected successfully!");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};
