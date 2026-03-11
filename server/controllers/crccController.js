import CRCC from "../models/crccModel.js";

export const getCRCC = async (req, res, next) => {
  try {
    const data = await CRCC.findOne();

    if (!data) {
      return res.status(404).json({ message: "CRCC data not found" });
    }

    res.json(data);
  } catch (error) {
    next(error);
  }
};