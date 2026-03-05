import mongoose from "mongoose";

const administratorSchema = new mongoose.Schema({
  administrator: [
    {
      name: String,
      position: String,
      university: String,
      image: String
    }
  ]
});

export default mongoose.model("Administrator", administratorSchema);