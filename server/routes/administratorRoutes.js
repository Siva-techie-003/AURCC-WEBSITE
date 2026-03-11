import express from "express";
import { getAdministrators } from "../controllers/administratorController.js";

const router = express.Router();

router.get("/", getAdministrators);

export default router;