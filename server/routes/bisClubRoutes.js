import express from "express";
import { getBISClub } from "../controllers/bisClubController.js";

const router = express.Router();

router.get("/", getBISClub);

export default router;
