import mongoose from "mongoose";

const siteSettingsSchema = new mongoose.Schema(
  {
    logo: String,
    logo_new5: String,
    aurcc_tamil: String,
    nssLogo: String,
    stamp: String,
    defaultStaffAvatar: String,
    academicIcons: {
      cse: String,
      ece: String,
      eee: String,
      mech: String,
      mba: String,
      ai: String,
      vlsi: String,
      business_analytics: String
    },
    estateIcons: {
      construction: String,
      water: String,
      electrical: String,
      road: String,
      garden: String,
      facility: String,
      housekeeping: String,
      security: String
    },
    nssGallery: [String],
    bisGallery: [String],
    fineArtsGallery: [String]
  },
  { timestamps: true }
);

export default mongoose.model("SiteSettings", siteSettingsSchema);
