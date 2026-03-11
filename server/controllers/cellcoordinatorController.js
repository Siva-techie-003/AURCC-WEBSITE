import CellCoordinator from "../models/CellCoordinator.js";

export const getCellCoordinators = async (req, res) => {
  try {
    const doc = await CellCoordinator.findOne();

    res.json({
      centres: doc ? doc.centres : []
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};