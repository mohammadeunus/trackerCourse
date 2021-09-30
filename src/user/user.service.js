const User = require('./user.model');

module.exports.createUser = (userInfo) => {
  return User.create(userInfo);
};

module.exports.findUserByName = (name) => {
  return User.findOne({ name: name });
};
