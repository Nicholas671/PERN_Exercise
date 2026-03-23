// routes/aboutRoutes.js
// Defines endpoints for /api/about
// The POST route runs Multer middleware BEFORE the controller.
// This is the flow: Route → Multer → Controller → Model → Postgres

const express = require("express");
const router = express.Router();
const upload = require("../middleware/multerMiddleware");
const { getAllAbout, uploadPhoto } = require("../controllers/aboutController");

// GET /api/about — Fetch all entries
router.get("/", getAllAbout);

// POST /api/about/photo — Upload photo + description
// upload.single("photo") tells Multer to expect one file in a field named "photo"
router.post("/photo", upload.single("photo"), uploadPhoto);

module.exports = router;