import express from "express";
import {
  addVariant,
  deleteVariant,
  getVariant,
  updateVariant,
} from "../controllers/variant.controller.js";

const router = express.Router();

router.post("/add", addVariant);

router.get("/", getVariant);

router.patch("/update", updateVariant);

router.delete("/", deleteVariant);

export default router;
