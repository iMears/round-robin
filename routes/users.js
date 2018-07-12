const router = require('express').Router();
const { users: { create, index, show } } = require('../app/controllers');

router.post('/', create);
router.get('/', index);
router.get('/:id', show);

module.exports = router;
