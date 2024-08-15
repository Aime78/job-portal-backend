const express = require("express");
const app = express();

const jobRoutes = require("./routes/jobRoutes");

// Middleware
app.use(express.json());

// Routes
app.use("/api", jobRoutes);

module.exports = app;