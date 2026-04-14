import mongoose from "mongoose";

const officeBearerSchema = new mongoose.Schema({
  SL_NO: Number,
  Name: String,
  Designation: String,
  Department: String
});

const coordinatorSchema = new mongoose.Schema({
  Name: String,
  Designation: String,
  Department: String,
  University: String,
  Address: String,
  Mobile: String,
  Email: String,
  Image: String
});

const bisClubSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    office_bearers: [officeBearerSchema],
    Coordinator: coordinatorSchema
  },
  { collection: "bisclubs" }
);

export default mongoose.model("BISClub", bisClubSchema);
