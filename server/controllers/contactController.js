// controllers/contactController.js
// Handles business logic for the Contact page.
// - POST: saves a new contact message to the database

const { ContactMessage } = require("../models");

// POST /api/contact — Submit a contact form
const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation before hitting Sequelize
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required (name, email, message)" });
    }

    // Sequelize's built-in validators (isEmail, notEmpty, len)
    // will also run during .create() and throw if they fail
    const newMessage = await ContactMessage.create({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    res.status(201).json({
      message: "Contact message received!",
      data: newMessage,
    });
  } catch (err) {
    // Catch Sequelize validation errors specifically
    if (err.name === "SequelizeValidationError") {
      const messages = err.errors.map((e) => e.message);
      return res.status(400).json({ error: messages });
    }

    console.error("Error submitting contact:", err);
    res.status(500).json({ error: "Failed to submit contact message" });
  }
};

module.exports = { submitContact };