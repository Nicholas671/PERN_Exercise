const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();

const welcomeRoutes = require("./routes/welcomeRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/welcome", welcomeRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;

sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("Failer to sync database", err));
