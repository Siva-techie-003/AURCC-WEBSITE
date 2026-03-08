import mongoose from "mongoose";

const alumniSchema = new mongoose.Schema(
  {
    notableAlumni: String,
    departments: Object
  },
  { collection: "alumni" }
);

export default mongoose.model("Alumni", alumniSchema);