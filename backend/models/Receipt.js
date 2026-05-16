import mongoose from "mongoose";

const receiptSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true
    },
  },
  {
    timestamps: true,
  },
);

const Receipt = mongoose.model("Receipt", receiptSchema);

export default Receipt;
