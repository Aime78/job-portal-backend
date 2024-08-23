const dbConnect = require("../connectionDB.js");
const Job = require("../model/job.model.js");

exports.getJobs = async (req, res) => {
  await dbConnect();
  const jobs = await Job.find({});
  res.send(jobs);
};

exports.updateJob = async (req, res) => {
  await dbConnect();
  const job = await Job.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  });
  res.send(job);
};

exports.createJob = async (req, res) => {
  await dbConnect();
  const job = await Job.create(req.body);

  res.send(job);
};

exports.deleteJob = async (req, res) => {
  await dbConnect();
  const job = await Job.deleteMany({});
  res.send(job);
};
