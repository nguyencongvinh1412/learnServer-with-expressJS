const express = require('express')
const routeUser = express.Router();
const userController = require('../controllers/users.controller');

routeUser.use(express.json()) // for parsing application/json
routeUser.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// render user list
routeUser.get('/', userController.index);

// search
routeUser.get('/search', userController.search);

// create form 
routeUser.get('/create', userController.getCreate);

// post user create 
routeUser.post('/create', userController.postCreate);

module.exports = routeUser;