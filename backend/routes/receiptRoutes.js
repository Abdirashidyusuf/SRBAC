import express from "express";

import {
  createReceipt,
  getReceipts,
  getReceipt,
  updateReceipt,
  deleteReceipt,
} from "../controllers/receiptController.js";

import { protect } from "../middlewares/authMiddleware.js";

import { authorizeRoles } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router
  .route("/")
  .get(protect, authorizeRoles("admin", "sales", "customer"), getReceipts)
  .post(protect, authorizeRoles("admin", "sales"), createReceipt);

router
  .route("/:id")
  .get(protect, getReceipt)
  .put(protect, authorizeRoles("admin"), updateReceipt)
  .delete(protect, authorizeRoles("admin"), deleteReceipt);

export default router;
