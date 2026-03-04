import mongoose from "mongoose";

const OfficeBearerSchema = new mongoose.Schema({
  name: String,
  position: String,
  email_id: String,
  image: String
});

const ExamCellSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true
    },
    services: {
      type: [String],
      default: []
    },
    office_bearers: {
      type: [OfficeBearerSchema],
      default: []
    }
  },
  { collection: "examcells" } // 👈 IMPORTANT
);

export default mongoose.model("ExamCell", ExamCellSchema);