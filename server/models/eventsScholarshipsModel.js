import mongoose from "mongoose";

const eventsScholarshipsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model("EventsScholarships", eventsScholarshipsSchema, "events_scholarships");
