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
import Administrator from "../models/administratorModel.js";
import DeanOffice from "../models/DeanOffice.js";
import HOD from "../models/HOD.js";
import CellCoordinator from "../models/CellCoordinator.js";
import Administration from "../models/Administration.js";
import ProgramsOffered from "../models/Programsoffered.js";
import CurriculumSyllabus from "../models/CurriculumSyllabus.js";
import Regulation from "../models/Regulation.js";
import NSS from "../models/nssModel.js";
import TamilMandram from "../models/tamilMandramModel.js";
import FineArtsClub from "../models/fineArtsModel.js";
import Alumni from "../models/alumniModel.js";
import Library from "../models/libraryModel.js";
import Sports from "../models/sportsModel.js";
import Hostel from "../models/hostelModel.js";
import AicteMoe from "../models/AicteMoe.js";

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

export const getAdministrators = async (req, res) => {
  try {
    const doc = await Administrator.findOne(); // single document

    if (!doc || !doc.administrator) {
      return res.status(404).json([]);
    }

    // ✅ send ONLY array
    res.json(doc.administrator);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDeanOffice = async (req, res) => {
  try {
    const doc = await DeanOffice.findOne();

    res.json({
      staff: doc?.staff || []
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getHODs = async (req, res) => {
  try {
    const doc = await HOD.findOne();

    res.json({
      departments: doc?.departments || []
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getCellCoordinators = async (req, res) => {
  try {
    const doc = await CellCoordinator.findOne();

    res.json({
      centres: doc ? doc.centres : []
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getAdministration = async (req, res) => {
  try {
    const data = await Administration.findOne();

    if (!data) {
      return res.status(404).json({ message: "No administration data found" });
    }

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

export const getProgramsOffered = async (req, res) => {
  try {
    const data = await ProgramsOffered.findOne();

    if (!data) {
      return res.status(404).json({ message: "Programs data not found" });
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

export const getCurriculumSyllabus = async (req, res) => {
  try {
    const data = await CurriculumSyllabus.findOne();

    if (!data) {
      return res.status(404).json({ message: "Curriculum data not found" });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getRegulations = async (req, res) => {
  try {
    const data = await Regulation.findOne();

    if (!data) {
      return res.status(404).json({ message: "Regulation data not found" });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getNSS = async (req, res) => {
  try {
    const nssData = await NSS.findOne();

    if (!nssData) {
      return res.status(404).json({ message: "NSS data not found" });
    }

    res.status(200).json(nssData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getTamilMandram = async (req, res) => {
  try {

    const data = await TamilMandram.findOne();

    if (!data) {
      return res.status(404).json({ message: "No Tamil Mandram data found" });
    }

    res.json(data);

  } catch (error) {
    console.error("Error fetching Tamil Mandram:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getFineArtsClub = async (req, res) => {
  try {

    const data = await FineArtsClub.findOne();

    if (!data) {
      return res.status(404).json({ message: "Fine Arts data not found" });
    }

    res.json(data);

  } catch (error) {
    console.error("FineArts Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAlumni = async (req, res) => {
  try {

    const data = await Alumni.findOne();

    if (!data) {
      return res.json({ notableAlumni: "", departments: {} });
    }

    res.json({
      notableAlumni: data.notableAlumni,
      departments: data.departments
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getLibrary = async (req, res) => {
  try {

    const library = await Library.findOne();

    if (!library) {
      return res.status(404).json({ message: "Library data not found" });
    }

    res.json(library);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSports = async (req, res) => {
  try {

    const sports = await Sports.findOne();

    if (!sports) {
      return res.status(404).json({ message: "Sports data not found" });
    }

    res.json(sports);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getHostel = async (req, res) => {
  try {

    const hostel = await Hostel.findOne();

    if (!hostel) {
      return res.status(404).json({ message: "Hostel data not found" });
    }

    res.json(hostel);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAicteData = async (req, res) => {
  try {
    const data = await AicteMoe.findOne();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};