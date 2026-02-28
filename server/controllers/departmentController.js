import Department from "../models/Department.js";

// GET all departments
export const getDepartments = async (req, res) => {
  const data = await Department.find();
  res.json(data);
};

// GET department by address
export const getDepartmentByAddress = async (req, res) => {
  const dept = await Department.findOne({ address: req.params.address });
  if (!dept) {
    return res.status(404).json({ message: "Department not found" });
  }
  res.json(dept);
};

// POST new department
export const createDepartment = async (req, res) => {
  const dept = await Department.create(req.body);
  res.status(201).json(dept);
};

// UPDATE department
export const updateDepartment = async (req, res) => {
  const updated = await Department.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};
