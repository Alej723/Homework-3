import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  imageUrl: String,
  isAvailable: { type: Boolean, default: true }
});

export const MenuItem = mongoose.model("MenuItem", menuItemSchema);