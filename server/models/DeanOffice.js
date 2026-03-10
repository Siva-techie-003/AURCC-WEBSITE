import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
  name: String,
  position: String,
  image: String
});

const deanOfficeSchema = new mongoose.Schema({
  staff: [staffSchema]
});

export default mongoose.model("DeanOffice", deanOfficeSchema, "dean_office");