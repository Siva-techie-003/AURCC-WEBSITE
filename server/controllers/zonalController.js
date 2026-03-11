import Zonal from "../models/zonalModel.js";

export const getZonal = async (req, res) => {
  try {
    const zonal = await Zonal.findOne();
    res.json(zonal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};