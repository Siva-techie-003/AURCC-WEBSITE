import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
    const [errorMessage, setErrorMessage] = useState('');
    const [recipientEmail, setRecipientEmail] = useState('ucedean-kovai@annauniv.edu');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        setErrorMessage('');

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });
            const data = await response.json();
            if (response.ok && data.success) {
                setSubmitStatus('success');
                if (data.contactEmail) {
                    setRecipientEmail(data.contactEmail);
                }
                setForm({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                setSubmitStatus('error');
                setErrorMessage(data.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setSubmitStatus('error');
            setErrorMessage('Network error. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contacts = [
        { office: "Dean's Office", number: "0422-2984002" },
        { office: "Zonal Office (Zone-IX)", number: "0422-2984003" },
        { office: "Examination Cell", number: "0422-2984005" },
        { office: "General Administration-1", number: "0422-2984006" },
        { office: "General Administration-2", number: "0422-2984007" },
        { office: "General Administration-3", number: "0422-2984009" },
        { office: "Affiliation", number: "0422-2984010" },
        { office: "Academic Coordinator-UG Programmes", number: "0422-2984011" },
        { office: "Academic Coordinator-PG Programmes", number: "0422-2984012" }
    ];

    return (
        <div className="flex-grow bg-gray-50 min-h-screen text-left pt-[116px] sm:pt-[126px] lg:pt-[136px]">
            {/* Hero section */}
            <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
                <img
                    src="/contact.webp"
                    alt="Contact Background"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="bg-[rgb(120,12,12)]/60 backdrop-blur-md rounded-2xl shadow-lg px-6 py-6 md:py-10 flex flex-col items-center max-w-2xl mx-4 sm:mx-auto border border-white/30 animate-popIn text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tight text-center">
                        Contact <span className="text-white">Us</span>
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-white font-medium opacity-90 text-center">
                        Get in touch with the relevant offices for any assistance or inquiries
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto py-10 sm:py-16 px-4 space-y-16 sm:space-y-20">
                {/* Contact Offices Table Wrapper */}
                <section className="animate-fadeIn">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl lg:text-4xl font-black text-[rgb(90,20,20)] uppercase tracking-tighter">Office Directory</h2>
                        <div className="h-1.5 w-20 bg-[rgb(115,40,40)] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
                        <div className="md:w-1/3 bg-[rgb(100,25,25)]  p-8 sm:p-12 text-white flex flex-col justify-center border-2 border-white">
                            <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">Direct Support</h3>
                            <p className="text-white font-medium leading-relaxed mb-8 italic">Search for the specific office or department extension to get immediate assistance.</p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
                                    <span className="text-2xl">⚡</span>
                                    <span className="text-sm font-bold uppercase tracking-widest">Fast Response</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-grow overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-[rgb(100,25,25)] border-b border-gray-100">
                                    <tr>
                                        <th className="px-4 sm:px-8 py-5 text-xs font-black text-white uppercase tracking-widest">Office / Department</th>
                                        <th className="px-4 sm:px-8 py-5 text-xs font-black text-white uppercase tracking-widest">Contact Number</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {contacts.map((contact, i) => (
                                        <tr key={i} className="hover:bg-[rgb(220,140,140)]/30 transition-colors group">
                                            <td className="px-4 sm:px-8 py-4 text-sm font-bold text-gray-700 group-hover:text-[rgb(100,25,25)]">{contact.office}</td>
                                            <td className="px-4 sm:px-8 py-4">
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
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: 'Campus Address', icon: '📍', content: ['Maruthamalai Road,', 'Navavoor, Coimbatore - 641046'], color: 'red' },
                        { title: 'Support Lines', icon: '📞', content: ['0422-2984007', '0422-2691124'], color: 'red' },
                        { title: 'Email Enquiries', icon: '✉', content: ['info@aurcc.edu.in', 'admissions@aurcc.edu.in'], color: 'emerald' }
                    ].map((card, i) => (
                        <div key={i} className="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all group">
                            <div className={`w-20 h-20 bg-${card.color}-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 group-hover: transition-transform`}>
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
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden h-[320px] sm:h-[420px] lg:h-[500px] flex flex-col">
                        <div className="p-6 bg-gray-50 border-b border-gray-100 font-black text-xs uppercase tracking-widest text-[rgb(100,25,25)] flex justify-between">
                            <span>📍 Locate Us</span>
                            <span className="text-[rgb(140,60,60)]">Google Maps</span>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15663.793975145732!2d76.8803026145726!3d11.042488637620748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85910327ab1e3%3A0x9f7a2b4ef20fe07!2sAnna%20University%20RC%20Coimbatore!5e0!3m2!1sen!2sin!4v1772527998548!5m2!1sen!2sin"
                            className="w-full flex-grow border-0 grayscale hover:grayscale-0 transition-all duration-700"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Campus Location"
                        ></iframe>
                    </div>

                    <div className="bg-[rgb(100,25,25)] rounded-3xl shadow-2xl p-6 sm:p-10 text-white flex flex-col justify-center animate-fadeInUp">
                        <h2 className="text-3xl font-black mb-2 uppercase tracking-tighter">Send a Message</h2>
                        <p className="text-white font-medium mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                        {submitStatus === 'success' && (
                            <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded-2xl relative mb-6 font-bold text-center">
                                ✓ Message sent successfully! It has been dispatched to {recipientEmail}.
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="bg-red-100 border border-red-400 text-red-800 px-4 py-3 rounded-2xl relative mb-6 font-bold text-center">
                                ⚠ {errorMessage}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <input
                                    type="text"
                                    id="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Full Name"
                                    className="bg-white/10 border border-white/20 rounded-2xl p-4 outline-none text-white focus:bg-white/20 focus:border-white/50 focus:ring-2 focus:ring-white/20 transition-all font-bold placeholder:text-white/60"
                                />
                                <input
                                    type="email"
                                    id="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Email Address"
                                    className="bg-white/10 border border-white/20 rounded-2xl p-4 outline-none text-white focus:bg-white/20 focus:border-white/50 focus:ring-2 focus:ring-white/20 transition-all font-bold placeholder:text-white/60"
                                />
                            </div>
                            <input
                                type="text"
                                id="subject"
                                value={form.subject}
                                onChange={handleChange}
                                required
                                placeholder="Subject"
                                className="w-full bg-white/10 border border-white/20 rounded-2xl p-4 outline-none text-white focus:bg-white/20 focus:border-white/50 focus:ring-2 focus:ring-white/20 transition-all font-bold placeholder:text-white/60"
                            />
                            <textarea
                                id="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                placeholder="Your message here..."
                                rows="4"
                                className="w-full bg-white/10 border border-white/20 rounded-2xl p-4 outline-none text-white focus:bg-white/20 focus:border-white/50 focus:ring-2 focus:ring-white/20 transition-all font-bold placeholder:text-white/60 resize-none"
                            ></textarea>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-5 bg-[rgb(115,40,40)] text-white font-black text-lg rounded-2xl hover:bg-white hover:text-[rgb(100,25,25)] transition-all shadow-xl active:scale-95 uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Contact;
