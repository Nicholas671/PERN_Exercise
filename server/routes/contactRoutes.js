// routes/contactRoutes.js
// Defines endpoints for /api/contact
// No file upload here, so no Multer middleware needed.

const express = require("express");
const router = express.Router();
const { submitContact } = require("../controllers/contactController");

// POST /api/contact
router.post("/", submitContact);

module.exports = router;
