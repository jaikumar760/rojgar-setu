const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const userModel = require("./models/userModel");
const Booking = require("./models/Booking");
const verifyToken = require("./middleware/authMiddleware");

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.log("❌ MongoDB error:", err));


// ================= AUTH APIs =================

// LOGIN (JWT generate)
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
    const user = await userModel.findOne({ email });

    if (!user) {
        return res.json({ success: false, message: "User not found" });
    }

    if (user.password !== password) {
        return res.json({ success: false, message: "Incorrect password" });
    }

    const jwt = require("jsonwebtoken");

    const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    res.json({
        success: true,
        message: "Login successful",
        token,
    });
    } catch (err) {
    res.status(500).json(err);
    }
});

// REGISTER
app.post("/register", async (req, res) => {
    try {
    const user = await userModel.create(req.body);
    res.status(201).json(user);
    } catch (err) {
    res.status(500).json(err);
    }
});


// ================= BOOKING API (PROTECTED) =================

app.post("/api/book-service", verifyToken, async (req, res) => {
    try {
    const booking = await Booking.create({
        ...req.body,
      userId: req.userId, // logged-in user link
    });

    res.status(201).json({
        success: true,
        message: "Booking saved successfully",
        booking,
    });
    } catch (error) {
    res.status(500).json({
        success: false,
        message: error.message,
    });
    }
});


// ================= TEST ROUTE =================
app.get("/api/profile", verifyToken, async (req, res) => {
    try {
    const user = await userModel.findById(req.userId).select("-password");
    res.json(user);
    } catch (err) {
    res.status(500).json(err);
    }
});


// SERVER START
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
