const express = require("express");
const app = express();

const jobRoutes = require("./routes/jobRoutes");

// Middleware
app.use(express.json());

// Routes
app.use("/api", jobRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

module.exports = app;