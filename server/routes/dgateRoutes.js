import express from "express";
import { getDGATE } from "../controllers/dgateController.js";

const router = express.Router();

router.get("/", getDGATE);

export default router;