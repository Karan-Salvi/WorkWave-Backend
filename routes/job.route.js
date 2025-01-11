const express = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated.js");
const {
  getAdminJobs,
  getAllJobs,
  getJobById,
  postJob,
} = require("../controllers/job.controller.js");

const router = express.Router();

router.route("/post").post(isAuthenticated(), postJob);
router.route("/get").get(getAllJobs); //isAuthenticated(),
router.route("/getadminjobs").get(isAuthenticated(), getAdminJobs);
router.route("/get/:id").get(getJobById); //isAuthenticated(),

module.exports = router;
