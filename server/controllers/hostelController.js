import Hostel from "../models/hostelModel.js";

export const getHostel = async (req, res) => {
  try {
    const hostel = await Hostel.findOne();

    if (!hostel) {
      return res.status(404).json({ message: "Hostel data not found" });
    }

    res.json(hostel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};