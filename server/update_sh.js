import mongoose from "mongoose";
import dotenv from "dotenv";
import Department from "./models/Department.js";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, ".env") });

const updateSH = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    const description = [
      "The Department of Science and Humanities serves as the bedrock of our engineering institution, fostering the intellectual and analytical foundation upon which all future engineers are built. The department is a vibrant, multidisciplinary hub comprised of dedicated faculty from the core scientific disciplines including Mathematics, Physics, Chemistry alongside the essential humanities such as English and Tamil. The primary mission is to transcend traditional theoretical instruction, creating a dynamic learning environment where fundamental scientific principles are rigorously taught and seamlessly connected to practical engineering applications. In addition, students are motivated and groomed to enhance their critical thinking skills, problem-solving aptitude and scientific temperament necessary to not only excel in their core engineering curriculum but also to innovate and adapt in a rapidly evolving technological landscape.",
      "Beyond the technical acumen, it is believed that the most impactful engineers are those who possess a profound understanding of the human context in which technology operates. The department is pivotal in nurturing the whole engineer, emphasizing the development of essential professional skills like effective communication, ethical reasoning, and collaborative teamwork. Through courses in the Humanities and Social Sciences the students are encouraged to think broadly, consider diverse perspectives and understand the societal and global implications of their work. We strive to instill a sense of social responsibility and a lifelong love for learning, ensuring our graduates are not just proficient technologists, but also thoughtful leaders and global citizens ready to shape a better future."
    ];

    const vision = "To be a premier center of academic excellence that nurtures scientifically adept, analytically proficient, and ethically grounded engineers, who are empowered to drive innovation and address complex global challenges with a profound understanding of the human and social dimensions of technology.";

    const mission = [
      "To provide strong foundational education in Basic Sciences and Humanities, developing critical thinking and problem-solving skills.",
      "To nurture communication, teamwork, ethics, and leadership through integrated technical and humanities education.",
      "To connect theory with practice through interdisciplinary learning, research, projects, and industry collaboration.",
      "To foster lifelong learning, adaptability, social responsibility, and sustainable development."
    ];

    const p1 = "Greetings and a warm welcome to the Department of Science and Humanities at Anna University Regional Campus Coimbatore! As the foundational pillar of engineering education, the department is privileged to shape the intellectual and ethical development of every student who walks through our doors. The Department of Science and Humanities is a vibrant multidisciplinary hub comprising expert faculty from Mathematics, Physics, Chemistry, English and Tamil all united by a shared commitment to academic excellence. The primary mission is to build a strong foundation in fundamental Sciences while simultaneously nurturing essential communication skills, critical thinking and ethical values. We believe the first year of engineering is not merely a transition but a transformative journey where young minds develop the mindset, analytical abilities and motivation to become future innovators and responsible citizens.";
    const p2 = "At our department, we strive to create a dynamic learning environment that seamlessly bridges theoretical knowledge with practical application. Our well-equipped laboratories, includes Physics, Chemistry and Language Labs are designed to promote experiential learning and research orientation. The students are encouraged to explore, experiment and evolve, fostering a spirit of intellectual curiosity and a lifelong passion for learning. Through an integrated approach that emphasizes both academic rigor and personal growth, it is aimed to instill professional integrity, social responsibility, and a global perspective in our students. We invite you to make the most of the opportunities for learning and personal development that our department provides, and look forward to partnering with you on this exciting academic journey.";

    const facility = [
      {
        name: "CHEMISTRY LABORATORY",
        image: "chemistrylab.png",
        description: [
          "The Chemistry Laboratory at Anna University Regional Campus, Coimbatore, is equipped with sophisticated infrastructure and advanced research facilities. It promotes quality research, innovation, and interdisciplinary collaboration in science and technology.",
          "The laboratory provides practical training in physical chemistry, organic reactions, inorganic analysis, water technology, electrochemistry, and material characterization, strengthening students’ fundamental chemical knowledge.",
          "Students gain hands-on experience in handling laboratory glassware and instruments, preparing accurate chemical solutions, performing titrations, measuring reaction parameters, and analyzing experimental results.",
          "Practical sessions help students connect theoretical concepts with real-world chemical processes while developing observation, precise measurement, logical reasoning, and data interpretation skills.",
          "The laboratory fosters scientific curiosity, analytical thinking, safety awareness, and technical innovation. It equips students with a strong chemical foundation for interdisciplinary engineering applications and future professional careers."
        ]
      },
      {
        name: "PHYSICS LABORATORY",
        image: "phylab.png",
        description: [
          "The Physics Laboratory at Anna University Regional Campus, Coimbatore, provides an effective learning environment for understanding fundamental physical principles through experiments, observations, measurements, and practical analysis.",
          "The laboratory facilitates practical learning in mechanics, properties of matter, heat and thermodynamics, optics, electricity, and magnetism, enabling students to gain hands-on experience with scientific instruments and equipment.",
          "Students develop skills in accurate measurement, systematic observation, experimental data analysis, and error identification. These activities strengthen their logical thinking, problem-solving abilities, and scientific reasoning.",
          "The laboratory bridges theoretical knowledge and real-world applications by demonstrating the principles of physics underlying various technologies and engineering systems, thereby enhancing students’ academic and technical competencies.",
          "The Physics Laboratory fosters scientific curiosity, independent thinking, and experimental skills through structured practical sessions. It establishes a strong foundation in physics and prepares students to apply their knowledge effectively in engineering studies and future professional careers."
        ]
      }
    ];

    const updatedDept = await Department.findOneAndUpdate(
      { address: "science-and-humanities" }, // Try address first
      { description, vision, mission, p1, p2, facility },
      { new: true }
    );

    if (updatedDept) {
      console.log("Successfully updated Department by address 'science-and-humanities'");
    } else {
      const updatedDept2 = await Department.findOneAndUpdate(
        { name: "Science and Humanities" },
        { description, vision, mission, p1, p2, facility },
        { new: true }
      );
      if (updatedDept2) {
        console.log("Successfully updated Department by name 'Science and Humanities'");
      } else {
        console.log("Department not found.");
      }
    }
    
    process.exit(0);
  } catch (error) {
    console.error("Error updating department:", error);
    process.exit(1);
  }
};

updateSH();
