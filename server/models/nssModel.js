import mongoose from "mongoose";

const coordinatorSchema = new mongoose.Schema(
  {
    Name: String,
    Designation: String,
    Photo: String,
  },
  { _id: false }
);

const achievementSchema = new mongoose.Schema(
  {
    event: String,
    organized_by: String,
    name: String,
    date: String,
    awards: String,
  },
  { _id: false }
);

const nssSchema = new mongoose.Schema({
  name: String,
  description: String,
  activities: [String],
  nss_coordinator: {
    "Office Bearers": [coordinatorSchema],
  },
  achievements: [achievementSchema],
});

export default mongoose.model("NSS", nssSchema, "nss");