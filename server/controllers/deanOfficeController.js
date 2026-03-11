import DeanOffice from "../models/DeanOffice.js";

export const getDeanOffice = async (req, res) => {
  try {
    const doc = await DeanOffice.findOne();

    res.json({
      staff: doc?.staff || []
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};