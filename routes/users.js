const router = require('express').Router();
const { users: { index } } = require('../app/controllers');

/* GET /users */
router.get('/', index);

module.exports = router;
