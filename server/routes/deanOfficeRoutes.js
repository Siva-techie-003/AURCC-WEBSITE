import express from "express";
import { getDeanOffice } from "../controllers/deanOfficeController.js";

const router = express.Router();

router.get("/", getDeanOffice);

export default router;