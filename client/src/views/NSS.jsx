import React, { useState, useEffect } from 'react';
import data from '../assets/NSS.json';
import './NSS.css';

const NSS = () => {
    const [currentActivityIndex, setCurrentActivityIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentActivityIndex((prev) => (prev + 1) % data.activities.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    const setActivity = (idx) => {
        setCurrentActivityIndex(idx);
    };

    return (
        <main className="flex-grow font-sans bg-gray-50">
            {/* Hero section */}
            <section className="relative w-full min-h-[35vh] sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] overflow-hidden flex items-center justify-center">
                <img src="/NSS.webp" alt="NSS" className="absolute inset-0 w-full h-full object-cover object-center" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center z-10 px-2">
                    <div className="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 md:py-6 lg:py-8 xl:py-10 flex flex-col items-center w-full max-w-xl border border-white/30">
                        <h1 className="text-lg sm:text-xl lg:text-3xl xl:text-4xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight">{data.name}</h1>
                        <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-white drop-shadow text-center font-medium">Community Service. Personality Development.</p>
                    </div>
                </div>
            </section>

            {/* Content sections */}
            <section className="container mx-auto py-8 sm:py-12 lg:py-14 px-4">
                <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10 lg:gap-12">
                    {/* About Card */}
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100 overflow-hidden">
                        <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-3 sm:py-4 md:py-5 flex items-center justify-center gap-2 sm:gap-3">
                            <span className="text-lg sm:text-xl lg:text-2xl">ℹ️</span>
                            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center">About</h2>
                        </div>
                        <div className="p-4 sm:p-6 md:p-8 lg:p-10 text-left">
                            <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-medium text-gray-800 whitespace-pre-line leading-relaxed">{data.description}</p>
                        </div>
                    </div>

                    {/* Activities Card with Sliding Notice Board */}
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100 overflow-hidden">
                        <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-3 sm:py-4 md:py-5 flex items-center justify-center gap-2 sm:gap-3">
                            <span className="text-lg sm:text-xl lg:text-2xl">🏅</span>
                            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center">Activities</h2>
                        </div>
                        <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col items-center">
                            <div className="relative w-full max-w-xl mx-auto">
                                <div className="overflow-hidden h-20 sm:h-24 md:h-28 lg:h-32 rounded-xl bg-[rgb(220,140,140)] border border-[rgb(200,120,120)] shadow-inner flex items-center justify-center">
                                    <div className="relative w-full h-full">
                                        {(Array.isArray(data?.activities) ? data.activities : []).map((activity, idx) => (
                                            <div
                                                key={idx}
                                                className={`absolute inset-0 flex items-center justify-center px-6 text-center text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-[rgb(100,25,25)] transition-all duration-700 transform ${currentActivityIndex === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                                                    }`}
                                            >
                                                {activity}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex justify-center gap-2 mt-4">
                                    {(Array.isArray(data?.activities) ? data.activities : []).map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActivity(idx)}
                                            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${currentActivityIndex === idx ? 'bg-[rgb(110,35,35)] w-6' : 'bg-[rgb(180,100,100)] hover:bg-[rgb(160,80,80)]'
                                                }`}
                                        ></button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* NSS Coordinators Card */}
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100 overflow-hidden">
                        <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-3 sm:py-4 md:py-5 flex items-center justify-center gap-2 sm:gap-3">
                            <span className="text-lg sm:text-xl lg:text-2xl">👥</span>
                            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center">NSS Coordinators</h2>
                        </div>
                        <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {(Array.isArray(data?.nss_coordinator?.['Office Bearers']) ? data.nss_coordinator['Office Bearers'] : []).map((coordinator, i) => (
                                    <div
                                        key={i}
                                        className="bg-white/80 rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col justify-center items-center text-center hover:shadow-md transition-all hover:-translate-y-1"
                                    >
                                        <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-[rgb(110,35,35)] mb-2">{coordinator.Name}</h3>
                                        <div className="text-xs lg:text-sm text-gray-700 font-semibold">{coordinator.Designation}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default NSS;
