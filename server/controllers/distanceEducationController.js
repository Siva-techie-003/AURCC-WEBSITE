import DistanceEducation from "../models/distanceEducationModel.js";

export const getDistanceEducation = async (req, res) => {
  try {
    const data = await DistanceEducation.findOne();

    if (!data) {
      return res.status(404).json({ message: "No data found" });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};