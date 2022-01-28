import express from "express";
import {
  createImage,
  deleteImage,
  getImage,
  updateImage,
} from "../controllers/images.controller.js";

const router = express.Router();

router.post("/add", createImage);

router.get("/", getImage);

router.patch("/update", updateImage);

router.delete("/", deleteImage);

export default router;
