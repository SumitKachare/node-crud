import express from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProductDetail,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/add", createProduct);

router.get("/", getProduct);

router.patch("/update", updateProduct);

router.delete("/", deleteProduct);

router.get("/:productId", getProductDetail);

export default router;
