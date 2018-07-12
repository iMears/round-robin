const usersController = {};

usersController.index = (req, res, next) => {
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

  res.json(users);
};

module.exports = usersController;
