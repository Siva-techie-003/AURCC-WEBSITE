import React, { useState, useEffect, useRef } from "react";
import { href, Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const navigate = useNavigate();
  const quickLinksRef = useRef(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }
    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (quickLinksRef.current && !quickLinksRef.current.contains(event.target)) {
        setIsQuickLinksOpen(false);
      }
    };
    if (isQuickLinksOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isQuickLinksOpen]);

  const mobileSections = [
    {
      name: "Home",
      route: "/",
      sections: "home_page",
      isOpen: false,
      links: [
        { name: "About Campus", route: "/", section: "about" },
        { name: "Dean Desk", route: "/", section: "deans-message" },
        { name: "Gallery of Memories", route: "/", section: "gallery" },
        { name: "Our Recruiters", route: "/", section: "our_recruiters" },
        { name: "Alumi Speak", route: "/", section: "alumni" },
      ],
    },

    {
      name: "Administration",
      isOpen: false,
      links: [
        { name: "University Administration", href: "https://www.annauniv.edu/administration.php" },
        { name: "Head of the Departments", route: "/HOD" },
        {
          name: "Campus Administrative Staffs",
          subLinks: [
            { name: "GENERAL ADMINISTRATION-I", route: "/admin/establishment" },
            {
              name: "GENERAL ADMINISTRATION-II",
              route: "/admin/purchase-finance",
            },
            { name: "GENERAL ADMINISTRATION-III", route: "/admin/student" },
          ],
        },
        { name: "Cell Coordinators", route: "/COD" },
        { name: "Dean Office Staff", route: "/dean_office" },
      ],
    },
    {
      name: "Academics",
      isOpen: false,
      links: [
        {
          name: "Programmes Offered",
          subLinks: [
            { name: "Under Graduate", route: "/programs/ug" },
            { name: "Post Graduate", route: "/programs/pg" },
          ],
        },
        { name: "Curriculam & Syllabus", route: "/curriculum_syllabus" },
        {
          name: "Regulations",
          subLinks: [
            { name: "2021", route: "/regulation/2021" },
            { name: "2025", route: "/regulation/2025" },
          ],
        },
        { name: "AICTE Approval", route: "/aicte&moe" },
        {
          name: "Committees",
          subLinks: [
            { name: "Anti-ragging committee", route: "/AntiRagging" },
            {
              name: "Anti-drug committee",
              href: "/forms/Anti Drug Committee.pdf",
            },
            { name: "Internal Complaint Committee", href: "/forms/ICC.pdf" },
            {
              name: "Institute Academic Affairs committee",
              href: "/forms/IAA-Committee.pdf",
            },
            { name: "committee for SC/ST", href: "/forms/PCBD-Committee.pdf" },
            { name: "Disciplinary committee", href: "#" },
            {
              name: "Student Councellor committee",
              href: "/forms/Students Cousellor.pdf",
            },
          ],
        },
        { name: "Student Affairs", route: "/student_affairs" },
      ],
    },
    {
      name: "Departments",
      isOpen: false,
      links: [
        { name: "Mechanical Engineering", route: "/departments/mech" },
        {
          name: "Electrical & Electronics Engineering",
          route: "/departments/eee",
        },
        {
          name: "Electronics & communication Engineering",
          route: "/departments/ece",
        },
        { name: "Computer Science & Engineering", route: "/departments/cse" },
        {
          name: "Science & Humanities",
          route: "/departments/science-and-humanities",
        },
        { name: "MBA", route: "/departments/mba" },
      ],
    },
    {
      name: "Offices",
      isOpen: false,
      links: [
        { name: "Estate Office", route: "/EstateOff" },
        { name: "Zonal Office", route: "/zonal" },
        { name: "Office of Affiliation", route: "/office-affiliation" },
      ],
    },

    {
      name: "Units",
      isOpen: false,
      links: [
        { name: "Admission Cell", route: "/admissions" },
        { name: "Institute Industry Cell", route: "/placement-cell" },
        { name: "Research Cell", route: "/research-cell" },
        { name: "DGATE Cell", route: "/dgate" },
        { name: "PACE Cell", route: "/pace-cell" },
        { name: "POSH Cell", route: "/posh" },
        // { name: "UBA Cell", route: "/pace-cell" },
        { name: "Institute Innovation Council", route: "/iic" },
        { name: "Distance Education Cell", route: "/distance-education" },
        { name: "ED Cell", route: "/ed-cell" },
        { name: "Exam Cell", route: "/exam-cell" },
        { name: "BRICS  Cell", href: "https://bric47.netlify.app/" },
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
        { name: "Alumni", route: "/alumni" },
        { name: "BIS Club", route: "/bis-club" },
        { name: "Uyir Club", route: "/uyir-club" },
      ],
    },
  ];

  const [sections, setSections] = useState(mobileSections);
  const [openSubLinks, setOpenSubLinks] = useState({});

  useEffect(() => {
    if (!isMobileMenuOpen) {
      setSections(mobileSections);
      setOpenSubLinks({});
    }
  }, [isMobileMenuOpen]);

  const toggleSection = (index) => {
    setSections((prev) =>
      prev.map((section, idx) => {
        if (idx === index) {
          return { ...section, isOpen: !section.isOpen };
        }
        return { ...section, isOpen: false };
      })
    );
  };

  const toggleSubLink = (sectionIdx, linkIdx) => {
    const key = `${sectionIdx}-${linkIdx}`;
    setOpenSubLinks((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="fixed top-0 left-0 w-full z-[1000]">
      {/* Top Bar */}
      <div className="bg-[rgb(110,35,35)] text-white">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between py-2 text-sm sm:text-base">
            <div className="flex items-center gap-2 sm:gap-6 lg:gap-10">
              <span className="font-medium flex items-center gap-1 text-sm sm:text-base">
                <span className="hidden lg:inline">AICTE PID:</span>
                <span className="lg:hidden">PID:</span>
                <span className="text-yellow-300 font-bold whitespace-nowrap">
                  1- 4500612781
                </span>
              </span>
              <span className="font-medium flex items-center gap-1 text-sm sm:text-base">
                <span className="hidden lg:inline">Counselling Code:</span>
                <span className="lg:hidden">Code:</span>
                <span className="text-yellow-300 font-bold whitespace-nowrap">
                  2025
                </span>
              </span>
            </div>
            {/* Desktop & Tablet Links */}
            <div className="hidden sm:flex items-center space-x-2 sm:space-x-4 lg:space-x-8">
              <Link
                to="/library"
                className="hover:text-yellow-300 transition-colors flex items-center gap-1 group"
              >
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                </svg>
                <span className="hidden sm:inline font-medium text-sm lg:text-base">
                  Library
                </span>
              </Link>
              <Link
                to="/sports"
                className="hover:text-yellow-300 transition-colors flex items-center gap-1 group"
              >
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a10 10 0 0 1 10 10"></path>
                  <path d="M2 12a10 10 0 0 0 10 10"></path>
                  <path d="M7 7c3 3 7 3 10 0"></path>
                  <path d="M7 17c3-3 7-3 10 0"></path>
                </svg>
                <span className="hidden sm:inline font-medium text-sm lg:text-base">
                  Physical Education
                </span>
              </Link>
              <Link
                to="/hostel"
                className="hover:text-yellow-300 transition-colors flex items-center gap-1 group"
              >
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span className="hidden sm:inline font-medium text-sm lg:text-base">
                  Hostel
                </span>
              </Link>
              <Link
                to="/contact"
                className="hover:text-yellow-300 transition-colors flex items-center gap-1 group"
              >
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="hidden sm:inline font-medium text-sm lg:text-base">
                  Contact
                </span>
              </Link>
              {/* <Link
                to="/feedback"
                className="hover:text-yellow-300 transition-colors flex items-center gap-1 group"
              >
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                </svg>
                <span className="hidden sm:inline font-medium text-sm lg:text-base">
                  Feedback
                </span>
              </Link> */}
            </div>

            {/* Mobile Dropdown (Only for phones) */}
            <div className="sm:hidden relative" ref={quickLinksRef}>
              <button
                onClick={() => setIsQuickLinksOpen(!isQuickLinksOpen)}
                className="flex items-center gap-2 hover:text-yellow-300 transition-colors py-1 px-2 rounded-lg bg-white/10"
              >
                {/* <span className="font-bold uppercase tracking-wider text-[10px]">Links</span> */}
                <svg
                  className={`w-3 h-3 transition-transform ${isQuickLinksOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isQuickLinksOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl py-2 z-[1001] border border-gray-100 animate-slideDown">
                  {[
                    {
                      name: "Library",
                      to: "/library",
                      icon: (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                        </svg>
                      ),
                    },
                    {
                      name: "Hostel",
                      to: "/hostel",
                      icon: (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        </svg>
                      ),
                    },
                    {
                      name: "Contact",
                      to: "/contact",
                      icon: (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      ),
                    },
                    {
                      name: "Physical Education",
                      to: "/sports",
                      icon: (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" strokeWidth="2"></circle>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 0 1 10 10"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 12a10 10 0 0 0 10 10"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7c3 3 7 3 10 0"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17c3-3 7-3 10 0"></path>
                        </svg>
                      ),
                    },
                  ].map((link, i) => (
                    <Link
                      key={i}
                      to={link.to}
                      onClick={() => setIsQuickLinksOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-base font-bold text-gray-700 hover:bg-[rgb(115,40,40)] hover:text-white transition-all whitespace-nowrap"
                    >
                      {link.icon}
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className="w-full bg-white shadow-xl border-b border-gray-100 flex items-center"
        style={{ minHeight: "90px" }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <nav className="flex items-center justify-between gap-6">
            {/* ── LEFT: Logo ── */}
            <div
              className="flex items-center flex-shrink-0 cursor-pointer ml-2 sm:ml-4 lg:ml-8"
              onClick={() => navigate("/")}
            >
              <img
                src="/aurcc_tamil.jpg"
                alt="AURCC Logo"
                className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-[80px] w-auto"
              />
            </div>

            {/* ── RIGHT: Nav Headings (Desktop) ── */}
            <div className="hidden xl:flex items-center justify-end gap-x-0.5 mr-4">
              {sections.map((section, idx) => (
                <div key={idx} className="relative group">
                  {/* Nav Button */}
                  <button
                    onClick={() => {
                      if (section.sections) {
                        navigate(section.route, {
                          state: { scrollTo: section.sections },
                        });
                      } else if (section.route) {
                        navigate(section.route);
                      }
                    }}
                    className="flex items-center gap-1 px-1.5 xl:px-4 py-2 text-xs xl:text-sm font-black text-gray-700 hover:text-[rgb(115,40,40)] hover:bg-[rgb(220,140,140)]/30 rounded-xl transition-all uppercase tracking-tight whitespace-nowrap"
                  >
                    {section.name}
                    {section.links && (
                      <svg
                        className="w-2.5 h-2.5 sm:w-3 sm:h-3 transform group-hover:rotate-180 transition-transform flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>

                  {/* Dropdown */}
                  {section.links && (
                    <div className="absolute top-full right-0 pt-1 z-50 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 w-96">
                        {section.links.map((link, lIdx) =>
                          link.subLinks ? (
                            <div key={lIdx} className="relative group/sub">
                              {/* Parent Item */}
                              <div className="flex items-center justify-between px-5 py-2 text-base font-bold text-gray-600 hover:text-[rgb(115,40,40)] hover:bg-[rgb(220,140,140)]/40 cursor-pointer transition-colors whitespace-nowrap">
                                <span>{link.name}</span>
                                <svg
                                  className="w-3 h-3 rotate-180"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M9 18l6-6-6-6" />
                                </svg>
                              </div>

                              {/* SubLinks */}
                              <div className="absolute top-0 left-full ml-1 py-2 bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible translate-x-2 group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-0 transition-all min-w-[220px] z-50">
                                {link.subLinks.map((sub, sIdx) =>
                                  sub.href ? (
                                    <a
                                      key={sIdx}
                                      href={sub.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="block px-5 py-2 text-base font-bold text-gray-600 hover:text-[rgb(115,40,40)] hover:bg-[rgb(220,140,140)]/40 transition-colors whitespace-nowrap"
                                    >
                                      {sub.name}
                                    </a>
                                  ) : (
                                    <Link
                                      key={sIdx}
                                      to={sub.route}
                                      className="block px-5 py-2 text-base font-bold text-gray-600 hover:text-[rgb(115,40,40)] hover:bg-[rgb(220,140,140)]/40 transition-colors whitespace-nowrap"
                                    >
                                      {sub.name}
                                    </Link>
                                  ),
                                )}
                              </div>
                            </div>
                          ) : link.href ? (
                            <a
                              key={lIdx}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-5 py-2 text-base font-bold text-gray-600 hover:text-[rgb(115,40,40)] hover:bg-[rgb(220,140,140)]/40 transition-colors whitespace-nowrap"
                            >
                              {link.name}
                            </a>
                          ) : (
                            <Link
                              key={lIdx}
                              to={link.section ? "/" : link.route}
                              state={
                                link.section ? { scrollTo: link.section } : null
                              }
                              className="block px-5 py-2 text-base font-bold text-gray-600 hover:text-[rgb(115,40,40)] hover:bg-[rgb(220,140,140)]/40 transition-colors whitespace-nowrap"
                            >
                              {link.name}
                            </Link>
                          ),
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center mr-4">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
                aria-label="Menu"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[100] bg-[rgb(90,20,20)]/40 backdrop-blur-md transition-all duration-500"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Sidebar */}
          <div
            className="fixed inset-y-0 right-0 max-w-[320px] w-full bg-white shadow-2xl overflow-hidden flex flex-col animate-slideLeft"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <span className="text-xl font-black text-[rgb(100,25,25)] uppercase">
                Navigation
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-gray-50 text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex-grow overflow-y-auto p-4 space-y-2">
              {sections.map((section, idx) => (
                <div
                  key={idx}
                  className="border-b border-gray-50 last:border-0"
                >
                  <button
                    onClick={() => toggleSection(idx)}
                    className="w-full flex items-center justify-between py-4 px-2 text-[rgb(90,20,20)] font-black uppercase text-sm tracking-widest hover:text-[rgb(115,40,40)]"
                  >
                    {section.name}
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-300 ${section.isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {section.isOpen && (
                    <div className="pl-4 pb-4 space-y-1">
                      {section.links.map((link, lIdx) =>
                        link.subLinks ? (
                          <div key={lIdx} className="mb-2">
                            <button
                              onClick={() => toggleSubLink(idx, lIdx)}
                              className="w-full flex items-center justify-between py-2.5 px-4 text-base font-bold text-gray-500 hover:text-[rgb(115,40,40)] transition-all"
                            >
                              <span>{link.name}</span>
                              <svg
                                className={`w-3.5 h-3.5 transform transition-transform duration-300 ${
                                  openSubLinks[`${idx}-${lIdx}`] ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2.5"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>
                            {openSubLinks[`${idx}-${lIdx}`] && (
                              <div className="pl-4 pb-2 space-y-1">
                                {link.subLinks.map((sub, sIdx) =>
                                  sub.href ? (
                                    <a
                                      key={sIdx}
                                      href={sub.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="block py-2 px-8 text-base font-bold text-gray-500 hover:text-[rgb(115,40,40)] transition-all"
                                    >
                                      › {sub.name}
                                    </a>
                                  ) : (
                                    <Link
                                      key={sIdx}
                                      to={sub.route}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="block py-2 px-8 text-base font-bold text-gray-500 hover:text-[rgb(115,40,40)] transition-all"
                                    >
                                      › {sub.name}
                                    </Link>
                                  ),
                                )}
                              </div>
                            )}
                          </div>
                        ) : (
                          link.href ? (
                            <a
                              key={lIdx}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-2.5 px-4 text-base font-bold text-gray-500 hover:text-[rgb(115,40,40)] transition-all"
                            >
                              {link.name}
                            </a>
                          ) : (
                            <Link
                              key={lIdx}
                              to={link.section ? "/" : link.route}
                              state={link.section ? { scrollTo: link.section } : null}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-2.5 px-4 text-base font-bold text-gray-500 hover:text-[rgb(115,40,40)] transition-all"
                            >
                              {link.name}
                            </Link>
                          )
                        ),
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="p-6 bg-gray-50 border-t border-gray-100">
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full py-4 bg-[rgb(100,25,25)] text-white text-center rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
