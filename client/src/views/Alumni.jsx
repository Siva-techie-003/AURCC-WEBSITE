import React from 'react';
import jsonData from '../assets/alumni.json';
import './Alumni.css';

const Alumni = () => {
    return (
        <main className="flex-grow font-sans bg-white">
            {/* Hero section */}
            <section className="relative w-full min-h-[35vh] sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] overflow-hidden flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1200&q=80" alt="Alumni" className="absolute inset-0 w-full h-full object-cover object-center" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>

                {/* Stars overlay */}
                <div className="absolute inset-0 pointer-events-none z-5">
                    {[
                        { top: '20px', left: '10%', delay: '0s' },
                        { top: '60px', left: '30%', delay: '1.2s' },
                        { top: '100px', left: '70%', delay: '0.7s' },
                        { top: '180px', left: '50%', delay: '2s' },
                        { top: '220px', left: '80%', delay: '1.5s' },
                        { top: '300px', left: '20%', delay: '2.5s' },
                        { top: '350px', left: '60%', delay: '0.3s' },
                    ].map((star, i) => (
                        <div key={i} className="star" style={{ top: star.top, left: star.left, animationDelay: star.delay }}></div>
                    ))}
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-2">
                    <div className="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 md:py-6 lg:py-8 xl:py-10 flex flex-col items-center w-full max-w-2xl border border-white/30">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight">Notable Alumni</h1>
                        <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white drop-shadow text-center font-medium">Celebrating Success Stories from Every Department</p>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="container mx-auto py-8 sm:py-12 lg:py-14 px-4">
                <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10 lg:gap-12">
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                        <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-4 sm:py-5 flex flex-col items-center justify-center gap-2 sm:gap-3 relative">
                            <div className="flex items-center gap-2">
                                <span className="text-lg lg:text-xl">🎓</span>
                                <h2 className="text-lg lg:text-xl xl:text-2xl font-bold text-white text-center">Notable Alumni</h2>
                            </div>
                            <span className="w-32 sm:w-40 h-1.5 rounded-full bg-gradient-to-r from-[rgb(115,63,63)] via-[rgb(115,45,45)] to-[rgb(115,25,25)] animate-glow-bar mt-2"></span>
                        </div>

                        <div className="p-4 sm:p-6 md:p-8 lg:p-10 text-center">
                            <p className="text-base lg:text-lg xl:text-xl font-medium text-gray-800 mb-8 sm:mb-12 max-w-4xl mx-auto">{jsonData['notable alumni']}</p>

                            {Object.entries(jsonData.ALUMNI).map(([deptName, department]) => (
                                <div key={deptName} className="mb-8 sm:mb-12 lg:mb-16">
                                    <div className="bg-white/80 rounded-2xl shadow-md p-6 sm:p-8 border border-gray-100">
                                        <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-[rgb(100,25,25)] mb-6 sm:mb-8 flex items-center justify-center gap-3">
                                            <span className="text-2xl">🏢</span>{deptName}
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {department.map((alumnus, index) => (
                                                <div key={index} className="bg-white rounded-xl shadow-sm p-5 border border-gray-50 flex flex-col gap-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-l-4 border-l-[rgb(120,45,45)] text-left">
                                                    <div className="font-bold text-base lg:text-lg text-[rgb(110,35,35)]">{alumnus.Name}</div>
                                                    <div className="text-sm lg:text-base text-gray-700 font-semibold">{alumnus.Position}</div>
                                                    <div className="text-sm lg:text-base text-gray-600 italic">{alumnus.Company}</div>
                                                    <div className="text-xs lg:text-sm text-gray-500 mt-1 flex items-center gap-1">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                                        {alumnus.Email}
                                                    </div>
                                                    <div className="text-xs lg:text-sm text-gray-600 mt-2 bg-[rgb(220,140,140)] px-2 py-1 rounded w-fit">Academic Year: <span className="font-bold">{alumnus['Academic Year']}</span></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Alumni;
