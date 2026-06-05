import mongoose from "mongoose";

const latestNewsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model("LatestNews", latestNewsSchema, "latest_news");
