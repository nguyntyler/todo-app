const express = require("express");
const router = express.Router();

const { todoController } = require("../controllers");
const { showEditForm, processEditForm } = require("../controllers/todo");

router
	.get("/create", todoController.create)
	.post("/create", todoController.processForm)
	.get("/:todoId/edit", showEditForm)
	.post("/:todoId/edit", processEditForm)
	.post("/:todoId/delete", todoController.del);

module.exports = router;
