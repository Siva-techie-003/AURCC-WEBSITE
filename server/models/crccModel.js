import mongoose from "mongoose";

const supervisorSchema = new mongoose.Schema(
  {
    department: { type: String, required: true },

    phdCompletedFullTime: { type: Number, default: 0 },
    phdCompletedPartTime: { type: Number, default: 0 },

    phdRegisteredFullTime: { type: Number, default: 0 },
    phdRegisteredPartTime: { type: Number, default: 0 },

    completedFTPT: { type: Number, default: 0 },
    registeredFTPT: { type: Number, default: 0 },
    overallFTPT: { type: Number, default: 0 },
  },
  { _id: false }
);

const crccSchema = new mongoose.Schema(
  {
    description: {
      type: [String],
      required: true,
    },

    supervisors: {
      type: [supervisorSchema],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("CRCC", crccSchema);