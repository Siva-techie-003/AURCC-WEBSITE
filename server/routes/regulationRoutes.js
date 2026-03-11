import express from "express";
import { getRegulations } from "../controllers/regulationController.js";

const router = express.Router();

router.get("/", getRegulations);

export default router;