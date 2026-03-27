import express from "express";
import { getStudentAffairs } from "../controllers/studentAffairsController.js";

const router = express.Router();

router.get("/", getStudentAffairs);

export default router;