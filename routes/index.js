const express = require('express');
const router = express.Router();
const homeController = require('../app/controllers').home

router.use('/', require('./home'));
router.use('/users', require('./users'));

module.exports = router
