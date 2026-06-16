import React, { useState, useEffect } from "react";
import "./Library.css";

const Library = () => {
  const [activeSection, setActiveSection] = useState("About Library");
  const sections = [
    "About Library",
    "E-journals",
    "Library Resources",
    "Digital Library",
    "Open Access Resources",
    "Library Sections",
    "Faculty",
  ];
  const [libraryData, setLibraryData] = useState(null);
  const [showPopover, setShowPopover] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const BACKEND_URL = "";

  useEffect(() => {
    fetch("/api/library")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLibraryData(data);
      });
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(section.replace(/ /g, ""));
    if (element) {
      const offset = element.offsetTop - 100;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
    setActiveSection(section);
  };

  const formatTitle = (str) => {
    return str
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  if (!libraryData) {
    return <p className="text-center mt-20 text-lg">Loading Library...</p>;
  }

  return (
    <main className="flex-grow min-h-screen bg-gray-50 text-left pt-[120px] sm:pt-[140px] lg:pt-[120px]">
      {/* Hero Section */}
      <section className="relative w-full h-64 sm:h-72 md:h-80 lg:h-[45vh] overflow-hidden">
        {/* Background Image */}
        <img
          src="/library.webp"
          alt="Library"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative flex items-center justify-center h-full px-4">
          <div className="backdrop-blur-md rounded-2xl shadow-lg px-6 py-6 md:py-10 flex flex-col items-center max-w-2xl mx-4 sm:mx-auto border border-white/30 animate-popIn">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4 drop-shadow-lg font-serif text-white animate-fadeInUp">
              Library
            </h1>

            <p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-sans text-white opacity-90 animate-fadeInUp text-center">
              Explore our extensive library resources and services, including
              books, e-journals, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Horizontal Tab Bar - Hidden/Commented out in mobile view */}
      <div className="hidden lg:block sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-full -mt-6 py-2 px-3 flex justify-center overflow-x-auto no-scrollbar gap-2 border border-[rgb(220,140,140)]">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`font-bold px-5 py-3 rounded-full text-xs sm:text-sm lg:text-base transition-all duration-300 whitespace-nowrap ${
                  activeSection === section
                    ? "bg-[rgb(115,40,40)] text-white shadow-md"
                    : "text-gray-700 hover:bg-[rgb(220,140,140)] hover:text-[rgb(115,40,40)]"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content sections */}
      <div className="max-w-7xl mx-auto py-12 px-4 space-y-16">
        {/* About Library */}
        <section id="AboutLibrary" className="py-8 animate-fadeIn">
          <div className="text-center mb-8 ">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-800 font-serif uppercase mb-2">
              Over view
            </h2>
            <div className="flex justify-center ">
              <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 p-8 rounded-2xl border border-[rgb(200,120,120)]">
            <div className="px-8 py-8">
              <p className="lg:text-lg xl:text-lg font-medium text-gray-500 text-center border-[rgb(220,140,140)">
                {libraryData.description}
              </p>
            </div>
          </div>
        </section>

        {/* E Journals */}
        <section id="E-journals">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-800 font-serif uppercase mb-4 text-center">
              E-journals & Features
            </h2>

            <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
          </div>

          <p className="text-lg font-semibold text-[rgb(100,25,25)] mb-6 ">
            {libraryData.e_journals.description}
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Salient Features */}
            <div className="px-6 py-4 bg-white text-[rgb(100,25,25)] rounded-2xl border border-[rgb(200,120,120)] hover:bg-[rgb(220,140,140)] hover:shadow-md hover:-translate-y-1 transition-all">
              <h3 className="font-bold text-lg mb-4 text-gray-800">
                Salient Features
              </h3>

              <ul className="space-y-2 text-gray-700 font-medium">
                {libraryData.e_journals.library_salient_features.map(
                  (feature, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <svg className="w-3.5 h-3.5 text-[rgb(115,25,25)] mt-1.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                      </svg>
                      {feature}
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Library Services */}
            <div className="px-6 py-4 bg-white text-[rgb(100,25,25)] rounded-2xl border border-[rgb(200,120,120)] hover:bg-[rgb(220,140,140)] hover:shadow-md hover:-translate-y-1 transition-all">
              <h3 className="font-bold text-lg mb-4 text-gray-800">
                Library Services
              </h3>

              <ul className="space-y-2 text-gray-700 font-medium">
                {libraryData.e_journals.library_services.map((service, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <svg className="w-3.5 h-3.5 text-[rgb(115,25,25)] mt-1.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                    </svg>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Library Resources */}
        <section id="LibraryResources">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-800 font-serif uppercase mb-4 text-center">
              Library Resources
            </h2>

            <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
          </div>
          <div className="max-w-7xl mx-auto px-4 p-8 rounded-2xl border border-[rgb(200,120,120)]">
            <p className="text-lg text-gray-600 text-center mb-10">
              {libraryData.library_resources.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {Object.entries(libraryData.library_resources.collection).map(
                ([key, value], i) => (
                  <div key={i} className="text-center">
                    <div className="flex justify-center mb-2">
                      <svg className="w-8 h-8 text-[rgb(115,25,25)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>

                    <span className="text-2xl font-bold text-[rgb(100,25,25)]">
                      {value}
                    </span>

                    <p className="text-xs text-gray-500">{formatTitle(key)}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Digital Library */}
        <section id="DigitalLibrary">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-800 font-serif uppercase mb-4 text-center">
              Digital Library
            </h2>

            <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
          </div>
          <div className="max-w-7xl mx-auto px-4 p-8 rounded-2xl border border-[rgb(200,120,120)]">
            <p className="text-lg text-center text-gray-600 mb-8">
              {libraryData.digital_library.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="px-6 py-4 bg-white text-[rgb(100,25,25)] rounded-2xl border border-[rgb(200,120,120)] hover:bg-[rgb(220,140,140)] hover:shadow-md hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                <svg className="w-5 h-5 text-[rgb(115,25,25)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span>{libraryData.digital_library.e_resources}</span>
              </div>

              <div className="px-6 py-4 bg-white text-[rgb(100,25,25)] rounded-2xl border border-[rgb(200,120,120)] hover:bg-[rgb(220,140,140)] hover:shadow-md hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                <svg className="w-5 h-5 text-[rgb(115,25,25)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
                <span>{libraryData.digital_library.multimedia}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Open Access Resources */}
        <section
          id="OpenAccessResources"
          className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all animate-fadeIn"
        >
          <div className="bg-[rgb(110,35,35)] py-6 px-8 text-center text-white">
            <h2 className="text-xl lg:text-2xl font-bold">
              Open Access Resources
            </h2>
          </div>
          <div className="p-8">
            <div className="flex flex-wrap justify-center gap-4">
              {libraryData.open_access_resources.map((resource, i) => (
                <div
                  key={i}
                  className="px-6 py-4 bg-white text-[rgb(100,25,25)] font-bold rounded-2xl border border-[rgb(200,120,120)] flex items-center gap-3 hover:bg-[rgb(220,140,140)] hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <svg className="w-4 h-4 text-[rgb(140,60,60)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  {resource}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Library Sections */}
        <section
          id="LibrarySections"
          className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all animate-fadeIn"
        >
          <div className="bg-[rgb(110,35,35)] py-6 px-8 text-center text-white">
            <h2 className="text-xl lg:text-2xl font-bold">Library Sections</h2>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(libraryData.library_section).map(
                ([title, content], i) => (
                  <div
                    key={i}
                    className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:bg-[rgb(220,140,140)] hover:shadow-md hover:-translate-y-1 transition-all"
                  >
                    <h4 className="text-lg font-bold text-[rgb(100,25,25)] mb-3 border-b border-[rgb(220,140,140)] pb-2">
                      {formatTitle(title)}
                    </h4>
                    <p className="text-sm lg:text-base text-gray-700 leading-relaxed font-medium">
                      {content}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Faculty */}
        <section id="Faculty" className="w-full bg-gray-100 py-12 px-4">
          {/* Header */}
          <div className="bg-[rgb(110,35,35)] py-6 text-center text-white rounded-t-3xl max-w-6xl mx-auto">
            <h2 className="text-xl lg:text-2xl font-bold">Library Team</h2>
          </div>

          {/* Cards Container */}
          <div
            className="max-w-6xl mx-auto bg-white rounded-3xl shadow-md 
                            border border-[rgb(180,100,100)] 
                            px-6 lg:px-12 py-14"
          >
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                            gap-8 justify-items-center"
            >
              {libraryData.faculty.map((faculty, i) => (
                <div
                  key={i}
                  className="relative w-[320px] bg-white rounded-3xl 
                            border border-[rgb(180,100,100)] 
                            shadow-md hover:shadow-xl 
                            transition-all duration-300 
                            overflow-hidden"
                >
                  {/* Top Gradient */}
                  <div
                    className="h-24 bg-[rgb(110,35,35)]"
                  ></div>

                  {/* Profile Image */}
                  <div className="absolute top-12 left-1/2 -translate-x-1/2">
                    <img
                      src={`/public/${faculty.img}`}
                      alt={faculty.name}
                      className="w-32 h-[152px] object-cover 
                                rounded-full border-4 
                                border-white shadow-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className="pt-28 pb-8 px-6 text-center">
                    <h3 className="text-lg font-bold text-[rgb(115,25,25)]">
                      {faculty.name}
                    </h3>

                    <p className="text-gray-600 font-semibold mt-2">
                      {faculty.designation}
                    </p>

                    <p className="text-gray-500 text-sm mt-1">
                      {faculty.email}
                    </p>

                    <button
                      onClick={() => {
                        setSelectedStaff(faculty);
                        setShowPopover(true);
                      }}
                      className="mt-6 px-6 py-2 
                                        bg-[rgb(115,25,25)] 
                                        text-white rounded-lg 
                                        hover:bg-[rgb(90,15,15)] 
                                        transition-all duration-300"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {showPopover && selectedStaff && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
          onClick={() => setShowPopover(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-xl max-w-5xl w-full h-[85vh] md:h-[80vh] overflow-hidden flex flex-col md:flex-row mt-0 md:mt-[120px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button at top right corner of the entire modal box */}
            <button
              onClick={() => setShowPopover(false)}
              className="absolute top-4 right-4 z-[999] text-gray-700 hover:text-gray-950 bg-white/70 hover:bg-white/95 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center shadow-md border border-gray-200/50 transition-all text-base font-bold"
              aria-label="Close Profile"
            >
              ✕
            </button>
            {/* LEFT SIDE */}
            <div className="w-full md:w-1/3 bg-[rgb(242,198,198)] text-left md:text-center p-4 md:p-6 flex flex-row md:flex-col items-center gap-4 md:gap-0 shrink-0">
              <img
                src={`${BACKEND_URL}/public/${selectedStaff.photo || selectedStaff.img}`}
                alt={selectedStaff.name}
                className="w-24 h-32 md:w-48 md:h-60 rounded-xl border shadow object-cover shrink-0"
              />

              <div className="flex flex-col justify-center md:items-center min-w-0 pr-8 md:pr-0">
                <h2
                  className="mobile-faculty-name text-[rgb(100,25,25)] font-bold mt-0 md:mt-4 leading-tight"
                  style={{ "--name-length": `${selectedStaff.title || ""} ${selectedStaff.name || ""}`.trim().length }}
                >
                  {selectedStaff.title ? `${selectedStaff.title} ` : ""}{selectedStaff.name}
                </h2>

                <p className="text-xs sm:text-sm md:text-base text-[rgb(115,40,40)] font-semibold mt-1 md:mt-2 leading-tight">
                  {selectedStaff.position || selectedStaff.designation}
                </p>

                <p className="text-[10px] sm:text-xs md:text-sm text-[rgb(100,25,25)]/80 font-medium mt-0.5 leading-tight">
                  {selectedStaff.department || "Library"}
                </p>

                <p className="text-[10px] sm:text-xs md:text-sm mt-1.5 md:mt-2.5 text-blue-600 font-medium break-all leading-tight hover:underline">
                  {selectedStaff.contact?.email || selectedStaff.email}
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full md:w-2/3 flex flex-col flex-grow overflow-hidden">
              {/* 🔹 FIXED HEADER */}
              <div className="sticky top-0 bg-white z-10 p-4 flex items-center justify-center relative shrink-0">
                <h1 className="text-xl md:text-2xl font-bold text-[rgb(100,25,25)] relative inline-block">
                  Faculty Profile
                  <span className="absolute -bottom-4 sm:-bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-32 sm:w-40 lg:w-32 bg-yellow-500"></span>
                </h1>
              </div>

              {/* 🔹 SCROLLABLE CONTENT */}
              <div className="p-4 sm:p-6 overflow-y-auto space-y-5 sm:space-y-6 scrollbar-thin scrollbar-thumb-gray-400">
                {/* ABOUT */}
                {(selectedStaff.about || selectedStaff.description) && (
                  <section>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800 border-b border-gray-100 pb-1">About</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed text-justify mt-1.5">{selectedStaff.about || selectedStaff.description}</p>
                  </section>
                )}

                {/* PRESENT ROLES */}
                {selectedStaff.present_roles?.length > 0 && (
                  <section>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800 border-b border-gray-100 pb-1">Present Roles</h3>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-1.5 mt-1.5">
                      {selectedStaff.present_roles.map((r, i) => (
                        <li key={i} className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{r}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* EDUCATION */}
                {selectedStaff.education?.qualifications?.length > 0 && (
                  <section>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800 border-b border-gray-100 pb-1">Education</h3>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-1.5 mt-1.5">
                      {selectedStaff.education.qualifications.map(
                        (degree, index) => (
                          <li key={index} className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{degree}</li>
                        ),
                      )}
                    </ul>
                  </section>
                )}

                {/* EXPERIENCE */}
                {selectedStaff.experience?.length > 0 && (
                  <section>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800 border-b border-gray-100 pb-1">Experience</h3>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-1.5 mt-1.5">
                      {selectedStaff.experience.map((exp, i) => (
                        <li key={i} className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{exp}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* EXPERTISE */}
                {selectedStaff.expertise?.length > 0 && (
                  <section>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800 border-b border-gray-100 pb-1">Area of Expertise</h3>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-1.5 mt-1.5">
                      {selectedStaff.expertise.map((e, i) => (
                        <li key={i} className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{e}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* PHD GUIDED */}
                {selectedStaff.phd_guided_completed?.length > 0 && (
                  <section>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800 border-b border-gray-100 pb-1">Ph.D Guided</h3>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-1.5 mt-1.5">
                      {selectedStaff.phd_guided_completed.map((p, i) => (
                        <li key={i} className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{p}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* ONGOING */}
                {selectedStaff.phd_ongoing?.length > 0 && (
                  <section>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800 border-b border-gray-100 pb-1">Ongoing Research</h3>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-1.5 mt-1.5">
                      {selectedStaff.phd_ongoing.map((p, i) => (
                        <li key={i} className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{p}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* BOOKS (OLD) */}
                {selectedStaff.books_published?.length > 0 && (
                  <section>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800 border-b border-gray-100 pb-1">Books Published</h3>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-1.5 mt-1.5">
                      {selectedStaff.books_published.map((b, i) => (
                        <li key={i} className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{b}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* INTERNATIONAL VISITS */}
                {selectedStaff.international_visits?.length > 0 && (
                  <section>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800 border-b border-gray-100 pb-1">
                      International Visits
                    </h3>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-1.5 mt-1.5">
                      {selectedStaff.international_visits.map((v, i) => (
                        <li key={i} className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{v}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* PROJECTS */}
                {selectedStaff.projects?.length > 0 && (
                  <section>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800 border-b border-gray-100 pb-1">Projects</h3>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-1.5 mt-1.5">
                      {selectedStaff.projects.map((p, i) => (
                        <li key={i} className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{p}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* ACHIEVEMENTS */}
                {selectedStaff.achievements?.length > 0 && (
                  <section>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800 border-b border-gray-100 pb-1">Achievements</h3>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-1.5 mt-1.5">
                      {selectedStaff.achievements.map((a, i) => (
                        <li key={i} className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{a}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* PROFILES */}
                {(selectedStaff.research_ids?.google_scholar ||
                  selectedStaff.research_ids?.scopus_id ||
                  selectedStaff.research_ids?.orcid_id) && (
                  <section>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800 border-b border-gray-100 pb-1">Profiles</h3>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-1.5 mt-1.5">
                      {selectedStaff.research_ids?.google_scholar && (
                        <li className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                          <a
                            href={selectedStaff.research_ids.google_scholar}
                            target="_blank"
                            className="text-blue-600 hover:underline"
                          >
                            Google Scholar
                          </a>
                        </li>
                      )}
                      {selectedStaff.research_ids?.scopus_id && (
                        <li className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                          Scopus ID: {selectedStaff.research_ids.scopus_id}
                        </li>
                      )}
                      {selectedStaff.research_ids?.orcid_id && (
                        <li className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">Orcid: {selectedStaff.research_ids.orcid_id}</li>
                      )}
                    </ul>
                  </section>
                )}

                {/* PUBLICATIONS - BOOKS */}
                {selectedStaff.publications?.books?.length > 0 && (
                  <section>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800 border-b border-gray-100 pb-1">Books Published</h3>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-1.5 mt-1.5">
                      {selectedStaff.publications.books.map((b, i) => (
                        <li key={i} className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{b}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* PUBLICATIONS - CONFERENCES */}
                {selectedStaff.publications?.conferences?.length > 0 && (
                  <section>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800 border-b border-gray-100 pb-1">
                      Conference Publications
                    </h3>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-1.5 mt-1.5">
                      {selectedStaff.publications.conferences.map((c, i) => (
                        <li key={i} className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{c}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* PATENTS */}
                {selectedStaff.patents?.length > 0 && (
                  <section>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800 border-b border-gray-100 pb-1">Patents</h3>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-1.5 mt-1.5">
                      {selectedStaff.patents.map((p, i) => (
                        <li key={i} className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{p}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* CONSULTANCY */}
                {selectedStaff.consultancy?.length > 0 && (
                  <section>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800 border-b border-gray-100 pb-1">Consultancy</h3>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-1.5 mt-1.5">
                      {selectedStaff.consultancy.map((c, i) => (
                        <li key={i} className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{c}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* MEMBERSHIPS */}
                {selectedStaff.memberships?.length > 0 && (
                  <section>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800 border-b border-gray-100 pb-1">
                      Professional Memberships
                    </h3>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-1.5 mt-1.5">
                      {selectedStaff.memberships.map((m, i) => (
                        <li key={i} className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{m}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* AWARDS */}
                {selectedStaff.awards?.length > 0 && (
                  <section>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800 border-b border-gray-100 pb-1">Awards</h3>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-1.5 mt-1.5">
                      {selectedStaff.awards.map((a, i) => (
                        <li key={i} className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{a}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* ADDITIONAL ROLES */}
                {selectedStaff.additional_roles?.length > 0 && (
                  <section>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800 border-b border-gray-100 pb-1">Additional Roles</h3>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-1.5 mt-1.5">
                      {selectedStaff.additional_roles.map((r, i) => (
                        <li key={i} className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{r}</li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Library;
