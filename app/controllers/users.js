const User = require('../models/user');

async function create(req, res, next) {
  try {
    const user = await User.create(req.body);

    res.json(user);
  } catch({ message }) {
    res.status(500).send({ message });
  }
};

async function destroy(req, res, next) {
  const id = req.params.id;

  try {
    const user = await User.deleteOne({ _id: id });

    res.status(204).send({});
  } catch({ message }) {
    res.status(500).send({ message });
  }
};

async function index(req, res, next) {
  try {
    const users = await User.find();

    res.json(users);
  } catch({ message }) {
    res.status(500).send({ message });
  }
};

async function show(req, res, next) {
  const id = req.params.id;

  try {
    const user = await User.findById({ _id: id });

    res.json(user);
  } catch({ message }) {
    res.status(500).send({ message });
  }
};

async function update(req, res, next) {
  const id = req.params.id;

  try {
    const user = await User.findOneAndUpdate({ _id: id }, req.body, { new: true });

    res.json(user);
  } catch(error) {
    res.status(500).send({ message });
  }
};

module.exports = {
  create,
  destroy,
  index,
  show,
  update,
};
