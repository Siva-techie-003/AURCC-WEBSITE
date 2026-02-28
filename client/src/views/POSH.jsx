import React from 'react';
import './POSH.css';

const POSH = () => {
    return (
        <main className="bg-gradient-to-br from-[rgb(115,63,63)] via-[rgb(115,45,45)] to-white min-h-screen font-sans text-gray-800">
            {/* Hero Section */}
            <section className="relative w-full min-h-[35vh] sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] overflow-hidden flex items-center justify-center">
                <img src="/offices.webp" alt="POSH Cell" className="absolute inset-0 w-full h-full object-cover object-center" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-2">
                    <div className="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 md:py-6 lg:py-8 xl:py-10 flex flex-col items-center w-full max-w-2xl border border-white/30 animate-fadeIn">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight">Prevention of Sexual Harassment Cell (POSH)</h1>
                        <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white drop-shadow text-center font-medium">Resources, guidelines, and contact for POSH Cell</p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-7xl mx-auto py-8 sm:py-12 lg:py-14 px-4 flex flex-col gap-8 sm:gap-10 lg:gap-12">
                <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-fadeIn">
                    <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3">
                        <span className="text-lg lg:text-xl text-white">👩‍⚖️</span>
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
                                { title: 'Internal Complaint Committee Members', href: 'http://www.aurcc.ac.in/downloads/ICC%20committee.pdf' }
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

                <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-fadeIn">
                    <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3">
                        <span className="text-lg lg:text-xl text-white">📞</span>
                        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center">Contact Us</h2>
                    </div>
                    <div className="p-4 sm:p-6 md:p-8 lg:p-10 text-center space-y-4">
                        <div className="bg-[rgb(220,140,140)] p-6 rounded-2xl border border-[rgb(200,120,120)] max-w-2xl mx-auto shadow-sm">
                            <p className="font-bold text-lg text-[rgb(100,25,25)] mb-2">The Coordinator,</p>
                            <p className="text-gray-700 font-medium">POSH CELL,<br />Anna University Regional Campus,<br />Maruthamalai Main Road,<br />Coimbatore(Dt), Pin - 641 046.</p>
                            <div className="mt-4 pt-4 border-t border-[rgb(180,100,100)] flex flex-wrap justify-center gap-6">
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
