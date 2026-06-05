import React from "react";

const Team = () => {
  const faculty = [
    {
      name: "Dr. J. Preethi",
      role: "Assistant Professor",
      dept: "Department of CSE",
      image: "/public/preethi.webp"
    }
  ];

  const members = [
    {
      name: "Ms. M. Kavitha",
      role: "Student Developer",
      dept: "Department of CSE",
      image: "/public/Picture4.webp"
    },
    {
      name: "Mr. E. T. Thamizhselvan",
      role: "Student Developer",
      dept: "Department of MCA",
      image: "/public/Picture3.webp"
    },
    {
      name: "Mr. R. Muthamizhan",
      role: "Student Developer",
      dept: "Department of MCA",
      image: "/public/Picture5.webp"
    },
    {
      name: "Mr. D. Logesh",
      role: "Student Developer",
      dept: "Department of MCA",
      image: "/public/Picture6.webp"
    },
    {
      name: "Mr. M. Prasanth",
      role: "Student Developer",
      dept: "Department of MCA",
      image: "/public/Picture7.webp"
    },
  ];

  return (
    <main className="flex-grow font-sans bg-white">
      {/* Hero Header */}
      <section className="relative w-full min-h-[30vh] sm:min-h-[35vh] md:min-h-[40vh] overflow-hidden flex items-center justify-center bg-gradient-to-br from-[rgb(115,63,63)] to-[rgb(115,25,25)] text-center py-10 px-4">
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
          <div className="flex flex-wrap gap-8 justify-center max-w-3xl mx-auto px-4">
            {faculty.map((f, i) => (
              <div
                key={i}
                className="bg-white/90 rounded-2xl shadow-md p-6 sm:p-8 border-2 border-gray-100 hover:border-[#f5c842] flex flex-col justify-center items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full max-w-sm"
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
          <div className="flex flex-wrap gap-6 justify-center max-w-6xl mx-auto px-4">
            {members.map((m, i) => (
              <div
                key={i}
                className="bg-white/90 rounded-2xl shadow-md p-6 border-2 border-gray-100 hover:border-[#f5c842] flex flex-col justify-center items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full max-w-[260px]"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 mb-4">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover object-top rounded-full border-4 border-[rgb(115,25,25)] shadow-md transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="text-xs sm:text-sm lg:text-base font-bold text-[rgb(110,35,35)] mb-1">
                  {m.name}
                </h3>
                <div className="text-[11px] sm:text-xs text-gray-700 font-bold mb-1">
                  {m.role}
                </div>
                <div className="text-[10px] sm:text-[11px] text-gray-500 font-semibold">
                  {m.dept}
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
