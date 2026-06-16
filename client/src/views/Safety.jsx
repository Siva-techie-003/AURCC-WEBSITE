import React from "react";

const Safety = () => {
  return (
    <main className="flex-grow font-sans bg-white pt-[126px] sm:pt-[130px] lg:pt-[130px]">
      {/* Hero Header */}
      <section className="relative w-full overflow-hidden flex items-center justify-center bg-[rgb(110,35,35)] text-center pt-10 pb-8 sm:pt-12 sm:pb-10 px-4">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-wide mb-1.5 animate-fadeIn">
            Safety & Security Guidelines
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
              Campus Security
            </h2>
            <div className="flex justify-center">
              <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mx-auto">
            {/* Anti-Ragging Policy Card */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-150 p-6 sm:p-8 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[rgb(245,240,240)] border border-[rgb(220,200,200)] flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[rgb(110,35,35)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[rgb(110,35,35)] font-serif mb-4">
                Anti-Ragging Regulations
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                AURCC maintains a zero-tolerance policy against any form of ragging. In accordance with UGC guidelines, any student participating in or encouraging ragging activities will face severe disciplinary action, including suspension or expulsion.
              </p>
            </div>

            {/* Emergency Support Card */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-150 p-6 sm:p-8 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[rgb(245,240,240)] border border-[rgb(220,200,200)] flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[rgb(110,35,35)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[rgb(110,35,35)] font-serif mb-4">
                Emergency & Health Contacts
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                The safety of our campus community is our top priority. Security personnel are stationed on campus 24/7. In case of medical emergencies or safety concerns, students and staff can immediately reach the campus security desk or health facility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Safety;
