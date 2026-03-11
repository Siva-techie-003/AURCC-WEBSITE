import express from "express";
import { getPlacementCell } from "../controllers/placementCellController.js";

const router = express.Router();

router.get("/", getPlacementCell);

export default router;