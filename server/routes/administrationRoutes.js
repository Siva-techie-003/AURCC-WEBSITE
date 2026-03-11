import express from "express";
import { getAdministration } from "../controllers/administrationController.js";

const router = express.Router();

router.get("/", getAdministration);

export default router;