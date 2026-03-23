// controllers/aboutController.js
// Handles business logic for the About page.
// - GET: returns all about entries
// - POST: creates a new entry with a photo and description

const { About } = require("../models");

// GET /api/about — Fetch all about entries
const getAllAbout = async (req, res) => {
  try {
    const entries = await About.findAll({
      order: [["created_at", "DESC"]], // Newest first
    });
    res.json(entries);
  } catch (err) {
    console.error("Error fetching about entries:", err);
    res.status(500).json({ error: "Failed to fetch about entries" });
  }
};

// POST /api/about/photo — Upload a photo with a description
const uploadPhoto = async (req, res) => {
  try {
    // Multer middleware already ran before this controller.
    // If a file was uploaded, it's on req.file.
    if (!req.file) {
      return res.status(400).json({ error: "No photo file provided" });
    }

    // req.file.path gives us the full path, but we only need
    // the relative path for serving via the /uploads static route
    const photoPath = req.file.filename; // e.g. "1711234567890-myphoto.jpg"
    const { description } = req.body;

    if (!description || description.trim() === "") {
      return res.status(400).json({ error: "Description is required" });
    }

    // Create a new row in the "abouts" table
    const newEntry = await About.create({
      photoPath: `uploads/${photoPath}`,
      description: description.trim(),
    });

    res.status(201).json(newEntry);
  } catch (err) {
    console.error("Error uploading photo:", err);
    res.status(500).json({ error: "Failed to upload photo" });
  }
};

module.exports = { getAllAbout, uploadPhoto };
