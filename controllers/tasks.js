const getAllTasks = (req, res, next) => {
  res.status(200).json({ mes: 'All tasks returned' });
};

const createTask = (req, res, next) => {
  res.status(200).json({ msg: 'Created new task' });
};

const getTask = (req, res, next) => {
  res.status(200).json({ msg: `Updated task with id: ${req.params.id}` });
};

const patchTask = (req, res, next) => {
  res.status(200).json({ msg: `Patched task with id: ${req.params.id}` });
};

const deleteTask = (req, res, next) => {
  res.status(200).json({ msg: `Deleted task with id: ${req.params.id}` });
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  patchTask,
  deleteTask,
};
