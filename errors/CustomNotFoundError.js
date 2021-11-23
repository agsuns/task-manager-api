class CustomNotFoundError extends Error {
  constructor(msg, statusCode) {
    super(msg);
    this.statusCode = statusCode;
  }
}

const createCustomNotFoundError = (msg, statusCode) => {
  return new CustomNotFoundError(msg, statusCode);
};

module.exports = { CustomNotFoundError, createCustomNotFoundError };
