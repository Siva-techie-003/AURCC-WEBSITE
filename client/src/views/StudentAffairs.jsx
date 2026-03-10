import React, { useState, useEffect, useRef } from "react";
import content from "../assets/student_affairs.json";
import "./StudentAffairs.css";

const StudentAffairs = () => {
  const backgroundImage = "/studentaffairs.webp";
  const [currentSection, setCurrentSection] = useState("description");

  const sectionRefs = {
    description: useRef(null),
    reAdmission: useRef(null),
    scholarships: useRef(null),
    fees: useRef(null),
    staff: useRef(null),
    contact: useRef(null),
  };

  const sections = [
    { key: "description", name: "Description" },
    { key: "reAdmission", name: "Re-Admission" },
    { key: "scholarships", name: "Scholarships" },
    { key: "fees", name: "Fees Details" },
    { key: "staff", name: "Administration Staff" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const el = sectionRefs[section.key].current;

        if (el) {
          const rect = el.getBoundingClientRect();

          if (rect.top <= 200 && rect.bottom > 200) {
            setCurrentSection(section.key);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (key) => {
    const el = sectionRefs[key].current;

    if (el) {
      const offset = el.offsetTop - 100;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-left">

      {/* Hero Section */}
      <section className="relative w-full h-56 sm:h-72 md:h-96 lg:h-[50vh] flex items-center justify-center overflow-hidden">
        
        <img
          src={backgroundImage}
          alt="Student Affairs"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/20 to-black/20"></div>

        <div
          className="relative z-10 mx-4 px-8 sm:px-12 py-8 sm:py-10 
                    max-w-4xl w-full text-center
                    bg-[rgb(200,20,20)]/45 backdrop-blur-2xl
                    border border-white/30
                    rounded-3xl
                    shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                    transition-all duration-500"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
            Student Affairs
          </h1>

          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-5 rounded-full"></div>

          <p className="text-sm sm:text-lg lg:text-xl text-gray-100 font-medium leading-relaxed max-w-2xl mx-auto">
            The Office of Student Affairs is dedicated to students' academic and
            personal success.
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-6 z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-full -mt-6 py-2 px-3 flex justify-center overflow-x-auto no-scrollbar gap-10 border border-[rgb(220,140,140)]">
            
            {sections.map((section) => (
              <button
                key={section.key}
                onClick={() => scrollToSection(section.key)}
                className={`font-bold px-5 py-3 rounded-full text-xs sm:text-sm lg:text-base transition-all duration-300 whitespace-nowrap ${
                  currentSection === section.key
                    ? "bg-[rgb(115,40,40)] text-white shadow-md"
                    : "text-gray-700 hover:bg-[rgb(220,140,140)] hover:text-[rgb(115,40,40)]"
                }`}
              >
                {section.name}
              </button>
            ))}

          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto py-8 lg:py-12 px-4 space-y-12">

        {/* Description */}
        <div
          id="description"
          ref={sectionRefs.description}
          className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
        >
          <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-6 px-8 text-white">
            <h2 className="text-xl lg:text-2xl font-bold">Description</h2>
          </div>

          <div className="p-8 space-y-4">
            {(Array.isArray(content?.description) ? content.description : []).map((item, index) => (
              <p key={index} className="text-base lg:text-lg text-gray-700 leading-relaxed font-medium">
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Re-Admission */}
        <div
          id="reAdmission"
          ref={sectionRefs.reAdmission}
          className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
        >
          <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-6 px-8 text-white">
            <h2 className="text-xl lg:text-2xl font-bold">Re-Admission</h2>
          </div>

          <div className="p-8">
            <div className="bg-[rgb(220,140,140)]/50 rounded-2xl p-6 border border-[rgb(200,120,120)] text-[rgb(100,25,25)] font-bold text-base lg:text-lg whitespace-pre-line">
              {content?.["Re-Admission"] || "Re-admission information will be updated soon."}
            </div>
          </div>
        </div>

      </main>

    </div>
  );
};

export default StudentAffairs;