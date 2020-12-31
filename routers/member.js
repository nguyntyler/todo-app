const express = require("express");
const router = express.Router();

const { memberController } = require("../controllers");
router.use(memberController.requireLogin);

router.get("/", memberController.home);

router.get("/todo", memberController.list);

router.get("/logout", memberController.logout);

module.exports = router;
