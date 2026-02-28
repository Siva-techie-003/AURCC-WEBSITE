import React, { useState, useEffect, useRef } from 'react';
import './OfficePageTemplate.css';

const OfficePageTemplate = ({
    officeName,
    heroSubtitle,
    heroImage = '/offices.webp',
    sections = [],
    contactEmail,
    contactButtonText = 'Apply Now / Contact Us',
    children
}) => {
    const [currentSection, setCurrentSection] = useState(sections.length > 0 ? sections[0].key : '');

    const scrollToSection = (sectionKey) => {
        setCurrentSection(sectionKey);
        const element = document.getElementById(sectionKey);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sections.map(s => {
                const el = document.getElementById(s.key);
                return el ? { key: s.key, top: el.getBoundingClientRect().top } : null;
            }).filter(Boolean);

            if (sectionElements.length > 0) {
                // Find the section that is closest to the top of the viewport
                // (but we usually want the one that has started crossing the threshold)
                const closest = sectionElements.reduce((a, b) =>
                    Math.abs(b.top) < Math.abs(a.top) ? b : a, sectionElements[0]);

                if (closest && currentSection !== closest.key) {
                    setCurrentSection(closest.key);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections, currentSection]);

    return (
        <main className="bg-white min-h-screen font-sans text-gray-800">
            {/* Hero Section */}
            <section className="relative w-full min-h-[35vh] sm:min-h-[40vh] md:min-h-[60vh] overflow-hidden flex items-center justify-center animate-fadeIn">
                <img src={heroImage} alt={officeName} className="absolute inset-0 w-full h-full object-cover object-center" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-3 sm:px-4">
                    <div className="backdrop-blur-md bg-white/30 rounded-xl sm:rounded-2xl shadow-lg px-3 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 lg:px-12 lg:py-10 flex flex-col items-center w-full max-w-xs sm:max-w-lg md:max-w-2xl border border-white/30">
                        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight">{officeName}</h1>
                        <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-white drop-shadow text-center font-medium">{heroSubtitle}</p>
                    </div>
                </div>
            </section>

            {/* Sticky Navigation Tabs */}
            <div className="sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                    <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-full -mt-4 sm:-mt-6 py-1 px-2 flex justify-center overflow-x-auto no-scrollbar">
                        <nav role="tablist" className="tabs flex space-x-1 sm:space-x-2">
                            {sections.map(section => (
                                <button
                                    key={section.key}
                                    onClick={() => scrollToSection(section.key)}
                                    className={`font-medium px-3 sm:px-4 md:px-5 py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base transition duration-300 whitespace-nowrap touch-manipulation ${currentSection === section.key
                                        ? 'bg-[rgb(115,40,40)] text-white shadow-lg'
                                        : 'text-gray-700 hover:bg-gray-100 hover:shadow-md'
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
            <section className="max-w-7xl mx-auto py-8 sm:py-10 md:py-14 px-3 sm:px-4 md:px-6 lg:px-9 flex flex-col gap-8 sm:gap-10 md:gap-12">
                {children}
            </section>

            {/* Contact Button */}
            <div className="flex justify-center mt-2 mb-6 sm:mb-8 px-4">
                <a href={`mailto:${contactEmail}`} className="apply-contact-btn bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] text-white font-bold py-3 px-6 sm:px-8 rounded-full shadow-lg hover:from-[rgb(115,63,63)] hover:to-[rgb(115,25,25)] transition-all text-base sm:text-lg md:text-xl transform hover:scale-105 touch-manipulation w-full sm:w-auto text-center">
                    {contactButtonText}
                </a>
            </div>
        </main>
    );
};

export default OfficePageTemplate;
