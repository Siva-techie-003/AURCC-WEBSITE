import React, { useState, useEffect, useRef } from 'react';
import data from '../assets/aicte&moe.json';
import './AicteAndMoe.css';

const AicteAndMoe = () => {
    const [currentSection, setCurrentSection] = useState('objectives');
    const sectionRefs = {
        objectives: useRef(null),
        important_links: useRef(null),
        circulars_notifications: useRef(null),
        approval_letters: useRef(null)
    };

    const sections = [
        { key: 'objectives', label: 'Objectives' },
        { key: 'important_links', label: 'Important Links' },
        { key: 'circulars_notifications', label: 'Circulars & Notifications' },
        { key: 'approval_letters', label: 'Approval Letters' }
    ];

    const approvalLetters = {
        'LOA(2019-20)': data['LOA(2019-20)'],
        'EOA(2020-21)': data['EOA(2020-21)'],
        'EOA(2021-22)': data['EOA(2021-22)'],
        'EOA(2022-23)': data['EOA(2022-23)'],
        'EOA(2023-24)': data['EOA(2023-24)']
    };

    useEffect(() => {
        const onScroll = () => {
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

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToSection = (id) => {
        const section = sectionRefs[id].current;
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <main className="bg-gradient-to-br from-[rgb(115,63,63)] via-[rgb(115,45,45)] to-white min-h-screen font-sans text-gray-800">
            {/* Hero Section */}
            <section className="relative w-full min-h-[35vh] sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] overflow-hidden flex items-center justify-center">
                <img src="/offices.webp" alt="AICTE & MOE Cell" className="absolute inset-0 w-full h-full object-cover object-center" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-2">
                    <div className="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 md:py-6 lg:py-8 xl:py-10 flex flex-col items-center w-full max-w-2xl border border-white/30">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight">AICTE & MOE Cell</h1>
                        <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white drop-shadow text-center font-medium">All statutory and regulatory information for students and staff</p>
                    </div>
                </div>
            </section>

            {/* Navigation Tabs */}
            <div className="sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                    <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-full -mt-4 sm:-mt-6 py-1 px-2 flex justify-center overflow-x-auto no-scrollbar">
                        <nav role="tablist" className="tabs flex space-x-1 md:space-x-2">
                            {sections.map((section) => (
                                <button
                                    key={section.key}
                                    onClick={() => scrollToSection(section.key)}
                                    className={`font-medium px-3 sm:px-4 md:px-5 py-2 md:py-3 rounded-full text-xs sm:text-sm lg:text-base transition duration-300 whitespace-nowrap ${currentSection === section.key ? 'bg-[rgb(115,40,40)] text-white' : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    {section.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <section className="max-w-7xl mx-auto py-8 sm:py-12 lg:py-14 px-2 md:px-9 flex flex-col gap-8 sm:gap-10 lg:gap-12">
                {/* Objectives */}
                <div id="objectives" ref={sectionRefs.objectives} className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3">
                        <span className="text-lg lg:text-xl text-white">🎯</span>
                        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center">Objectives</h2>
                    </div>
                    <div className="p-4 sm:p-6 md:p-8 lg:p-10 text-left">
                        <ul className="list-disc pl-5 space-y-2">
                            {data.home['Objectives of AICTE & MOE Cell'].map((objective, i) => (
                                <li key={i} className="text-base lg:text-lg xl:text-xl text-gray-800">
                                    {objective}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Important Links */}
                <div id="important_links" ref={sectionRefs.important_links} className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3">
                        <span className="text-lg lg:text-xl text-white">🔗</span>
                        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center">Important Links</h2>
                    </div>
                    <div className="p-4 sm:p-6 md:p-8 lg:p-10 text-left">
                        <ul className="list-disc pl-5 space-y-2">
                            {Object.entries(data.home['Important Links']).map(([key, link]) => (
                                <li key={key} className="text-base lg:text-lg xl:text-xl">
                                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-[rgb(115,40,40)] underline hover:text-[rgb(110,35,35)] transition">{key}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Circulars & Notifications */}
                <div id="circulars_notifications" ref={sectionRefs.circulars_notifications} className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3">
                        <span className="text-lg lg:text-xl text-white">📢</span>
                        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center">Circulars & Notifications</h2>
                    </div>
                    <div className="p-4 sm:p-6 md:p-8 lg:p-10 text-left">
                        <ul className="list-disc pl-5 space-y-2">
                            {Object.entries(data.Circulars_Notifications).map(([title, link]) => (
                                <li key={title} className="text-base lg:text-lg xl:text-xl">
                                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-[rgb(115,40,40)] underline hover:text-[rgb(110,35,35)] transition">{title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Approval Letters */}
                <div id="approval_letters" ref={sectionRefs.approval_letters} className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3">
                        <span className="text-lg lg:text-xl text-white">📄</span>
                        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center">Approval Letters</h2>
                    </div>
                    <div className="p-4 sm:p-6 md:p-8 lg:p-10 text-left">
                        <ul className="list-disc pl-5 space-y-2">
                            {Object.entries(approvalLetters).map(([title, link]) => (
                                <li key={title} className="text-base lg:text-lg xl:text-xl">
                                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-[rgb(115,40,40)] underline hover:text-[rgb(110,35,35)] transition">{title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AicteAndMoe;
