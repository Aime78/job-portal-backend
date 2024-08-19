const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");

router.get("/jobs", jobController.getJobs);
router.patch("/jobs/:id", jobController.updateJob);
router.post("/jobs", jobController.createJob);
router.delete("/jobs", jobController.deleteJob);

module.exports = router;
