import CellCoordinator from "../models/CellCoordinator.js";
import Department from "../models/Department.js";

const cleanName = (name) => {
  if (!name) return "";
  let str = name.toLowerCase()
    .replace(/^(dr|mr|mrs|ms)\.?\s+/g, "")
    .replace(/^(dr|mr|mrs|ms)\./g, ""); // e.g. dr.preethi

  // Replace spelling variants
  str = str.replace(/kandhavel/g, "kanthavel")
    .replace(/babitha/g, "bapitha");

  // Replace all punctuation with space
  str = str.replace(/[^a-z0-9]/g, " ");

  // Remove standalone single letters (initials)
  str = str.replace(/\b[a-z]\b/g, " ");

  // Remove all spaces
  return str.replace(/\s+/g, "");
};

export const getCellCoordinators = async (req, res) => {
  try {
    const doc = await CellCoordinator.findOne();
    const departments = await Department.find();

    // Build a map of cleanName -> position
    const positionMap = new Map();
    departments.forEach(dept => {
      // Check hod_desk
      if (dept.faculty?.hod_desk) {
        dept.faculty.hod_desk.forEach(staff => {
          if (staff && staff.name) {
            positionMap.set(cleanName(staff.name), staff.position);
          }
        });
      }
      // Check assistant_professors
      if (dept.faculty?.assistant_professors) {
        dept.faculty.assistant_professors.forEach(staff => {
          if (staff && staff.name) {
            positionMap.set(cleanName(staff.name), staff.position);
          }
        });
      }
      // Check admin_staff
      if (dept.admin_staff) {
        dept.admin_staff.forEach(staff => {
          if (staff && staff.name) {
            positionMap.set(cleanName(staff.name), staff.position);
          }
        });
      }
    });

    // Map centres and add position to each member
    let centres = [];
    if (doc && doc.centres) {
      centres = doc.centres.map(centre => {
        const plainCentre = centre.toObject ? centre.toObject() : JSON.parse(JSON.stringify(centre));
        plainCentre.members = plainCentre.members.map(member => {
          const nameKey = cleanName(member.name);
          let position = positionMap.get(nameKey) || "";
          if (nameKey === "preethi" && !position) {
            position = "Assistant Professor (Selection Grade)";
          }

          if (
            position.includes("Head of The Department - Computer Science and Engineering") ||
            position.includes("DEAN and Head of Department - Master of Business Administration") ||
            position.includes("Head of The Department - Science and Humanities") ||
            position.startsWith("Head of The Department") ||
            position.includes("Head of Department")
          ) {
            position = "Associate Professor";
          }

          return {
            ...member,
            position: position
          };
        });
        return plainCentre;
      });
    }

    res.json({
      centres
    });
  } catch (err) {
    console.error("Error in getCellCoordinators:", err);
    res.status(500).json({ error: "Server error" });
  }
};