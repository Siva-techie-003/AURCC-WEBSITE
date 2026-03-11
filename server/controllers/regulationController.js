import Regulation from "../models/Regulation.js";

export const getRegulations = async (req, res) => {
  try {
    const data = await Regulation.findOne();

    if (!data) {
      return res.status(404).json({ message: "Regulation data not found" });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};