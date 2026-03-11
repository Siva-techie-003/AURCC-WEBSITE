import express from "express";
import { getDistanceEducation } from "../controllers/distanceEducationController.js";

const router = express.Router();

router.get("/", getDistanceEducation);

export default router;