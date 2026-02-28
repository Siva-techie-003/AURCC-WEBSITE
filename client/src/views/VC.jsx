import React, { useState } from 'react';
import vcMessageData from '../assets/vcMessage.json';
import './VC.css';

const VC = () => {
    const [showPopover, setShowPopover] = useState(false);
    const vcMessage = vcMessageData.vc_message;

    const viceChancellor = {
        name: "Dr. R. Velraj",
        position: "Professor, Institute for Energy Studies",
        email: "velraj@annauniv.edu",
        image: "velraj.webp",
        education: [
            { degree: "Bachelor of Engineering", institution: "Annamalai University", year: "1990" },
            { degree: "Masters on Energy Engineering", institution: "Anna University", year: "1995" },
            { degree: "Ph.D.", institution: "Anna University", year: "2000" }
        ],
        professional_experience: [
            { position: "Deputy Director", institution: "Centre for Engineering Partnership", duration: "2004-2010" },
            { position: "Director", institution: "AU-FRG Institute for CAD/CAM", duration: "2010-2013" },
            { position: "Director", institution: "Institute for Energy Studies", duration: "2013-2018" }
        ],
        research_interests: [
            "Thermal Energy Storage",
            "Solar Energy",
            "Desalination",
            "Energy Efficient Buildings",
            "Energy Auditing and Management"
        ],
        achievements: [
            "DAAD Fellowship by Germany",
            "Tamil Nadu Scientist Award (TANSA) 2014",
            "Active Consultant Award - 2011"
        ],
        links: {
            "Google Scholar": "https://scholar.google.com/citations?user=abcdefg",
            "ResearchGate": "https://www.researchgate.net/profile/Velraj"
        },
        additional_details: "Recognized as the top 2% Scientists (International Level) in the field of Energy."
    };

    const formattedMessageContent = vcMessage.content
        .split('\n')
        .map((paragraph, i) => (
            <p key={i} className={`mb-6 ${paragraph.startsWith('•') || paragraph.match(/^[a-z]\)/) ? 'pl-8' : ''}`}>
                {paragraph}
            </p>
        ));

    return (
        <main className="min-h-screen flex justify-center items-center bg-white py-12 px-4 font-serif text-left">
            <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl max-w-5xl w-full border border-[rgb(200,120,120)] flex flex-col md:flex-row gap-10 animate-scale-in">
                {/* Profile Sidebar */}
                <div className="md:w-1/3 flex flex-col items-center">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <img
                            src="/velraj.webp"
                            alt="Vice-Chancellor's Photo"
                            className="relative w-full h-auto rounded-2xl shadow-xl border-4 border-white transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                    </div>
                    <h2 className="mt-6 font-black text-2xl lg:text-3xl text-[rgb(100,25,25)] text-center uppercase tracking-tight">{viceChancellor.name}</h2>
                    <div className="h-1 w-12 bg-[rgb(220,140,140)]0 rounded-full my-3"></div>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-xs lg:text-sm text-center">Vice-Chancellor</p>
                    <button
                        onClick={() => setShowPopover(true)}
                        className="mt-6 px-8 py-3 bg-[rgb(115,40,40)] text-white rounded-full font-bold hover:bg-[rgb(110,35,35)] transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center gap-2"
                    >
                        <span>📜</span> View Full Profile
                    </button>
                </div>

                {/* Message Content */}
                <div className="flex-grow">
                    <h1 className="text-2xl lg:text-3xl xl:text-4xl font-black text-[rgb(100,25,25)] mb-6 drop-shadow-sm leading-tight border-b-2 border-[rgb(220,140,140)] pb-4">
                        {vcMessage.title}
                    </h1>
                    <h2 className="text-xl lg:text-2xl font-bold text-[rgb(110,35,35)] mb-8 italic">Greetings to all!</h2>
                    <div className="text-base lg:text-lg text-gray-700 leading-loose text-justify font-sans">
                        {formattedMessageContent}
                    </div>
                    <div className="mt-12 flex flex-col items-end">
                        <div className="h-0.5 w-32 bg-[rgb(100,25,25)] mb-2"></div>
                        <p className="font-black text-[rgb(90,20,20)] text-xl tracking-tight">{vcMessage.signature}</p>
                        <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Vice-Chancellor, Anna University</p>
                    </div>
                </div>
            </div>

            {/* Profile Modal */}
            {showPopover && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-[rgb(90,20,20)]/80 backdrop-blur-sm" onClick={() => setShowPopover(false)}></div>
                    <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden flex flex-col max-h-[90vh] animate-pop-in">
                        <button
                            onClick={() => setShowPopover(false)}
                            className="absolute top-4 right-4 z-10 p-2 text-gray-500 hover:text-red-500 hover:bg-gray-100 rounded-full transition-all"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        <div className="overflow-y-auto p-8 sm:p-12">
                            <header className="mb-12 text-center">
                                <h2 className="text-3xl lg:text-5xl font-black text-[rgb(100,25,25)] mb-2">Vice-Chancellor's Profile</h2>
                                <div className="h-1.5 w-24 bg-[rgb(115,40,40)] mx-auto rounded-full"></div>
                            </header>

                            <div className="flex flex-col md:flex-row gap-12">
                                <div className="md:w-1/3 flex flex-col items-center">
                                    <div className="relative mb-6">
                                        <img src="/velraj.webp" alt="Profile" className="w-48 h-64 object-cover rounded-2xl shadow-xl border-4 border-white" />
                                        <div className="absolute -bottom-4 -right-4 bg-[rgb(115,40,40)] text-white p-3 rounded-2xl shadow-lg font-black italic">TOP 2% Researcher</div>
                                    </div>
                                    <h4 className="text-2xl font-black text-[rgb(100,25,25)] text-center">{viceChancellor.name}</h4>
                                    <p className="text-[rgb(115,40,40)] font-bold text-center mt-2 leading-tight uppercase tracking-widest text-xs px-4">{viceChancellor.position}</p>
                                </div>

                                <div className="flex-grow space-y-10 text-sans">
                                    <section>
                                        <h3 className="text-lg font-black text-[rgb(90,20,20)] uppercase tracking-widest mb-4 flex items-center gap-2">
                                            <span className="w-8 h-8 bg-[rgb(200,120,120)] rounded-lg flex items-center justify-center text-[rgb(115,40,40)]">🎓</span> Education
                                        </h3>
                                        <div className="space-y-4">
                                            {viceChancellor.education.map((edu, i) => (
                                                <div key={i} className="flex gap-4">
                                                    <div className="text-[rgb(115,40,40)] font-bold shrink-0">{edu.year}</div>
                                                    <div>
                                                        <p className="font-bold text-gray-900 leading-tight">{edu.degree}</p>
                                                        <p className="text-sm text-gray-500">{edu.institution}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section>
                                        <h3 className="text-lg font-black text-[rgb(90,20,20)] uppercase tracking-widest mb-4 flex items-center gap-2">
                                            <span className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">🔬</span> Research Interests
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {viceChancellor.research_interests.map((interest, i) => (
                                                <span key={i} className="px-4 py-2 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-full border border-emerald-100">{interest}</span>
                                            ))}
                                        </div>
                                    </section>

                                    <section>
                                        <h3 className="text-lg font-black text-[rgb(90,20,20)] uppercase tracking-widest mb-4 flex items-center gap-2">
                                            <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">🏆</span> Achievements
                                        </h3>
                                        <ul className="space-y-2">
                                            {viceChancellor.achievements.map((achievement, i) => (
                                                <li key={i} className="flex gap-4 items-start">
                                                    <span className="text-amber-500 mt-1">★</span>
                                                    <span className="text-sm font-semibold text-gray-700">{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>

                                    <section className="bg-[rgb(220,140,140)] p-6 rounded-2xl border border-[rgb(200,120,120)]">
                                        <h3 className="text-lg font-black text-[rgb(90,20,20)] uppercase mb-2">Connect</h3>
                                        <p className="text-sm font-bold text-[rgb(115,40,40)] mb-4 truncate italic">{viceChancellor.email}</p>
                                        <div className="flex gap-4">
                                            {Object.entries(viceChancellor.links).map(([name, url], i) => (
                                                <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="text-xs font-black text-[rgb(110,35,35)] hover:underline">{name}</a>
                                            ))}
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default VC;
