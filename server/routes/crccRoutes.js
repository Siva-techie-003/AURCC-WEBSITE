import express from "express";
import { getCRCC } from "../controllers/crccController.js";

const router = express.Router();

router.get("/", getCRCC);

export default router;