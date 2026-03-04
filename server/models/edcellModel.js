import mongoose from "mongoose";

/* Sub-schemas */
const KeyActivitySchema = new mongoose.Schema(
  {
    name: String,
    location: String,
    details: String
  },
  { _id: false }
);

const OfficeBearerSchema = new mongoose.Schema(
  {
    position: String,
    name: String,
    email: String,
    organization: String,
    image: String
  },
  { _id: false }
);

const EdCellSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    description: {
      "ED cell": String,
      objectives: [String],
      key_activities: [KeyActivitySchema]
    },

    MOU: [String],

    links: [String],

    office_bearers: [OfficeBearerSchema]
  },
  { timestamps: true }
);

export default mongoose.model("EdCell", EdCellSchema);