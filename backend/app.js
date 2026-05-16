import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import receiptRoutes from "./routes/receiptRoutes.js";
import vendorRoutes from "./routes/vendorRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

app.use("/api/products", productRoutes);

app.use("/api/customers", customerRoutes);

app.use("/api/orders", orderRoutes);

app.use("/api/receipts", receiptRoutes);

app.use("/api/vendors", vendorRoutes);

app.use(errorMiddleware);

export default app;
