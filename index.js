const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Backend Working" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;