import Customer from "../models/Customer.js";

import {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
} from "./genericController.js";

export const createCustomer = createOne(Customer);

export const getCustomers = getAll(Customer);

export const getCustomer = getOne(Customer);

export const updateCustomer = updateOne(Customer);

export const deleteCustomer = deleteOne(Customer);
