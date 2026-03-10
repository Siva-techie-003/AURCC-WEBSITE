import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
  si_no: Number,
  name: String,
  designation: String,
  image: String,
});

const placementCellSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    recruitment: String,
    cuic: String,
    our_recruiters: String,
    placement_brouchure: String,
    placed_students: String,
    staff_members: [staffSchema],
  },
  { collection: "placement_cell" } // 👈 collection name in Atlas
);

const PlacementCell = mongoose.model("PlacementCell", placementCellSchema);

export default PlacementCell;