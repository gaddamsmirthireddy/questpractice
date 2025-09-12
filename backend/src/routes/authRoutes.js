const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

// Public routes
router.post("/register", authController.register);
router.post("/login", authController.login);

// Protected routes
router.get("/profile", authMiddleware.authenticate, authController.getProfile);

// Example of role-based route
router.get("/admin-only", 
    authMiddleware.authenticate, 
    authMiddleware.authorize(["Admin"]), 
    (req, res) => {
        res.json({ success: true, message: "Welcome, Admin!" });
});

module.exports = router;
