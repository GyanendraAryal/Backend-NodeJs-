import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/*
  Mock user (for practice only)
  In real apps this comes from database
*/
const user = {
  email: "test@test.com",
  password: bcrypt.hashSync("123456", 10)
};


/*
  LOGIN ROUTE
  POST /api/auth/login
*/
router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required"
      });
    }

    // Check email
    if (email !== user.email) {
      return res.status(401).json({
        message: "Invalid email"
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid password"
      });
    }

    // Generate JWT
    const token = jwt.sign(
      { email: user.email },
      process.env.JWT_SECRET || "mysecretkey",
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful ✅",
      token
    });

  } catch (error) {

    console.error("Login error:", error);

    res.status(500).json({
      message: "Server error"
    });

  }

});


/*
  PROTECTED ROUTE
  GET /api/auth/profile
*/
router.get("/profile", protect, (req, res) => {

  res.json({
    message: "Protected route accessed ✅",
    user: req.user
  });

});


export default router;