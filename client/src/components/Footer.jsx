import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-[rgb(115,63,63)] to-[rgb(115,25,25)] text-white border-t border-[rgb(110,35,35)]/50">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 lg:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

                    {/* Column 1: Campus Location */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-black mb-6 uppercase tracking-tighter">
                                Campus <span className="text-yellow-400">Location</span>
                            </h3>
                            <div className="space-y-4 text-[rgb(200,120,120)]/80 leading-relaxed text-sm sm:text-base">
                                <p className="font-black text-white text-base">Anna University Regional Campus Coimbatore</p>
                                <p className="font-medium text-white">Maruthamalai Road, Navavoor, Coimbatore - 641046</p>
                                <div className="flex items-center gap-3 py-2 px-4 bg-white/5 rounded-2xl border border-white/10 w-fit">
                                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    <span className="font-black text-white">0422-2984007</span>
                                </div>
                            </div>
                        </div>

                        {/* Map Overlay Card */}
                        <div className="relative group overflow-hidden rounded-3xl shadow-2xl border border-white/10 transform transition-all hover:scale-[1.02]">
                            <div className="absolute inset-0 bg-[rgb(100,25,25)]/10 pointer-events-none group-hover:bg-[rgb(100,25,25)]/0 transition-all"></div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.123456789!2d76.8860657!3d11.0424918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85910327ab1e3%3A0x9f7a2b4ef20fe07!2sAnna%20University%20RC%20Coimbatore!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                                width="100%"
                                height="220"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Campus Map"
                            ></iframe>
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div>
                        <h3 className="text-xl font-black mb-8 uppercase tracking-tighter">
                            Navigation <span className="text-yellow-400">Hub</span>
                        </h3>
                        <div className="grid grid-cols-1 gap-0.5">
                            {[
                                { to: "/", label: "Home", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                                { to: "/about", label: "About Us", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                                { to: "/academics", label: "Academics", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" },
                                { to: "/admissions", label: "Admissions", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                                { to: "/contact", label: "Contact", icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }
                            ].map((link, idx) => (
                                <Link key={idx} to={link.to} className="group flex items-center gap-4 py-3 px-5 rounded-2xl hover:bg-white/5 transition-all">
                                    <div className="w-8 h-8 rounded-full bg-[rgb(220,140,140)]0/20 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-[rgb(100,25,25)] transition-all">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d={link.icon}></path></svg>
                                    </div>
                                    <span className="text-white font-bold group-hover:text-white transition-colors">{link.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 3: Resources */}
                    <div>
                        <h3 className="text-xl font-black mb-8 uppercase tracking-tighter">
                            Student <span className="text-yellow-400">Portal</span>
                        </h3>
                        <div className="space-y-0.5">
                            {[
                                { to: "/library", label: "Digital Library" },
                                { to: "/hostel", label: "Hostel Portal" },
                                { to: "/placement-cell", label: "Career Cell" },
                                { to: "/antiragging", label: "Safety Cell" },
                                { to: "/downloads", label: "Forms & Downloads" }
                            ].map((res, idx) => (
                                <Link key={idx} to={res.to} className="block py-4 px-6 hover:bg-white/10  rounded-2xl text-white font-bold transition-all hover:translate-x-1">
                                    {res.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 4: Stay Connected */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-black mb-8 uppercase tracking-tighter">
                                Connect <span className="text-yellow-400">With Us</span>
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    { icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                                    { icon: "M22.5 12.063c0-5.799-4.702-10.5-10.5-10.5s-10.5 4.701-10.5 10.5c0 5.244 3.839 9.598 8.958 10.378v-7.342h-2.696v-3.036h2.696v-2.31c0-2.663 1.587-4.13 4.013-4.13 1.16 0 2.37.215 2.37.215v2.609h-1.335c-1.318 0-1.728.815-1.728 1.653v1.962h2.944l-.471 3.036h-2.473v7.343c5.119-.781 8.957-5.134 8.957-10.379" },
                                    { icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" }
                                ].map((soc, idx) => (
                                    <a key={idx} href="#" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-[rgb(100,25,25)] transition-all transform hover:rotate-12">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d={soc.icon}></path></svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 bg-white/5 rounded-[2.5rem] border border-white/10 space-y-2">
                            <p className="text-xs font-black uppercase tracking-widest text-yellow-400">Institutional Notice</p>
                            <p className="text-sm text-white font-medium leading-relaxed">Anna University Coimbatore is committed to providing quality education in a safe campus environment.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Bar */}
            <div className="bg-[rgb(90,20,20)]/80 backdrop-blur-md border-t border-[rgb(105,30,30)]/50">
                <div className="container mx-auto px-4 sm:px-6 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-center md:text-left">
                            <p className="text-white text-xs font-bold uppercase tracking-widest">
                                &copy; 2026 Anna University Regional Campus Coimbatore. All rights reserved.
                            </p>
                        </div>
                        <div className="flex items-center gap-8">
                            <a href="#" className="text-white hover:text-yellow-400 text-xs font-black uppercase tracking-widest transition-colors">Team</a>
                            <a href="#" className="text-white hover:text-yellow-400 text-xs font-black uppercase tracking-widest transition-colors">Privacy</a>
                            <a href="#" className="text-white hover:text-yellow-400 text-xs font-black uppercase tracking-widest transition-colors">Safety</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
