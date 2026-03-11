import Hod from "../models/HOD.js";

// GET all HODs
export const getHods = async (req, res) => {
  const data = await Hod.find();
  res.json(data);
};

// GET HOD by department
export const getHodByDepartment = async (req, res) => {
  const hod = await Hod.findOne({ department: req.params.department });

  if (!hod) {
    return res.status(404).json({ message: "HOD not found" });
  }

  res.json(hod);
};

// POST new HOD
export const createHod = async (req, res) => {
  const hod = await Hod.create(req.body);
  res.status(201).json(hod);
};

// UPDATE HOD
export const updateHod = async (req, res) => {
  const updated = await Hod.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updated);
};