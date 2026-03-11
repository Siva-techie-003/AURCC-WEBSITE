import Admission from "../models/Admission.js";

export const getAdmission = async (req, res, next) => {
  try {
    const admission = await Admission.find();
    res.json(admission);
  } catch (error) {
    next(error);
  }
};