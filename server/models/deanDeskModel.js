import mongoose from "mongoose";

const deanDeskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  credentials: { type: String, required: true },
  designation: { type: String, required: true },
  quote: { type: String, required: true },
  paragraphs: [{ type: String }],
  image: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model("DeanDesk", deanDeskSchema, "dean_desk");
