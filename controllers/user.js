const bcrypt = require("bcryptjs");
const { layout } = require("../utils");
const { User } = require("../models");

const signUp = (req, res) => {
	res.render("users/form", {
		locals: {
			title: "Sign Up!",
		},
		...layout,
	});
};

const processSignUp = async (req, res) => {
	const { username, password } = req.body;
	// username = username.trim().toLowerCase();

	const salt = bcrypt.genSaltSync(10);
	const hash = bcrypt.hashSync(password, salt);

	try {
		const newUser = await User.create({
			username,
			hash,
		});
		res.redirect(`${req.baseUrl}/login`);
	} catch (e) {
		console.log(e);
		if (e.name === "SequelizeUniqueConstraintError") {
			res.render("users/form", {
				locals: {
					title: "Sign Up!",
					error: "That username is already taken!",
				},
			});
		}
		res.redirect(`${req.baseUrl}/signup`);
	}
};

const login = (req, res) => {
	res.render("users/form", {
		locals: {
			title: "Log In!",
		},
		...layout,
	});
};

const processLogin = async (req, res) => {
	const { password, username } = req.body;
	const user = await User.findOne({
		where: {
			username,
		},
	});
	if (user) {
		console.log("=====VALIDAING USER=====");
		const isValid = bcrypt.compareSync(password, user.hash);
		if (isValid) {
			console.log("=====LOGIN SUCCESS=====");
			req.session.user = {
				username,
				id: user.id,
			};
			req.session.save(() => {
				res.redirect("/member");
			});
		} else {
			console.log("=====WRONG PASSWORD=====");
			res.redirect(`${req.baseUrl}/login`);
		}
	} else {
		console.log("=====NOT A VALID USER=====");
		res.redirect(`${req.baseUrl}/login`);
	}
};

module.exports = {
	signUp,
	processSignUp,
	login,
	processLogin,
};
