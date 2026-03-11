import express from "express";
import { getZonal } from "../controllers/zonalController.js";

const router = express.Router();

router.get("/", getZonal);

export default router;