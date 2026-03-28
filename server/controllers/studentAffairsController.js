import StudentAffairs from "../models/studentAffairsModel.js";

export const getStudentAffairs = async (req, res) => {
  try {
    const data = await StudentAffairs.findOne();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};