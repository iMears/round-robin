const User = require('../models/user');

const usersController = {
  create,
  index,
  show,
};

async function create(req, res, next) {

  try {
    const user = await User.create({ ...req.body });

    res.json(user);
  } catch(error) {
    res.status(500).send({ message: error })
  }

  res.json(user);
};

async function index(req, res, next) {
  const users = await User.find();

  res.json(users);
};

async function show(req, res, next) {
  const id = req.params.id;

  try {
    const user = await User.findById({ _id: id });

    res.json(user);
  } catch(error) {
    res.status(404).send({ message: `User with id ${id} was not found` })
  }
};


module.exports = usersController;
