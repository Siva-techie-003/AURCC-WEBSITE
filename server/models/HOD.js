import mongoose from "mongoose";

const hodSchema = new mongoose.Schema({
  departments: [
    {
      name: String,
      department: String,
      photo: String
    }
  ]
});

export default mongoose.model("HOD", hodSchema);