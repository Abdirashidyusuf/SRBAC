import { forbiddenError } from "../utils/errors.js";

export const authorizeRoles =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(forbiddenError("Access denied"));
    }

    next();
  };
