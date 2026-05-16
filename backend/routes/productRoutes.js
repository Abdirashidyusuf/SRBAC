import express from "express";

import {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

import { protect } from "../middlewares/authMiddleware.js";

import { authorizeRoles } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router
  .route("/")
  .get(protect, getProducts)
  .post(protect, authorizeRoles("admin", "sales"), createProduct);

router
  .route("/:id")
  .get(protect, getProduct)
  .put(protect, authorizeRoles("admin", "sales"), updateProduct)
  .delete(protect, authorizeRoles("admin"), deleteProduct);

export default router;
