const express = require("express");
const cors = require("cors");
const app = express();

const jobRoutes = require("./routes/jobRoutes");
const authRoutes = require("./routes/authRoutes");

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", jobRoutes);
app.use("/api", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
