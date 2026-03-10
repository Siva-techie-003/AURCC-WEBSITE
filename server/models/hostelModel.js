import mongoose from "mongoose";

const hostelSchema = new mongoose.Schema({}, { strict: false });

const Hostel = mongoose.model("Hostel", hostelSchema, "hostel");

export default Hostel;