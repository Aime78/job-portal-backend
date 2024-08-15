
const dbConnect = require("../connectionDb");
const Job = require("../model/job.model");

exports.getJobs = async (req, res) => {
    await dbConnect();
    const jobs = await Job.find({});
    res.send(jobs);
}