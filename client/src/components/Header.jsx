import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const mobileSections = [

        {
            name: "Home",
            route: "/",
            sections: "home_page",
            isOpen: true,
            links: [
                { name: "About Campus", route: "/", section: "about" },
                { name: "Dean's Details", route: "/", section: "deans-message" },
                { name: "Gallery of Memories", route: "/", section: "gallery" },
                { name: "Our Recruiters", route: "/", section: "our_recruiters" },
            ],
        },

        {
            name: "Administration",
            isOpen: false,
            links: [
                // { name: "Organogram", route: "/organogram" },
                { name: "University Administration", route: "/Registrar" },
                {
                    name: "Administrative Staff",
                    subLinks: [
                        { name: "GENERAL ADMINISTRATION-I", route: "/admin/establishment" },
                        { name: "GENERAL ADMINISTRATION-II", route: "/admin/purchase-finance" },
                        { name: "GENERAL ADMINISTRATION-III", route: "/admin/student" },
                    ]
                },
                { name: "Head of the Departments", route: "/HOD" },
                { name: "Cell Coordinators", route: "/COD" },
                { name: "Dean Office Staff", route: "/dean_office" },
            ],
        },
        {
            name: "Academics",
            isOpen: false,
            links: [
                { name: "Programs Offered", route: "/programs_offered" },
                { name: "Curriculam & Syllabus", route: "/curriculum_syllabus" },
                { name: "Regulation", route: "/regulation" },
                { name: "Student Affairs", route: "/student_affairs" },
            ],
        },
        {
            name: "Departments",
            isOpen: false,
            links: [

                { name: "Mechanical Engineering", route: "/departments/mech" },
                { name: "Electrical & Electronics Engineering", route: "/departments/eee" },
                { name: "Electronics & communication Engineering", route: "/departments/ece" },
                { name: "Computer Science & Engineering", route: "/departments/cse" },
                { name: "Science & Humanities Department", route: "/s&h" },
                { name: "MBA", route: "/departments/mba" },
            ],
        },
        {
            name: "Offices",
            isOpen: false,
            links: [
                { name: "Admission", route: "/admissions" },
                { name: "DGATE Cell", route: "/dgate" },
                { name: "PACE Cell", route: "/pace-cell" },
                { name: "Zonal Office", route: "/zonal" },
                { name: "Office of Affiliation", route: "/office-affiliation" },
                { name: "Distance Education", route: "/distance-education" },
                { name: "ED Cell", route: "/ed-cell" },
                { name: "Placement Cell", route: "/placement-cell" },
                { name: "Research Cell", route: "/research-cell" },
                { name: "Exam Cell", route: "/exam-cell" },
                { name: "Estate Office", route: "/EstateOff" },
            ],
        },
        {
            name: "Life@aurcc",
            isOpen: false,
            links: [
                // { name: "Physical Education", route: "/sports" },
                { name: "NSS", route: "/nss" },
                { name: "Kani Tamil Peravai", route: "/tamilmandram" },
                { name: "Fine Arts Club", route: "/fine-arts" },
                { name: "Alumni", route: "/alumni" }
            ],
        },
    ];

    const [sections, setSections] = useState(mobileSections);

    const toggleSection = (index) => {
        const newSections = [...sections];
        newSections[index].isOpen = !newSections[index].isOpen;
        setSections(newSections);
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50">
            {/* Top Bar */}
            <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] text-white">

                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between py-2 text-xs sm:text-sm">
                        <span className="font-medium truncate">Counselling Code: <span className="text-yellow-300 font-bold">2025</span></span>
                        <div className="flex items-center space-x-4 sm:space-x-8">
                            <Link to="/library" className="hover:text-yellow-300 transition-colors flex items-center gap-1.5 group">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
                                <span className="hidden sm:inline font-medium">Library</span>
                            </Link>
                            <Link to="/sports" className="hover:text-yellow-300 transition-colors flex items-center gap-1.5 group">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                <span className="hidden sm:inline font-medium">Physical Education</span>
                            </Link>
                            <Link to="/hostel" className="hover:text-yellow-300 transition-colors flex items-center gap-1.5 group">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                <span className="hidden sm:inline font-medium">Hostel</span>
                            </Link>
                            <Link to="/contact" className="hover:text-yellow-300 transition-colors flex items-center gap-1.5 group">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                <span className="hidden sm:inline font-medium">Contact</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="fixed top-9 left-0 w-full z-[999] bg-white shadow-xl border-b border-gray-100 flex items-center" style={{ minHeight: '80px' }}>
                <div className="w-full px-3 sm:px-5 lg:px-8">
                    <nav className="flex items-center justify-between gap-2">

                        {/* ── LEFT: Logo ── */}
                        <div className="flex items-center flex-shrink-0 cursor-pointer" onClick={() => navigate('/')}>
                            <img src="/aurcc_tamil.jpg" alt="AURCC Logo" className="h-14 sm:h-16 md:h-20 lg:h-[90px] w-auto" />
                        </div>

                        {/* ── RIGHT: Nav Headings ── */}
                        <div className="flex items-center flex-wrap justify-end gap-x-0.5 gap-y-0.5">
                            {sections.map((section, idx) => (
                                <div key={idx} className="relative group">
                                    {/* Nav Button */}
                                    <button
                                        onClick={() => {
                                            if (section.sections) {
                                                navigate(section.route, { state: { scrollTo: section.sections } });
                                            } else if (section.route) {
                                                navigate(section.route);
                                            }
                                        }}
                                        className="flex items-center gap-1 px-2 sm:px-3 lg:px-4 py-2 text-xs sm:text-sm lg:text-base font-black text-gray-700 hover:text-[rgb(115,40,40)] hover:bg-[rgb(220,140,140)]/30 rounded-xl transition-all uppercase tracking-tight whitespace-nowrap"
                                    >
                                        {section.name}
                                        {section.links && (
                                            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 transform group-hover:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                    </button>

                                    {/* Dropdown */}
                                    {section.links && (
                                        <div className="absolute top-full right-0 pt-1 z-50 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                                            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 w-64">
                                                {section.links.map((link, lIdx) => (
                                                    link.subLinks ? (
                                                        <div key={lIdx} className="relative group/sub">
                                                            <div className="flex items-center justify-between px-5 py-2 text-sm font-bold text-gray-600 hover:text-[rgb(115,40,40)] hover:bg-[rgb(220,140,140)]/40 cursor-pointer transition-colors">
                                                                <span>{link.name}</span>
                                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg>
                                                            </div>
                                                            <div className="absolute top-0 left-full ml-1 py-2 bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible translate-x-2 group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-0 transition-all w-60 z-50">
                                                                {link.subLinks.map((sub, sIdx) => (
                                                                    <Link key={sIdx} to={sub.route} className="block px-5 py-2 text-sm font-bold text-gray-600 hover:text-[rgb(115,40,40)] hover:bg-[rgb(220,140,140)]/40 transition-colors">{sub.name}</Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <Link
                                                            key={lIdx}
                                                            to={link.section ? "/" : link.route}
                                                            state={link.section ? { scrollTo: link.section } : null}
                                                            className="block px-5 py-2 text-sm font-bold text-gray-600 hover:text-[rgb(115,40,40)] hover:bg-[rgb(220,140,140)]/40 transition-colors"
                                                        >
                                                            {link.name}
                                                        </Link>
                                                    )
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                    </nav>
                </div>
            </header>


            {/* Mobile Menu Backdrop */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[100] bg-[rgb(90,20,20)]/40 backdrop-blur-md transition-all duration-500" onClick={() => setIsMobileMenuOpen(false)}>
                    {/* Sidebar */}
                    <div className="fixed inset-y-0 right-0 max-w-[320px] w-full bg-white shadow-2xl overflow-hidden flex flex-col animate-slideLeft" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <span className="text-xl font-black text-[rgb(100,25,25)] uppercase">Navigation</span>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-xl bg-gray-50 text-gray-400 hover:text-gray-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <nav className="flex-grow overflow-y-auto p-4 space-y-2">
                            {sections.map((section, idx) => (
                                <div key={idx} className="border-b border-gray-50 last:border-0">
                                    <button onClick={() => toggleSection(idx)} className="w-full flex items-center justify-between py-4 px-2 text-[rgb(90,20,20)] font-black uppercase text-xs tracking-widest hover:text-[rgb(115,40,40)]">
                                        {section.name}
                                        <svg className={`w-4 h-4 transform transition-transform duration-300 ${section.isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
                                    </button>
                                    {section.isOpen && (
                                        <div className="pl-4 pb-4 space-y-1">
                                            {section.links.map((link, lIdx) => (
                                                <Link
                                                    key={lIdx}
                                                    to={link.section ? "/" : link.route}
                                                    state={link.section ? { scrollTo: link.section } : null}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="block py-2.5 px-4 text-xs font-bold text-gray-500 hover:text-[rgb(115,40,40)] hover:bg-[rgb(220,140,140)] rounded-xl transition-all"
                                                >
                                                    {link.name}
                                                </Link>
                                            ))}
                                            {section.links.map((link, lIdx) =>
                                                link.subLinks ? (
                                                    <div key={lIdx}>
                                                        <p className="py-2 px-4 text-xs font-black text-[rgb(90,20,20)] uppercase tracking-widest">{link.name}</p>
                                                        {link.subLinks.map((sub, sIdx) => (
                                                            <Link key={sIdx} to={sub.route} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-8 text-xs font-bold text-gray-500 hover:text-[rgb(115,40,40)] hover:bg-[rgb(220,140,140)] rounded-xl transition-all">
                                                                › {sub.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <Link key={lIdx} to={link.route} onClick={() => setIsMobileMenuOpen(false)} className="block py-2.5 px-4 text-xs font-bold text-gray-500 hover:text-[rgb(115,40,40)] hover:bg-[rgb(220,140,140)] rounded-xl transition-all">
                                                        {link.name}
                                                    </Link>
                                                )
                                            )}

                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>
                        <div className="p-6 bg-gray-50 border-t border-gray-100">
                            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full py-4 bg-[rgb(100,25,25)] text-white text-center rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg">Get in Touch</Link>
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
};

export default Header;
