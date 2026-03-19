const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello CI");
});

// NEW ROUTE (for updated backend)
app.get("/api", (req, res) => {
  res.json({ message: "Updated Backend" });
});

module.exports = app;