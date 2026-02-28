import React, { useState, useEffect } from 'react';
import departmentData from '../assets/s&h.json';
import './ScienceHumanities.css';

const ScienceHumanities = () => {
    const [activeSection, setActiveSection] = useState('About Department');
    const [showPopover, setShowPopover] = useState(false);
    const [selectedStaff, setSelectedStaff] = useState(null);

    const sections = ['About Department', 'Faculty'];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150;
            for (const section of sections) {
                const id = section.toLowerCase().replace(/\s+/g, '-');
                const el = document.getElementById(id);
                if (el) {
                    const top = el.offsetTop;
                    const bottom = top + el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < bottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (section) => {
        const id = section.toLowerCase().replace(/\s+/g, '-');
        const el = document.getElementById(id);
        if (el) {
            const offset = el.offsetTop - 100;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    };

    const showDetails = (staff) => {
        setSelectedStaff(staff);
        setShowPopover(true);
    };

    const department = departmentData;

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-left">
            {/* Hero section */}
            <section className="relative h-64 sm:h-80 lg:h-[50vh] overflow-hidden">
                <img
                    src={`/${department.image}`}
                    alt={department.name}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[rgb(115,63,63)]/80 to-[rgb(115,25,25)]/70"></div>
                <div className="container mx-auto h-full flex flex-col justify-center relative z-10 px-4">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white uppercase tracking-tighter mb-4">
                        {department.name}
                    </h1>
                    <p className="text-lg lg:text-xl text-[rgb(200,120,120)] font-medium opacity-90 max-w-2xl">Bridging pure sciences with engineering innovation.</p>
                </div>
            </section>

            {/* Sticky Tabs */}
            <div className="sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-full -mt-6 py-2 px-3 flex justify-center overflow-x-auto no-scrollbar gap-2 border border-[rgb(220,140,140)]">
                        {sections.map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={`font-bold px-5 py-3 rounded-full text-xs sm:text-sm lg:text-base transition-all duration-300 whitespace-nowrap ${activeSection === section
                                    ? 'bg-[rgb(115,40,40)] text-white shadow-md'
                                    : 'text-gray-700 hover:bg-[rgb(220,140,140)] hover:text-[rgb(115,40,40)]'
                                    }`}
                            >
                                {section}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto py-16 px-4 space-y-24">
                {/* About Section */}
                <section id="about-department" className="animate-fadeIn">
                    <header className="flex flex-col md:flex-row md:items-end justify-between border-b-4 border-[rgb(100,25,25)] pb-8 mb-12 gap-6">
                        <div className="max-w-4xl">
                            <h2 className="text-2xl lg:text-4xl font-black text-[rgb(90,20,20)] uppercase tracking-tight">Academic Overview</h2>
                            <div className="h-1.5 w-20 bg-[rgb(115,40,40)] mt-4 rounded-full"></div>
                        </div>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                            <p className="text-lg lg:text-xl text-gray-700 leading-loose italic text-justify font-medium">"{department.description}"</p>
                        </div>
                        <div className="space-y-8">
                            <div className="bg-[rgb(100,25,25)] text-white p-10 rounded-3xl shadow-xl flex flex-col gap-4">
                                <h3 className="text-2xl font-black uppercase tracking-tight text-[rgb(160,80,80)]">Our Vision</h3>
                                <p className="text-[rgb(220,140,140)] font-medium leading-relaxed">{department.vision}</p>
                            </div>
                            <div className="bg-white border-2 border-[rgb(200,120,120)] p-10 rounded-3xl">
                                <h3 className="text-xl font-bold text-[rgb(90,20,20)] uppercase mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 bg-[rgb(115,40,40)] text-white rounded-lg flex items-center justify-center text-sm">✓</span>
                                    Mission Objectives
                                </h3>
                                <ul className="space-y-4">
                                    {(Array.isArray(department?.mission) ? department.mission : []).map((item, i) => (
                                        <li key={i} className="flex gap-4 text-sm font-bold text-gray-600">
                                            <span className="text-[rgb(140,60,60)]">•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Faculty Section */}
                <section id="faculty" className="animate-fadeInUp">
                    <header className="flex flex-col md:flex-row md:items-end justify-between border-b-4 border-[rgb(100,25,25)] pb-8 mb-12 gap-6">
                        <div className="max-w-4xl">
                            <h2 className="text-2xl lg:text-4xl font-black text-[rgb(90,20,20)] uppercase tracking-tight">Faculty Team</h2>
                            <div className="h-1.5 w-20 bg-[rgb(115,40,40)] mt-4 rounded-full"></div>
                        </div>
                    </header>

                    <div className="space-y-16">
                        {/* HOD */}
                        <div>
                            <h3 className="text-xs font-black text-[rgb(140,60,60)] uppercase tracking-widest text-center mb-8">Head of Department</h3>
                            <div className="flex justify-center">
                                {(Array.isArray(department?.faculty?.hod_desk) ? department.faculty.hod_desk : []).map((staff, i) => (
                                    <div
                                        key={i}
                                        onClick={() => showDetails(staff)}
                                        className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-8 flex flex-col items-center text-center cursor-pointer hover:-translate-y-2 transition-all w-full max-w-sm group"
                                    >
                                        <img src={`/${staff.image}`} alt={staff.name} className="w-32 h-44 object-cover rounded-2xl shadow-lg border-4 border-white mb-6 group-hover:scale-105 transition-transform" />
                                        <h4 className="text-xl font-black text-[rgb(90,20,20)] uppercase tracking-tight">{staff.name}</h4>
                                        <p className="text-xs font-black text-[rgb(120,45,45)] uppercase tracking-widest mt-1">{staff.position}</p>
                                        <span className="mt-6 px-6 py-2 bg-[rgb(220,140,140)] text-[rgb(115,40,40)] rounded-full font-bold text-xs">View Profile</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Assistant Professors */}
                        <div>
                            <h3 className="text-xs font-black text-[rgb(140,60,60)] uppercase tracking-widest text-center mb-10">Academic Faculty</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {(Array.isArray(department?.faculty?.assistant_professors) ? department.faculty.assistant_professors : []).map((staff, i) => (
                                    <div
                                        key={i}
                                        onClick={() => showDetails(staff)}
                                        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all group"
                                    >
                                        <img src={`/${staff.image}`} alt={staff.name} className="w-24 h-32 object-cover rounded-xl shadow-md border-2 border-white mb-4 group-hover:scale-105 transition-transform" />
                                        <h4 className="text-base font-black text-[rgb(90,20,20)] uppercase tracking-tight leading-tight">{staff.name}</h4>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1 mb-4">{staff.position}</p>
                                        <div className="mt-auto pt-4 border-t border-gray-50 w-full text-[10px] font-black text-[rgb(115,40,40)] uppercase tracking-widest">Profile Details</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Faculty Profile Modal */}
            {showPopover && selectedStaff && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-[rgb(90,20,20)]/80 backdrop-blur-sm" onClick={() => setShowPopover(false)}></div>
                    <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-popIn">
                        <button
                            onClick={() => setShowPopover(false)}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 rounded-full hover:bg-gray-100 transition-all z-10"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        <div className="overflow-y-auto p-8 sm:p-12">
                            <div className="flex flex-col md:flex-row gap-10">
                                <div className="md:w-1/3 flex flex-col items-center">
                                    <img src={`/${selectedStaff.image}`} alt={selectedStaff.name} className="w-48 h-64 object-cover rounded-2xl shadow-xl border-4 border-white mb-6" />
                                    <h4 className="text-2xl font-black text-[rgb(90,20,20)] text-center uppercase tracking-tighter leading-tight">{selectedStaff.name}</h4>
                                    <p className="text-[rgb(115,40,40)] font-bold uppercase tracking-widest text-xs mt-2">{selectedStaff.position}</p>
                                    <p className="text-gray-400 font-bold text-[10px] mt-2 italic">{selectedStaff.email}</p>
                                </div>

                                <div className="flex-grow space-y-10 text-sans">
                                    {selectedStaff.education?.length > 0 && (
                                        <section>
                                            <h3 className="text-lg font-black text-[rgb(90,20,20)] mb-4 border-b-2 border-[rgb(220,140,140)] pb-2 flex items-center gap-2">
                                                <span className="text-sm">🎓</span> Education
                                            </h3>
                                            <div className="space-y-4">
                                                {selectedStaff.education.map((edu, i) => (
                                                    <div key={i} className="flex gap-4">
                                                        <div className="text-[rgb(115,40,40)] font-bold text-sm shrink-0">{edu.year}</div>
                                                        <div>
                                                            <p className="font-bold text-gray-900 leading-tight">{edu.degree}</p>
                                                            <p className="text-xs text-gray-500 uppercase font-black tracking-widest mt-1">{edu.institution}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    )}

                                    {selectedStaff.research_interests?.length > 0 && (
                                        <section>
                                            <h3 className="text-lg font-black text-[rgb(90,20,20)] mb-4 border-b-2 border-[rgb(220,140,140)] pb-2 flex items-center gap-2">
                                                <span className="text-sm">🔬</span> Expertise
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedStaff.research_interests.map((int, i) => (
                                                    <span key={i} className="px-3 py-1.5 bg-[rgb(220,140,140)] text-[rgb(110,35,35)] text-[10px] font-black rounded-full border border-[rgb(200,120,120)] uppercase tracking-widest">{int}</span>
                                                ))}
                                            </div>
                                        </section>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ScienceHumanities;
