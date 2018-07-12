const express = require('express');
const router = express.Router();
const homeController = require('../app/controllers').home;

/* GET root path */
router.get('/', homeController.indexAction);

module.exports = router;
