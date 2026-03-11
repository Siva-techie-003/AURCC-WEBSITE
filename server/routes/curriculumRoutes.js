import express from "express";
import { getCurriculumSyllabus } from "../controllers/curriculumController.js";

const router = express.Router();

router.get("/", getCurriculumSyllabus);

export default router;