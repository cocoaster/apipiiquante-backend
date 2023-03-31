const express = require("express");
const router = express.Router();
const password = require("../middleware/password");

const usersControllers = require("../controllers/users");

router.post("/signup", password, usersControllers.signup);
router.post("/login", usersControllers.login);

module.exports = router;
