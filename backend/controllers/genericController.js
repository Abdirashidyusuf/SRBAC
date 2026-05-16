import catchAsync from "../utils/catchAsync.js";

import { notFoundError } from "../utils/errors.js";

export const createOne = (Model) =>
  catchAsync(async (req, res) => {
    const data = await Model.create(req.body);

    res.status(201).json({
      success: true,
      data,
    });
  });

export const getAll = (Model) =>
  catchAsync(async (req, res) => {
    const data = await Model.find();

    res.status(200).json({
      success: true,
      data,
    });
  });

export const getOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const data = await Model.findById(req.params.id);

    if (!data) {
      return next(notFoundError("Resource not found"));
    }

    res.status(200).json({
      success: true,
      data,
    });
  });

export const updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const data = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!data) {
      return next(notFoundError("Resource not found"));
    }

    res.status(200).json({
      success: true,
      data,
    });
  });

export const deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const data = await Model.findByIdAndDelete(req.params.id);

    if (!data) {
      return next(notFoundError("Resource not found"));
    }

    res.status(200).json({
      success: true,
      message: "Deleted successfully",
    });
  });
