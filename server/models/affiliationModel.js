import mongoose from "mongoose";

/* Staff Schema */
const staffSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
    },
    position: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    image: {
      type: String, // image path like "staff/karthi.jpg"
    },
  },
  { _id: false }
);

/* Description Schema */
const descriptionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

/* Contact Schema */
const contactSchema = new mongoose.Schema(
  {
    office: String,
    address: String,
    phone: String,
    email: String,
  },
  { _id: false }
);

/* Main Affiliation Schema */
const affiliationSchema = new mongoose.Schema(
  {
    description: descriptionSchema,
    staff: [staffSchema],
    contact_details: contactSchema,
  },
  {
    timestamps: true,
  }
);

const Affiliation = mongoose.model("Affiliation", affiliationSchema);

export default Affiliation;