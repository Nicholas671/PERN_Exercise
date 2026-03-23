const getWelcome = (req, res) => {
  res.json({
    message: "Welcome to the PERN Exercise app!",
  });
};

module.exports = { getWelcome };
