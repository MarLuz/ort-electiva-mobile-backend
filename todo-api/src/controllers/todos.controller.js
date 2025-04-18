const {
  getToDos,
  createToDo,
  findToDo,
  deleteToDo,
  updateToDo,
} = require("../respositories/todo.repository");

const getTodosController = async (req, res) => {
  const { id } = req.user;
  try {
    const todos = await getToDos(id);
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Ha ocurrido un error" });
  }
};

const postTodoController = async (req, res) => {
  const { body, user } = req;
  try {
    await createToDo(body.title, user.id);
    res.status(201).json({
      message: "Tarea creada correctamente",
    });
  } catch (error) {
    res.status(500).json({ message: "Ha ocurrido un error" });
  }
};

const getTodoController = async (req, res) => {
  const toDoId = req.params.id;
  const { id } = req.user;
  try {
    const toDo = await findToDo(toDoId, id);
    if (toDo) {
      res.status(200).json(toDo);
      return;
    }
    res.status(404).json({
      message: `No se ha encontrado la tarea con id: ${toDoId} 😭`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Ha ocurrido un error" });
  }
};

const deleteTodoController = async (req, res) => {
  const toDoId = req.params.id;
  const { id } = req.user;

  try {
    await deleteToDo(toDoId, id);
    res.status(200).json({
      message: "ToDo eliminado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Ha ocurrido un error" });
  }
};

const putTodoController = async (req, res) => {
  const toDoId = req.params.id;
  const { body } = req;
  const { id } = req.user;

  try {
    const toDo = await updateToDo(toDoId, id, body);
    res.status(200).json(toDo);
    return;
  } catch (error) {
    res.status(500).json({ message: "Ha ocurrido un error" });
  }
};

module.exports = {
  getTodosController,
  getTodoController,
  postTodoController,
  putTodoController,
  deleteTodoController,
};
