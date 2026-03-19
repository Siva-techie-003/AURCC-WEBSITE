import Admission from "../models/Admission.js";

export const getAdmission = async (req, res) => {
  try {

    const admission = await Admission.findOne();

    res.json(admission);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }
};