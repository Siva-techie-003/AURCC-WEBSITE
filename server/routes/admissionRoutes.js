import express from "express";
import { getAdmission,getDGATE,getPace,getZonal,getoffice,getDistanceEducation,getEdCell,getPlacementCell,getCRCC,getExamCell
    ,getEstateOffice
 } from "../controllers/admissionController.js";

const router = express.Router();

router.get("/admission", getAdmission);
router.get("/dgate", getDGATE);
router.get("/pace", getPace);
router.get("/zonal",getZonal)
router.get("/office-affiliation",getoffice)
router.get("/distance-education",getDistanceEducation)
router.get("/ed-cell",getEdCell)
router.get("/placement-cell",getPlacementCell)
router.get("/research-cell",getCRCC)
router.get("/exam-cell",getExamCell)
router.get("/estate-office",getEstateOffice)

export default router;