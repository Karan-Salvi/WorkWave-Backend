const express = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated.js");
const {
  logout,
  login,
  updateProfile,
  register,
  getAllUsers,
} = require("../controllers/user.controller.js");
const upload = require("../middlewares/multer.js");

const router = express.Router();

router.route("/register").post(upload.single("file"), register);
router.route("/login").post(login).get(getAllUsers);
router.route("/logout").get(logout);
router
  .route("/profile/update")
  .post(isAuthenticated(), upload.single("file"), updateProfile);

module.exports = router;
