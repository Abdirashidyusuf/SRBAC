import bcrypt from "bcryptjs";

import User from "../models/User.js";

import generateToken from "../utils/generateToken.js";

import {
  validateRegister,
  validateLogin,
} from "../utils/validators/authValidation.js";

import { validationError, unauthorizedError } from "../utils/errors.js";

import catchAsync from "../utils/catchAsync.js";

export const register = catchAsync(async (req, res, next) => {
  const registerValidation = validateRegister(req.body);

  if (registerValidation) {
    return next(validationError(registerValidation));
  }

  const { name, email, password, role } = req.body;

  const existingUser = await User.findOne({
    email,
  });

  if (existingUser) {
    return next(validationError("User already exists"));
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role,
  });

  res.status(201).json({
    success: true,
    token: generateToken(user),
    user,
  });
});

export const login = catchAsync(async (req, res, next) => {
  const loginValidation = validateLogin(req.body);

  if (loginValidation) {
    return next(validationError(loginValidation));
  }

  const { email, password } = req.body;

  const user = await User.findOne({
    email,
  });

  if (!user) {
    return next(unauthorizedError("Invalid credentials"));
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return next(unauthorizedError("Invalid credentials"));
  }

  res.status(200).json({
    success: true,
    token: generateToken(user),
    user,
  });
});
