// pages/ContactPage.jsx
// A contact form that POSTs JSON to /api/contact.
// Demonstrates controlled inputs and form submission without file upload.

import { useState } from "react";
import { submitContact } from "../services/api";

function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  // Generic handler — works for any input by matching the "name" attribute
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("All fields are required.");
      return;
    }

    try {
      const data = await submitContact(formData);
      setStatus(data.message); // "Contact message received!"
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } catch (err) {
      setStatus("Failed to send message. Please try again.");
      console.error(err);
    }
  };

  return (
    <div style={styles.page}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
          rows={5}
        />
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}

const styles = {
  page: { padding: "2rem" },
  form: { display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "400px" },
  input: { padding: "0.5rem", fontSize: "1rem" },
  textarea: { padding: "0.5rem", fontSize: "1rem" },
  button: { padding: "0.5rem 1rem", fontSize: "1rem", cursor: "pointer" },
};

export default ContactPage;