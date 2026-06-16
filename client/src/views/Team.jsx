import React from "react";
import { useLocation, Link } from "react-router-dom";

const Team = () => {
  const location = useLocation();
  const isFacultyPage = location.pathname === "/team/faculty";
  const isDevelopersPage = location.pathname === "/team/developers";
  const isTeamRoot = !isFacultyPage && !isDevelopersPage;

  // Show lists only on their respective pages
  const showFaculty = isFacultyPage;
  const showDevelopers = isDevelopersPage;

  const faculty = [
    {
      name: "Dr. J. Preethi",
      role: "Assistant Professor",
      dept: "Department of CSE",
      image: "/preethi.webp"
    }, {
      name: "Dr. M. Newlin Rajkumar",
      role: "Assistant Professor",
      dept: "Department of EEE",
      image: "/newlin.webp"
    },
    {
      name: "Mr. K.S.Babu Magendra",
      role: "System Administrator",
      dept: "Department of CSE",
      image: "/babu.webp"
    }, {
      name: "Mr. S. Benedict",
      role: "Professional Assistant - I",
      dept: "Department of CSE",
      image: "/BENEDICT.webp"
    }, {
      name: "Ms. T. Mohanapriya",
      role: "Professional Assistant - II",
      dept: "Department of CSE",
      image: "/mohana.webp"
    },
  ];

  const members = [
    {
      name: "Siva E",
      role: "Developer",
      image: "/siva.png",
      linkedin: "https://www.linkedin.com/in/siva-e/"
    },
    {
      name: "Dhivakar G",
      role: "Developer",
      image: "/dhivakar.jpeg",
      linkedin: "https://www.linkedin.com/in/dhivakar-g/"
    },
    {
      name: "Anbu Mani V",
      role: "Developer",
      image: "/anbumani.jpeg",
      linkedin: "https://www.linkedin.com/in/anbumani006/"
    },
    {
      name: "Santhosh S",
      role: "Developer",
      image: "/santhosh.jpeg",
      linkedin: "https://www.linkedin.com/in/callsanthosh/"
    },
    {
      name: "Suresh Krishna P",
      role: "Developer",
      image: "/suresh.png",
      linkedin: "https://www.linkedin.com/in/suresh-krishna-p/"
    },
    {
      name: "Sathya Moorthy R",
      role: "Developer",
      image: "/sathya.jpeg",
      linkedin: "https://www.linkedin.com/in/sathyamoorthy-tech/"
    }
  ];

  return (
    <main className="flex-grow font-sans bg-white pt-[126px] sm:pt-[130px] lg:pt-[130px]">
      {/* Hero Header */}
      <section className="relative w-full overflow-hidden flex items-center justify-center bg-[rgb(110,35,35)] text-center pt-10 pb-8 sm:pt-12 sm:pb-10 px-4">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-wide mb-1.5 animate-fadeIn">
            {isFacultyPage ? "Faculty Incharge" : isDevelopersPage ? "Developers" : "Web Development Team"}
          </h1>
          <p className="text-[10px] sm:text-xs text-yellow-400 font-semibold tracking-wider uppercase animate-fadeInUp">
            Anna University Regional Campus, Coimbatore
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-[1800px] w-full mx-auto py-12 px-4 sm:px-8 space-y-12">
        {/* Team Root - Navigation Cards */}
        {isTeamRoot && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full max-w-3xl mx-auto px-4 mt-8">
            {/* Faculty Incharge Card */}
            <div className="flex flex-col items-center justify-center p-6 w-full max-w-xs mx-auto bg-white rounded-2xl shadow-md border-2 border-[#f5c842] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold text-[rgb(110,35,35)] font-serif mb-2 text-center">Faculty Incharge</h3>
              <p className="text-gray-500 text-center text-xs font-semibold mb-6">View the faculty guiding our web development team</p>
              <Link to="/team/faculty" className="px-5 py-2 text-sm font-bold text-[rgb(110,35,35)] border-2 border-[rgb(110,35,35)] rounded-full hover:bg-[rgb(110,35,35)] hover:text-white transition-colors duration-300">
                View Faculty
              </Link>
            </div>

            {/* Developers Card */}
            <div className="flex flex-col items-center justify-center p-6 w-full max-w-xs mx-auto bg-white rounded-2xl shadow-md border-2 border-[#f5c842] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold text-[rgb(110,35,35)] font-serif mb-2 text-center">Student Developers</h3>
              <p className="text-gray-500 text-center text-xs font-semibold mb-6">Meet the student developers behind this website</p>
              <Link to="/team/developers" className="px-5 py-2 text-sm font-bold text-[rgb(110,35,35)] border-2 border-[rgb(110,35,35)] rounded-full hover:bg-[rgb(110,35,35)] hover:text-white transition-colors duration-300">
                View Developers
              </Link>
            </div>
          </div>
        )}

        {/* Faculty Incharge */}
        {showFaculty && (
          <div className="space-y-6 animate-fadeIn">
            {!isFacultyPage && (
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-800 font-serif mb-2">
                  Faculty Incharge
                </h2>
                <div className="flex justify-center">
                  <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 xl:gap-14 w-full mx-auto justify-items-center">
              {faculty.map((f, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md border-2 border-gray-100 hover:border-[#f5c842] overflow-hidden flex flex-col items-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full h-full"
                >
                  {/* Header Section */}
                  <div className="w-full h-24 sm:h-28 bg-[rgb(110,35,35)] relative flex justify-center flex-shrink-0"></div>

                  {/* Profile Image Section */}
                  <div className="relative -mt-16 sm:-mt-20 flex justify-center flex-shrink-0">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white flex items-center justify-center p-1">
                      <img
                        src={f.image}
                        alt={f.name}
                        className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105 rounded-full text-[10px] text-gray-500 break-words text-center flex items-center justify-center"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full px-2 sm:px-4 py-4 flex flex-col items-center flex-grow text-center justify-start pt-4 sm:pt-6 min-w-0">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[rgb(110,35,35)] font-serif mb-1 leading-tight break-words w-full">
                      {f.name}
                    </h3>
                    <div className="text-[10px] sm:text-xs text-gray-500 font-semibold mb-3">
                      {f.dept}
                    </div>
                    <div className="flex flex-col gap-2 w-full items-center mt-auto pb-2">
                      {f.role && (
                        <div className="px-2 py-1.5 bg-[rgb(245,240,240)] rounded-full border border-[rgb(220,200,200)] flex items-center justify-center w-full max-w-[95%]">
                          <span className="text-[10px] sm:text-[11px] lg:text-xs font-black text-[rgb(110,35,35)] tracking-wide text-center leading-tight">
                            {f.role}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Team Members */}
        {showDevelopers && (
          <div className="space-y-6 animate-fadeIn">
            {!isDevelopersPage && (
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-800 font-serif mb-2">
                  Members
                </h2>
                <div className="flex justify-center">
                  <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 w-full mx-auto justify-items-center">
              {members.map((m, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md border-2 border-gray-100 hover:border-[#f5c842] p-4 sm:p-6 flex flex-row items-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full max-w-[620px] h-[180px] sm:h-[200px] mx-auto"
                >
                  {/* Profile Image Section */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 flex items-center justify-center rounded-full border-2 border-[rgb(110,35,35)] shadow-md overflow-hidden bg-white">
                    <img
                      src={m.image}
                      alt={`${m.name} - ${m.role} at AURCC`}
                      title={`${m.name} - ${m.role} at AURCC`}
                      className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105 text-[10px] text-gray-500 break-words text-center flex items-center justify-center"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="ml-4 sm:ml-6 flex flex-col justify-center text-left min-w-0 flex-grow h-full">
                    <h3 className="text-xl sm:text-2xl font-bold text-[rgb(110,35,35)] mb-1 leading-tight truncate">
                      {m.name}
                    </h3>
                    <div className="my-1.5 self-start">
                      <span className="px-3 py-1 bg-[rgb(245,240,240)] rounded-full border border-[rgb(220,200,200)] text-xs sm:text-sm font-semibold text-[rgb(110,35,35)] tracking-wide whitespace-nowrap">
                        {m.role}
                      </span>
                    </div>

                    {/* LinkedIn Link at the bottom */}
                    <a
                      href={m.linkedin || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 mt-2.5 text-[#0a66c2] hover:text-[#004182] transition-colors duration-200 self-start group/link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 transition-transform duration-200 group-hover/link:scale-110"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      <span className="text-xs sm:text-sm font-bold tracking-wider uppercase">
                        LinkedIn
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Team;
