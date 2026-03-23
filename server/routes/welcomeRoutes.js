// routes/welcomeRoutes.js
// Defines endpoints for /api/welcome
// Routes stay thin — they only connect URLs to controllers.

const express = require("express");
const router = express.Router();
const { getWelcome } = require("../controllers/welcomeController");

// GET /api/welcome
router.get("/", getWelcome);

module.exports = router;
