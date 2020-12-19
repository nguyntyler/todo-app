const { layout } = require("../utils");

const home = (req, res) => {
	res.render("home", {
		locals: {
			title: "Home",
		},
		...layout,
	});
};

module.exports = {
	home,
};
