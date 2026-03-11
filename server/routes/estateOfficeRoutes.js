import express from "express";
import { getEstateOffice } from "../controllers/estateOfficeController.js";

const router = express.Router();

router.get("/", getEstateOffice);

export default router;