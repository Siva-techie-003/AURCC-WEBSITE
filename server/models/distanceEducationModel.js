import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
  name: String,
  position: String,
  department: String,
  university: String,
  address: String,
  image: String
});

const distanceEducationSchema = new mongoose.Schema({
  name: String,
  description: String,
  programs: [String],
  specialization: [String],
  staff: [staffSchema]
});

export default mongoose.model(
  "DistanceEducation",
  distanceEducationSchema,
  "distances" // collection name
);