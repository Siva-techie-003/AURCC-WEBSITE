import React from "react";
import { Link } from "react-router-dom";

const Footer = ({
  data = {
    links: [
      "www.dgsnd.gov.in",
      "www.nic.in",
      "www.nsic.co.in",
      "www.kvic.org.in",
      "www.coirboard.gov.in",
      "www.nceuis.nic.in",
      "www.nisiet.gov.in",
      "www.sidbi.in",
      "www.iie.nic.in",
      "www.nmcc.nic.in",
      "www.cecri-india.com",
      "www.csir.res.in",
      "www.nissat.org",
      "www.cmeri.res.in",
      "www.entrepreneur.com",
      "www.howtoexportimport.com",
    ],
  },
}) => {
  return (
    <footer className="bg-gradient-to-br from-[rgb(115,63,63)] to-[rgb(115,25,25)] text-white">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* COLUMN 1 */}
          <div>
            <h3 className="text-xl font-black mb-4 uppercase">
              Campus <span className="text-yellow-400">Location</span>
            </h3>

            <p className="font-bold">
              Anna University Regional Campus Coimbatore
            </p>
            <p className="text-sm mt-2">
              Maruthamalai Road, Navavoor, Coimbatore - 641046
            </p>
            <p className="mt-3 font-bold">0422-2984007</p>

            {/* MAP */}
            <div className="mt-9 h-[270px] rounded-2xl overflow-hidden border border-white/10">
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

          {/* COLUMN 2 & 3 */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                {" "}
                <h3 className="text-xl  ml-6 font-black uppercase tracking-tighter">
                  {" "}
                  Navigation <span className="text-yellow-400">Hub</span>{" "}
                </h3>{" "}
                <div className="grid grid-cols-1 gap-0.5">
                  {" "}
                  {[
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
                  ].map((link, idx) => (
                    <Link
                      key={idx}
                      to={link.to}
                      className="group flex items-center gap-4 py-3 px-5 rounded-2xl hover:bg-white/5 transition-all"
                    >
                      {" "}
                      <div className="w-8 h-8 rounded-full bg-[rgb(220,140,140)]0/20 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-[rgb(100,25,25)] transition-all">
                        {" "}
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d={link.icon}></path>
                        </svg>{" "}
                      </div>{" "}
                      <span className="text-white font-bold group-hover:text-white transition-colors">
                        {link.label}
                      </span>{" "}
                    </Link>
                  ))}{" "}
                </div>{" "}
              </div>

              {/* STUDENT PORTAL */}
<div>
                {" "}
                <h3 className="text-xl ml-6 font-black uppercase tracking-tighter">
                  {" "}
                  Student <span className="text-yellow-400">Portal</span>{" "}
                </h3>{" "}
                <div className="grid grid-cols-1 gap-0.5">
                  {" "}
                  {[
                    {
                      to: "/library",
                      label: "Digital Library",
  icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5 5.754 5 4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18c1.746 0 3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    },
                    {
                      to: "/hostel",
                      label: "Hostel Portal",
  icon: "M3 21h18M5 21V7a2 2 0 012-2h10a2 2 0 012 2v14M9 21v-4h6v4M9 10h.01M15 10h.01M9 14h.01M15 14h.01"
                    },
                    {
                      to: "/placement-cell",
                      label: "Career Cell",
  icon: "M20 13V8a2 2 0 00-2-2h-3V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v1H6a2 2 0 00-2 2v5m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0H4"
                    },
                    {
                      to: "/antiragging",
                      label: "Safety Cell",
  icon: "M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z"
                    },
                    {
                      to: "/downloads",
                      label: "Forms & Downloads",
  icon: "M7 7V3h10v4m-5 4v6m0 0l-3-3m3 3l3-3M5 21h14a2 2 0 002-2V9H3v10a2 2 0 002 2z"
                    },
                  ].map((link, idx) => (
                    <Link
                      key={idx}
                      to={link.to}
                      className="group flex items-center gap-4 py-3 px-5 rounded-2xl hover:bg-white/5 transition-all"
                    >
                      {" "}
                      <div className="w-8 h-8 rounded-full bg-[rgb(220,140,140)]0/20 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-[rgb(100,25,25)] transition-all">
                        {" "}
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d={link.icon}></path>
                        </svg>{" "}
                      </div>{" "}
                      <span className="text-white font-bold group-hover:text-white transition-colors">
                        {link.label}
                      </span>{" "}
                    </Link>
                  ))}{" "}
                </div>{" "}
              </div>
            </div>

            {/* CONNECT WITH US */}
            <div className="mt-4 w-full flex justify-center ">
              <div className="bg-white/10 rounded-2xl p-6 border border-white/10 w-full max-w-2xl">
                <h3 className="text-lg font-black uppercase mb-4 text-center tracking-tighter">
                  Connect <span className="text-yellow-400">With Us</span>
                </h3>

                <div className="flex justify-center items-center gap-12">
                  {[
                    {
                      icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                    },
                    {
                      icon: "M22.5 12.063c0-5.799-4.702-10.5-10.5-10.5s-10.5 4.701-10.5 10.5c0 5.244 3.839 9.598 8.958 10.378v-7.342h-2.696v-3.036h2.696v-2.31c0-2.663 1.587-4.13 4.013-4.13 1.16 0 2.37.215 2.37.215v2.609h-1.335c-1.318 0-1.728.815-1.728 1.653v1.962h2.944l-.471 3.036h-2.473v7.343c5.119-.781 8.957-5.134 8.957-10.379",
                    },
                    {
                      icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z",
                    },
                    {
                      icon: "M21.582 6.186a2.818 2.818 0 00-1.982-1.996C17.88 3.75 12 3.75 12 3.75s-5.88 0-7.6.44a2.818 2.818 0 00-1.982 1.996C2 7.908 2 12 2 12s0 4.092.418 5.814a2.818 2.818 0 001.982 1.996C6.12 20.25 12 20.25 12 20.25s5.88 0 7.6-.44a2.818 2.818 0 001.982-1.996C22 16.092 22 12 22 12s0-4.092-.418-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"
                    },
                    {
                      icon: "M4.983 3.5C4.983 4.604 4.104 5.5 3 5.5S1.017 4.604 1.017 3.5 1.896 1.5 3 1.5s1.983.896 1.983 2zM.5 8h5V23h-5V8zm7.5 0h4.785v2.052h.068c.667-1.264 2.296-2.596 4.727-2.596 5.057 0 5.995 3.328 5.995 7.656V23h-5v-6.965c0-1.661-.03-3.797-2.312-3.797-2.313 0-2.668 1.806-2.668 3.676V23h-5V8z"
                    },
                  ].map((soc, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-[rgb(100,25,25)] transition-all transform hover:rotate-12"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d={soc.icon}></path>
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h3 className="text-xl font-black mb-4 uppercase">
              About <span className="text-yellow-400">Campus</span>
            </h3>

            <p className="text-sm">
              Anna University Coimbatore is committed to delivering quality
              education and innovation.
            </p>

            {/* USEFUL LINKS */}
            <div className="mt-7 bg-white/10 rounded-2xl overflow-hidden border border-white/10 h-[370px] flex flex-col">
              <div className="text-center pt-3">
                <h3 className="text-lg font-black uppercase">
                  Useful <span className="text-yellow-400">Links</span>
                </h3>
              </div>

              <div className="flex-1 relative overflow-hidden">
                <div className="absolute w-full animate-marquee pause-on-hover flex flex-col gap-4 px-6">
                  {[...data.links, ...data.links].map((link, i) => (
                    <a
                      key={i}
                      href={`https://${link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center py-2 bg-[rgb(115,40,40)] rounded-full font-bold hover:bg-yellow-400 hover:text-[rgb(115,25,25)] transition"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom Bar */}{" "}
      <div className="bg-[rgb(90,20,20)]/80 backdrop-blur-md border-t border-[rgb(105,30,30)]/50">
        {" "}
        <div className="container mx-auto px-4 sm:px-6 py-8">
          {" "}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {" "}
            <div className="text-center md:text-left">
              {" "}
              <p className="text-white text-xs font-bold uppercase tracking-widest">
                {" "}
                &copy; 2026 Anna University Regional Campus Coimbatore. All
                rights reserved.{" "}
              </p>{" "}
            </div>{" "}
            <div className="flex items-center gap-8">
              {" "}
              <a
                href="#"
                className="text-white hover:text-yellow-400 text-xs font-black uppercase tracking-widest transition-colors"
              >
                Team
              </a>{" "}
              <a
                href="#"
                className="text-white hover:text-yellow-400 text-xs font-black uppercase tracking-widest transition-colors"
              >
                Privacy
              </a>{" "}
              <a
                href="#"
                className="text-white hover:text-yellow-400 text-xs font-black uppercase tracking-widest transition-colors"
              >
                Safety
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
