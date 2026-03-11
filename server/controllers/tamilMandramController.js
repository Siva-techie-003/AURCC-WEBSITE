import TamilMandram from "../models/tamilMandramModel.js";

export const getTamilMandram = async (req, res) => {
  try {
    const data = await TamilMandram.findOne();

    if (!data) {
      return res.status(404).json({ message: "No Tamil Mandram data found" });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};