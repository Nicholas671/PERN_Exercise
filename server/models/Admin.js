// Admin.js
const { DataTypes } = require('sequelize');
const sequelize = require("../config/database");
const bcrypt = require('bcrypt');

const Admin = sequelize.define("Admin", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, 
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: "admins",
  timestamps: false,
  underscored: true,
  // Hooks run automatically at certain points in the model lifecycle.
  // beforeCreate runs right before a new row is inserted.
  hooks: {
    beforeCreate: async (admin) => {
      // Hash the password with 10 salt rounds so it is never stored in plain text.
      const salt = await bcrypt.genSalt(10);
      admin.password = await bcrypt.hash(admin.password, salt);
    },
  },
});

// Instance method — lets us write admin.validatePassword(plainText)
// instead of doing bcrypt.compare manually everywhere
Admin.prototype.validatePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = Admin;
