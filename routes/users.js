const express = require('express');
const router = express.Router();
const users = [
  {
    name: 'Elizabeth',
    age: 29,
    height: '6\''
  },
  {
    name: 'Max',
    age: 29,
    height: '6\' 5"'
  },
  {
    name: 'Gary',
    age: 39,
    height: '5\' 11"'
  }
];

/* GET /users */
router.get('/', (req, res, next) => {

  res.json(users);
});

module.exports = router;
