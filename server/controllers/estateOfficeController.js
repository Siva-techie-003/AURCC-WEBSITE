import EstateOffice from "../models/EstateOfficeStaff.js";

export const getEstateOffice = async (req, res) => {
  try {
    const data = await EstateOffice.findOne();
    res.json(data || { staff: [] });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};