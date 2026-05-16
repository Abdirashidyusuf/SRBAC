import jwt from "jsonwebtoken";

import { unauthorizedError } from "../utils/errors.js";

export const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return next(unauthorizedError("No token provided"));
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    return next(unauthorizedError("Invalid token"));
  }
};
