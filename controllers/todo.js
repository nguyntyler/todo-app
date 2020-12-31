const { layout } = require("../utils");
const { Todo } = require("../models");

const create = (req, res) => {
	res.render("member/new", {
		...layout,
		locals: {
			title: "Create a new task!",
		},
	});
};

const processForm = async (req, res) => {
	const { task } = req.body;
	const { id } = req.session.user;

	const newTask = await Todo.create({
		task,
		isCompleted: false,
		userID: id,
	});
	console.log(newTask);
	res.redirect("/member/todo");
};

const showEditForm = async (req, res) => {
	const { todoId } = req.params;
	const todo = await Todo.findOne({
		where: {
			id: todoId,
		},
	});
	res.render("member/edit", {
		...layout,
		locals: {
			title: "Update Task",
			currentTask: todo.task,
		},
	});
};

const processEditForm = async (req, res) => {
	const { todoId } = req.params;
	const { task } = req.body;
	const todo = await Todo.update(
		{
			task,
		},
		{
			where: {
				id: todoId,
			},
		}
	);
	res.redirect("/member/todo");
};

const del = async (req, res) => {
	const { todoId } = req.params;
	const todo = await Todo.destroy({
		where: {
			id: todoId,
		},
	});
	res.redirect("/member/todo");
};

module.exports = {
	create,
	processForm,
	showEditForm,
	processEditForm,
	del,
};
