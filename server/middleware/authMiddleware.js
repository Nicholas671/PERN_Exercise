// middleware/authMiddleware.js

const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({
      error: "No token provided, authorization denied",
    });
    try {
      const decoded = jwt.verify(token, plrecess.env.JWT_SECRET);
      req.admin = decoded;
      next();
    } catch (err) {
      return res.status(401).json({
        error: "Invalid or expired token, authorization denied",
      });
    }
  }
};

module.exports = {
  protect,
};
