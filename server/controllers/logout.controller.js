const logout = (req, res) => {
  res.clearCookie("userRegistered");
  return res.json({
    status: "success",
    error: "logged out",
  });
};

module.exports = logout;
