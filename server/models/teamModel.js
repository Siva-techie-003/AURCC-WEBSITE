import mongoose from "mongoose";

const facultySchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, default: "" },
  dept: { type: String, default: "" },
  image: { type: String, default: "" }
});

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, default: "" },
  image: { type: String, default: "" },
  linkedin: { type: String, default: "" },
  portfolio: { type: String, default: "" }
});

const teamSchema = new mongoose.Schema(
  {
    faculty: [facultySchema],
    members: [memberSchema]
  },
  { collection: "team", timestamps: true }
);

export default mongoose.model("Team", teamSchema);

