import express from "express";
import { getUyirClub } from "../controllers/uyirClubController.js";

const router = express.Router();

router.get("/", getUyirClub);

export default router;
