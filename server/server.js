import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";

/* Routes */
import departmentRoutes from "./routes/departmentRoutes.js";
import admissionRoutes from "./routes/admissionRoutes.js";
import hodRoutes from "./routes/hodsRoutes.js";
import dgateRoutes from "./routes/dgateRoutes.js";
import paceRoutes from "./routes/paceRoutes.js";
import zonalRoutes from "./routes/zonalRoutes.js";
import affiliationRoutes from "./routes/affiliationRoutes.js";
import distanceEducationRoutes from "./routes/distanceEducationRoutes.js";
import edCellRoutes from "./routes/edCellRoutes.js";
import placementCellRoutes from "./routes/placementCellRoutes.js";
import crccRoutes from "./routes/crccRoutes.js";
import examCellRoutes from "./routes/examCellRoutes.js";
import estateOfficeRoutes from "./routes/estateOfficeRoutes.js";
import administratorRoutes from "./routes/administratorRoutes.js";
import deanOfficeRoutes from "./routes/deanOfficeRoutes.js";
import cellCoordinatorRoutes from "./routes/cellCoordinatorRoutes.js";
import administrationRoutes from "./routes/administrationRoutes.js";
import programsRoutes from "./routes/programsRoutes.js";
import curriculumRoutes from "./routes/curriculumRoutes.js";
import regulationRoutes from "./routes/regulationRoutes.js";
import nssRoutes from "./routes/nssRoutes.js";
import tamilMandramRoutes from "./routes/tamilMandramRoutes.js";
import fineArtsRoutes from "./routes/fineArtsRoutes.js";
import alumniRoutes from "./routes/alumniRoutes.js";
import libraryRoutes from "./routes/libraryRoutes.js";
import sportsRoutes from "./routes/sportsRoutes.js";
import hostelRoutes from "./routes/hostelRoutes.js";
import aicteRoutes from "./routes/aicteRoutes.js";

import errorHandler from "./middleware/errorHandler.js";

dotenv.config();
connectDB();

const app = express();

/* Fix for __dirname in ES modules */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* Middleware */
app.use(cors());
app.use(express.json());

/* API Routes */
app.use("/api/departments", departmentRoutes);
app.use("/api/admissions", admissionRoutes);
app.use("/api/hods", hodRoutes);
app.use("/api/dgate", dgateRoutes);
app.use("/api/pace", paceRoutes);
app.use("/api/zonal", zonalRoutes);
app.use("/api/affiliation", affiliationRoutes);
app.use("/api/distance-education", distanceEducationRoutes);
app.use("/api/ed-cell", edCellRoutes);
app.use("/api/placement-cell", placementCellRoutes);
app.use("/api/research-cell", crccRoutes);
app.use("/api/exam-cell", examCellRoutes);
app.use("/api/estate-office", estateOfficeRoutes);
app.use("/api/administrators", administratorRoutes);
app.use("/api/dean-office", deanOfficeRoutes);
app.use("/api/cell-coordinators", cellCoordinatorRoutes);
app.use("/api/administration", administrationRoutes);
app.use("/api/programs", programsRoutes);
app.use("/api/curriculum-syllabus", curriculumRoutes);
app.use("/api/regulations", regulationRoutes);
app.use("/api/nss", nssRoutes);
app.use("/api/tamilmandram", tamilMandramRoutes);
app.use("/api/finearts", fineArtsRoutes);
app.use("/api/alumni", alumniRoutes);
app.use("/api/library", libraryRoutes);
app.use("/api/sports", sportsRoutes);
app.use("/api/hostel", hostelRoutes);
app.use("/api/aicte-moe", aicteRoutes);

/* Test API */
app.get("/api/test", (req, res) => {
  res.json({ message: "API working" });
});

/* Serve React build */
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

/* Error handler */
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});