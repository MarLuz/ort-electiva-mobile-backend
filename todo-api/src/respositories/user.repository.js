const bcrypt = require("bcryptjs");
const User = require("../models/user.model");

const findUser = async (username) => {
  return await User.findOne({ username: username });
};

const saveUser = async (name, username, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name: name,
    username: username,
    password: hashedPassword,
  });
  const res = await newUser.save();
  return res;
};

const isValidPassword = async (password, userPassword) => {
  const result = await bcrypt.compare(password, userPassword);
  return result;
};

module.exports = {
  findUser,
  saveUser,
  isValidPassword,
};
