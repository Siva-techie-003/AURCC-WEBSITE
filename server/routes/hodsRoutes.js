import express from "express";
import {
  getHods,
  getHodByDepartment,
  createHod,
  updateHod
} from "../controllers/hodsController.js";

const router = express.Router();

router.get("/", getHods);
router.get("/:department", getHodByDepartment);
router.post("/", createHod);
router.put("/:id", updateHod);

export default router;