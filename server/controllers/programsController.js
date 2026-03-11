import ProgramsOffered from "../models/Programsoffered.js";

export const getProgramsOffered = async (req, res) => {
  try {
    const data = await ProgramsOffered.findOne();

    if (!data) {
      return res.status(404).json({ message: "Programs data not found" });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};