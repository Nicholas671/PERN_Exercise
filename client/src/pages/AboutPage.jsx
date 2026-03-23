// pages/AboutPage.jsx
// Two responsibilities:
// 1. Upload a photo + description via POST /api/about/photo
// 2. Display all existing entries via GET /api/about
// Demonstrates FormData, file inputs, and re-fetching after a mutation.

import { useState, useEffect } from "react";
import { fetchAboutEntries, uploadPhoto } from "../services/api";
import ImagePreview from "../components/ImagePreview";

function AboutPage() {
  const [entries, setEntries] = useState([]);
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  // Fetch all entries on mount
  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = async () => {
    try {
      const data = await fetchAboutEntries();
      setEntries(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setStatus("");

    if (!file || !description.trim()) {
      setStatus("Please select a photo and enter a description.");
      return;
    }

    // Build FormData — this is what Multer expects on the backend
    const formData = new FormData();
    formData.append("photo", file); // Must match upload.single("photo") in the route
    formData.append("description", description);

    try {
      await uploadPhoto(formData);
      setStatus("Photo uploaded successfully!");
      setDescription(""); // Clear the form
      setFile(null);
      loadEntries(); // Re-fetch to show the new entry
    } catch (err) {
      setStatus("Upload failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <div style={styles.page}>
      <h1>About Page</h1>

      {/* Upload Form */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <input
          type="text"
          placeholder="Enter a description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Upload Photo
        </button>
      </form>

      {status && <p>{status}</p>}

      {/* Display Entries */}
      <h2>Uploaded Photos</h2>
      <div style={styles.grid}>
        {entries.map((entry) => (
          <ImagePreview
            key={entry.id}
            photoPath={entry.photoPath}
            description={entry.description}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: { padding: "2rem" },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    maxWidth: "400px",
    marginBottom: "2rem",
  },
  input: { padding: "0.5rem", fontSize: "1rem" },
  button: { padding: "0.5rem 1rem", fontSize: "1rem", cursor: "pointer" },
  grid: { display: "flex", flexWrap: "wrap", gap: "1rem" },
};

export default AboutPage;
