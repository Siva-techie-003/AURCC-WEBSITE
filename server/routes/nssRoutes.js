import express from "express";
import { getNSS } from "../controllers/nssController.js";

const router = express.Router();

router.get("/", getNSS);

export default router;