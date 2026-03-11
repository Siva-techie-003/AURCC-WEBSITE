import express from "express";
import { getExamCell } from "../controllers/examCellController.js";

const router = express.Router();

router.get("/", getExamCell);

export default router;