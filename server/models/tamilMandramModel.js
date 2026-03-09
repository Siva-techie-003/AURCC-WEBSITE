import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema({
  event: String,
  organized_by: String,
  name: String,
  date: String,
  awards: String
});

const tamilMandramSchema = new mongoose.Schema({
  name: String,
  image: String,
  image1: String,
  முகப்பு: String,
  நிகழ்வுகள்: [String],

  பொறுப்பாளர்: {
    அவைத்தலைவர்: {
      பெயர்: String,
      அவர்களின்_மின்னஞ்சல்: String,
      photo: String
    }
  },

  achievements: [achievementSchema]

}, { collection: "tamilmandrams" });

export default mongoose.model("TamilMandram", tamilMandramSchema);