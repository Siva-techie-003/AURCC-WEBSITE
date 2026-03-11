import express from "express";
import { getAicteData } from "../controllers/aicteController.js";

const router = express.Router();

router.get("/", getAicteData);

export default router;