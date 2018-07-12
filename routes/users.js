const express = require('express');
const router = express.Router();
const usersController = require('../app/controllers').users;

/* GET /users */
router.get('/', usersController.indexAction);

module.exports = router;
