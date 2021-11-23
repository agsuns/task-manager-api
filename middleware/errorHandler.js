const { CustomNotFoundError } = require('../errors/CustomNotFoundError');

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomNotFoundError) {
    res.status(err.statusCode).json({ msg: err.message });
    return;
  }

  res.status(500).json({ msg: 'Something went wrong' });
};

module.exports = errorHandler;
