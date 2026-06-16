import React, { useRef } from "react";
import "./Antiragging.css";

const Antiragging = () => {
  const policyRef = useRef(null);
  const resourcesRef = useRef(null);

  const scrollToSection = (ref) => {
    const offset = 220; // Header + Sticky Nav height
    const elementPosition = ref.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const navSections = [
    { name: "Policy", ref: policyRef },
    { name: "Resources", ref: resourcesRef },
  ];

  const resources = [
    {
      title: "Online Anti Ragging Affidavit Form",
      link: "https://www.antiragging.in/",
    },
    {
      title: "Step by Step Guide",
      link: "/forms/Online Anti Ragging Affidavit-converted.pdf",
    },
    {
      title: "Committee Members",
      link: "/forms/Anti Ragging Committee-2026.pdf",
    },
    {
      title: "Squad Committee Members",
      link: "/forms/Anti Ragging Squad Committee.pdf",
    },
    {
      title: "Online Complaint Form",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSemmLSS9iLVpcMIV5PWNUCuGKWy7LgbaqjIWsJhWitkwBKG5w/viewform",
    },
  ];

  return (
    <main className="bg-white min-h-screen font-sans text-gray-800 pt-[116px] sm:pt-[126px] lg:pt-[136px]">
      {/* Hero Section - No Gap with Header */}
      <section className="relative w-full h-80 md:h-96 lg:h-[55vh] flex items-center justify-center overflow-hidden -mt-[116px] sm:-mt-[126px] lg:-mt-[136px]">
        {/* Background Image */}
        <img
          src="/offices.webp"
          alt="Anti-ragging Cell"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Soft Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>

        {/* Glass Card */}
        <div className="relative z-10 mx-4 px-5 sm:px-8 py-4 sm:py-6 
                        max-w-3xl w-full text-center
                        bg-[rgb(200,20,20)]/30 backdrop-blur-xl
                        border border-white/30
                        rounded-2xl
                        shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                        transition-all duration-500
                        mt-[116px] sm:mt-[126px] lg:mt-[136px]">

          <h1 className="text-xl sm:text-2xl lg:text-3xl 
                         font-black text-white 
                         tracking-tight mb-2 uppercase">
            Anti-ragging Committee
          </h1>

          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-3 rounded-full"></div>

          <p className="text-xs sm:text-sm lg:text-base 
                        text-gray-100 font-medium 
                        leading-relaxed max-w-2xl mx-auto">
            Resources, forms, and committee information for anti-ragging.
          </p>

        </div>
      </section>

      {/* Sticky Navigation Pill Bar - Overlapping design */}
      <div className="hidden sm:block sticky top-[116px] sm:top-[126px] lg:top-[136px] z-50 -mt-12 mb-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-md shadow-xl rounded-full py-2 px-3 flex justify-center overflow-x-auto no-scrollbar gap-2 border border-[rgb(220,140,140)]">
            {navSections.map((section, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(section.ref)}
                className="font-bold px-6 py-3 rounded-full text-xs sm:text-sm lg:text-base transition-all duration-300 whitespace-nowrap text-gray-700 hover:bg-[rgb(220,140,140)] hover:text-[rgb(115,40,40)]"
              >
                {section.name.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="max-w-[1400px] mx-auto py-8 sm:py-12 lg:py-14 px-4 flex flex-col gap-12">
        <div ref={policyRef} className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-[rgb(110,35,35)] py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3">
            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center uppercase tracking-wider">
              Zero Tolerance Policy
            </h2>
          </div>
          <div className="p-8 sm:p-12 text-center">
            <p className="text-lg lg:text-xl font-bold text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Anna University maintains a zero-tolerance policy towards
              ragging. Students found guilty of ragging will face strict
              disciplinary action as per UGC guidelines.
            </p>
          </div>
        </div>

        <div ref={resourcesRef} className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-[rgb(110,35,35)] py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3">
            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center uppercase tracking-wider">
              Anti Ragging Resources
            </h2>
          </div>
          <div className="p-4 sm:p-6 md:p-8 lg:p-10 text-left">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resources.map((item, i) => (
                <li key={i}>
                  <a
                    className="flex items-center p-4 bg-white border border-gray-200 rounded-xl hover:bg-red-50 hover:border-red-300 transition-all duration-300 shadow-sm group"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className="text-black font-semibold group-hover:text-[rgb(115,63,63)] to-[rgb(115,25,25)]">
                      {item.title}
                    </span>
                    <svg
                      className="ml-auto w-5 h-5 text-black group-hover:text-[rgb(115,63,63)] to-[rgb(115,25,25)] transform group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Antiragging;
