import express from "express";
import { getLibrary } from "../controllers/libraryController.js";

const router = express.Router();

router.get("/", getLibrary);

export default router;