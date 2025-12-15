import express from "express";
import { MenuItem } from "../models/MenuItem.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const items = await MenuItem.find();
  res.json(items);
});

router.post("/", async (req, res) => {
  try {
    const item = new MenuItem(req.body);
    const saved = await item.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: "Error saving menu item" });
  }
});

export default router;