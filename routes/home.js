const router = require('express').Router();
const { home: { index } } = require('../app/controllers');

/* GET root path */
router.get('/', index);

module.exports = router;
