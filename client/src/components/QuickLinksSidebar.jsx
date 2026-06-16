import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const QuickLinksSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: '/aicte&moe', label: 'AICTE & MOE CELL', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path> },
    { href: 'https://drive.google.com/file/d/1z8ioKdQN0-fvahtIfneCPJI6i7j-YaFz/view', label: 'MANDATORY DISCLOSURE', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> },
    { to: '/downloads', label: 'DOWNLOADS', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path> },
    { to: '/antiragging', label: 'ANTIRAGGING CELL', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> },
    { to: '/posh', label: 'POSH CELL', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path> },
    { href: 'https://docs.google.com/forms/d/e/1FAIpQLScNS4VLaepGgelMcCyQXkE0KyPLKUws4YQQeTmdvZDQKFFjJg/viewform', label: 'ONLINE GRIEVANCE REDRESSAL', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path> },
    { href: 'https://docs.google.com/forms/d/e/1FAIpQLSct1Nzh8zasrBf1pL8TQeDVLpNTckhwPYJw8L_JAL4-e-VRrA/viewform', label: 'PREVENTION OF CASTE BASED DISCRIMINATION', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path> },
    { href: 'https://docs.google.com/forms/d/e/1FAIpQLSdCUoPQpO0ZUonxAatNpgkXzVTqiTW6tVsUSViTVjkNRasMkA/viewform', label: 'DIFFERENTLY ABLED PERSONS CELL', icon: <><circle cx="8" cy="16" r="5" strokeLinecap="round" strokeLinejoin="round" /><path strokeLinecap="round" strokeLinejoin="round" d="M19 19l-5-5V6h4m-4.5 2.5h-5.5" /></> },
    { href: 'https://docs.google.com/forms/d/e/1FAIpQLSenLuIhWEHNtty-CA7a2hMufyxj1sFLd-ET4geM3VvwN3KoHg/viewform', label: 'ANTI DRUGS COMMITTEE', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path> },
  ];

  return (
    <>
      {/* Expanded Panel – Render ONLY when open */}
      {isOpen && (
        <div
          className="fixed right-0 top-1/2 -translate-y-1/2 z-[1005] flex items-center mobile-menu-hide"
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="flex flex-col mr-3 sm:mr-10 w-[280px] sm:w-[350px] bg-white/70 backdrop-blur-md rounded-2xl border border-[rgb(115,25,25)]/30 shadow-[0_10px_40px_rgba(0,0,0,0.1)] overflow-hidden">
            <div className="bg-[rgb(110,35,35)] text-white py-4 px-6 font-extrabold text-center tracking-widest uppercase shadow-md z-10 border-b border-yellow-400">
              Quick Links
            </div>
            <div className="flex flex-col max-h-[65vh] overflow-y-auto scrollbar-hide py-4 px-4">
              {links.map((link, idx) => {
                const inner = (
                  <>
                    <div className="w-10 h-10 flex-shrink-0 bg-[rgb(110,35,35)] text-white flex items-center justify-center rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        {link.icon}
                      </svg>
                    </div>
                    <span className="ml-4 text-[11px] font-bold text-gray-800 uppercase tracking-wider group-hover:text-[rgb(115,25,25)] transition-colors text-left leading-snug flex-1">
                      {link.label}
                    </span>
                    <svg className="w-5 h-5 text-[rgb(115,25,25)]/40 group-hover:text-[rgb(115,25,25)] transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </>
                );

                const itemClass = "w-full flex items-center px-4 py-3 bg-white/40 border border-[rgb(115,25,25)]/40 rounded-xl mb-3 last:mb-0 hover:bg-white/90 hover:shadow-md hover:border-[rgb(115,25,25)] transition-all duration-300 group cursor-pointer";

                return link.to ? (
                  <Link key={idx} to={link.to} className={itemClass}>
                    {inner}
                  </Link>
                ) : (
                  <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer" className={itemClass}>
                    {inner}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Vertical Tab – Always Visible */}
      <div
        onClick={() => setIsOpen(prev => !prev)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[1006] cursor-pointer bg-[rgb(110,35,35)] text-white px-2 py-4 sm:px-3 sm:py-7 rounded-l-md sm:rounded-l-2xl shadow-lg border-y-[1px] sm:border-y-2 border-l-[1px] sm:border-l-2 border-yellow-400 transition-all duration-300 mobile-menu-hide"
      >
        <div className="flex flex-col items-center gap-1.5 sm:gap-2">
          <svg
            className="w-3.5 h-3.5 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
          </svg>

          <span className="font-bold text-[8px] sm:text-[11px] uppercase tracking-[0.2em] [writing-mode:vertical-lr] rotate-180 whitespace-nowrap">
            Quick Links
          </span>
        </div>
      </div>
    </>
  );
};

export default QuickLinksSidebar;