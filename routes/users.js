const router = require('express').Router();
const { users: { create, index } } = require('../app/controllers');

router.post('/', create);
router.get('/', index);

module.exports = router;
