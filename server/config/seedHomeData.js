import LatestNews from "../models/latestNewsModel.js";
import DeanDesk from "../models/deanDeskModel.js";
import NewsAdmissions from "../models/newsAdmissionsModel.js";
import EventsScholarships from "../models/eventsScholarshipsModel.js";

const tickerItems = [
  {
    name: "Anna University Grievances Cell",
    url: "https://www.annauniv.edu/auccgrcell/",
  },
  {
    name: "AICTE Feedback Link",
    url: "https://www.aicte.gov.in/feedback/index.php",
  },
];

const deanDeskData = {
  name: "Dr. M. Saravanakumar",
  credentials: "MBA., MS(IT)., M.Phil., Ph.D.,",
  designation: "Dean, Anna University Regional Campus Coimbatore",
  quote: "Empowering the next generation of innovators and leaders.",
  paragraphs: [
    "Welcome to Anna University. It gives me immense pleasure to greet you as part of an institution that has long been a beacon of excellence in technological education and research. At Anna University, we are committed to fostering a culture of innovation, integrity, and academic rigor. Our legacy is built upon a strong foundation of knowledge, discipline, and a relentless pursuit of progress.",
    "We take pride in offering a dynamic learning environment that encourages students to explore, question, and create. Our distinguished faculty members, state-of-the-art infrastructure, and industry-oriented curriculum ensure that our students are well-equipped to meet the challenges of a rapidly evolving world. We continuously strive to bridge the gap between theoretical knowledge and practical application, empowering our students to become competent professionals.",
    "At the heart of our mission lies the goal of nurturing visionary leaders who can contribute meaningfully to society. We emphasize not only technical proficiency but also ethical values, critical thinking, and leadership skills. Through various academic and co-curricular initiatives, we aim to shape individuals who are innovative, socially responsible, and globally competitive.",
    "As you embark on your journey with us, I encourage you to make the most of the opportunities available at Anna University. Engage actively in your academic pursuits, participate in collaborative learning, and strive for excellence in all that you do. I wish you a rewarding and transformative experience that will prepare you for a bright and successful future."
  ],
  image: "/DEAN_DESK.jpeg"
};

const newsData = [
  {
    name: "CMRG 250509 - Temporary Position of Project Assistant - Dept. of EEE - Regional Campus Coimbatore-Last Date: 09.05.2026",
    url: "/forms/CMRG 250509 - Temporary Position of Project Assistant - Dept. of EEE - Regional Campus Coimbatore.pdf",
  },
  {
    name: "CMRG 250260 - Temporary Position of Project Assistant - Dept. of EEE - Regional Campus Coimbatore",
    url: "/forms/CMRG 250260 - Temporary Position of Project Assistant - Dept. of EEE - Regional Campus Coimbatore.pdf",
  },
  {
    name: "On Going Placement Drives and Drives Completed - 2025 Batch",
    url: "/forms/Placed 2025.jpg",
  },
  {
    name: "Engagement for Project Assistant(Pr.A1) CMRG project at Department of Mechanical Engineering - AURCC",
    url: "http://aurcc.ac.in/loginpage/loginpage/uploads/388.pdf",
  },
  {
    name: "Access to Anna University E-Resource Consortium",
    url: "/forms/Access to Anna University E-Resource Consortium.pdf",
  },
  {
    name: "Fees for UG / PG Students - 2024 - 2025",
    url: "/forms/Fees for UG - PG Students - 2024 - 2025.pdf",
  },
  {
    name: "UG / PG Hostel Fee Structure for New Admission - 2024 - 2025",
    url: "/forms/UG - PG Hostel Fee Structure for New Admission - 2024 - 2025.pdf",
  },
  {
    name: "SCOUT(Scholarship for Outstanding Undergraduate talent) Winners in Naan Mudhalvan Scheme",
    url: "/forms/SCOUT(Scholarship for Outstanding Undergraduate talent) Winners in Naan Mudhalvan Scheme.jpeg",
  },
  {
    name: "QS WORLD UNIVERSITY RANKINGS - 2025 - ANNA UNIVERSITY 383rd RANK",
    url: "/forms/QS WORLD UNIVERSITY RANKINGS - 2025 - ANNA UNIVERSITY 383rd RANK.jpg",
  },
  {
    name: "Placement Statistics - 2020 Batch Students",
    url: "http://aurcc.ac.in/loginpage/loginpage/uploads/373.pdf",
  },
  {
    name: "Placed Students (Batch - 2020 - 2024 )",
    url: "http://aurcc.ac.in/loginpage/loginpage/uploads/Placed.jpeg",
  },
  {
    name: "JRF Application Form for MeitY Project",
    url: "http://aurcc.ac.in/loginpage/loginpage/uploads/370.pdf",
  },
];

const eventsData = [
  {
    name: "Graduation Day 2026 at AURCC",
    url: "/forms/Graduation Day 2026 at AURCC.pdf",
  },
  {
    name: "Bio Research Innovation Cell organises Two Days National level conclave on \"Innovations in Agri and Food Products\"",
    url: "/forms/Bio Research Innovation Cell organises Two Days National level conclave.pdf",
  },
  {
    name: "SC - ST Fresh Scholarship form - 2025-2026",
    url: "/forms/SC - ST Fresh Scholarship form - 2025-2026.pdf",
  },
  {
    name: "SC/ST/SCC Renewal Scholarship form - 2025-2026",
    url: "/forms/SC-ST-SCC Renewal Scholarship form - 2025-2026.pdf",
  },
  {
    name: "BC - MBC Fresh Scholarship form - 2025-2026",
    url: "/forms/BC - MBC Fresh Scholarship form - 2025-2026.pdf",
  },
  {
    name: "BC - MBC Renewal Scholarship form - 2025-2026",
    url: "/forms/BC - MBC Renewal Scholarship form - 2025-2026.pdf",
  },
  {
    name: "SC-ST Special Higher Education Scholarship 2022-23 (Hostelers)-UG",
    url: "/forms/SC-ST Special Higher Education Scholarship 2022-23 (Hostelers)-UG.pdf",
  },
  {
    name: "AICTE – SWANATH SCHOLARSHIP SCHEME FOR STUDENTS – 2021-22",
    url: "/forms/AICTE – SWANATH SCHOLARSHIP SCHEME FOR STUDENTS – 2021-22.pdf",
  },
  {
    name: "AICTE – PRAGATI SCHOLARSHIP SCHEME FOR GIRL STUDENTS - Degree - 2020-21",
    url: "/forms/AICTE – PRAGATI SCHOLARSHIP SCHEME FOR GIRL STUDENTS - Degree - 2020-21.pdf",
  },
  {
    name: "AICTE – SAKSHAM SCHOLARSHIP SCHEME FOR SPECIALLY-ABLED STUDENT (DEGREE) - 2020-21",
    url: "/forms/AICTE – SAKSHAM SCHOLARSHIP SCHEME FOR SPECIALLY-ABLED STUDENT (DEGREE) - 2020-21.pdf",
  },
  {
    name: "List of the Selected Students under AICTE-Pragati Scholarship Scheme(Degree) - 2020-21",
    url: "/forms/List of the Selected Students under AICTE-Pragati Scholarship Scheme(Degree) - 2020-21.pdf",
  },
  {
    name: "Scholarship - List of Beneficiaries",
    url: "/forms/Scholarship - List of Beneficiaries.pdf",
  },
];

export const seedHomeData = async () => {
  try {
    const latestNewsCount = await LatestNews.countDocuments();
    if (latestNewsCount === 0) {
      await LatestNews.insertMany(tickerItems);
      console.log("seeded latest news (tickerItems)");
    }

    const deanDeskCount = await DeanDesk.countDocuments();
    if (deanDeskCount === 0) {
      await DeanDesk.create(deanDeskData);
      console.log("seeded dean desk message");
    }

    const newsCount = await NewsAdmissions.countDocuments();
    if (newsCount === 0) {
      await NewsAdmissions.insertMany(newsData);
      console.log("seeded news & admissions list");
    }

    const eventsCount = await EventsScholarships.countDocuments();
    if (eventsCount === 0) {
      await EventsScholarships.insertMany(eventsData);
      console.log("seeded events & scholarships list");
    }
  } catch (err) {
    console.error("error seeding home page data:", err);
  }
};
