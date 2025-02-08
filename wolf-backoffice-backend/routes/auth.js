const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const router = express.Router();

// Mock user database
const users = [
    { id: 1, username: "admin", password: bcrypt.hashSync("password", 10) }
];

// ✅ User Login Route (Generates JWT)
router.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "2h" });

    res.json({ token });
});

// ✅ User Registration Route (Optional)
router.post("/register", (req, res) => {
    const { username, password } = req.body;
    if (users.find(u => u.username === username)) {
        return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    users.push({ id: users.length + 1, username, password: hashedPassword });

    res.json({ message: "User registered successfully" });
});

module.exports = router;
