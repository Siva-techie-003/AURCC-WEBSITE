import EdCell from "../models/edcellModel.js";

export const getEdCell = async (req, res) => {
  try {
    const edCell = await EdCell.findOne();

    if (!edCell) {
      return res.status(404).json({ message: "ED Cell data not found" });
    }

    res.json(edCell);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};