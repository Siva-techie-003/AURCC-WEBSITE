import mongoose from "mongoose";

const AicteMoeSchema = new mongoose.Schema({
  home: {
    objectives: [String],
    importantLinks: Object
  },

  circularsNotifications: Object,

  approvalLetters: Object
});

export default mongoose.model("AicteMoe", AicteMoeSchema, "aicte_moe");