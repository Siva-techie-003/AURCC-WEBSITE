import mongoose from "mongoose";

const estateStaffSchema = new mongoose.Schema({
  name: String,
  designation: String,
  email: String,
  image: String
});

const estateOfficeSchema = new mongoose.Schema({
  staff: [estateStaffSchema]
});

export default mongoose.model("EstateOffice", estateOfficeSchema, "estate_office");