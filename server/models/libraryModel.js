import mongoose from "mongoose";

const librarySchema = new mongoose.Schema({}, { strict: false });

const Library = mongoose.model("Library", librarySchema, "libraries");

export default Library;