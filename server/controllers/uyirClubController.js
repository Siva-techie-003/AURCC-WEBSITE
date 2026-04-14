import UyirClub from "../models/uyirClubModel.js";

export const getUyirClub = async (req, res) => {
  try {
    const data = await UyirClub.findOne();

    if (!data) {
      // Return default template data if database is empty
      return res.json({
        name: "UYIR CLUB",
        description: "The Uyir Club is dedicated to celebrating life, promoting well-being, and creating a positive impact on society through various service-oriented and cultural activities.",
        office_bearers: [],
        Coordinator: {
          Name: "TBD",
          Designation: "Coordinator",
          Email: "coordinator@aurcc.ac.in",
          Image: "placeholder.webp"
        }
      });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
