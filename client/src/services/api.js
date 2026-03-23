// services/api.js
// All HTTP requests to the Express backend go through here.
// This keeps fetch logic out of your components.

const API_BASE = "/api"; // Vite proxy forwards this to localhost:5000

// GET /api/welcome
export const fetchWelcome = async () => {
  const response = await fetch(`${API_BASE}/welcome`);
  if (!response.ok) throw new Error("Failed to fetch welcome");
  return response.json();
};

// GET /api/about
export const fetchAboutEntries = async () => {
  const response = await fetch(`${API_BASE}/about`);
  if (!response.ok) throw new Error("Failed to fetch about entries");
  return response.json();
};

// POST /api/about/photo (FormData with file + description)
export const uploadPhoto = async (formData) => {
  const response = await fetch(`${API_BASE}/about/photo`, {
    method: "POST",
    body: formData, // Don't set Content-Type — browser sets it with boundary for FormData
  });
  if (!response.ok) throw new Error("Failed to upload photo");
  return response.json();
};

// POST /api/contact (JSON body)
export const submitContact = async (contactData) => {
  const response = await fetch(`${API_BASE}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contactData),
  });
  if (!response.ok) throw new Error("Failed to submit contact form");
  return response.json();
};