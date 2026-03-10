import mongoose from "mongoose";

const sportsSchema = new mongoose.Schema({}, { strict: false });

const Sports = mongoose.model("Sports", sportsSchema, "sports");

export default Sports;