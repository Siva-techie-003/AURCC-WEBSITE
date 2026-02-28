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
        <main className="flex-grow">
            {/* Hero section */}
            <section
                className="bg-cover bg-center relative min-h-[40vh] flex items-center"
                style={{ backgroundImage: 'url(/academics-hero.jpg)' }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="container mx-auto py-12 sm:py-16 text-white p-4 sm:p-6 md:p-9 relative z-10 text-center">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4">Academics</h1>
                    <p className="text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">Explore our comprehensive academic programs and support services.</p>
                    <button className="bg-[rgb(220,140,140)]0 hover:bg-[rgb(115,40,40)] text-white font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg">
                        Learn More
                    </button>
                </div>
            </section>

            {/* Content sections */}
            <section className="container mx-auto py-6 sm:py-8 p-4 sm:p-6 md:p-9">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
                    {/* Sidebar Navigation */}
                    <div className="md:col-span-1">
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 flex items-center justify-center md:justify-start">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                            </svg>
                            Sections
                        </h2>
                        <div className="flex flex-col space-y-2">
                            {sections.map((section, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSection(section)}
                                    className={`font-semibold py-2 px-3 sm:px-4 border rounded shadow-sm flex items-center transition-all duration-200 ${currentSection === section
                                        ? 'bg-[rgb(220,140,140)]0 text-white border-[rgb(115,40,40)]'
                                        : 'bg-white hover:bg-gray-100 text-gray-800 border-gray-300'
                                        }`}
                                >
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                    {section.replace(/-/g, ' ')}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="md:col-span-3 bg-white p-4 sm:p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm text-center">
                        {renderSectionContent()}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Academics;
