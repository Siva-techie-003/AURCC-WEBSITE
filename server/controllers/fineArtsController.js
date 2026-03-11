import FineArtsClub from "../models/fineArtsModel.js";

export const getFineArtsClub = async (req, res) => {
  try {
    const data = await FineArtsClub.findOne();

    if (!data) {
      return res.status(404).json({ message: "Fine Arts data not found" });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};