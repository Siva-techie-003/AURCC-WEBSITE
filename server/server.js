import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import connectDB from "./config/db.js";
import departmentRoutes from "./routes/departmentRoutes.js";
import admissionRoutes from "./routes/admissionRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Serve public folder
app.use(express.static("public"));

// OR safer (recommended)
app.use("/public", express.static(path.join(process.cwd(), "public")));

app.use("/api/departments", departmentRoutes);
app.use("/api", admissionRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
