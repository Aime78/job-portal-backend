const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/register", authController.createUser);
router.patch("/user/:id", authController.updateUser);
router.get("/user/:id", authController.getUser);

module.exports = router;