import React, { useState, useEffect, useRef } from 'react';
import './Downloads.css';

const Downloads = () => {
    const sections = [
        { key: 'various_forms', label: 'Various Forms', icon: '??' },
        { key: 'wifi_forms', label: 'Wifi Registration', icon: '??' },
        { key: 'scholarship_forms', label: 'Scholarship Forms', icon: '??' },
        { key: 'application_forms', label: 'Application Forms', icon: '??' }
    ];

    const [currentSection, setCurrentSection] = useState('various_forms');

    const sectionRefs = {
        various_forms: useRef(null),
        wifi_forms: useRef(null),
        scholarship_forms: useRef(null),
        application_forms: useRef(null)
    };

    /* ---------------- Scroll Spy ---------------- */
    useEffect(() => {
        const handleScroll = () => {
            for (const section of sections) {
                const el = sectionRefs[section.key].current;
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom > 200) {
                        setCurrentSection(section.key);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (key) => {
        const el = sectionRefs[key].current;
        if (el) {
            const offset = el.offsetTop - 100;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
            setCurrentSection(key);
        }
    };

    /* ---------------- Download Card ---------------- */
    const DownloadCard = ({ title, links }) => (
        <div className="bg-white/70 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all animate-fadeIn h-full flex flex-col">
            <div className="bg-[rgb(110,35,35)] py-4 sm:py-6 px-4 sm:px-8 flex justify-between items-center text-white">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">{title}</h2>
            </div>

            <div className="p-4 sm:p-8 flex-grow flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {links.map((link, i) => (
                        <a
                            key={i}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center p-3 sm:p-5 bg-[rgb(220,140,140)]/50 rounded-xl sm:rounded-2xl border border-[rgb(200,120,120)] hover:bg-white hover:shadow-md hover:border-[rgb(160,80,80)] transition-all"
                        >
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg sm:rounded-xl shadow-sm flex items-center justify-center text-[rgb(115,40,40)] mr-2 sm:mr-4 group-hover:bg-[rgb(115,40,40)] group-hover:text-white transition-all shrink-0">
                                <svg
                                    className="w-4 h-4 sm:w-5 sm:h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                            </div>

                            <span className="text-xs sm:text-sm lg:text-base font-bold text-gray-700 group-hover:text-[rgb(100,25,25)] leading-snug break-words">
                                {link.label}
                            </span>

                            <svg
                                className="ml-auto w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-[rgb(120,45,45)] transform group-hover:translate-x-1 transition-all shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <main className="bg-white min-h-screen font-sans text-gray-800 text-left pt-[116px] sm:pt-[126px] lg:pt-[136px]">

            {/* ---------------- Hero Section ---------------- */}
            <section className="relative w-full h-80 md:h-96 lg:h-[55vh] flex items-center justify-center overflow-hidden -mt-[116px] sm:-mt-[126px] lg:-mt-[136px]">
                <img
                    src="/offices.webp"
                    alt="Downloads"
                    className="absolute inset-0 w-full h-full object-cover object-center"
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
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight mb-2 uppercase animate-scale-in">
                        Downloads
                    </h1>

                    <div className="w-16 h-1 bg-yellow-400 mx-auto mb-3 rounded-full"></div>

                    <p className="text-xs sm:text-sm lg:text-base text-gray-100 font-medium leading-relaxed max-w-2xl mx-auto">
                        All important forms and applications for students and staff
                    </p>
                </div>
            </section>

            {/* ---------------- Sticky Navigation ---------------- */}
            <div className="hidden sm:block sticky top-[116px] sm:top-[126px] lg:top-[136px] z-30">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-full -mt-6 py-2 px-3 flex justify-center overflow-x-auto no-scrollbar gap-2 border border-[rgb(220,140,140)]">
                        {sections.map((section) => (
                            <button
                                key={section.key}
                                onClick={() => scrollToSection(section.key)}
                                className={`font-bold px-5 py-3 rounded-full text-xs sm:text-sm lg:text-base transition-all duration-300 whitespace-nowrap ${currentSection === section.key
                                        ? 'bg-[rgb(115,40,40)] text-white shadow-md'
                                        : 'text-gray-700 hover:bg-[rgb(220,140,140)] hover:text-[rgb(115,40,40)]'
                                    }`}
                            >
                                {section.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Sections */}
    {/* Content Sections */}
<div className="max-w-7xl mx-auto px-4 py-6 sm:py-12 space-y-6 sm:space-y-12">

    <div id="various_forms" ref={sectionRefs.various_forms}>
        <DownloadCard
            title="Various Forms Download"
            icon="??"
            links={[
                { label: "New Email Id Creation Form", href: "/forms/Email Id Creation form.pdf" },
            ]}
        />
    </div>

    <div id="wifi_forms" ref={sectionRefs.wifi_forms}>
        <DownloadCard
            title="Wifi Registration Forms"
            icon="??"
            links={[
                { label: "Staff Wifi Registration form", href: "/forms/StaffWifiRegistrationform.pdf" },
                { label: "Student Wifi Registration form", href: "/forms/StudentWIFIRegistrationform.pdf" }
            ]}
        />
    </div>

    <div id="scholarship_forms" ref={sectionRefs.scholarship_forms}>
        <DownloadCard
            title="Scholarship Forms"
            icon="??"
            links={[
                { label: "BC - MBC Fresh Scholarship form - 2024-2025", href: "/forms/BC-MBC FRESH 2023-24.pdf" },
                { label: "BC - MBC Renewal Scholarship form - 2024-2025", href: "/forms/BC-MBC RENEWAL 2023-24.pdf" },
                { label: "SC - ST Fresh Scholarship form - 2024 - 2025", href: "/forms/SC&ST Application.pdf" },
                { label: "SC - ST Renewal Scholarship form - 2024-2025", href: "/forms/RENEWAL SC&ST.pdf" }
            ]}
        />
    </div>

    <div id="application_forms" ref={sectionRefs.application_forms}>
        <DownloadCard
            title="Application Forms"
            icon="??"
            links={[
                { label: "Bonafide Form", href: "/forms/bonafide format.pdf" },
                { label: "Discontinue Form", href: "/forms/DISCONT FORMAT.pdf" },
                { label: "Students On duty Application Form", href: "/forms/On duty.pdf" },
                { label: "Student Internship Application Form", href: "/forms/INTERNSHIP.pdf" }
            ]}
        />
    </div>



            </div>
        </main>
    );
};

export default Downloads;