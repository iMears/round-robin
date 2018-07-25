const User = require('../models/user');

async function create({ body }, res) {
  try {
    const user = await User.create(body);

    res.json(user);
  } catch({ message }) {
    res.status(500).send({ message });
  }
};

async function destroy({ params: { id } }, res) {
  try {
    const user = await User.findByIdAndRemove(id);

    res.status(204).send({});
  } catch({ message }) {
    res.status(500).send({ message });
  }
};

async function index(req, res) {
  try {
    const users = await User.find();

    res.json(users);
  } catch({ message }) {
    res.status(500).send({ message });
  }
};

async function show({ params: { id } }, res) {
  try {
    const user = await User.findById(id);

    res.json(user);
  } catch({ message }) {
    res.status(500).send({ message });
  }
};

async function update({ params: { id }, body }, res) {
  try {
    const user = await User.findByIdAndUpdate(id, body, { new: true });

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
