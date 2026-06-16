import React from "react";

const Privacy = () => {
  return (
    <main className="flex-grow font-sans bg-white pt-[126px] sm:pt-[130px] lg:pt-[130px]">
      {/* Hero Header */}
      <section className="relative w-full overflow-hidden flex items-center justify-center bg-[rgb(110,35,35)] text-center pt-10 pb-8 sm:pt-12 sm:pb-10 px-4">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-wide mb-1.5 animate-fadeIn">
            Privacy Policy
          </h1>
          <p className="text-[10px] sm:text-xs text-yellow-400 font-semibold tracking-wider uppercase animate-fadeInUp">
            Anna University Regional Campus, Coimbatore
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-[1200px] w-full mx-auto py-12 px-4 sm:px-8 space-y-12">
        <div className="space-y-8 animate-fadeIn">
          {/* Main heading */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-800 font-serif mb-2">
              Information Privacy
            </h2>
            <div className="flex justify-center">
              <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mx-auto">
            {/* Student & Faculty Records Card */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-150 p-6 sm:p-8 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[rgb(245,240,240)] border border-[rgb(220,200,200)] flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[rgb(110,35,35)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[rgb(110,35,35)] font-serif mb-4">
                Student & Faculty Records
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Personal data, admission forms, and academic records are securely stored and processed in compliance with the university's strict privacy guidelines. We implement advanced digital safeguards to protect sensitive records from unauthorized access and disclosure.
              </p>
            </div>

            {/* Website Cookies Card */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-150 p-6 sm:p-8 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[rgb(245,240,240)] border border-[rgb(220,200,200)] flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[rgb(110,35,35)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[rgb(110,35,35)] font-serif mb-4">
                Website Cookies & Analytics
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We use cookies and basic analytics to improve website navigation, customize user experience, and monitor overall performance. These cookies do not collect personally identifiable information and are strictly used to help optimize our institutional digital services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Privacy;
