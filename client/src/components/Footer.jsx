import React from "react";
import { Link } from "react-router-dom";

const Footer = ({
  data = {
    links: [
      { name: "www.sih.gov.in", url: "https://www.sih.gov.in/" },
      { name: "www.msme.gov.in", url: "https://my.msme.gov.in/inc/" },
      { name: "www.naanmudhalvan.tn.gov.in", url: "https://www.naanmudhalvan.tn.gov.in/" },
      { name: "www.swayam.gov.in", url: "https://swayam.gov.in/" },
      { name: "www.dsndharyana.gov.in", url: "https://dsndharyana.gov.in" },
      { name: "www.nic.in", url: "https://www.nic.in" },
      { name: "www.nsic.co.in", url: "https://www.nsic.co.in" },
      { name: "www.kviconline.gov.in", url: "https://kviconline.gov.in" },
      { name: "www.coirboard.gov.in", url: "http://www.coirboard.gov.in" },
      { name: "www.nceuis.gov.in", url: "https://msme.gov.in/national-commission-enterprises-un-organised-sectornceus" },
      { name: "www.nimsme.gov.in", url: "https://www.nimsme.gov.in" },
      { name: "www.sidbi.in", url: "https://www.sidbi.in" },
      { name: "www.iie.gov.in", url: "https://iie.gov.in" },
      { name: "www.nmcc.ac.in", url: "https://nmcc.ac.in" },
      { name: "www.cecri.res.in", url: "https://www.cecri.res.in/cecri/Default.aspx" },
      { name: "www.csir.res.in", url: "https://www.csir.res.in" },
      { name: "www.dsir.gov.in", url: "https://www.dsir.gov.in/international-cooperation-division" },
      { name: "www.cmeri.res.in", url: "https://www.cmeri.res.in" },
      { name: "www.entrepreneur.com", url: "https://www.entrepreneur.com" },
      { name: "www.howtoexportimport.com", url: "https://www.howtoexportimport.com" },
      { name: "www.annauniv.edu", url: "https://www.annauniv.edu/" },
      { name: "www.tneaonline.org", url: "https://www.tneaonline.org/" },
    ],
  },
}) => {
  const navLinks = [
    {
      to: "/",
      label: "Home",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      to: "/about",
      label: "About Us",
      icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      to: "/academics",
      label: "Academics",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253",
    },
    {
      to: "/admissions",
      label: "Admissions",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    },
    {
      to: "/contact",
      label: "Contact",
      icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
  ];

  const portalLinks = [
    {
      to: "/library",
      label: "Digital Library",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5 5.754 5 4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18c1.746 0 3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    },
    {
      to: "/Grievance redressal.pdf",
      label: "Grievance Cell",
      icon: "M3 21h18M5 21V7a2 2 0 012-2h10a2 2 0 012 2v14M9 21v-4h6v4M9 10h.01M15 10h.01M9 14h.01M15 14h.01",
    },
    {
      to: "/placement-cell",
      label: "Career Cell",
      icon: "M20 13V8a2 2 0 00-2-2h-3V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v1H6a2 2 0 00-2 2v5m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0H4",
    },
    {
      to: "/antiragging",
      label: "Safety Cell",
      icon: "M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z",
    },
    {
      to: "/downloads",
      label: "Forms & Downloads",
      icon: "M7 7V3h10v4m-5 4v6m0 0l-3-3m3 3l3-3M5 21h14a2 2 0 002-2V9H3v10a2 2 0 002 2z",
    },
  ];

  const socials = [
    {
      label: "X",
      icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
      url: "https://x.com/AnnaRegional",
    },
    {
      label: "Facebook",
      icon: "M22.5 12.063c0-5.799-4.702-10.5-10.5-10.5s-10.5 4.701-10.5 10.5c0 5.244 3.839 9.598 8.958 10.378v-7.342h-2.696v-3.036h2.696v-2.31c0-2.663 1.587-4.13 4.013-4.13 1.16 0 2.37.215 2.37.215v2.609h-1.335c-1.318 0-1.728.815-1.728 1.653v1.962h2.944l-.471 3.036h-2.473v7.343c5.119-.781 8.957-5.134 8.957-10.379",
      url: "https://www.facebook.com/aurccbe",
    },
    {
      label: "Instagram",
      icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 6.836A5.164 5.164 0 1017.164 12 5.164 5.164 0 0012 6.836zm0 8.164A3 3 0 1115 12a3 3 0 01-3 3zm5.836-8.836a1.08 1.08 0 11-2.16 0 1.08 1.08 0 012.16 0z",
      url: "https://www.instagram.com/annaunivcbe",
    },
    {
      label: "YouTube",
      icon: "M21.582 6.186a2.818 2.818 0 00-1.982-1.996C17.88 3.75 12 3.75 12 3.75s-5.88 0-7.6.44a2.818 2.818 0 00-1.982 1.996C2 7.908 2 12 2 12s0 4.092.418 5.814a2.818 2.818 0 001.982 1.996C6.12 20.25 12 20.25 12 20.25s5.88 0 7.6-.44a2.818 2.818 0 001.982-1.996C22 16.092 22 12 22 12s0-4.092-.418-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z",
      url: "https://www.youtube.com/@annauniversitycbe",
    },
    {
      label: "LinkedIn",
      icon: "M4.983 3.5C4.983 4.604 4.104 5.5 3 5.5S1.017 4.604 1.017 3.5 1.896 1.5 3 1.5s1.983.896 1.983 2zM.5 8h5V23h-5V8zm7.5 0h4.785v2.052h.068c.667-1.264 2.296-2.596 4.727-2.596 5.057 0 5.995 3.328 5.995 7.656V23h-5v-6.965c0-1.661-.03-3.797-2.312-3.797-2.313 0-2.668 1.806-2.668 3.676V23h-5V8z",
      url: "https://www.linkedin.com/in/anna-university-regional-campus-coimbatore-030870192",
    },
    {
      label: "Email",
      icon: "M2.25 6.75A2.25 2.25 0 014.5 4.5h15A2.25 2.25 0 0121.75 6.75v10.5A2.25 2.25 0 0119.5 19.5h-15A2.25 2.25 0 012.25 17.25V6.75zm1.83-.75L12 11.25 19.92 6H4.08zm15.42 1.41l-7.09 4.69a.75.75 0 01-.82 0L4.5 7.41v9.84c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V7.41z",
      url: "mailto:admin@aurcc.ac.in",
    },
  ];

  return (
    <footer
      className="text-white"
      style={{ background: "#6b1a1a" }}>
      <div>
        <div className="container mx-auto px-2 sm:px-6 py-4 sm:py-12">
          {/* MOBILE VIEW */}
          <div className="flex sm:hidden flex-col gap-4 w-full pt-2 pb-4">
            
            {/* 1 & 2: Campus Location & Map */}
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="flex flex-col justify-center gap-1.5 text-center items-center bg-black/20 p-2 rounded-xl border border-white/10 h-[130px]">
                <h3 className="text-[11px] font-black uppercase tracking-wide leading-tight">
                  Campus <span style={{ color: "#f5c842" }}>Location</span>
                </h3>
                <p className="font-bold text-[9px] leading-tight">Anna University Regional Campus Coimbatore</p>
                <p className="text-[8px] text-white/70 leading-tight">
                  Maruthamalai Road, Navavoor, Coimbatore - 641046
                </p>
                <p className="font-bold text-[9px] mt-0.5">Ph.No: 0422-2984007</p>
              </div>

              <div className="w-full h-[130px] rounded-xl overflow-hidden shadow-lg border border-white/15">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.123456789!2d76.8860657!3d11.0424918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85910327ab1e3%3A0x9f7a2b4ef20fe07!2sAnna%20University%20RC%20Coimbatore!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Campus Map"
                />
              </div>
            </div>

            {/* 3. Navigation & Portals */}
            <div className="grid grid-cols-2 gap-4 w-full px-2 mt-1">
              <div className="flex flex-col gap-2">
                <h3 className="text-[10px] font-black uppercase tracking-wider border-b border-white/10 pb-1">
                  Navigation <span style={{ color: "#f5c842" }}>Hub</span>
                </h3>
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      to={link.to}
                      className="flex items-center gap-2"
                    >
                      <div className="w-6 h-6 rounded flex items-center justify-center bg-white/10">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d={link.icon} />
                        </svg>
                      </div>
                      <span className="text-white/90 text-[10px] font-semibold">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-[10px] font-black uppercase tracking-wider border-b border-white/10 pb-1">
                  Student <span style={{ color: "#f5c842" }}>Portal</span>
                </h3>
                <div className="flex flex-col gap-2">
                  {portalLinks.map((link, idx) => {
                    const isPdf = link.to.endsWith(".pdf");
                    const LinkWrapper = isPdf ? 'a' : Link;
                    const linkProps = isPdf 
                      ? { href: link.to, target: "_blank", rel: "noopener noreferrer" } 
                      : { to: link.to };

                    return (
                      <LinkWrapper
                        key={idx}
                        {...linkProps}
                        className="flex items-center gap-2"
                      >
                        <div className="w-6 h-6 rounded flex items-center justify-center bg-white/10">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d={link.icon} />
                          </svg>
                        </div>
                        <span className="text-white/90 text-[10px] font-semibold">{link.label}</span>
                      </LinkWrapper>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 4. Team (Same style as desktop, slightly reduced width) */}
            <div className="flex flex-col items-center w-full mt-1">
              <div
                className="w-[80%] max-w-[280px] h-auto rounded-xl p-2 flex flex-col gap-1.5 justify-between mx-auto shadow-md"
                style={{
                  background: "#9b3535",
                  border: "2px solid rgba(245,200,66,0.5)",
                }}
              >
                <h3 className="text-[9px] font-black uppercase tracking-wide text-center leading-tight">
                  Website <span style={{ color: "#f5c842" }}>Development</span> Team
                </h3>

                <div
                  className="rounded-md p-1.5 text-center flex flex-col justify-center items-center gap-0.5"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <h4 className="text-[10px] font-bold leading-tight">
                    Meet Our Team
                  </h4>
                  <p className="text-[8px] text-white/70 leading-normal">
                    View the developers behind this website.
                  </p>
                  <Link
                    to="/team"
                    className="inline-flex items-center gap-1 px-3 py-1 mt-1 rounded font-bold text-[9px] transition-transform active:scale-95"
                    style={{
                      background: "#f5c842",
                      color: "#6b1a1a",
                    }}
                  >
                    View Team &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* 5. Useful Links (Auto Sliding) */}
            <div className="flex flex-col gap-1.5 w-full bg-[#9b3535] rounded-xl border border-[#f5c842]/40 p-2 shadow-md mt-1 h-[120px]">
              <h3 className="text-[11px] font-black uppercase tracking-wide text-center pb-1 border-b border-white/10">
                Useful <span style={{ color: "#f5c842" }}>Links</span>
              </h3>
              <div className="relative overflow-hidden group flex-grow">
                <div className="absolute inset-x-0 animate-marquee flex flex-col gap-1.5 px-1">
                  {[...data.links, ...data.links].map((item, i) => (
                    <a
                      key={i}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center py-1 px-2 rounded-full text-[8px] font-bold transition-colors truncate"
                      style={{
                        background: "rgb(140,45,45)",
                        color: "#ffffff",
                        border: "1px solid rgba(245,200,66,0.3)",
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* 6. Social Media */}
            <div className="flex flex-wrap justify-center items-center gap-4 pt-4 border-t border-white/10 w-full mt-2">
              {socials.map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full transition-transform active:scale-95 shadow-md"
                  style={{
                    background: "#f5c842",
                    color: "rgb(140,45,45)",
                  }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={soc.icon} />
                  </svg>
                </a>
              ))}
            </div>

          </div>

          {/* DESKTOP VIEW */}
          <div className="hidden sm:grid sm:grid-cols-4 gap-4 lg:gap-8">

            {/* ── COL 1 : CAMPUS LOCATION ── */}
            <div className="flex flex-col col-span-1 justify-between h-full">
              <div>
                <h3 className="text-[6px] sm:text-sm lg:text-xl font-black mb-[1px] lg:mb-4 uppercase tracking-wide leading-tight">
                  Campus <span style={{ color: "#f5c842" }}>Location</span>
                </h3>
                <p className="font-bold text-[5px] sm:text-xs lg:text-sm leading-tight">Anna University Regional Campus Coimbatore</p>
                <p className="text-[5px] sm:text-xs lg:text-xs mt-[1px] text-white/70 leading-tight">
                  Maruthamalai Road, Navavoor, Coimbatore - 641046
                </p>
                <p className="mt-[1px] lg:mt-2 font-bold text-[5px] sm:text-xs lg:text-sm leading-tight">Ph.No: 0422-2984007</p>
              </div>

              {/* MAP */}
              <div
                className="mt-[2px] lg:mt-5 w-[80px] h-[100px] sm:w-full sm:min-h-[120px] lg:min-h-[220px] flex-grow rounded sm:rounded-xl overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.123456789!2d76.8860657!3d11.0424918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85910327ab1e3%3A0x9f7a2b4ef20fe07!2sAnna%20University%20RC%20Coimbatore!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Campus Map"
                />
              </div>
            </div>

            {/* ── COL 2 & 3 : NAV + PORTAL + CONNECT ── */}
            <div className="col-span-2 flex flex-col gap-2 lg:gap-4 justify-between">
              <div className="grid grid-cols-2 gap-2 lg:gap-4">

                {/* Navigation Hub */}
                <div>
                  <h3 className="text-[6px] sm:text-sm lg:text-xl font-black uppercase tracking-wide mb-[1px] lg:mb-3 leading-tight">
                    Navigation <span style={{ color: "#f5c842" }}>Hub</span>
                  </h3>
                  <div className="flex flex-col gap-0 lg:gap-1">
                    {navLinks.map((link, idx) => (
                      <Link
                        key={idx}
                        to={link.to}
                        className="group flex items-center gap-[2px] sm:gap-1 lg:gap-3 py-[1px] sm:py-1 lg:py-2 px-[1px] sm:px-1 lg:px-3 rounded-lg transition-all"
                        style={{ background: "transparent" }}
                        onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.07)"}
                        onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                      >
                        <div
                          className="w-[10px] h-[10px] sm:w-4 sm:h-4 lg:w-7 lg:h-7 rounded-sm sm:rounded-lg flex items-center justify-center flex-shrink-0 transition-all"
                          style={{ background: "rgba(255,255,255,0.08)" }}
                        >
                          <svg className="w-[6px] h-[6px] sm:w-2 sm:h-2 lg:w-3.5 lg:h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d={link.icon} />
                          </svg>
                        </div>
                        <span className="text-white/85 text-[5px] sm:text-xs lg:text-sm font-semibold group-hover:text-white transition-colors leading-tight">
                          {link.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Student Portal */}
                <div>
                  <h3 className="text-[6px] sm:text-sm lg:text-xl font-black uppercase tracking-wide mb-[1px] lg:mb-4 leading-tight">
                    Student <span style={{ color: "#f5c842" }}>Portal</span>
                  </h3>
                  <div className="flex flex-col gap-0 lg:gap-1">
                    {portalLinks.map((link, idx) => {
                      const isPdf = link.to.endsWith(".pdf");
                      const LinkWrapper = isPdf ? 'a' : Link;
                      const linkProps = isPdf 
                        ? { href: link.to, target: "_blank", rel: "noopener noreferrer" } 
                        : { to: link.to };

                      return (
                        <LinkWrapper
                          key={idx}
                          {...linkProps}
                          className="group flex items-center gap-[2px] sm:gap-1 lg:gap-3 py-[1px] sm:py-1 lg:py-2 px-[1px] sm:px-1 lg:px-3 rounded-lg transition-all"
                          style={{ background: "transparent" }}
                          onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.07)"}
                          onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                        >
                          <div
                            className="w-[10px] h-[10px] sm:w-4 sm:h-4 lg:w-7 lg:h-7 rounded-sm sm:rounded-lg flex items-center justify-center flex-shrink-0 transition-all"
                            style={{ background: "rgba(255,255,255,0.08)" }}
                          >
                            <svg className="w-[6px] h-[6px] sm:w-2 sm:h-2 lg:w-3.5 lg:h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path d={link.icon} />
                            </svg>
                          </div>
                          <span className="text-white/85 text-[5px] sm:text-xs lg:text-sm font-semibold group-hover:text-white transition-colors leading-tight">
                            {link.label}
                          </span>
                        </LinkWrapper>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Connect With Us */}
              {/* CONNECT + TEAM (STACKED) */}
              <div className="flex flex-col items-center w-full flex-grow justify-end">

                <div
                  className="w-[85%] sm:w-full max-w-[250px] sm:max-w-[380px] lg:max-w-[500px] h-auto mt-1 lg:mt-4 rounded-md lg:rounded-xl p-1 sm:p-3 lg:p-3 flex flex-col gap-[2px] sm:gap-1 lg:gap-2 justify-between mx-auto"
                  style={{
                    background: "#9b3535",
                    border: "2px solid rgba(245,200,66,0.5)",
                  }}
                >
                  <h3 className="text-[8px] sm:text-sm lg:text-xl font-black uppercase tracking-wide text-center leading-tight">
                    Website <span style={{ color: "#f5c842" }}>Development</span> Team
                  </h3>

                  <div
                    className="rounded-md p-0.5 sm:p-2 lg:p-3 text-center flex-grow flex flex-col justify-center items-center gap-0 sm:gap-1 lg:gap-2"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.15)",
                    }}
                  >
                    <h4 className="text-[7px] sm:text-sm lg:text-lg font-bold leading-tight">
                      Meet Our Team
                    </h4>

                    <p className="text-[6px] sm:text-xs lg:text-sm text-white/70 leading-normal">
                      View the developers behind this website.
                    </p>

                    <Link
                      to="/team"
                      className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-lg font-bold text-[6px] sm:text-xs lg:text-sm transition-all duration-300 hover:scale-105"
                      style={{
                        background: "#f5c842",
                        color: "#6b1a1a",
                      }}
                    >
                      View Team &rarr;
                    </Link>
                  </div>

                </div>

                {/* Social Media Icons below the card */}
                <div className="flex justify-center items-center gap-1.5 sm:gap-2 lg:gap-3 mt-3 lg:mt-5 flex-wrap">
                  {socials.map((soc, idx) => (
                    <a
                      key={idx}
                      href={soc.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={soc.label}
                      className="flex items-center justify-center rounded-md lg:rounded-xl transition-all duration-200"
                      style={{
                        width: "clamp(24px, 3.5vw, 38px)",
                        height: "clamp(24px, 3.5vw, 38px)",
                        minWidth: "clamp(24px, 3.5vw, 38px)",
                        background: "#f5c842",
                        color: "rgb(140,45,45)",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = "white";
                        e.currentTarget.style.color = "rgb(107,26,26)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = "#f5c842";
                        e.currentTarget.style.color = "rgb(140,45,45)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <svg
                        className="w-3.5 h-3.5 sm:w-5 sm:h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d={soc.icon} />
                      </svg>
                    </a>
                  ))}
                </div>

              </div>
            </div>

            {/* ── COL 4 : ABOUT + USEFUL LINKS ── */}
            <div className="flex flex-col col-span-1 h-full">
              {/* Useful Links */}
              <div
                className="rounded-md sm:rounded-xl overflow-hidden flex flex-col flex-grow"
                style={{ background: "#9b3535", border: "2px solid rgba(245,200,66,0.5)" }}
              >
                <div className="px-1 lg:px-4 py-1 lg:py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <h3 className="text-[10px] sm:text-sm lg:text-xl font-black uppercase tracking-wide text-center">
                    Useful <span style={{ color: "#f5c842" }}>Links</span>
                  </h3>
                </div>

                <div className="relative overflow-hidden group flex-grow h-0">
                  <div className="absolute inset-x-0 animate-marquee flex flex-col gap-1 lg:gap-2 px-1 lg:px-4 py-1 lg:py-3 group-hover:[animation-play-state:paused]">
                    {[...data.links, ...data.links].map((item, i) => (
                      <a
                        key={i}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center py-1.5 lg:py-6 px-1 lg:px-4 rounded-full text-[6px] sm:text-xs lg:text-sm font-bold transition-all duration-200 break-all"
                        style={{
                          background: "rgb(140,45,45)",
                          color: "#ffffff",
                          border: "1px solid rgba(245,200,66,0.3)",
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = "#f5c842";
                          e.currentTarget.style.color = "#6b1a1a";
                          e.currentTarget.style.borderColor = "#f5c842";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                          e.currentTarget.style.color = "rgba(255,255,255,0.85)";
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                        }}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{ background: "rgba(0,0,0,0.25)", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="w-full px-2 sm:px-6 py-3">
          <div className="flex flex-row items-center justify-between gap-2 sm:gap-3">

            {/* LEFT (Symmetrical Spacing Holder on Desktop) */}
            <div className="hidden sm:block w-1/4"></div>

            {/* CENTER */}
            <div className="text-center w-[65%] sm:w-2/4">
              <p className="text-white/60 text-[6px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest leading-normal">
                © 2026 Anna University Regional Campus Coimbatore. All rights reserved.
              </p>
            </div>

            {/* RIGHT (FORCED CORNER) */}
            <div className="flex gap-2 sm:gap-6 items-center justify-end w-[35%] sm:w-1/4">
              {["Privacy", "Safety"].map((item) => {                       
                if (item === "Privacy") {
                  return (
                    <Link
                      key={item}
                      to="/privacy"
                      className="text-white/60 hover:text-yellow-400 text-[6px] sm:text-xs font-black uppercase tracking-wider sm:tracking-widest transition-colors"
                    >
                      {item}
                    </Link>
                  );
                }                
                if (item === "Safety") {
                  return (
                    <Link
                      key={item}
                      to="/safety"
                      className="text-white/60 hover:text-yellow-400 text-[6px] sm:text-xs font-black uppercase tracking-wider sm:tracking-widest transition-colors"
                    >
                      {item}
                    </Link>
                  );
                }
                return (
                  <a
                    key={item}
                    href="#"
                    className="text-white/60 hover:text-yellow-400 text-[6px] sm:text-xs font-black uppercase tracking-wider sm:tracking-widest transition-colors"
                  >
                    {item}
                  </a>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;