const mongoose = require("mongoose");
const userSchema = require("./schemas/user.schema");

const User = mongoose.model("User", userSchema);
module.exports = User;

/*
const getUsers = () => users;
const findUser = (username) => {
  const user = users.find((u) => u.username == username);
  return user;
};

const isValidPassword = async (password, userPassword) => {
  const result = await bcrypt.compare(password, userPassword);
  return result;
};

const findUserByUsername = (username) => {
  const user = users.find((u) => u.username == username);
  return user;
};

const saveUser = async (name, username, password) => {
  const lastUser = users[users.length - 1];
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    name: name,
    username: username,
    password: hashedPassword,
    active: true,
  };
  if (lastUser) {
    newUser.id = lastUser.id + 1;
  } else {
    newUser.id = 1;
  }
  users.push(newUser);
  return newUser.id;
};

module.exports = { saveUser, findUser, findUserByUsername, isValidPassword };
*/
