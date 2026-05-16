export const validationError = (message) => {
  const error = new Error(message);

  error.statusCode = 400;

  return error;
};

export const unauthorizedError = (message) => {
  const error = new Error(message);

  error.statusCode = 401;

  return error;
};

export const forbiddenError = (message) => {
  const error = new Error(message);

  error.statusCode = 403;

  return error;
};

export const notFoundError = (message) => {
  const error = new Error(message);

  error.statusCode = 404;

  return error;
};

export const serverError = (message) => {
  const error = new Error(message);

  error.statusCode = 500;

  return error;
};
