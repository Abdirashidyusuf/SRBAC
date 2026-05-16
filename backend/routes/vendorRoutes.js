import express from "express";

import {
  createVendor,
  getVendors,
  getVendor,
  updateVendor,
  deleteVendor,
} from "../controllers/vendorController.js";

import { protect } from "../middlewares/authMiddleware.js";

import { authorizeRoles } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router
  .route("/")
  .get(protect, authorizeRoles("admin", "sales"), getVendors)
  .post(protect, authorizeRoles("admin", "sales"), createVendor);

router
  .route("/:id")
  .get(protect, getVendor)
  .put(protect, authorizeRoles("admin"), updateVendor)
  .delete(protect, authorizeRoles("admin"), deleteVendor);

export default router;
