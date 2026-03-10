import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
  name: String,
  position: String,
  image: String
});

const paceSchema = new mongoose.Schema({
  description: String,
  staff: [staffSchema],
  contact: {
    email: String,
    phone: String,
    website: String
  }
});

export default mongoose.model("pace", paceSchema);