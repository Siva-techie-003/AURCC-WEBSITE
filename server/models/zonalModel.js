import mongoose from "mongoose";

const zonalSchema = new mongoose.Schema({
  description: [String],
  zoneListPDF: String,
  staff: [
    {
      name: String,
      designation: String,
      image: String
    }
  ]
});

export default mongoose.model("Zonal", zonalSchema);