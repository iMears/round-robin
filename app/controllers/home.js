const homeController = {};

homeController.indexAction = (req, res, next) => {
  res.render('../views/index', { title: 'Round Robin' });
};

module.exports = homeController;
