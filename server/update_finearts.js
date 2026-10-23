import connectDB from "./config/db.js";
import SiteSettings from "./models/siteSettingsModel.js";

const updateFineArts = async () => {
  try {
    await connectDB();
    const fineArtsGallery = [
      "/public/fineart_club/1.png",
      "/public/fineart_club/2.png",
      "/public/fineart_club/3.png",
      "/public/fineart_club/4.png",
      "/public/fineart_club/5.png",
      "/public/fineart_club/6.png",
      "/public/fineart_club/7.png",
      "/public/fineart_club/8.png",
      "/public/fineart_club/9.png",
      "/public/fineart_club/10.png",
      "/public/fineart_club/11.png",
      "/public/fineart_club/12.png",
      "/public/fineart_club/13.png",
      "/public/fineart_club/14.png",
      "/public/fineart_club/15.png",
      "/public/fineart_club/16.png",
      "/public/fineart_club/17.png",
      "/public/fineart_club/18.jpg",
      "/public/fineart_club/19.jpg",
      "/public/fineart_club/20.jpg",
      "/public/fineart_club/Picture4.jpg",
      "/public/fineart_club/Picture5.jpg",
      "/public/fineart_club/Picture6.jpg",
      "/public/fineart_club/Picture7.jpg",
      "/public/fineart_club/Picture8.jpg",
      "/public/fineart_club/Picture9.jpg",
      "/public/fineart_club/Picture11.jpg",
      "/public/fineart_club/Picture12.jpg",
      "/public/fineart_club/Picture13.jpg",
      "/public/fineart_club/Picture14.jpg",
      "/public/fineart_club/Picture15.jpg"
    ];

    const res = await SiteSettings.updateOne({}, { $set: { fineArtsGallery } });
    console.log("Update result:", res);
    const s = await SiteSettings.findOne();
    console.log("New FineArts count in DB:", s?.fineArtsGallery?.length);
    process.exit(0);
  } catch (err) {
    console.error("Error updating fine arts in DB:", err);
    process.exit(1);
  }
};

updateFineArts();

