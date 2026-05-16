import Vendor from "../models/Vendor.js";

import {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
} from "./genericController.js";

export const createVendor = createOne(Vendor);

export const getVendors = getAll(Vendor);

export const getVendor = getOne(Vendor);

export const updateVendor = updateOne(Vendor);

export const deleteVendor = deleteOne(Vendor);
