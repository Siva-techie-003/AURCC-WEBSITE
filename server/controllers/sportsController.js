import Sports from "../models/sportsModel.js";

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