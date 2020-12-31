const { layout } = require("../utils");
const { Todo } = require("../models");

const home = (req, res) => {
	const { username } = req.session.user;
	res.render("member/home", {
		...layout,
		locals: {
			title: "Welcome!",
			username,
		},
	});
};

const requireLogin = (req, res, next) => {
	if (req.session.user) {
		next();
	} else {
		res.redirect("/user/login");
	}
};

const list = async (req, res) => {
	const { id } = req.session.user;
	if (id) {
		const tasks = await Todo.findAll({
			where: {
				userID: id,
			},
		});
		res.render("member/list", {
			...layout,
			locals: {
				title: "Your list of To Dos!",
				tasks,
			},
		});
	} else {
		res.redirect("/");
	}
};

const logout = (req, res) => {
	req.session.destroy(() => {
		res.redirect("/");
	});
};

module.exports = {
	home,
	requireLogin,
	list,
	logout,
};
