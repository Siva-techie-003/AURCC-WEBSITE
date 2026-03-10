import React, { useState, useEffect } from 'react';
import './Hostel.css';

const Hostel = () => {
    const [activeSection, setActiveSection] = useState('Description');
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [hostelData, setHostelData] = useState(null);

    const sections = [
        'Description',
        'Administration',
        'Fees Structure',
        'Rules and Regulations'
    ];

    const testimonials = [
        { quote: 'The hostel life here is vibrant and full of learning experiences!', author: 'Akhil, IV ECE' },
        { quote: 'Great food, great friends, and a great environment!', author: 'Priya, III CSE' },
        { quote: 'The staff are very supportive and the facilities are excellent.', author: 'Rahul, II MECH' }
    ];

    useEffect(() => {

fetch("http://localhost:5000/api/hostel")
.then(res => res.json())
.then(data => {
    console.log(data);
    setHostelData(data);
})
.catch(err => console.error(err));

}, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;
            for (const section of sections) {
                const el = document.getElementById(section.replace(/ /g, ''));
                if (el) {
                    const top = el.offsetTop;
                    const bottom = top + el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < bottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (section) => {
        const el = document.getElementById(section.replace(/ /g, ''));
        if (el) {
            const offset = el.offsetTop - 100;
            window.scrollTo({ top: offset, behavior: 'smooth' });
            setActiveSection(section);
        }
    };

    if (!hostelData) {
  return <p className="text-center mt-20 text-lg">Loading Hostel Data...</p>;
}

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-left relative">
            <div className="absolute inset-0 pointer-events-none opacity-20 z-0 overflow-hidden">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="square-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                        <rect x="1" y="1" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1" />
                        <line x1="0" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="0.5" />
                        <line x1="20" y1="0" x2="20" y2="40" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#square-pattern)" />
                </svg>
            </div>
            {/* Hero section */}
            <section className="relative w-full h-48 sm:h-60 md:h-80 lg:h-[50vh] overflow-hidden">
                <img src="/hostel.webp" alt="Hostel" className="absolute inset-0 w-full h-full object-cover object-center" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
                <div className="backdrop-blur-md rounded-2xl shadow-lg px-6 py-6 md:py-10 flex flex-col items-center max-w-2xl mx-auto border border-white/30 animate-popIn mt-20">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-white drop-shadow-lg tracking-tight text-center">Hostel Life</h1>
                    <p className="text-base lg:text-xl text-white drop-shadow text-center font-medium opacity-90">Your Home Away From Our Home</p>
                </div>
            </section>

            {/* Sticky Horizontal Tab Bar */}
            <div className="sticky top-4 z-30">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-full -mt-6 py-2 px-3 flex justify-center overflow-x-auto no-scrollbar gap-2 border border-[rgb(220,140,140)]">
                        {sections.map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={`font-bold px-5 py-3 rounded-full text-xs sm:text-sm lg:text-base transition-all duration-300 whitespace-nowrap relative ${activeSection === section
                                    ? 'bg-[rgb(115,40,40)] text-white shadow-md'
                                    : 'text-gray-700 hover:bg-[rgb(220,140,140)] hover:text-[rgb(115,40,40)]'
                                    }`}
                            >
                                {section}
                                {activeSection === section && (
                                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-6 rounded-full bg-[rgb(160,80,80)]"></span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonial Carousel */}
            <div className="w-full bg-white/50 border-b border-gray-100 py-6">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <div className="relative h-24 sm:h-20 mb-4">
                        {testimonials.map((t, idx) => (
                            <div
                                key={idx}
                                className={`absolute inset-0 transition-all duration-1000 transform ${currentTestimonial === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                                    }`}
                            >
                                <p className="text-sm sm:text-base lg:text-lg italic text-gray-700 font-medium leading-relaxed">"{t.quote}"</p>
                                <p className="text-xs sm:text-sm font-bold text-[rgb(110,35,35)] mt-2">— {t.author}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-2">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentTestimonial(idx)}
                                className={`h-2 w-2 rounded-full transition-all duration-300 ${currentTestimonial === idx ? 'bg-[rgb(115,40,40)] w-6' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Content sections */}
            <main className="max-w-7xl mx-auto py-12 px-4 space-y-16">
                {/* Description Section */}
                <section id="Description" className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all animate-fadeIn">
                    <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-6 px-8 text-center text-white">
                        <h2 className="text-2xl lg:text-3xl font-bold flex items-center justify-center gap-3"><span>🏠</span> Description</h2>
                    </div>
                    <div className="p-8 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-4 text-base lg:text-lg text-gray-700 leading-relaxed font-medium text-justify">
                                <p>Anna University Regional Campus, Coimbatore, offers comfortable and secure hostel accommodation for both boys and girls, with a total capacity of 360 students.</p>
                                <p>Each hostel features well-ventilated rooms, modern amenities, and dedicated staff for cleaning, security, and maintenance. The mess provides nutritious meals in a hygienic environment.</p>
                                <p>Experienced wardens and deputy wardens ensure a safe and supportive atmosphere. CCTV surveillance and strict entry protocols further enhance safety for all residents.</p>
                            </div>
                            <div className="bg-[rgb(248,195,195)] p-6 rounded-2xl border border-[rgb(200,120,120)] space-y-4">
                                <h4 className="font-bold text-[rgb(100,25,25)] border-b border-[rgb(180,100,100)] pb-2">Facility Highlights</h4>
                                <ul className="space-y-3">
                                    {['24/7 RO Purified Water', 'Nutritious & Hygienic Mess', 'Wi-Fi Connectivity', 'Common Room with TV', 'Safe & Secure with CCTV', 'Recreational Sports Area'].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sm font-bold text-gray-700">
                                            <span className="text-green-500">✔</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                

                {/* Administration Section */}
                        <section id="Administration" className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all animate-fadeIn">
                            
                            <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-6 px-8 text-center text-white">
                                <h2 className="text-2xl lg:text-3xl font-bold flex items-center justify-center gap-3">
                                    <span>🧑‍💼</span> Administration
                                </h2>
                            </div>

                            <div className="p-8 space-y-10">

                                {/* Warden */}
                                <div>
                                    <h3 className="text-xl font-bold text-[rgb(100,25,25)] 
                                                mb-6 flex items-center justify-center gap-2 text-center">
                                        Chief Warden / Dean
                                    </h3>

                                    {hostelData.Administration.Wardens.map((warden, index) => (
                                        <div
                                            key={index}
                                            className="bg-[rgb(233,169,169)] border border-[rgb(200,120,120)] 
                                            p-6 rounded-2xl shadow-md hover:shadow-xl 
                                            transition-all duration-300 
                                            flex items-center justify-between 
                                            max-w-md mx-auto"
                                            >

                                            {/* LEFT SIDE - Content */}
                                            <div className="flex-1 text-left">
                                                <h4 className="text-lg font-black text-[rgb(90,20,20)] mb-1">
                                                {warden.Name}
                                                </h4>

                                                <p className="text-sm font-bold text-[rgb(110,35,35)] mb-3">
                                                {warden.Designation}
                                                </p>

                                                <div className="space-y-2 text-sm">
                                                <a
                                                    href={`tel:${warden["Phone No"]}`}
                                                    className="block text-gray-700 font-medium hover:underline"
                                                >
                                                    📞 {warden["Phone No"]}
                                                </a>

                                                <a
                                                    href={`mailto:${warden["Email ID"]}`}
                                                    className="block text-[rgb(115,40,40)] font-bold hover:underline truncate"
                                                >
                                                    ✉ {warden["Email ID"]}
                                                </a>
                                                </div>
                                            </div>

                                            {/* RIGHT SIDE - Photo */}
                                            <div className="ml-4 w-28 h-30 rounded-lg overflow-hidden border-4 border-[rgb(120,45,45)] shadow-md">
                                                <img
                                                src={`http://localhost:5000/public/${warden.photo}`}
                                                alt={warden.Name}
                                                className="w-full h-full object-cover"
                                                />
                                            </div>

                                            </div>
                                    ))}
                                </div>

                                {/* Deputy Wardens */}
                                <div>
                                    <h3 className="text-xl font-bold text-[rgb(100,25,25)] 
                                                mb-6 flex items-center justify-center gap-10 text-center">
                                        Deputy Wardens
                                    </h3>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg: gap-1 justify-items-center">                                                
                                                {hostelData.Administration.Deputy_Wardens.map((dw, i) => (
                                            <div
                                            key={i}
                                            className="bg-white border border-gray-200 
                                                        p-5 rounded-2xl shadow-md 
                                                        hover:shadow-xl transition-all duration-300 
                                                        flex items-center justify-center 
                                                        max-w-md w-full"                                            >

                                            {/* LEFT SIDE - Content */}
                                            <div className="flex-1 text-left">
                                                <h4 className="text-lg font-bold text-[rgb(100,25,25)] mb-1 uppercase">
                                                {dw.Name}
                                                </h4>

                                                <p className="text-sm font-semibold text-gray-500 mb-3">
                                                {dw.Designation}
                                                </p>

                                                <div className="space-y-2 text-sm text-gray-700">
                                                <a
                                                    href={`tel:${dw["Phone No"]}`}
                                                    className="block font-medium hover:underline"
                                                >
                                                    📞 {dw["Phone No"]}
                                                </a>

                                                {dw["Email ID"] && (
                                                    <a
                                                    href={`mailto:${dw["Email ID"]}`}
                                                    className="block text-[rgb(115,40,40)] hover:underline truncate"
                                                    >
                                                    ✉ {dw["Email ID"]}
                                                    </a>
                                                )}
                                                </div>
                                            </div>

                                            {/* RIGHT SIDE - Photo */}
                                            <div className="ml-6 w-28 h-30 rounded-lg overflow-hidden border-4 border-[rgb(120,45,45)] shadow-md">
                                                <img
                                                src={`http://localhost:5000/public/${dw.photo}`}
                                                alt={dw.Name}
                                                className="w-full h-full object-cover"
                                                />
                                            </div>

                                            </div>
                  ))}
                                        </div>
                                </div>

                            </div>
                        </section>

                {/* Fees Structure Section */}
                <section id="FeesStructure" className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all animate-fadeIn">
                    <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-6 px-8 text-center text-white">
                        <h2 className="text-2xl lg:text-3xl font-bold flex items-center justify-center gap-3"><span>💸</span> Fees Structure</h2>
                    </div>
                    <div className="p-8 text-center space-y-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            <a href={hostelData['Fees Structure']['New Admission']} className="p-8 bg-[rgb(220,140,140)] border border-[rgb(200,120,120)] rounded-3xl hover:bg-white hover:shadow-xl transition-all group">
                                <div className="w-16 h-16 bg-[rgb(115,40,40)] text-white rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover: transition-transform">📄</div>
                                <h4 className="text-xl font-bold text-[rgb(100,25,25)] mb-2">New Admission</h4>
                                <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Download Fee Details</p>
                            </a>
                            <a href={hostelData['Fees Structure']['Existing Students']} className="p-8 bg-[rgb(220,140,140)] border border-[rgb(200,120,120)] rounded-3xl hover:bg-white hover:shadow-xl transition-all group">
                                <div className="w-16 h-16 bg-[rgb(115,40,40)] text-white rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover: transition-transform">📄</div>
                                <h4 className="text-xl font-bold text-[rgb(100,25,25)] mb-2">Existing Students</h4>
                                <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Download Fee Details</p>
                            </a>
                        </div>
                        <div className="pt-4">
                            <a
                                href="https://services.sabpaisa.in/pages/annauniversityregionalcampus.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] text-white rounded-2xl font-black text-xl hover:shadow-2xl hover:scale-105 transition-all shadow-xl group"
                            >
                                PAY HOSTEL FEES ONLINE
                                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7-7 7" /></svg>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Rules Section */}
                 <section id="RulesandRegulations" className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all animate-fadeIn">
                    <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-6 px-8 text-center text-white">
                        <h2 className="text-2xl lg:text-3xl font-bold flex items-center justify-center gap-3"><span>📜</span> Rules and Regulations</h2>
                    </div>
                    <div className="p-8">
                        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 mx-auto max-w-4xl">                            
                            <iframe
                            src={`http://localhost:5000${hostelData["Rules and Regulations"]}#toolbar=0&navpanes=0&scrollbar=0`}
                            className="w-[900px] h-[400px] rounded-xl"
                            title="Hostel Rules"
                            />
                        </div>
                    </div>
                    <div className="text-center mb-6">
                        <a
                            href={`http://localhost:5000${hostelData["Rules and Regulations"]}`}
                            download="Hostel_Rules.pdf"
                            className="inline-flex items-center gap-3 px-6 py-3 bg-[rgb(115,40,40)] text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                        >
                            ⬇ Download Rules & Regulations PDF
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Hostel;
