import express from "express";
import {
  getDepartments,
  getDepartmentByAddress,
  createDepartment,
  updateDepartment
} from "../controllers/departmentController.js";

const router = express.Router();

router.get("/", getDepartments);
router.get("/:address", getDepartmentByAddress);
router.post("/", createDepartment);
router.put("/:id", updateDepartment);

export default router;
