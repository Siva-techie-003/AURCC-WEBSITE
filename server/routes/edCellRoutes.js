import express from "express";
import { getEdCell } from "../controllers/edCellController.js";

const router = express.Router();

router.get("/", getEdCell);

export default router;