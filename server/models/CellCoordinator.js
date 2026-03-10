import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  name: String,
  photo: String
}, { _id: false });

const centreSchema = new mongoose.Schema({
  centre: String,
  members: [memberSchema]
}, { _id: false });

const cellCoordinatorSchema = new mongoose.Schema({
  centres: [centreSchema]
});

export default mongoose.model(
  "CellCoordinator",
  cellCoordinatorSchema,
  "cell_coordinators"
);