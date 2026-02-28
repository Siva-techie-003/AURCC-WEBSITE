import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    image: String,
    description: [String],
    vision: String,
    mission: [String],
    courses_offered: [String],

    faculty: {
      hod_desk: [Object],
      assistant_professors: [Object]
    },

    admin_staff: [Object],
    achievements: [Object],
    facility: [Object],
    research_and_publications: [Object],
    events: [Object]
  },
  { timestamps: true }
);

export default mongoose.model("Department", departmentSchema);
