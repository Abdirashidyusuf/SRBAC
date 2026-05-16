import express from "express";

import { getUsers, updateRole } from "../controllers/userController.js";

import { protect } from "../middlewares/authMiddleware.js";

import { authorizeRoles } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.get("/", protect, authorizeRoles("admin"), getUsers);

router.patch("/:id/role", protect, authorizeRoles("admin"), updateRole);

export default router;
