import Order from "../models/Order.js";

import {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
} from "./genericController.js";

export const createOrder = createOne(Order);

export const getOrders = getAll(Order);

export const getOrder = getOne(Order);

export const updateOrder = updateOne(Order);

export const deleteOrder = deleteOne(Order);
