import LatestNews from "../models/latestNewsModel.js";
import DeanDesk from "../models/deanDeskModel.js";
import NewsAdmissions from "../models/newsAdmissionsModel.js";
import EventsScholarships from "../models/eventsScholarshipsModel.js";

export const getHomeData = async (req, res) => {
  try {
    const [latestNews, deanDesk, newsAdmissions, eventsScholarships] = await Promise.all([
      LatestNews.find().sort({ createdAt: -1 }),
      DeanDesk.findOne(),
      NewsAdmissions.find().sort({ createdAt: -1 }),
      EventsScholarships.find().sort({ createdAt: -1 })
    ]);

    res.json({
      latestNews: latestNews || [],
      deanDesk: deanDesk || null,
      newsAdmissions: newsAdmissions || [],
      eventsScholarships: eventsScholarships || []
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
