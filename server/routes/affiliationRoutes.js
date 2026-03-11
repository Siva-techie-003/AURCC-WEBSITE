import express from "express";
import { getOffice } from "../controllers/affiliationController.js";

const router = express.Router();

router.get("/", getOffice);

export default router;