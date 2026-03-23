// components/Footer.jsx
// Simple footer displayed at the bottom of every page.

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} PERN Exercise App</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "1rem",
    backgroundColor: "#1a1a2e",
    color: "#e0e0e0",
    marginTop: "auto",
  },
};

export default Footer;
