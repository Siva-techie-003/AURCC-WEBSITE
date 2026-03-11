import ExamCell from "../models/ExaminationCell.js";

export const getExamCell = async (req, res) => {
  try {
    const examCell = await ExamCell.findOne();

    if (!examCell) {
      return res.status(404).json({ message: "No Exam Cell data found" });
    }

    res.json(examCell);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};