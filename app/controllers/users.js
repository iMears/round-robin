const User = require('../models/user');

const usersController = {
  create,
  index,
};

async function create(req, res, next) {
  const user = await User.create({ ...req.body });

  res.json(user);
};

async function index(req, res, next) {
  const users = await User.find();

  res.json(users);
};

module.exports = usersController;
