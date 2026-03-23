// App.jsx
// Root component. Sets up React Router and renders the layout.
// Every page gets the Navbar on top and Footer on the bottom.

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WelcomePage from "./pages/WelcomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <div style={styles.layout}>
        <Navbar />
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  layout: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh", // Footer sticks to the bottom
  },
  main: {
    flex: 1, // Main content takes all available space
  },
};

export default App;
