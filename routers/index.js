// This file will import or require from other router files in this directory.

/*
module.exports = {
    homeRouter: require('./home'),
    productRouter: require('./products'),
    
}
*/

// Each individual router file will require express to use the rotuer methods.

/*
const express = require('express');
const router = express.Router();
*/

// Each individual router file will also require controllers (the index.js file in there)

/*
const { home } = require('../controllers)
*/

// This pulls the specific controller you are using for that route.

/*
router.get('/', controller.list)
    .get('/new', controller.showForm)
    .post('/new', controller.processForm)
*/

// export router

module.exports = {
	homeRouter: require("./home"),
	userRouter: require("./user"),
};
