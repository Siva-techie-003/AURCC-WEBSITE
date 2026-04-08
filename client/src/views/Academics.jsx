import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import academicsData from '../assets/academics.json';
import './Academics.css';

const Academics = () => {
    const { section } = useParams();
    const [currentSection, setCurrentSection] = useState(null);

    const sections = [
        'Curriculum-&-Syllabus',
        'Programs-Offered',
        'Regulation',
        'Student-Affairs',
        'Re-Admission',
        'Scholarship',
        'Office Bearers'
    ];

    useEffect(() => {
        if (section && sections.includes(section)) {
            setCurrentSection(section);
        } else if (sections.length > 0) {
            setCurrentSection(sections[0]);
        }
    }, [section]);

    const { curriculamSyllabus, programsOffered, regulation, studentAffairs } = academicsData;

    const renderSectionContent = () => {
        if (!currentSection) return null;

        switch (currentSection) {
            case 'Curriculum-&-Syllabus':
                return (
                    <>
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Curriculum & Syllabus</h2>
                        {curriculamSyllabus.map((programme, index) => {
                            const title = Object.keys(programme)[0];
                            return (
                                <div key={index} className="mb-4 sm:mb-6 text-left">
                                    <h4 className="text-base lg:text-lg font-semibold">{title}</h4>
                                    <ul className="list-disc list-inside">
                                        {programme[title].map((item) => (
                                            <li key={item['S.No']} className="text-sm lg:text-base">
                                                {item['Curriculum & Syllabus']}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </>
                );
            case 'Programs-Offered':
                return (
                    <>
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Programs Offered</h2>
                        {programsOffered.map((programme, index) => (
                            <div key={index} className="mb-4 sm:mb-6 text-left">
                                <h4 className="text-base lg:text-lg font-semibold">{programme.type}</h4>
                                <ul className="list-disc list-inside">
                                    {programme.data.map((item) => (
                                        <li key={item['S.No']} className="text-sm lg:text-base">
                                            {item['Courses Offered']} - Intake: {item.Intake}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </>
                );
            case 'Regulation':
                return (
                    <>
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Regulation</h2>
                        <ul className="list-disc list-inside mb-4 sm:mb-6 text-left">
                            {regulation.map((item) => (
                                <li key={item['S.No']} className="text-sm lg:text-base">
                                    {item.Regulation}
                                </li>
                            ))}
                        </ul>
                    </>
                );
            case 'Student-Affairs':
                return (
                    <>
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Student Affairs</h2>
                        {studentAffairs.map((affair, index) => (
                            <div key={index} className="mb-4 sm:mb-6 text-left">
                                {affair.description.map((desc, i) => (
                                    <p key={i} className="mb-2 text-sm lg:text-base">{desc}</p>
                                ))}
                                <div className="mb-3 sm:mb-4 mt-4">
                                    <h4 className="text-base lg:text-lg font-semibold">Contact Us</h4>
                                    <p className="text-sm lg:text-base">{affair['contact us']}</p>
                                </div>
                            </div>
                        ))}
                    </>
                );
            case 'Re-Admission':
                return (
                    <>
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Re-Admission</h2>
                        {studentAffairs.map((affair, index) => (
                            <div key={index} className="mb-4 sm:mb-6 text-left">
                                <div className="mb-3 sm:mb-4">
                                    <h4 className="text-base lg:text-lg font-semibold">Re-Admission</h4>
                                    <p className="text-sm lg:text-base">{affair['Re-Admission']}</p>
                                </div>
                            </div>
                        ))}
                    </>
                );
            case 'Scholarship':
                return (
                    <>
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Scholarship</h2>
                        {studentAffairs.map((affair, index) => (
                            <div key={index} className="mb-4 sm:mb-6 text-left">
                                <div className="mb-3 sm:mb-4">
                                    <h4 className="text-base lg:text-lg font-semibold">Scholarship</h4>
                                    <p className="text-sm lg:text-base mb-2">{affair.Scholarship.description}</p>
                                    <ul className="list-disc list-inside">
                                        {affair.Scholarship['list of scholarships'].map((scholarship, i) => (
                                            <li key={i} className="text-sm lg:text-base">
                                                {scholarship}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </>
                );
            case 'Office Bearers':
                return (
                    <>
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Office Bearers</h2>
                        {studentAffairs.map((affair, index) => (
                            <div key={index} className="mb-4 sm:mb-6 text-left">
                                <div className="mb-3 sm:mb-4">
                                    <h4 className="text-base lg:text-lg font-semibold">Office Bearers</h4>
                                    <ul className="list-disc list-inside mt-2">
                                        {affair['Office bearers'][1].map((bearer) => (
                                            <li key={bearer['S.No']} className="text-sm lg:text-base">
                                                {bearer['Name of the Staff']} - {bearer['Name of the Post']}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <main className="flex-grow pt-[116px] sm:pt-[126px] lg:pt-[136px]">
            {/* Hero Section - No Gap with Header */}
            <section className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[55vh] flex items-center justify-center overflow-hidden -mt-[116px] sm:-mt-[126px] lg:-mt-[136px]">
                {/* Background Image */}
                <img
                    src="/academics-hero.jpg"
                    alt="Academics"
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
                        Academics
                    </h1>

                    <div className="w-16 h-1 bg-yellow-400 mx-auto mb-3 rounded-full"></div>

                    <p className="text-xs sm:text-sm lg:text-base 
                                  text-gray-100 font-medium 
                                  leading-relaxed max-w-2xl mx-auto">
                        Explore our comprehensive academic programs and support services.
                    </p>

                </div>
            </section>

            {/* Sticky Navigation Pill Bar - Overlapping design */}
            <div className="sticky top-[116px] sm:top-[126px] lg:top-[136px] z-50 -mt-12 mb-4">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-md shadow-xl rounded-full py-2 px-3 flex justify-center overflow-x-auto no-scrollbar gap-2 border border-[rgb(220,140,140)]">
                        {sections.map((section, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSection(section)}
                                className={`font-bold px-5 py-3 rounded-full text-xs sm:text-sm lg:text-base transition-all duration-300 whitespace-nowrap ${currentSection === section
                                    ? 'bg-[rgb(115,40,40)] text-white shadow-md'
                                    : 'text-gray-700 hover:bg-[rgb(220,140,140)] hover:text-[rgb(115,40,40)]'
                                    }`}
                            >
                                {section.replace(/-/g, ' ').toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <section className="container mx-auto py-8 px-4">
                <div className="max-w-5xl mx-auto bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-xl text-left animate-fadeIn">
                    <div className="mb-8 border-b-2 border-[rgb(220,140,140)] pb-4">
                        <h2 className="text-2xl sm:text-3xl font-black text-[rgb(115,40,40)] uppercase tracking-tight">
                            {currentSection.replace(/-/g, ' ')}
                        </h2>
                    </div>
                    <div className="prose prose-lg max-w-none text-gray-700 font-medium leading-relaxed">
                        {renderSectionContent()}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Academics;
