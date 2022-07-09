const User = require('../models/User');

class RepositoryUser {
  find = async (email) => {
    return await User.findOne({ email });
  };
}
create = async (name, email, password) => {
  return await User.create({
    name,
    email,
    password,
  });
};

module.exports = new RepositoryUser();
