const Todo = require("../models/todo.model");
const connectToRedis = require("../services/redis.service");

const _getToDosRedisKey = (userId) => `userId:${userId}-todos`;

const getToDos = async (userId) => {
  const redisClient = connectToRedis();
  const todosRedisKey = _getToDosRedisKey(userId);
  let todos = await redisClient.get(todosRedisKey);

  if (!todos) {
    console.log("[Reading from Mongo]");
    todos = await Todo.find({
      userId: userId,
    }).select("title completed");

    redisClient.set(todosRedisKey, JSON.stringify(todos), { ex: 3600 });
  } else {
    console.log("[Reading from Redis]");
  }
  return todos;
};
const createToDo = async (title, userId) => {
  const newTodo = new Todo({
    title: title,
    userId: userId,
  });
  const redisClient = connectToRedis();
  redisClient.del(_getToDosRedisKey(userId));
  await newTodo.save();
};
const findToDo = async (todoId, userId) => {
  return await Todo.find({
    _id: todoId,
    userId: userId,
  }).select("title description completed");
};
const deleteToDo = async (todoId, userId) => {
  const redisClient = connectToRedis();
  redisClient.del(_getToDosRedisKey(userId));
  await Todo.deleteOne({ _id: todoId, userId: userId });
};
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
  const redisClient = connectToRedis();
  redisClient.del(_getToDosRedisKey(userId));

  return todo;
};

module.exports = {
  getToDos,
  findToDo,
  createToDo,
  deleteToDo,
  updateToDo,
};
