const User = require('../models/user');

async function create(req, res, next) {
  try {
    const user = await User.create({ ...req.body });

    res.json(user);
  } catch({ message }) {
    res.status(500).send({ message })
  }
};

async function destroy(req, res, next) {
  const id = req.params.id;

  try {
    const user = await User.deleteOne({ _id: id });

    res.json(user);
  } catch({ message }) {
    res.status(500).send({ message })
  }
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


module.exports = {
  create,
  destroy,
  index,
  show,
};
