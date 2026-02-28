import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const contacts = [
        { office: "Dean's Office", number: "0422-2984007" },
        { office: "Administrative Office", number: "0422-2691124" },
        { office: "Department of CSE", number: "0422-2691125" },
        { office: "Department of ECE", number: "0422-2691126" },
        { office: "Department of EEE", number: "0422-2691127" },
        { office: "Department of Mechanical", number: "0422-2691128" },
        { office: "Library", number: "0422-2691129" },
        { office: "Hostel Office", number: "0422-2691130" },
        { office: "Placement Cell", number: "0422-2691131" },
        { office: "Examination Cell", number: "0422-2691132" }
    ];

    return (
        <div className="flex-grow bg-gray-50 min-h-screen text-left">
            {/* Hero section */}
            <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
                <img
                    src="/contact.webp"
                    alt="Contact Background"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[rgb(115,63,63)]/80 to-[rgb(115,25,25)]/70"></div>
                <div className="relative text-center px-4 max-w-4xl mx-auto z-20 animate-fadeIn">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tight">
                        Contact <span className="text-[rgb(140,60,60)]">Us</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-[rgb(200,120,120)] font-medium opacity-90">
                        Get in touch with the relevant offices for any assistance or inquiries
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto py-16 px-4 space-y-20">
                {/* Contact Offices Table Wrapper */}
                <section className="animate-fadeIn">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl lg:text-4xl font-black text-[rgb(90,20,20)] uppercase tracking-tighter">Office Directory</h2>
                        <div className="h-1.5 w-20 bg-[rgb(115,40,40)] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
                        <div className="md:w-1/3 bg-[rgb(100,25,25)] p-8 sm:p-12 text-white flex flex-col justify-center">
                            <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">Direct Support</h3>
                            <p className="text-[rgb(180,100,100)] font-medium leading-relaxed mb-8 italic">Search for the specific office or department extension to get immediate assistance.</p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
                                    <span className="text-2xl">⚡</span>
                                    <span className="text-sm font-bold uppercase tracking-widest">Fast Response</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-grow overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 border-b border-gray-100">
                                    <tr>
                                        <th className="px-8 py-5 text-xs font-black text-[rgb(100,25,25)] uppercase tracking-widest">Office / Department</th>
                                        <th className="px-8 py-5 text-xs font-black text-[rgb(100,25,25)] uppercase tracking-widest">Contact Number</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {contacts.map((contact, i) => (
                                        <tr key={i} className="hover:bg-[rgb(220,140,140)]/30 transition-colors group">
                                            <td className="px-8 py-4 text-sm font-bold text-gray-700 group-hover:text-[rgb(100,25,25)]">{contact.office}</td>
                                            <td className="px-8 py-4">
                                                <a href={`tel:${contact.number}`} className="text-[rgb(115,40,40)] font-black hover:underline">{contact.number}</a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Info Cards Grid */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Campus Address', icon: '📍', content: ['Maruthamalai Road,', 'Navavoor, Coimbatore - 641046'], color: 'red' },
                        { title: 'Support Lines', icon: '📞', content: ['0422-2984007', '0422-2691124'], color: 'red' },
                        { title: 'Email Enquiries', icon: '✉', content: ['info@aurcc.edu.in', 'admissions@aurcc.edu.in'], color: 'emerald' }
                    ].map((card, i) => (
                        <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all group">
                            <div className={`w-20 h-20 bg-${card.color}-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 group-hover:rotate-12 transition-transform`}>
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-black text-[rgb(90,20,20)] uppercase tracking-tight mb-4">{card.title}</h3>
                            <div className="space-y-1 text-gray-500 font-bold text-sm lg:text-base">
                                {card.content.map((line, j) => (
                                    <p key={j}>{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>

                {/* Map and Form Split */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden h-[500px] flex flex-col">
                        <div className="p-6 bg-gray-50 border-b border-gray-100 font-black text-xs uppercase tracking-widest text-[rgb(100,25,25)] flex justify-between">
                            <span>📍 Locate Us</span>
                            <span className="text-[rgb(140,60,60)]">Google Maps</span>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1488106969894!2d76.897368674512!3d11.026707354512415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85ed06825c00f%3A0xe23f5b08ec06f79e!2sAnna%20University%20Regional%20Campus%20Coimbatore!5e0!3m2!1sen!2sin!4v1709192451368!5m2!1sen!2sin"
                            className="w-full flex-grow border-0 grayscale hover:grayscale-0 transition-all duration-700"
                            allowFullScreen=""
                            loading="lazy"
                            title="Campus Location"
                        ></iframe>
                    </div>

                    <div className="bg-[rgb(100,25,25)] rounded-3xl shadow-2xl p-10 text-white flex flex-col justify-center animate-fadeInUp">
                        <h2 className="text-3xl font-black mb-2 uppercase tracking-tighter">Send a Message</h2>
                        <p className="text-[rgb(180,100,100)] font-medium mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                        <form className="space-y-5">
                            <div className="grid grid-cols-2 gap-5">
                                <input type="text" placeholder="Full Name" className="bg-white/10 border border-white/20 rounded-2xl p-4 outline-none focus:bg-white focus:text-[rgb(90,20,20)] transition-all font-bold placeholder:text-white/40" />
                                <input type="email" placeholder="Email Address" className="bg-white/10 border border-white/20 rounded-2xl p-4 outline-none focus:bg-white focus:text-[rgb(90,20,20)] transition-all font-bold placeholder:text-white/40" />
                            </div>
                            <input type="text" placeholder="Subject" className="w-full bg-white/10 border border-white/20 rounded-2xl p-4 outline-none focus:bg-white focus:text-[rgb(90,20,20)] transition-all font-bold placeholder:text-white/40" />
                            <textarea placeholder="Your message here..." rows="4" className="w-full bg-white/10 border border-white/20 rounded-2xl p-4 outline-none focus:bg-white focus:text-[rgb(90,20,20)] transition-all font-bold placeholder:text-white/40 resize-none"></textarea>
                            <button className="w-full py-5 bg-[rgb(115,40,40)] text-white font-black text-lg rounded-2xl hover:bg-white hover:text-[rgb(100,25,25)] transition-all shadow-xl active:scale-95 uppercase tracking-widest">Send Message</button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Contact;
