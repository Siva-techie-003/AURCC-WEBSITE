import SiteSettings from "../models/siteSettingsModel.js";

export const getSiteSettings = async (req, res) => {
  try {
    const settings = await SiteSettings.findOne();
    if (!settings) {
      return res.status(404).json({ message: "Site settings not found" });
    }
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
