import express from "express";

import {
  createOrder,
  getOrders,
  getOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController.js";

import { protect } from "../middlewares/authMiddleware.js";

import { authorizeRoles } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router
  .route("/")
  .get(protect, authorizeRoles("admin", "sales", "customer"), getOrders)
  .post(protect, authorizeRoles("admin", "sales"), createOrder);

router
  .route("/:id")
  .get(protect, getOrder)
  .put(protect, authorizeRoles("admin", "sales"), updateOrder)
  .delete(protect, authorizeRoles("admin"), deleteOrder);

export default router;
