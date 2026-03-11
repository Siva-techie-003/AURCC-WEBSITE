import Pace from "../models/paceModel.js";

export const getPace = async (req, res) => {
  try {
    const pace = await Pace.findOne();
    res.json(pace);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};