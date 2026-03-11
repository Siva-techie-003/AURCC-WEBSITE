import express from "express";
import { getCellCoordinators } from "../controllers/cellcoordinatorController.js";

const router = express.Router();

router.get("/", getCellCoordinators);

export default router;