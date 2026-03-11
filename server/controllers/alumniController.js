import Alumni from "../models/alumniModel.js";

export const getAlumni = async (req, res) => {
  try {
    const data = await Alumni.findOne();

    if (!data) {
      return res.json({ notableAlumni: "", departments: {} });
    }

    res.json({
      notableAlumni: data.notableAlumni,
      departments: data.departments
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};