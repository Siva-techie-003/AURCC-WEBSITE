import Affiliation from "../models/affiliationModel.js";

export const getOffice = async (req, res) => {
  try {
    const data = await Affiliation.findOne();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
