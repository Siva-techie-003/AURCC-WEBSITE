import React from "react";

const Team = () => {
  const faculty = [
    {
      name: "Dr. J. Preethi",
      role: "Assistant Professor",
      dept: "Department of CSE",
      image: "/public/preethi.webp"
    }, {
      name: "Mr. S. Benedict",
      role: "Professional Assistant - I",
      dept: "Department of CSE",
      image: "/public/BENEDICT.webp"
    }, {
      name: "Ms. T. Mohanapriya",
      role: "Professional Assistant - II",
      dept: "Department of CSE",
      image: "mohana.webp"
    },
  ];

  const members = [
    {
      name: "Anbu Mani V",
      role: "Student Developer",
      image: "/anbu.webp",
      linkedin: "https://www.linkedin.com/in/anbumani006/"
    },
    {
      name: "Dhivakar G",
      role: "Student Developer",
      image: "/dhivakar.jpeg",
      linkedin: "https://www.linkedin.com/in/dhivakar-g/"
    },
      {
      name: "Sathya Moorthy R",
      role: "Student Developer",
      image: "/sathya.jpeg",
      linkedin: "https://www.linkedin.com/in/sathyamoorthy-tech/"
    },
    {
      name: "Santhosh S",
      role: "Student Developer",
      image: "/santhosh.jpeg",
      linkedin: "https://www.linkedin.com/in/callsanthosh/"
    },
    {
      name: "Siva E",
      role: "Student Developer",
      image: "/siva.png",
      linkedin: "https://www.linkedin.com/in/siva-e/"
    },
    {
      name: "Suresh Krishna P",
      role: "Student Developer",
      image: "/suresh.jpeg",
      linkedin: "https://www.linkedin.com/in/suresh-krishna-p/"
    }
  ];

  return (
    <main className="flex-grow font-sans bg-white">
      {/* Hero Header */}
      <section className="relative w-full min-h-[30vh] sm:min-h-[35vh] md:min-h-[40vh] overflow-hidden flex items-center justify-center bg-gradient-to-br from-[rgb(115,63,63)] to-[rgb(115,25,25)] text-center pt-28 pb-10 sm:pt-36 sm:pb-12 px-4">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white tracking-wide mb-3 animate-fadeIn">
            Web Development Team
          </h1>
          <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-yellow-400 font-semibold tracking-wider uppercase animate-fadeInUp">
            Anna University Regional Campus, Coimbatore
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto py-12 px-4 space-y-16">
        {/* Faculty Incharge */}
        <div className="space-y-6 animate-fadeIn">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-800 font-serif mb-2">
              Faculty Incharge
            </h2>
            <div className="flex justify-center">
              <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
            </div>
          </div>
          <div className="flex flex-wrap gap-8 justify-center max-w-6xl mx-auto px-4">
            {faculty.map((f, i) => (
              <div
                key={i}
                className="bg-white/90 rounded-2xl shadow-md p-6 sm:p-8 border-2 border-gray-100 hover:border-[#f5c842] flex flex-col justify-center items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full max-w-[310px]"
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 mb-4">
                  <img
                    src={f.image}
                    alt={f.name}
                    className="w-full h-full object-cover object-top rounded-full border-4 border-[rgb(115,25,25)] shadow-md transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-[rgb(110,35,35)] mb-1">
                  {f.name}
                </h3>
                <div className="text-xs sm:text-sm text-gray-700 font-bold mb-1">
                  {f.role}
                </div>
                <div className="text-xs text-gray-500 font-semibold">
                  {f.dept}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div className="space-y-6 animate-fadeIn">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-800 font-serif mb-2">
              Members
            </h2>
            <div className="flex justify-center">
              <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 justify-items-center">
            {members.map((m, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md border-2 border-gray-100 hover:border-[#f5c842] overflow-hidden flex flex-col items-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full max-w-[320px] h-[360px] mx-auto"
              >
                {/* Header Section */}
                <div className="w-full h-24 bg-[rgb(110,35,35)] relative flex justify-center"></div>

                {/* Profile Image Section */}
                <div className="relative -mt-12 flex justify-center">
                  <div className="w-32 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white flex items-center justify-center">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full px-6 py-4 flex flex-col items-center flex-grow text-center justify-start pt-6 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-[rgb(110,35,35)] font-serif mb-2 leading-tight">
                    {m.name}
                  </h3>
                  <div className="flex flex-col gap-2 w-full items-center mb-4">
                    <div className="px-4 py-1.5 bg-[rgb(245,240,240)] rounded-full border border-[rgb(220,200,200)] flex items-center justify-center max-w-full">
                      <span className="text-xs sm:text-sm font-black text-[rgb(110,35,35)] tracking-wide text-center whitespace-nowrap">
                        {m.role}
                      </span>
                    </div>
                  </div>

                  {/* LinkedIn Link at the bottom */}
                  <a
                    href={m.linkedin || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 mt-auto text-[#0a66c2] hover:text-[#004182] transition-colors duration-200 group/link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 transition-transform duration-200 group-hover/link:scale-110"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span className="text-xs font-bold tracking-wider uppercase">
                      LinkedIn
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Team;
