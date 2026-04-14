import BISClub from "../models/bisClubModel.js";

export const getBISClub = async (req, res) => {
  try {
    const data = await BISClub.findOne();

    if (!data) {
      // Return default template data if database is empty
      return res.json({
        name: "BUREAU OF INDIAN STANDARDS CLUB",
        description: "The BIS Club aims to promote standards and quality consciousness among students. It serves as a platform to understand the importance of standardization in various industries and daily life.",
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
