import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
  sno: Number,
  name: String,
  post: String,
  image: String
});

const studentAffairsSchema = new mongoose.Schema({
  description: [String],

  reAdmission: {
    type: String
  },

  scholarship: {
    description: String,
    list: [String]
  },

  feesDetails: String,

  staff: [staffSchema],

  contact: String
}, { timestamps: true });

export default mongoose.model("StudentAffairs", studentAffairsSchema, "student_affairs");