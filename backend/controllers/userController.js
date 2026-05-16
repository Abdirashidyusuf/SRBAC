import User from "../models/User.js";

import catchAsync from "../utils/catchAsync.js";

export const getUsers = catchAsync(async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    data: users,
  });
});

export const updateRole = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      role: req.body.role,
    },
    {
      new: true,
    },
  );

  if (!user) {
    return next(new Error("User not found"));
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});
