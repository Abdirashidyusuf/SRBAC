import Receipt from "../models/Receipt.js";

import {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
} from "./genericController.js";

export const createReceipt = createOne(Receipt);

export const getReceipts = getAll(Receipt);

export const getReceipt = getOne(Receipt);

export const updateReceipt = updateOne(Receipt);

export const deleteReceipt = deleteOne(Receipt);
