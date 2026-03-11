import express from "express";
import { getHostel } from "../controllers/hostelController.js";

const router = express.Router();

router.get("/", getHostel);

export default router;