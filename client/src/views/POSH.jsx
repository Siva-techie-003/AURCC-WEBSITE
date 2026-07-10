import React, { useRef } from 'react';
import './POSH.css';
import StaffCard from '../components/StaffCard';

const POSH = () => {
    const staffRef = useRef(null);
    const resourcesRef = useRef(null);
    const contactRef = useRef(null);

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
        { name: 'Resources', ref: resourcesRef },
        { name: 'Contact Us', ref: contactRef },
        { name: 'Staff', ref: staffRef }
    ];

    return (
        <main className="bg-white min-h-screen font-sans text-gray-800 pt-[116px] sm:pt-[126px] lg:pt-[136px]">
            {/* Hero Section - No Gap with Header */}
            <section className="relative w-full h-80 md:h-96 lg:h-[55vh] flex items-center justify-center overflow-hidden -mt-[116px] sm:-mt-[126px] lg:-mt-[136px]">
                {/* Background Image */}
                <img
                    src="/offices.webp"
                    alt="POSH Committee"
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
                        Internal Complaints Committee (POSH)
                    </h1>

                    <div className="w-16 h-1 bg-yellow-400 mx-auto mb-3 rounded-full"></div>

                    <p className="text-xs sm:text-sm lg:text-base 
                                  text-gray-100 font-medium 
                                  leading-relaxed max-w-2xl mx-auto">
                        Resources, guidelines, and support for the prevention of sexual harassment.
                    </p>

                </div>
            </section>



            {/* Content Section */}
            <section className="max-w-7xl mx-auto py-8 sm:py-12 lg:py-14 px-4 flex flex-col gap-12">
                
                {/* Resources Section */}
                <div ref={resourcesRef} className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-fadeIn">
                    <div className="bg-[rgb(110,35,35)] py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7V2m0 2h12m0 0l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M21 7l-3 9M18 7V2M12 2v20m-5 0h10" />
                        </svg>
                        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center">POSH Resources & Guidelines</h2>
                    </div>
                    <div className="p-4 sm:p-6 md:p-8 lg:p-10 text-left">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { title: 'Provision of Online Complaint Form', href: 'https://docs.google.com/forms/d/e/1FAIpQLScKl-8gkctBfoE_E0wYdYM6lhZ_GOUVKErLfBXQQLx7jfkPJQ/viewform' },
                                { title: 'Guidelines for prevention and redressal of harassment', href: 'http://www.aurcc.ac.in/downloads/Guidelines%20for%20prevention.pdf' },
                                { title: 'Guidelines on safety of students on and off campus', href: 'http://www.aurcc.ac.in/downloads/Guidelines%20on%20safety%20of%20students.pdf' },
                                { title: 'UGC Regulations 2015 Handbook', href: 'http://www.aurcc.ac.in/downloads/UGC%20Regulations%202015.pdf' },
                                { title: 'Saksham: Gender Sensitisation Measures 2013', href: 'http://www.aurcc.ac.in/downloads/Saksham%20Measures.pdf' },
                                { title: 'Working Women Sexual Harassment Handbook 2013', href: 'http://www.aurcc.ac.in/downloads/Handbook.pdf' },
                                { title: 'Internal Complaint Committee ICC Members', href: 'http://www.aurcc.ac.in/downloads/ICC%20committee.pdf' }
                            ].map((link, i) => (
                                <li key={i}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center p-4 bg-white border border-gray-200 rounded-xl hover:bg-[rgb(220,140,140)] hover:border-[rgb(160,80,80)] transition-all duration-300 shadow-sm group"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-[rgb(200,120,120)] text-[rgb(115,40,40)] flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                        </div>
                                        <span className="text-[rgb(115,40,40)] font-semibold group-hover:text-[rgb(105,30,30)] text-sm lg:text-base">{link.title}</span>
                                        <svg className="ml-auto w-5 h-5 text-gray-400 group-hover:text-[rgb(120,45,45)] transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                                    </a>
                                </li>
                             ))}
                        </ul>
                    </div>
                </div>

                {/* Staff Section */}
                <div ref={staffRef} className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-fadeIn">
                    <div className="bg-[rgb(110,35,35)] py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3">
                        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center">Staff Members</h2>
                    </div>
                    <div className="p-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                            {[
                                {
                                    name: "Dr. M. V. Subha",
                                    position: "Coordinator",
                                    department: "Department of Management Studies",
                                    university: "Anna University Regional Campus",
                                    address: "Navavoor, Coimbatore-641 046",
                                    image: "subha.webp",
                                    email: "subhamv@aurcc.ac.in"
                                },
                                {
                                    name: "Dr. S. Srividhya",
                                    position: "Member",
                                    department: "Department of Management Studies",
                                    university: "Anna University Regional Campus",
                                    address: "Navavoor, Coimbatore-641 046",
                                    image: "srividhya.webp",
                                    email: "srividhya@aurcc.ac.in"
                                }
                            ].map((member, i) => (
                                <StaffCard key={i} staff={member} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Us Section */}
                <div ref={contactRef} className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-fadeIn">
                    <div className="bg-[rgb(110,35,35)] py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center">Contact Us</h2>
                    </div>
                    <div className="p-4 sm:p-6 md:p-8 lg:p-10 text-center space-y-4">
                        <div className="bg-amber-50/60 p-6 rounded-2xl border-2 border-[rgb(115,40,40)]/20 max-w-2xl mx-auto shadow-sm hover:border-[rgb(115,40,40)]/40 transition-all duration-300">
                            <p className="font-bold text-lg text-[rgb(100,25,25)] mb-2"> </p>
                            <p className="text-gray-700 font-medium">POSH CELL,<br />Anna University Regional Campus,<br />Maruthamalai Main Road,<br />Coimbatore(Dt), Pin - 641 046.</p>
                            <div className="mt-4 pt-4 border-t border-[rgb(115,40,40)]/20 flex flex-wrap justify-center gap-6">
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-[rgb(100,25,25)]">Phone:</span>
                                    <span className="text-gray-800">0422-2984001</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-[rgb(100,25,25)]">E-Mail:</span>
                                    <a href="mailto:poshcell@aurcc.ac.in" className="text-[rgb(115,40,40)] font-bold hover:underline">poshcell@aurcc.ac.in</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    );
};

export default POSH;
