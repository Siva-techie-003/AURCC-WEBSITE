import express from "express";
import { getFineArtsClub } from "../controllers/fineArtsController.js";

const router = express.Router();

router.get("/", getFineArtsClub);

export default router;