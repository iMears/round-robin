const router = require('express').Router();

router.use('/', require('./home'));
router.use('/api/v1/users', require('./users'));

module.exports = router;
