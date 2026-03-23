// components/ImagePreview.jsx
// Reusable component that displays an uploaded photo.
// The src points to Express's static /uploads route.

function ImagePreview({ photoPath, description }) {
  return (
    <div style={styles.card}>
      <img
        src={`http://localhost:5000/${photoPath}`}
        alt={description}
        style={styles.image}
      />
      <p style={styles.description}>{description}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
    maxWidth: "300px",
  },
  image: {
    width: "100%",
    display: "block",
  },
  description: {
    padding: "0.5rem 1rem",
    margin: 0,
  },
};

export default ImagePreview;
