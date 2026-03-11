import express from "express";
import { getPace } from "../controllers/paceController.js";

const router = express.Router();

router.get("/", getPace);

export default router;