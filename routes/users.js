const router = require('express').Router();
const { users: { create, destroy, index, show } } = require('../app/controllers');

router.post('/', create);
router.get('/', index);
router.get('/:id', show);
router.delete('/:id', destroy);

module.exports = router;
