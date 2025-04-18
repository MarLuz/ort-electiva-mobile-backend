const express = require("express");
const router = express.Router();

const {
  getTodosController,
  getTodoController,
  postTodoController,
  deleteTodoController,
  putTodoController,
} = require("../controllers/todos.controller");
const payloadMiddleWare = require("../middlewares/paylod.middleware");
const todoSchemaValidation = require("./validations/todo.validation");

router.get("/todos", getTodosController);
router.get("/todos/:id", getTodoController);
router.post(
  "/todos",
  payloadMiddleWare(todoSchemaValidation),
  postTodoController
);
router.delete("/todos/:id", deleteTodoController);
router.put("/todos/:id", putTodoController);

module.exports = router;
