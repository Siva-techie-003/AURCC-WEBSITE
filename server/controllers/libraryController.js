import Library from "../models/libraryModel.js";

export const getLibrary = async (req, res) => {
  try {
    const library = await Library.findOne();

    if (!library) {
      return res.status(404).json({ message: "Library data not found" });
    }

    res.json(library);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};