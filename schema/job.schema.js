const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  type: String,
  company: String,
  salary: String,
  jobType: String,
  experience: String,
});

module.exports = jobSchema;
