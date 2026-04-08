import React, { useState,useEffect, useRef } from 'react';
import RegulationCard from '../components/RegulationCard';
import './Regulation.css';

const Regulation2025 = () => {
    const listRef = useRef(null);
    const noticeRef = useRef(null);

    const scrollToSection = (ref) => {
        const offset = 220; // Header + Sticky Nav height
        const elementPosition = ref.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    const navSections = [
        { name: 'Regulations', ref: listRef },
        { name: 'Important Notice', ref: noticeRef }
    ];

    const regulations = [
        { Regulation: "UG PROGRAMMES", "PDF Link": "https://cac.annauniv.edu/aidetails/ai_ug_cands_2021ft.html" },
        { Regulation: "PG PROGRAMMES", "PDF Link": "https://cac.annauniv.edu/aidetails/ai_ug_cands_2021ft.html" }
    ];

    return (
        <div className="flex-grow bg-white min-h-screen text-left pt-[116px] sm:pt-[126px] lg:pt-[136px]">
            <div className="flex-grow bg-gradient-to-br from-gray-100 via-[rgb(255, 255, 255)] to-white min-h-screen text-left">

                {/* Hero Section - No Gap with Header */}
                <section className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[55vh] flex items-center justify-center overflow-hidden -mt-[116px] sm:-mt-[126px] lg:-mt-[136px]">
                    {/* Background Image */}
                    <img
                        src="/regulation.webp"
                        alt="Regulation 2025"
                        className="absolute inset-0 w-full h-full object-cover object-top"
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
                            Regulation 2025
                        </h1>

                        <div className="w-16 h-1 bg-yellow-400 mx-auto mb-3 rounded-full"></div>

                        <p className="text-xs sm:text-sm lg:text-base 
                                      text-gray-100 font-medium 
                                      leading-relaxed max-w-2xl mx-auto">
                            Essential academic guidelines and standards for students admitted in 2025.
                        </p>

                    </div>
                </section>


                <main className="max-w-7xl mx-auto py-8 px-4 space-y-20">
                    <section ref={listRef} className="animate-fadeInUp">
                        <header className="flex flex-col md:flex-row md:items-end justify-between border-b-4 border-[rgb(100,25,25)] pb-8 mb-12 gap-6">
                            <div className="max-w-xl">
                                <h2 className="text-2xl lg:text-4xl font-black text-[rgb(90,20,20)] uppercase tracking-tight">Academic Integrity (2025)</h2>
                                <p className="text-lg text-gray-500 font-bold mt-2 italic">Essential guidelines for students under Anna University Regulations 2025.</p>
                            </div>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                            {regulations.map((reg, i) => (
                                <div key={i} className="group">
                                    <RegulationCard
                                        title={reg.Regulation}
                                        pdf={reg["PDF Link"]}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Warning/Note Section */}
                    <section ref={noticeRef} className="py-12 border-y border-amber-200 flex flex-col md:flex-row items-center md:items-start gap-5 animate-fadeIn max-w-5xl mx-auto shadow-sm rounded-2xl bg-amber-50/30 px-8">
                        <div className="text-center md:text-left">
                            <h3 className="text-lg font-black text-[#875b22] uppercase tracking-wider mb-2 flex items-center justify-center md:justify-start gap-2">
                                <span>⚠️</span> Important Notice
                            </h3>
                            <p className="text-lg text-gray-700 font-bold leading-relaxed">Students are required to download and carefully read the regulations relevant to their year of admission. These documents govern your academic progress, internal assessments, and end-semester examinations.</p>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Regulation2025;
