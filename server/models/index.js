const sequelize = require("../config/database");
const About = require("./About");
const ContactMessage = require("./ContactMessage");

module.exports = {
  sequelize,
  About,
  ContactMessage,
};
