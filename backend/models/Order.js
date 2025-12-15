import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  items: [
    {
      menuItem: { type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" },
      quantity: Number
    }
  ],
  totalPrice: Number,
  customerName: String,
  customerEmail: String,
  customerPhone: String,
  status: { type: String, default: "pending" }
});

export const Order = mongoose.model("Order", orderSchema);
