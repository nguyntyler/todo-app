// This file will import or require from other contoller files in this directory.

/*
module.exports = {
    homeController: require('./home'),
    productController: require('./products'),
    
}
*/

// In each individual controller file, require the model being used and the layout from a utils folder if needed.

/*
const { Product } = require('../models');
const { layout } = require('../utils');
*/

// export the functions

module.exports = {
	homeController: require("./home"),
	userController: require("./user"),
	memberController: require("./member"),
};
