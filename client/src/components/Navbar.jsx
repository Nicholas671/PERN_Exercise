// components/Navbar.jsx
// Shared navigation bar displayed on every page.
// Uses React Router's Link for client-side navigation (no page reload).

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>PERN Exercise</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>
          Welcome
        </Link>
        <Link to="/about" style={styles.link}>
          About
        </Link>
        <Link to="/contact" style={styles.link}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#1a1a2e",
    color: "#e0e0e0",
  },
  logo: {
    margin: 0,
    fontSize: "1.4rem",
  },
  links: {
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    color: "#e0e0e0",
    textDecoration: "none",
    fontSize: "1rem",
  },
};

export default Navbar;
