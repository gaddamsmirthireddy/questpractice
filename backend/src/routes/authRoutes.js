const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { protect, authorize } = require("../middleware/authMiddleware");

// Public routes
router.post("/register", authController.register);
router.post("/login", authController.login);

// Protected routes
router.get("/profile", protect, authController.getProfile);

// Example of role-based route
router.get("/admin-only", protect, authorize("Admin"), (req, res) => {
  res.json({ success: true, message: "Welcome, Admin!" });
});

module.exports = router;
