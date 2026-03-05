import mongoose from "mongoose";

const ProgramsOfferedSchema = new mongoose.Schema(
  {
    UG_programmes: [
      {
        sno: Number,
        course: String,
        intake: Number
      }
    ],
    PG_programmes: [
      {
        sno: Number,
        department: String,
        course: String,
        intake: Number
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model(
  "ProgramsOffered",
  ProgramsOfferedSchema,
  "programs_offered" // 👈 collection name
);