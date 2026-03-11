import Administration from "../models/Administration.js";

export const getAdministration = async (req, res) => {
  try {
    const data = await Administration.findOne();

    if (!data) {
      return res.status(404).json({ message: "No administration data found" });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};