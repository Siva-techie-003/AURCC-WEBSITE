import AicteMoe from "../models/AicteMoe.js";

export const getAicteData = async (req, res) => {
  try {
    const data = await AicteMoe.findOne();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};