import NSS from "../models/nssModel.js";

export const getNSS = async (req, res) => {
  try {
    const nssData = await NSS.findOne();

    if (!nssData) {
      return res.status(404).json({ message: "NSS data not found" });
    }

    res.json(nssData);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};