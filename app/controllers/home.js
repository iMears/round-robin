function index(req, res, next) {
  res.render('../views/index', { title: 'Round Robin' });
};

module.exports = {
  index,
};
