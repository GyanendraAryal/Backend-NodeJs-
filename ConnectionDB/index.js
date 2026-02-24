import express from "express";
import connectDB from "./db.js";
import userRoutes from "./Routes/userRoutes.js";

const app = express();
const PORT = 8000;

// Connect DB (moved up)
connectDB();  // You forgot this!

// Essential middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Fixed: Use correct variable name
app.use("/api", userRoutes);  

// Home route
app.get("/", (req, res) => {
    console.log("I'm inside the HomePage");
    return res.send("I'm from Home");
});

// 404 handler
app.use("*", (req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

// Fixed listen
app.listen(PORT, () => {
    console.log(`Server is running ✅ on port: ${PORT}`);
}).on("error", (err) => {
    if (err.code === "EADDRINUSE") {
        console.error(`Port ${PORT} is already in use`);
    } else {
        console.error("Server failed to start:", err);
    }
});

console.log("Starting server...");
