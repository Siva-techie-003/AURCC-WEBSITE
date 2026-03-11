import express from "express";
import { getProgramsOffered } from "../controllers/programsController.js";

const router = express.Router();

router.get("/", getProgramsOffered);

export default router;