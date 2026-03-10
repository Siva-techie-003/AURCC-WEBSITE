import mongoose from "mongoose";

const AdmissionSchema = new mongoose.Schema(
  {
    name: String,
    description: Object,
    courses_offered: Object,
    eligibility_criteria: Object,
    staff: Array,
    contact_us: Object,
  },
  { strict: false }
);

export default mongoose.model("Admission", AdmissionSchema);