import mongoose from "mongoose";

const StaffSchema = new mongoose.Schema({
  name: String,
  position: String,
  image: String,
  email: String
});

const SectionSchema = new mongoose.Schema({
  DEPUTY_MANAGER: [StaffSchema],
  STAFFS: [StaffSchema]
});

const AdministrationSchema = new mongoose.Schema({
  general_administration_i: {
    ESTABLISHMENT_SECTION: SectionSchema
  },
  general_administration_ii: {
    Purchase_and_Finance_Section: SectionSchema
  },
  general_administration_iii: {
    STUDENT_SECTION: SectionSchema
  }
});

export default mongoose.model(
  "Administration",
  AdministrationSchema,
  "administration" // 👈 EXACT collection name
);