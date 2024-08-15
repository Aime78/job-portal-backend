const mongoose = require("mongoose");
const jobSchema = require("../schema/job.schema");

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
