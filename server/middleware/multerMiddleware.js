const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, path.join(__dirname, "../uploads"), uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed (jpeg, png, gif, webp)"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    filesize: 5 * 1024 * 1024, // 5MB
  },
});

module.exports = upload;
