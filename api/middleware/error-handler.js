// const { CustomAPIError } = require("../errors/custom-errors");

import CustomAPIError from "../errors/custom-errors";

export const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: `Something went wrong. Please try again later` });
};

// module.exports = errorHandlerMiddleware;

export default errorHandlerMiddleware;
