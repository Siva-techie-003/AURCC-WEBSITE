import Team from "../models/teamModel.js";

const initialFaculty = [
  {
    name: "Dr. J. Preethi",
    role: "Assistant Professor",
    dept: "Department of CSE",
    image: "/preethi.webp"
  },
  {
    name: "Dr. M. Newlin Rajkumar",
    role: "Assistant Professor",
    dept: "Department of EEE",
    image: "/newlin.webp"
  },
  {
    name: "Mr. S. Benedict",
    role: "Professional Assistant - I",
    dept: "Department of CSE",
    image: "/BENEDICT.webp"
  },
  {
    name: "Ms. T. Mohanapriya",
    role: "Professional Assistant - II",
    dept: "Department of CSE",
    image: "/mohanapriya.jpeg"
  }
];

const initialMembers = [
  {
    name: "Mr. E . Siva",
    role: "Team Lead and Deployment Engineer",
    image: "/siva.png",
    linkedin: "https://www.linkedin.com/in/siva-e/",
    portfolio: ""
  },
  {
    name: "Mr. G . Dhivakar",
    role: "Frontend and SEO Professional",
    image: "/dhivakar.webp",
    linkedin: "https://www.linkedin.com/in/dhivakar-g/",
    portfolio: ""
  },
  {
    name: "Mr. V . Anbu Mani",
    role: "Database Developer",
    image: "/anbumani.jpeg",
    linkedin: "https://www.linkedin.com/in/anbumani006/",
    portfolio: ""
  },
  {
    name: "Mr. S . Santhosh",
    role: "Backend Developer",
    image: "/santhosh.jpeg",
    linkedin: "https://www.linkedin.com/in/callsanthosh/",
    portfolio: ""
  },
  {
    name: "Mr. P . Suresh Krishna",
    role: "Frontend Developer",
    image: "/suresh.png",
    linkedin: "https://www.linkedin.com/in/suresh-krishna-p/",
    portfolio: ""
  },
  {
    name: "Mr. R . Sathyamoorthy",
    role: "Visual and UI/UX Designer",
    image: "/sathya.jpeg",
    linkedin: "https://www.linkedin.com/in/sathyamoorthy-tech/",
    portfolio: ""
  }
];

export const getTeam = async (req, res) => {
  try {
    let team = await Team.findOne();
    if (!team) {
      team = await Team.create({
        faculty: initialFaculty,
        members: initialMembers
      });
    }
    res.json(team);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const updateTeam = async (req, res) => {
  try {
    const { faculty, members } = req.body;
    let team = await Team.findOne();
    if (!team) {
      team = new Team({ faculty, members });
    } else {
      if (faculty) team.faculty = faculty;
      if (members) team.members = members;
    }
    const updated = await team.save();
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error updating team", error: error.message });
  }
};

