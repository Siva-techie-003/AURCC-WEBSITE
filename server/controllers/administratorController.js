import Administrator from "../models/administratorModel.js";

export const getAdministrators = async (req, res) => {
  try {
    const doc = await Administrator.findOne();

    if (!doc || !doc.administrator) {
      return res.status(404).json([]);
    }

    res.json(doc.administrator);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};