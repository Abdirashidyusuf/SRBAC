import Product from "../models/Product.js";

import {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
} from "./genericController.js";

export const createProduct = createOne(Product);

export const getProducts = getAll(Product);

export const getProduct = getOne(Product);

export const updateProduct = updateOne(Product);

export const deleteProduct = deleteOne(Product);
