require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Import Routes
const authRoutes = require("./routes/auth");
const verifyToken = require("./middleware/authMiddleware");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// ✅ Authentication Routes
app.use("/api/auth", authRoutes);

// ✅ Protected Route Example
app.get("/api/protected", verifyToken, (req, res) => {
    res.json({ message: `Welcome, ${req.user.username}! This is a protected route.` });
});

// ✅ Appointment Routes (Mock Example)
app.get("/api/appointments", verifyToken, (req, res) => {
    res.json([
        { title: "Doctor Visit", date: "2024-06-30" },
        { title: "Business Meeting", date: "2024-07-05" }
    ]);
});

// ✅ Customer Routes (Mock Example)
app.get("/api/customers", verifyToken, (req, res) => {
    res.json([
        { id: 1, first_name: "John", last_name: "Doe", email: "john@example.com" },
        { id: 2, first_name: "Jane", last_name: "Smith", email: "jane@example.com" }
    ]);
});

// ✅ Start Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
