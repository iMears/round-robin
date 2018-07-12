const router = require('express').Router();
const { users: { create, destroy, index, show, update } } = require('../app/controllers');

router.post('/', create);
router.get('/', index);
router.get('/:id', show);
router.delete('/:id', destroy);
router.put('/:id', update);

module.exports = router;
