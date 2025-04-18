const Todo = require("../models/todo.model");

const getToDos = async (userId) => {
  const todos = await Todo.find({
    userId: userId,
  }).select("title completed");
  return todos;
};

const createToDo = async (title, userId) => {
  const newTodo = new Todo({
    title: title,
    userId: userId,
  });

  await newTodo.save();
};

const findToDo = async (todoId, userId) => {
  return await Todo.find({
    _id: todoId,
    userId: userId,
  }).select("title description completed");
};
const deleteToDo = async (todoId, userId) =>
  await Todo.deleteOne({ _id: todoId, userId: userId });

const updateToDo = async (todoId, userId, payload) => {
  const todo = await Todo.findOne({
    _id: todoId,
    userId: userId,
  });

  if (todo) {
    Object.entries(payload).forEach(([key, value]) => {
      todo[key] = value;
    });
    await todo.save();
  }
  return todo;
};

module.exports = {
  getToDos,
  findToDo,
  createToDo,
  deleteToDo,
  updateToDo,
};
