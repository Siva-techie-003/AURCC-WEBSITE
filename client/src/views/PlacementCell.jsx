import React, { useState, useEffect } from "react";
import OfficePageTemplate from "../components/OfficePageTemplate";
import OfficeContentSection from "../components/OfficeContentSection";
import StaffCard from "../components/StaffCard";
import "./PlacementCell.css";

const PlacementCell = () => {
  const [data, setData] = useState(null);

  const sections = [
    { key: "description", label: "Description" },
    { key: "placement_statistics", label: "Placement Statistics" },
    { key: "cuic", label: "CUIC" },
    { key: "our_recruiters", label: "Our Recruiters" },
    { key: "placed_students", label: "Placed Students" },
    { key: "staff", label: "Staff" },
  ];

  const logos = [
    "/placed_students/ANCIT.png",
    "/placed_students/Affintrix.png",
    "/placed_students/Amazon.png",
    "/placed_students/Avasoft-2.png",
    "/placed_students/Avasoft.png",
    "/placed_students/Breaks India.png",
    "/placed_students/DLUX.png",
    "/placed_students/ERP Roots.png",
    "/placed_students/Glimmora (2).png",
    "/placed_students/Glimmora.png",
    "/placed_students/Hub Stream.png",
    "/placed_students/Infosys.png",
    "/placed_students/MBA - Telekonnectors.png",
    "/placed_students/Motherson EEE - I.png",
    "/placed_students/Motherson EEE-II.png",
    "/placed_students/Oerlicon - II.png",
    "/placed_students/Oerlicon.png",
    "/placed_students/Office 2000.png",
    "/placed_students/Office 2020 - II.png",
    "/placed_students/Ozone.png",
    "/placed_students/Roots.png",
    "/placed_students/Senzary (2).png",
    "/placed_students/Senzary.png",
    "/placed_students/Skillintrix.png",
    "/placed_students/SmartDV.png",
    "/placed_students/Solarwind, Grenada.png",
    "/placed_students/Stellatis.png",
    "/placed_students/Super Auto Forge.png",
    "/placed_students/TAP Academy.png",
    "/placed_students/TN Model School.png",
    "/placed_students/Thirdwave.png",
    "/placed_students/Vista Engineering Solutions.png",
    "/placed_students/zoho (2).png",
    "/placed_students/zoho (3).png",
    "/placed_students/zoho.png",
  ];

  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    fetch("/api/institute-industry-cell")
      .then((res) => {
        if (!res.ok) throw new Error("Not Ok");
        return res.json();
      })
      .then((resData) => {
        if (resData && resData.message && resData.message.includes("not found")) {
          throw new Error("Fallback to old API");
        }
        setData(resData);
      })
      .catch((err) => {
        console.warn("Attempting fallback to legacy placement API:", err);
        fetch("/api/placement-cell")
          .then((res) => res.json())
          .then((resData) => setData(resData))
          .catch((fetchErr) => console.error("Fallback fetch failed:", fetchErr));
      });

    const timer = setInterval(() => {
      setCurrentLogoIndex((prev) => (prev + 1) % logos.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  if (!data) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <section className="pt-[140px] sm:pt-[160px] lg:pt-[120px]">
      <OfficePageTemplate
        officeName="INSTITUTE INDUSTRY CELL"
        heroSubtitle="Empowering students for career success and industry connections"
        sections={sections}
        contactEmail="placementcell@aurcc.ac.in"
        heroHeightClasses="min-h-[15vh] sm:min-h-[20vh] md:min-h-[25vh] lg:min-h-[30vh] xl:min-h-[35vh]"
      >
        <div className="content space-y-16">
          {/* ABOUT + CUIC SIDE BY SIDE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            {/* About the Placement Cell */}
            <section id="description" className="h-full flex flex-col">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[rgb(100,25,25)] uppercase mb-2">
                  About the Placement Cell
                </h2>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-[rgb(220,140,140)] p-6 lg:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-base lg:text-lg xl:text-xl font-medium text-gray-800 text-left leading-relaxed mb-6">
                    <span className="font-bold text-[rgb(100,25,25)]">
                      The Placement Cell
                    </span>{" "}
                    at our Regional Campus is dedicated to empowering students for
                    career success. We provide comprehensive support for every
                    stage of your journey.
                  </p>

                  <div className="grid grid-cols-1 gap-4 mb-8">
                    {[
                      {
                        title: "Comprehensive Support",
                        desc: "Guidance and training for every stage of the campus recruitment process.",
                      },
                      {
                        title: "Expert Team",
                        desc: "Coordinators, assistants, and volunteers from every department ensuring personalized attention.",
                      },
                      {
                        title: "Skill Development",
                        desc: "Pre-placement training, mock interviews, group discussions, and workshops.",
                      },
                      {
                        title: "Industry Connections",
                        desc: "Strong ties with top recruiters and regular campus drives.",
                      },
                      {
                        title: "Career Awareness",
                        desc: "Information on value-added courses and opportunities in private and government sectors.",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition"
                      >
                        <span className="text-[rgb(120,45,45)] font-bold text-lg">
                          ✔
                        </span>

                        <div>
                          <span className="font-bold text-gray-900 block">
                            {item.title}
                          </span>
                          <span className="text-sm text-gray-700">
                            {item.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-base lg:text-lg text-[rgb(110,35,35)] font-bold border-l-4 border-l-[rgb(120,45,45)] pl-4 py-2 bg-gray-50 rounded-r-lg">
                  Our mission: To help every student achieve their dream job and
                  build a successful career.
                </p>
              </div>
            </section>

            {/* CUIC */}
            <section id="cuic" className="h-full flex flex-col">
              <div className="text-center mb-8">
                <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[rgb(100,25,25)] uppercase mb-2 whitespace-nowrap">
                  CUIC: Your Gateway to Top Recruiters
                </h2>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-[rgb(220,140,140)] p-6 lg:p-8 flex-1 flex flex-col justify-between">
                <div className="text-left">
                  <div className="mb-8">
                    <p className="text-lg lg:text-xl font-bold mb-2 text-[rgb(110,35,35)]">
                      The Centre for University-Industry Collaboration (CUIC)
                    </p>
                    <p className="text-gray-700 font-medium">
                      Bridges the gap between students and leading employers
                      through specialized initiatives.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">
                    {[
                      {
                        title: "Industry Partnerships",
                        desc: "Direct connections for internships and placements.",
                      },
                      {
                        title: "Skill-Building",
                        desc: "Workshops, seminars, and training programs.",
                      },
                      {
                        title: "Placement Drives",
                        desc: "Regular campus recruitment events.",
                      },
                      {
                        title: "Career Guidance",
                        desc: "Expert advice for informed career choices.",
                      },
                      {
                        title: "Internship Assistance",
                        desc: "Support in identifying and securing internships to gain practical industry experience and enhance job readiness.",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="p-4 bg-white rounded-xl border border-[rgb(200,120,120)] shadow-sm flex items-start gap-3"
                      >
                        <span className="bg-[rgb(200,120,120)] text-[rgb(110,35,35)] w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
                          {i + 1}
                        </span>
                        <div>
                          <span className="font-bold text-[rgb(100,25,25)] block mb-1">
                            {item.title}
                          </span>
                          <span className="text-sm text-gray-700">
                            {item.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Placement Statistics */}
          <OfficeContentSection
            sectionId="placement_statistics"
            title="Placement Statistics"
          >
            <div className="flex flex-col items-center">
              <div className="text-base lg:text-lg text-gray-700 mb-8 text-center max-w-2xl font-medium">
                <span className="font-bold text-[rgb(100,25,25)]">
                  Our Results Speak for Themselves:
                </span>{" "}
                Each year, our students receive numerous placement offers from
                leading companies.
              </div>
              <img
                src="/placement statistics.webp"
                alt="Placement Statistics"
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-xl border border-gray-100"
              />
            </div>
          </OfficeContentSection>

          <section className="py-8 bg-white relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
            {/* 🔹 BACKGROUND PATTERN */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 text-[rgb(115,40,40)]">
              <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <pattern
                  id="dots-pattern"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="1" fill="currentColor" />
                  <circle cx="20" cy="20" r="1" fill="currentColor" />
                  <circle cx="38" cy="38" r="1" fill="currentColor" />
                  <circle cx="2" cy="38" r="1" fill="currentColor" />
                  <circle cx="38" cy="2" r="1" fill="currentColor" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#dots-pattern)" />
              </svg>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-[rgb(100,25,25)] relative inline-block">
                OUR HIRING PARTNERS

              </h2>
         

              {/* 3-Card Carousel Container */}
              <div className="relative flex items-center justify-center gap-8 lg:gap-16 w-full max-w-none h-[280px] sm:h-[400px] lg:h-[550px]">
                {/* Card 1 (Left - Lite Fade) */}
                <div className="hidden md:flex w-[220px] lg:w-[320px] h-[220px] lg:h-[320px] bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg items-center justify-center p-0 opacity-40 transition-all duration-700 ease-in-out border-[3px] border-white/30 overflow-hidden">
                  <img
                    src={
                      logos[
                        (currentLogoIndex - 1 + logos.length) % logos.length
                      ]
                    }
                    alt="Partner Logo Left"
                    className="w-full h-full object-cover grayscale opacity-50"
                  />
                </div>

                {/* Card 2 (Center - Clear/Active) */}
                <div className="relative w-[260px] sm:w-[380px] lg:w-[520px] h-[260px] sm:h-[380px] lg:h-[520px] bg-white rounded-2xl sm:rounded-3xl shadow-2xl flex items-center justify-center p-0 transition-all duration-700 ease-in-out border-4 sm:border-[6px] border-[rgb(100,25,25)] z-10 overflow-hidden">
                  <img
                    key={currentLogoIndex}
                    src={logos[currentLogoIndex]}
                    alt="Active Partner Logo"
                    className="w-full h-full object-cover animate-fadeInOnly"
                  />
                </div>

                {/* Card 3 (Right - Lite Fade) */}
                <div className="hidden md:flex w-[220px] lg:w-[320px] h-[220px] lg:h-[320px] bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg items-center justify-center p-0 opacity-40 transition-all duration-700 ease-in-out border-[3px] border-white/30 overflow-hidden">
                  <img
                    src={logos[(currentLogoIndex + 1) % logos.length]}
                    alt="Partner Logo Right"
                    className="w-full h-full object-cover grayscale opacity-50"
                  />
                </div>
              </div>
              
            </div>

           
          </section>

          {/* Staff */}
          <OfficeContentSection sectionId="staff" title="Staff">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(Array.isArray(data?.staff_members)
                ? data.staff_members
                : []
              ).map((staff, index) => (
                <StaffCard
                  key={index}
                  staff={{ ...staff, image: staff.image }}
                />
              ))}
            </div>
          </OfficeContentSection>
        </div>
      </OfficePageTemplate>
    </section>
  );
};

export default PlacementCell;
