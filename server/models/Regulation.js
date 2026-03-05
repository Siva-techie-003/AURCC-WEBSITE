import mongoose from "mongoose";

const regulationItemSchema = new mongoose.Schema({
  "S.No": Number,
  "Regulation": String,
  "PDF Link": String
}, { _id: false });

const regulationSchema = new mongoose.Schema({
  regulations: [regulationItemSchema]
});

export default mongoose.model(
  "Regulation",
  regulationSchema,
  "regulations"
);