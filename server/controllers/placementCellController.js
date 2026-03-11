import PlacementCell from "../models/placementcellModel.js";

export const getPlacementCell = async (req, res, next) => {
  try {
    const data = await PlacementCell.findOne();
    res.json(data);
  } catch (error) {
    next(error);
  }
};