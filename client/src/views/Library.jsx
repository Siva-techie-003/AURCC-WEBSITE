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
    <main className="flex-grow min-h-screen bg-gray-50 text-left">
      {/* Hero Section */}
      <section className="relative w-full h-48 sm:h-80 md:h-80 lg:h-[60vh] overflow-hidden pt-20">
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
          <div className="backdrop-blur-md rounded-2xl shadow-lg px-6 py-6 md:py-10 flex flex-col items-center max-w-2xl mx-auto border border-white/30 animate-popIn">
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

      {/* Sticky Horizontal Tab Bar */}
      <div className="sticky top-0 z-30">
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

              <ul className="space-y-2">
                {libraryData.e_journals.library_salient_features.map(
                  (feature, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="text-green-500">▶</span>
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

              <ul className="space-y-2">
                {libraryData.e_journals.library_services.map((service, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="text-green-500">▶</span>
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
                    <span className="text-3xl block mb-2">📚</span>

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
              <div className="px-6 py-4 bg-white text-[rgb(100,25,25)] rounded-2xl border border-[rgb(200,120,120)] hover:bg-[rgb(220,140,140)] hover:shadow-md hover:-translate-y-1 transition-all text-center">
                🌐 {libraryData.digital_library.e_resources}
              </div>

              <div className="px-6 py-4 bg-white text-[rgb(100,25,25)] rounded-2xl border border-[rgb(200,120,120)] hover:bg-[rgb(220,140,140)] hover:shadow-md hover:-translate-y-1 transition-all text-center">
                🎞️ {libraryData.digital_library.multimedia}
              </div>
            </div>
          </div>
        </section>

        {/* Open Access Resources */}
        <section
          id="OpenAccessResources"
          className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all animate-fadeIn"
        >
          <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-6 px-8 text-center text-white">
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
                  <span className="text-[rgb(140,60,60)]">🔗</span>
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
          <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-6 px-8 text-center text-white">
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
          <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-6 text-center text-white rounded-t-3xl max-w-6xl mx-auto">
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
                    className="h-24 bg-gradient-to-r 
                                    from-[rgb(115,63,63)] 
                                    to-[rgb(115,25,25)]"
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
    </main>
  );
};

export default Library;
