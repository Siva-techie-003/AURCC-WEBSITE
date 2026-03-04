import Admission from "../models/Admission.js";
import DGATE from "../models/dgateModel.js"
import Pace from "../models/paceModel.js";
import Zonal from "../models/zonalModel.js"
import Affiliation from "../models/affiliationModel.js";
import DistanceEducation from "../models/distanceEducationModel.js"
import EdCell from "../models/edcellModel.js";
import PlacementCell from "../models/placementcellModel.js";
import CRCC from "../models/crccModel.js";
import ExamCell from "../models/ExaminationCell.js";
import EstateOffice from "../models/EstateOfficeStaff.js";

export const getAdmission = async (req, res, next) => {
  try {
    const admission = await Admission.find();
    res.json(admission);
  } catch (error) {
    next(error);
  }
};

export const getDGATE = async (req, res) => {
  try {
    const data = await DGATE.findOne();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getPace = async (req, res) => {
  try {
    const pace = await Pace.findOne(); 
    res.json(pace);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getZonal = async (req, res) => {
  try {
    const zonal = await Zonal.findOne(); // only one document
    res.json(zonal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getoffice = async (req, res) => {
  try {
    const pace = await Affiliation.findOne(); 
    res.json(pace);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDistanceEducation = async (req, res) => {
  try {
    const data = await DistanceEducation.findOne(); // NOT find()
    
    if (!data) {
      return res.status(404).json({ message: "No data found" });
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

/* GET ED Cell data */
export const getEdCell = async (req, res) => {
  try {
    const edCell = await EdCell.findOne(); // only one document expected

    if (!edCell) {
      return res.status(404).json({ message: "ED Cell data not found" });
    }

    res.status(200).json(edCell);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch ED Cell data",
      error: error.message
    });
  }
};

export const getPlacementCell = async (req, res, next) => {
  try {
    const data = await PlacementCell.findOne(); // only one document
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const getCRCC = async (req, res, next) => {
  try {
    const data = await CRCC.findOne(); // only one document needed

    if (!data) {
      return res.status(404).json({ message: "CRCC data not found" });
    }

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};


export const getExamCell = async (req, res) => {
  try {
    const examCell = await ExamCell.findOne(); // only ONE document

    if (!examCell) {
      return res.status(404).json({
        message: "No Exam Cell data found"
      });
    }

    res.status(200).json(examCell);
  } catch (error) {
    console.error("Exam Cell Fetch Error:", error);
    res.status(500).json({
      message: "Server error"
    });
  }
};

export const getEstateOffice = async (req, res) => {
  try {
    const data = await EstateOffice.findOne();
    res.json(data || { staff: [] });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};