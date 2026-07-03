import React, { useState, useEffect, useRef } from 'react';
import './StudentAffairs.css';

const StudentAffairs = () => {
    const backgroundImage = '/public/studentaffairs.webp';

    const getStaffImageUrl = (imagePath) => {
        if (!imagePath) return '/public/default-staff.jpg';
        let path = imagePath;
        if (path.includes('rathinasamyGA.webp')) {
            path = 'rathinasamy.webp';
        }
        if (path.startsWith('/')) {
            path = path.slice(1);
        }
        if (!path.startsWith('public/')) {
            path = `public/${path}`;
        }
        return `/${path}`;
    };
    const [content, setContent] = useState(null);
    const [currentSection, setCurrentSection] = useState('description');
    const sectionRefs = {
        description: useRef(null),
        reAdmission: useRef(null),
        scholarships: useRef(null),
        fees: useRef(null),
        staff: useRef(null)
    };

    const sections = [
        { key: 'description', name: 'Description' },
        { key: 'reAdmission', name: 'Re-Admission' },
        { key: 'scholarships', name: 'Scholarships' },
        { key: 'fees', name: 'Fees Details' },
        { key: 'staff', name: 'Administration Staff' }
    ];
    useEffect(() => {
        fetch("/api/student-affairs")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setContent(data);
            })
            .catch(err => console.error(err));
    }, []);

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
            const offset = el.offsetTop - 100; // Adjust for sticky header
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    };
    if (!content) {
        return <p className="text-center mt-20 text-lg">Loading Student Affairs...</p>;
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-left pt-[116px] sm:pt-[126px] lg:pt-[136px]">
            {/* Hero Section - No Gap with Header */}
            <section className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[55vh] flex items-center justify-center overflow-hidden -mt-[116px] sm:-mt-[126px] lg:-mt-[136px]">
                {/* Background Image */}
                <img
                    src={backgroundImage}
                    alt="Student Affairs"
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

                    <h1 className="text-xl sm:text-2xl lg:text-3xl 
                                   font-black text-white 
                                   tracking-tight mb-2 uppercase">
                        Student Affairs
                    </h1>
                    <div className="w-16 h-1 bg-yellow-400 mx-auto mb-3 rounded-full"></div>

                    <p className="text-xs sm:text-sm lg:text-base 
                                  text-gray-100 font-medium 
                                  leading-relaxed max-w-2xl mx-auto">
                        The Office of Student Affairs is dedicated to students' academic and personal success.
                    </p>

                </div>

            </section>

            {/* Navigation Tabs - Overlapping design */}
            <div className="hidden sm:block sticky top-[116px] sm:top-[126px] lg:top-[136px] z-50 -mt-12 mb-4">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="w-fit mx-auto bg-white/95 backdrop-blur-md shadow-xl rounded-full py-2 px-3 flex justify-center overflow-x-auto no-scrollbar gap-2 border border-[rgb(220,140,140)]">
                        {sections.map((section) => (
                            <button
                                key={section.key}
                                onClick={() => scrollToSection(section.key)}
                                className={`font-bold px-5 py-3 rounded-full text-xs sm:text-sm lg:text-base transition-all duration-300 whitespace-nowrap ${currentSection === section.key
                                    ? 'bg-[rgb(115,40,40)] text-white shadow-md'
                                    : 'text-gray-700 hover:bg-[rgb(220,140,140)] hover:text-[rgb(115,40,40)]'
                                    }`}
                            >
                                {section.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content sections */}
            <main className="max-w-7xl mx-auto py-8 lg:py-12 px-4 space-y-12">
                {/* Description Section */}
                <div id="description" ref={sectionRefs.description} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all">
                    <div className="bg-[rgb(110,35,35)] py-6 px-8 flex justify-between items-center text-white">
                        <h2 className="text-xl lg:text-2xl font-bold">Description</h2>
                    </div>
                    <div className="p-8 space-y-4">
                        {(Array.isArray(content?.description) ? content.description : []).map((item, index) => (
                            <p key={index} className="text-base lg:text-lg text-gray-700 leading-relaxed font-medium">
                                {item}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Re-Admission Section */}
                <div id="reAdmission" ref={sectionRefs.reAdmission} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all">
                    <div className="bg-[rgb(110,35,35)] py-6 px-8 flex justify-between items-center text-white">
                        <h2 className="text-xl lg:text-2xl font-bold">Re-Admission</h2>
                    </div>
                    <div className="p-8">
                        <div className="text-gray-700 font-medium text-base lg:text-lg leading-relaxed whitespace-pre-line">
                            {content?.['Re-Admission'] || 'Re-admission information will be updated soon.'}
                        </div>
                    </div>
                </div>

                {/* Scholarships Section */}
                <div id="scholarships" ref={sectionRefs.scholarships} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all">
                    <div className="bg-[rgb(110,35,35)] py-6 px-8 flex justify-between items-center text-white">
                        <h2 className="text-xl lg:text-2xl font-bold">Scholarships</h2>
                    </div>
                    <div className="p-8">
                        <div className="mb-6 py-2 border-l-4 border-[rgb(115,40,40)] pl-6">
                            <p className="text-lg lg:text-xl font-bold text-[rgb(100,25,25)]">{content?.Scholarship?.description || 'Scholarship information will be updated soon.'}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {(Array.isArray(content?.Scholarship?.['list of scholarships']) ? content.Scholarship['list of scholarships'] : []).map((scholarship, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-[rgb(160,80,80)] transition-colors">
                                    <span className="w-8 h-8 min-w-[32px] 
                 rounded-full 
                 flex items-center justify-center 
                 bg-[rgb(200,120,120)] 
                 text-[rgb(110,35,35)] 
                 text-sm font-bold 
                 leading-none">
                                        ★
                                    </span>                                    <span className="text-base font-semibold text-gray-800">{scholarship}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Fees Section */}
                <div id="fees" ref={sectionRefs.fees} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all max-w-2xl mx-auto">
                    <div className="bg-[rgb(110,35,35)] py-6 px-8 flex justify-between items-center text-white">
                        <h2 className="text-xl lg:text-2xl font-bold">Fees Details</h2>
                    </div>
                    <div className="p-8 flex justify-center">
                        <a
                            href={content?.['fees details'] || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[rgb(115,40,40)] text-white font-bold rounded-xl hover:bg-[rgb(110,35,35)] transition-all shadow-md group text-sm"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            View Detailed Fee Structure
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7-7 7" /></svg>
                        </a>
                    </div>
                </div>

                {/* Staff Section */}
                <div id="staff" ref={sectionRefs.staff} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all">
                    <div className="bg-[rgb(110,35,35)] py-6 px-8 flex justify-between items-center text-white">
                        <h2 className="text-xl lg:text-2xl font-bold">Administration Staff</h2>
                    </div>
                    <div className="p-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {(Array.isArray(content?.['Office bearers']?.['Administration staff']) ? content['Office bearers']['Administration staff'] : []).map((staff, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100 flex flex-col items-center text-center hover:bg-white hover:shadow-md transition-all group"
                                >
                                    <div className="relative mb-4">
                                        <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-[rgb(110,35,35)] shadow-md bg-gray-50 flex-shrink-0">
                                            <img
                                                src={getStaffImageUrl(staff.Image)}
                                                alt={staff['Name of the Staff']}
                                                className="w-full h-full object-cover object-top"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-lg text-[rgb(100,25,25)] uppercase tracking-tight">{staff['Name of the Staff']}</h3>
                                    <div className="h-0.5 w-12 bg-[rgb(180,100,100)] my-2"></div>
                                    <p className="text-sm font-bold text-gray-600 uppercase mb-4">{staff['Name of the Post']}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


            </main>
        </div>
    );
};

export default StudentAffairs;
