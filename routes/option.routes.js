import express from "express";
import {
  createOption,
  deleteOption,
  getOption,
  updateOptions,
} from "../controllers/options.controller.js";

const router = express.Router();

router.post("/add", createOption);

router.get("/", getOption);

router.patch("/update", updateOptions);

router.delete("/", deleteOption);

export default router;
