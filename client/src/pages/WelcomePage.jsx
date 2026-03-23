// pages/WelcomePage.jsx
// Calls GET /api/welcome on mount and displays the message.
// Demonstrates useEffect for fetching data on page load.

import { useState, useEffect } from "react";
import { fetchWelcome } from "../services/api";

function WelcomePage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWelcome()
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []); // Empty array = run once on mount

  if (loading) return <p style={styles.page}>Loading...</p>;

  return (
    <div style={styles.page}>
      <h1>{message}</h1>
      <p>This app is built with PostgreSQL, Express, React, and Node.js.</p>
    </div>
  );
}

const styles = {
  page: {
    padding: "2rem",
    textAlign: "center",
  },
};

export default WelcomePage;
