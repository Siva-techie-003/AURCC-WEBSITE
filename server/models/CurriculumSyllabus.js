import mongoose from "mongoose";

const programmeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
}, { _id: false });

const curriculumSyllabusSchema = new mongoose.Schema({
  ug_programmes: [programmeSchema],
  pg_programmes: [programmeSchema]
}, { timestamps: true });

export default mongoose.model(
  "CurriculumSyllabus",
  curriculumSyllabusSchema,
  "curriculum_syllabus"
);