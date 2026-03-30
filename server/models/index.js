const sequelize = require("../config/database");
const About = require("./About");
const ContactMessage = require("./ContactMessage");
const Admin = require("./Admin");

// Define associations if needed (e.g., if ContactMessage belongs to Admin)
// ContactMessage.belongsTo(Admin, { foreignKey: 'admin_id' });
// Admin.hasMany(ContactMessage, { foreignKey: 'admin_id' });

module.exports = {
  sequelize,
  About,
  ContactMessage,
  Admin
};

