import { express, Router } from "express";  // Note: 'express' import unused, can remove
import User from "../Models/User";  // Remove the unused router import

const router = Router();

// GET Request
router.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// POST Request
router.post("/users", async (req, res) => {
    try {
        const { name, age, email } = req.body;
        const newUser = await User.create({ name, age, email });  // Direct create + await
        res.status(201).json({
            success: true,
            message: "User created",
            data: newUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

export default router;
