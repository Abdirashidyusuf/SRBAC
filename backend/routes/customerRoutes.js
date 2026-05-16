import express from "express";

import {
  createCustomer,
  getCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer,
} from "../controllers/customerController.js";

import { protect } from "../middlewares/authMiddleware.js";

import { authorizeRoles } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router
  .route("/")
  .get(protect, authorizeRoles("admin", "sales", "customer"), getCustomers)
  .post(protect, authorizeRoles("admin", "sales"), createCustomer);

router
  .route("/:id")
  .get(protect, getCustomer)
  .put(protect, authorizeRoles("admin", "sales"), updateCustomer)
  .delete(protect, authorizeRoles("admin"), deleteCustomer);

export default router;
