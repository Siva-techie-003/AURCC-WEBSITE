import mongoose from "mongoose";
import dotenv from "dotenv";
import Department from "./models/Department.js";

dotenv.config();

const updateSH = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    const description = [
      "The Department of Science and Humanities serves as the bedrock of our engineering institution, fostering the intellectual and analytical foundation upon which all future engineers are built. The department is a vibrant, multidisciplinary hub comprised of dedicated faculty from the core scientific disciplines including Mathematics, Physics, Chemistry alongside the essential humanities such as English and Tamil. The primary mission is to transcend traditional theoretical instruction, creating a dynamic learning environment where fundamental scientific principles are rigorously taught and seamlessly connected to practical engineering applications. In addition, students are motivated and groomed to enhance their critical thinking skills, problem-solving aptitude and scientific temperament necessary to not only excel in their core engineering curriculum but also to innovate and adapt in a rapidly evolving technological landscape.",
      "Beyond the technical acumen, it is believed that the most impactful engineers are those who possess a profound understanding of the human context in which technology operates. The department is pivotal in nurturing the whole engineer, emphasizing the development of essential professional skills like effective communication, ethical reasoning, and collaborative teamwork. Through courses in the Humanities and Social Sciences the students are encouraged to think broadly, consider diverse perspectives and understand the societal and global implications of their work. We strive to instill a sense of social responsibility and a lifelong love for learning, ensuring our graduates are not just proficient technologists, but also thoughtful leaders and global citizens ready to shape a better future."
    ];

    const vision = "To be a premier center of academic excellence that nurtures scientifically adept, analytically proficient, and ethically grounded engineers, who are empowered to drive innovation and address complex global challenges with a profound understanding of the human and social dimensions of technology.";

    const mission = [
      "To Build a Strong Foundational Core: To deliver rigorous and application-oriented education in Basic Sciences (Mathematics, Physics, Chemistry) and Humanities (English), equipping students with the critical thinking, problem-solving, and analytical skills essential for mastering advanced engineering disciplines.",
      "To Develop Holistic Professionals: To foster effective communication, collaborative teamwork, ethical reasoning, and leadership qualities through a dynamic curriculum that integrates Humanities and Social Sciences with technical education.",
      "To Bridge Theory with Practice: To promote an interdisciplinary approach by encouraging research, project-based learning, and industrial collaborations that demonstrate the practical relevance of Science and Humanities in real-world engineering contexts.",
      "To Cultivate Lifelong Learners: To instill a spirit of intellectual curiosity, adaptability, and social responsibility, inspiring students to become empathetic leaders and conscientious global citizens who contribute meaningfully to society and sustainable development."
    ];

    const p1 = "Greetings and a warm welcome to the Department of Science and Humanities at Anna University Regional Campus Coimbatore! As the foundational pillar of engineering education, the department is privileged to shape the intellectual and ethical development of every student who walks through our doors. The Department of Science and Humanities is a vibrant multidisciplinary hub comprising expert faculty from Mathematics, Physics, Chemistry, English and Tamil all united by a shared commitment to academic excellence. The primary mission is to build a strong foundation in fundamental Sciences while simultaneously nurturing essential communication skills, critical thinking and ethical values. We believe the first year of engineering is not merely a transition but a transformative journey where young minds develop the mindset, analytical abilities and motivation to become future innovators and responsible citizens.";
    const p2 = "At our department, we strive to create a dynamic learning environment that seamlessly bridges theoretical knowledge with practical application. Our well-equipped laboratories, includes Physics, Chemistry and Language Labs are designed to promote experiential learning and research orientation. The students are encouraged to explore, experiment and evolve, fostering a spirit of intellectual curiosity and a lifelong passion for learning. Through an integrated approach that emphasizes both academic rigor and personal growth, it is aimed to instill professional integrity, social responsibility, and a global perspective in our students. We invite you to make the most of the opportunities for learning and personal development that our department provides, and look forward to partnering with you on this exciting academic journey.";

    const updatedDept = await Department.findOneAndUpdate(
      { address: "science-and-humanities" }, // Try address first
      { description, vision, mission, p1, p2 },
      { new: true }
    );

    if (updatedDept) {
      console.log("Successfully updated Department by address 'science-and-humanities'");
    } else {
      const updatedDept2 = await Department.findOneAndUpdate(
        { name: "Science and Humanities" },
        { description, vision, mission, p1, p2 },
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
