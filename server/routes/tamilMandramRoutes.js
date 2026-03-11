import express from "express";
import { getTamilMandram } from "../controllers/tamilMandramController.js";

const router = express.Router();

router.get("/", getTamilMandram);

export default router;