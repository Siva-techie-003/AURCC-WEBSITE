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
      "www.howtoexportimport.com"
    ]
  }
}) => {
  return (
    <footer className="bg-gradient-to-br from-[rgb(115,63,63)] to-[rgb(115,25,25)] text-white border-t border-[rgb(110,35,35)]/50">

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 lg:py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">
              Campus <span className="text-yellow-400">Location</span>
            </h3>
            <div className="space-y-3 text-sm">
              <p className="font-black">Anna University Regional Campus Coimbatore</p>
              <p>Maruthamalai Road, Navavoor, Coimbatore - 641046</p>
              <p className="font-bold">0422-2984007</p>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">
              Navigation <span className="text-yellow-400">Hub</span>
            </h3>
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/academics", label: "Academics" },
              { to: "/admissions", label: "Admissions" },
              { to: "/contact", label: "Contact" }
            ].map((link, idx) => (
              <Link
                key={idx}
                to={link.to}
                className="block py-2 px-4 rounded-xl hover:bg-white/5 font-bold transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">
              Student <span className="text-yellow-400">Portal</span>
            </h3>
            {[
              { to: "/library", label: "Digital Library" },
              { to: "/hostel", label: "Hostel Portal" },
              { to: "/placement-cell", label: "Career Cell" },
              { to: "/antiragging", label: "Safety Cell" },
              { to: "/downloads", label: "Forms & Downloads" }
            ].map((res, idx) => (
              <Link
                key={idx}
                to={res.to}
                className="block py-2 px-4 rounded-xl hover:bg-white/5 font-bold transition"
              >
                {res.label}
              </Link>
            ))}
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">
              Connect <span className="text-yellow-400">With Us</span>
            </h3>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-sm">
              Anna University Coimbatore is committed to providing quality
              education in a safe campus environment.
            </div>
          </div>

        </div>
      </div>

      {/* MAP + USEFUL LINKS SECTION */}
      <div className="container mx-auto px-2 sm:px-6 pb-12">
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">

          {/* MAP (35% width, 180px height) */}
          <div className="lg:w-[25%] h-[180px] rounded-3xl overflow-hidden border border-white/10 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.123456789!2d76.8860657!3d11.0424918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85910327ab1e3%3A0x9f7a2b4ef20fe07!2sAnna%20University%20RC%20Coimbatore!5e0!3m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Campus Map"
            />
          </div>

          {/* USEFUL LINKS (65% width, 180px height) */}
          <div className="lg:w-[75%] h-[100px] bg-[rgb(200,120,120)]/40 backdrop-blur-md rounded-3xl border border-white/10 shadow-xl overflow-hidden flex flex-col mt-10">

            <div className="px-6 pt-4">
              <h3 className="text-lg font-black uppercase tracking-tight"><center>
                Useful <span className="text-yellow-400">Links</span></center>
              </h3>
            </div>

            <div className="flex-1 relative overflow-hidden flex items-center">
              <div className="flex gap-6 whitespace-nowrap animate-marquee px-6">

                {[...data.links, ...data.links].map((link, i) => (
                  <a
                    key={i}
                    href={`https://${link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-[rgb(115,40,40)] text-white font-bold rounded-full hover:bg-yellow-400 hover:text-[rgb(100,25,25)] transition"
                  >
                    {link}
                  </a>
                ))}

              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[rgb(90,20,20)]/80 border-t border-[rgb(105,30,30)]/50">
        <div className="container mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest">
          <p>
            © 2026 Anna University Regional Campus Coimbatore. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-yellow-400 transition">Team</a>
            <a href="#" className="hover:text-yellow-400 transition">Privacy</a>
            <a href="#" className="hover:text-yellow-400 transition">Safety</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;