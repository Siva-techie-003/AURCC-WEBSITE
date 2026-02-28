import React, { useState, useEffect, useRef } from 'react';
import './Downloads.css';

const Downloads = () => {
    const sections = [
        { key: 'various_forms', label: 'Various Forms', icon: '📄' },
        { key: 'wifi_forms', label: 'Wifi Registration', icon: '📶' },
        { key: 'scholarship_forms', label: 'Scholarship Forms', icon: '🎓' },
        { key: 'application_forms', label: 'Application Forms', icon: '📝' }
    ];

    const [currentSection, setCurrentSection] = useState('various_forms');
    const sectionRefs = {
        various_forms: useRef(null),
        wifi_forms: useRef(null),
        scholarship_forms: useRef(null),
        application_forms: useRef(null)
    };

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
            window.scrollTo({ top: offset, behavior: 'smooth' });
            setCurrentSection(key);
        }
    };

    const DownloadCard = ({ title, links, icon }) => (
        <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all animate-fadeIn">
            <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-6 px-8 flex justify-between items-center text-white">
                <h2 className="text-xl lg:text-2xl font-bold">{title}</h2>
                <span className="text-2xl opacity-50">{icon}</span>
            </div>
            <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {links.map((link, i) => (
                        <a
                            key={i}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center p-5 bg-[rgb(220,140,140)]/50 rounded-2xl border border-[rgb(200,120,120)] hover:bg-white hover:shadow-md hover:border-[rgb(160,80,80)] transition-all"
                        >
                            <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-[rgb(115,40,40)] mr-4 group-hover:bg-[rgb(115,40,40)] group-hover:text-white transition-all">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            </div>
                            <span className="text-sm lg:text-base font-bold text-gray-700 group-hover:text-[rgb(100,25,25)] leading-snug">{link.label}</span>
                            <svg className="ml-auto w-5 h-5 text-gray-300 group-hover:text-[rgb(120,45,45)] transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <main className="bg-gradient-to-br from-[rgb(115,63,63)] via-[rgb(115,45,45)] to-white min-h-screen font-sans text-gray-800 text-left">
            {/* Hero Section */}
            <section className="relative w-full h-48 sm:h-60 md:h-80 lg:h-[45vh] overflow-hidden flex items-center justify-center">
                <img src="/offices.webp" alt="Downloads" className="absolute inset-0 w-full h-full object-cover object-center" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white drop-shadow-lg tracking-tight text-center mb-4 animate-scale-in">Downloads</h1>
                    <p className="text-base sm:text-lg lg:text-xl text-white drop-shadow text-center font-medium opacity-90 max-w-2xl">All important forms and applications for students and staff</p>
                </div>
            </section>

            {/* Sticky Navigation */}
            <div className="sticky top-0 z-30">
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
            <div className="max-w-7xl mx-auto py-12 px-4 space-y-16">
                <div id="various_forms" ref={sectionRefs.various_forms}>
                    <DownloadCard
                        title="Various Forms Download"
                        icon="📄"
                        links={[
                            { label: 'Email Id Creation Form', href: 'http://www.aurcc.ac.in/downloads/Mail/Email%20Id%20Creation%20form.pdf' },
                            { label: 'New Email Id Registration Form', href: 'http://www.aurcc.ac.in/downloads/Mail/Email%20Id%20Creation%20form.pdf' }
                        ]}
                    />
                </div>

                <div id="wifi_forms" ref={sectionRefs.wifi_forms}>
                    <DownloadCard
                        title="Wifi Registration Forms"
                        icon="📶"
                        links={[
                            { label: 'Staff Wifi Registration form', href: 'http://www.aurcc.ac.in/downloads/wifi/StaffWifiRegistrationform.pdf' },
                            { label: 'Student Wifi Registration form', href: 'http://www.aurcc.ac.in/downloads/wifi/StudentWIFIRegistrationform.pdf' }
                        ]}
                    />
                </div>

                <div id="scholarship_forms" ref={sectionRefs.scholarship_forms}>
                    <DownloadCard
                        title="Scholarship Forms"
                        icon="🎓"
                        links={[
                            { label: 'BC - MBC Fresh Scholarship form - 2024-2025', href: 'http://www.aurcc.ac.in/downloads/Scholarships%20Forms/BC-MBC%20FRESH%202023-24.pdf' },
                            { label: 'BC - MBC Renewal Scholarship form - 2024-2025', href: 'http://www.aurcc.ac.in/downloads/Scholarships%20Forms/BC-MBC%20RENEWAL%202023-24.pdf' },
                            { label: 'SC - ST Fresh Scholarship form - 2024 - 2025', href: 'http://www.aurcc.ac.in/downloads/Scholarships%20Forms/SC&ST%20Application.pdf' },
                            { label: 'SC - ST Renewal Scholarship form - 2024-2025', href: 'http://www.aurcc.ac.in/downloads/Scholarships%20Forms/RENEWAL%20SC&ST.pdf' }
                        ]}
                    />
                </div>

                <div id="application_forms" ref={sectionRefs.application_forms}>
                    <DownloadCard
                        title="Application Forms"
                        icon="📝"
                        links={[
                            { label: 'Bonafide Form', href: 'http://www.aurcc.ac.in/downloads/Application%20Forms/bonafide%20format.pdf' },
                            { label: 'Discontinue Form', href: 'http://www.aurcc.ac.in/downloads/Application%20Forms/DISCONT%20FORMAT.pdf' },
                            { label: 'Students On duty Application Form', href: 'http://www.aurcc.ac.in/downloads/Application%20Forms/On%20duty.pdf' },
                            { label: 'Student Internship Application Form', href: 'http://www.aurcc.ac.in/downloads/Application%20Forms/INTERNSHIP.pdf' }
                        ]}
                    />
                </div>
            </div>
        </main>
    );
};

export default Downloads;
