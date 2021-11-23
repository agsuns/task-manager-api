const TaskModel = require('../models/task');
const asyncWrapper = require('../middleware/asyncWrapper');
const { createCustomNotFoundError } = require('../errors/CustomNotFoundError');

const getAllTasks = asyncWrapper(async (req, res, next) => {
  const tasks = await TaskModel.find({});
  res.status(200).json(tasks);
});

const createTask = asyncWrapper(async (req, res, next) => {
  const newTask = await TaskModel.create(req.body);
  res.status(200).json(newTask);
});

const getTask = asyncWrapper(async (req, res, next) => {
  const task = await TaskModel.findById(req.params.id);

  if (!task) {
    return next(
      createCustomNotFoundError(
        `Could't get task with id: ${req.params.id}`,
        404,
      ),
    );
  }
  res.status(200).json(task);
});

const patchTask = asyncWrapper(async (req, res, next) => {
  const patchedTask = await TaskModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true },
  );

  if (!patchedTask) {
    return next(
      createCustomNotFoundError(
        `Could't update task with id: ${req.params.id}`,
        404,
      ),
    );
  }

  res.status(200).json(patchedTask);
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const deletedTask = await TaskModel.findByIdAndDelete(req.params.id);

  if (!deleteTask) {
    return next(
      createCustomNotFoundError(
        `Could't delete task with id: ${req.params.id}`,
        404,
      ),
    );
  }

  res.status(200).json(deletedTask);
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  patchTask,
  deleteTask,
};
