import CurriculumSyllabus from "../models/CurriculumSyllabus.js";

export const getCurriculumSyllabus = async (req, res) => {
  try {
    const data = await CurriculumSyllabus.findOne();

    if (!data) {
      return res.status(404).json({ message: "Curriculum data not found" });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};