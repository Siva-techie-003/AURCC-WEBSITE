import React, { useState, useEffect, useRef } from 'react';
import './AicteAndMoe.css';

const AicteAndMoe = () => {
    const [currentSection, setCurrentSection] = useState('objectives');
    const [data, setData] = useState(null);

useEffect(() => {
  fetch("/api/aicte-moe")
    .then(res => res.json())
    .then(data => setData(data));
}, []);

    const sectionRefs = {
        objectives: useRef(null),
        important_links: useRef(null),
        circulars_notifications: useRef(null),
        approval_letters: useRef(null)
    };

    const sections = [
        { key: 'approval_letters', label: 'Approval Letters' },
        { key: 'objectives', label: 'Objectives' },
        { key: 'important_links', label: 'Important Links' },
        { key: 'circulars_notifications', label: 'Circulars & Notifications' },
    ];

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

   if (!data || !data.home) {
  return <div className="text-center mt-10 text-lg">Loading...</div>;
}

    return (
        <main className="bg-white min-h-screen font-sans text-gray-800 pt-[116px] sm:pt-[126px] lg:pt-[136px]">
            {/* Hero Section - No Gap with Header */}
            <section className="relative w-full h-80 md:h-96 lg:h-[55vh] flex items-center justify-center overflow-hidden -mt-[116px] sm:-mt-[126px] lg:-mt-[136px]">
                {/* Background Image */}
                <img
                    src="/offices.webp"
                    alt="AICTE & MOE Cell"
                    className="absolute inset-0 w-full h-full object-cover"
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
                        AICTE & MOE Cell
                    </h1>

                    <div className="w-16 h-1 bg-yellow-400 mx-auto mb-3 rounded-full"></div>

                    <p className="text-xs sm:text-sm lg:text-base 
                                  text-gray-100 font-medium 
                                  leading-relaxed max-w-2xl mx-auto">
                        All statutory and regulatory information for students and staff.
                    </p>

                </div>
            </section>

            {/* Sticky Navigation Pill Bar - Overlapping design */}
            <div className="hidden sm:block sticky top-[116px] sm:top-[126px] lg:top-[136px] z-50 -mt-12 mb-4">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-md shadow-xl rounded-full py-2 px-3 flex justify-center overflow-x-auto no-scrollbar gap-2 border border-[rgb(220,140,140)]">
                        {sections.map((section) => (
                            <button
                                key={section.key}
                                onClick={() => scrollToSection(section.key)}
                                className={`font-bold px-6 py-3 rounded-full text-xs sm:text-sm lg:text-base transition-all duration-300 whitespace-nowrap ${currentSection === section.key
                                    ? 'bg-[rgb(115,40,40)] text-white shadow-md'
                                    : 'text-gray-700 hover:bg-[rgb(220,140,140)] hover:text-[rgb(115,40,40)]'
                                    }`}
                            >
                                {section.label.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <section className="max-w-7xl mx-auto py-8 sm:py-12 lg:py-14 px-2 md:px-9 flex flex-col gap-8 sm:gap-10 lg:gap-12">
                {/* Approval Letters */}
                <div id="approval_letters" ref={sectionRefs.approval_letters} className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3">
                        <span className="text-lg lg:text-xl text-white"></span>
                        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center">Approval Letters</h2>
                    </div>
                    <div className="p-4 sm:p-6 md:p-8 lg:p-10 text-left">
                        <ul className="list-disc pl-5 space-y-2">
                            {Object.entries({
  "LOA(2019-20)": data["LOA(2019-20)"],
  "EOA(2020-21)": data["EOA(2020-21)"],
  "EOA(2021-22)": data["EOA(2021-22)"],
  "EOA(2022-23)": data["EOA(2022-23)"],
  "EOA(2023-24)": data["EOA(2023-24)"],
  "EOA(2026-27)": data["EOA(2026-27)"]
}).map(([title, link]) => (
                                <li key={title} className="text-base lg:text-lg xl:text-xl">
                                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-[rgb(110,35,35)] hover:font-semibold transition">{title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                {/* Objectives */}
                <div id="objectives" ref={sectionRefs.objectives} className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3">
                        <span className="text-lg lg:text-xl text-white"></span>
                        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center">Objectives</h2>
                    </div>
                    <div className="p-4 sm:p-6 md:p-8 lg:p-10 text-left">
                        <ul className="list-disc pl-5 space-y-2">
                            {data.home["Objectives of AICTE & MOE Cell"].map((objective, i)=> (
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
                        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center">Important Links</h2>
                    </div>
                    <div className="p-4 sm:p-6 md:p-8 lg:p-10 text-left">
                        <ul className="list-disc pl-5 space-y-2">
                            {Object.entries(data.home["Important Links"]).map(([key, link]) => (
                                <li key={key} className="text-base lg:text-lg xl:text-xl font-base">
                                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-[rgb(110,35,35)] hover:font-semibold transition">{key}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Circulars & Notifications */}
                <div id="circulars_notifications" ref={sectionRefs.circulars_notifications} className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3">
                        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center">Circulars & Notifications</h2>
                    </div>
                    <div className="p-4 sm:p-6 md:p-8 lg:p-10 text-left">
                        <ul className="list-disc pl-5 space-y-2">
                            {Object.entries(data["Circulars_Notifications"]).map(([title, link]) => (
                                <li key={title} className="text-base lg:text-lg xl:text-xl font-base">
                                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-[rgb(110,35,35)] hover:font-semibold transition">{title}</a>
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
