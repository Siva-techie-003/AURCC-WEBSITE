import mongoose from "mongoose";

const newsAdmissionsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model("NewsAdmissions", newsAdmissionsSchema, "news_admissions");
