import React, { useState,useEffect } from 'react';
import OfficePageTemplate from '../components/OfficePageTemplate';
import OfficeContentSection from '../components/OfficeContentSection';
import StaffCard from '../components/StaffCard';
import './PlacementCell.css';

const PlacementCell = () => {
            const [data, setData] = useState(null);

    const sections = [
        { key: 'description', label: 'Description' },
        { key: 'placement_statistics', label: 'Placement Statistics' },
        { key: 'cuic', label: 'CUIC' },
        { key: 'our_recruiters', label: 'Our Recruiters' },
        { key: 'placed_students', label: 'Placed Students' },
        { key: 'staff', label: 'Staff' }
    ];

    const logos = [
        "/placed_students/ANCIT.png",
        "/placed_students/Affintrix.png",
        "/placed_students/Amazon.png",
        "/placed_students/Avasoft-2.png",
        "/placed_students/Avasoft.png",
        "/placed_students/Breaks India.png",
        "/placed_students/DLUX.png",
        "/placed_students/ERP Roots.png",
        "/placed_students/Glimmora (2).png",
        "/placed_students/Glimmora.png",
        "/placed_students/Hub Stream.png",
        "/placed_students/Infosys.png",
        "/placed_students/MBA - Telekonnectors.png",
        "/placed_students/Motherson EEE - I.png",
        "/placed_students/Motherson EEE-II.png",
        "/placed_students/Oerlicon - II.png",
        "/placed_students/Oerlicon.png",
        "/placed_students/Office 2000.png",
        "/placed_students/Office 2020 - II.png",
        "/placed_students/Ozone.png",
        "/placed_students/Roots.png",
        "/placed_students/Senzary (2).png",
        "/placed_students/Senzary.png",
        "/placed_students/Skillintrix.png",
        "/placed_students/SmartDV.png",
        "/placed_students/Solarwind, Grenada.png",
        "/placed_students/Stellatis.png",
        "/placed_students/Super Auto Forge.png",
        "/placed_students/TAP Academy.png",
        "/placed_students/TN Model School.png",
        "/placed_students/Thirdwave.png",
        "/placed_students/Vista Engineering Solutions.png",
        "/placed_students/zoho (2).png",
        "/placed_students/zoho (3).png",
        "/placed_students/zoho.png"
    ];

    const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

useEffect(() => {
  fetch("/api/placement-cell")
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.error(err));

  const timer = setInterval(() => {
    setCurrentLogoIndex((prev) => (prev + 1) % logos.length);
  }, 2000);

  return () => clearInterval(timer);
}, []);

if (!data) {
  return <p className="text-center mt-20">Loading...</p>;
}    

    return (
                  <section className="pt-[100px] sm:pt-[100px] lg:pt-[50px]">

        <OfficePageTemplate
            officeName="PLACEMENT CELL"
            heroSubtitle="Empowering students for career success and industry connections"
            sections={sections}
            contactEmail="placementcell@aurcc.ac.in"
        >
            <div className="content space-y-16">

                {/* ABOUT + CUIC SIDE BY SIDE */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* About the Placement Cell */}
<section id="description">
  <div className="text-center mb-8">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[rgb(100,25,25)] uppercase mb-2">
      About the Placement Cell
    </h2>

    <div className="flex justify-center">
      <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
    </div>
  </div>

  <div className="bg-white rounded-2xl shadow-sm border border-[rgb(220,140,140)] p-6 lg:p-8">

    <p className="text-base lg:text-lg xl:text-xl font-medium text-gray-800 text-left leading-relaxed mb-6">
      <span className="font-bold text-[rgb(100,25,25)]">The Placement Cell</span> at our Regional Campus is dedicated to empowering students for career success. We provide comprehensive support for every stage of your journey.
    </p>

    <div className="grid grid-cols-1 gap-4 mb-8">
      {[
        { title: 'Comprehensive Support', desc: 'Guidance and training for every stage of the campus recruitment process.' },
        { title: 'Expert Team', desc: 'Coordinators, assistants, and volunteers from every department ensuring personalized attention.' },
        { title: 'Skill Development', desc: 'Pre-placement training, mock interviews, group discussions, and workshops.' },
        { title: 'Industry Connections', desc: 'Strong ties with top recruiters and regular campus drives.' },
        { title: 'Career Awareness', desc: 'Information on value-added courses and opportunities in private and government sectors.' }
      ].map((item, i) => (
        <div
          key={i}
          className="flex gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition"
        >
          <span className="text-[rgb(120,45,45)] font-bold text-lg">✔</span>

          <div>
            <span className="font-bold text-gray-900 block">{item.title}</span>
            <span className="text-sm text-gray-700">{item.desc}</span>
          </div>
        </div>
      ))}
    </div>

    <p className="text-base lg:text-lg text-[rgb(110,35,35)] font-bold border-l-4 border-l-[rgb(120,45,45)] pl-4 py-2 bg-gray-50 rounded-r-lg">
      Our mission: To help every student achieve their dream job and build a successful career.
    </p>

  </div>
</section>


                    {/* CUIC */}
                    <OfficeContentSection
                        sectionId="cuic"
                        title="CUIC: Your Gateway to Top Recruiters"                    >
                        <div className="text-left">

                            <div className="bg-[rgb(100,25,25)] text-white p-6 rounded-2xl mb-8 shadow-md">
                                <p className="text-lg lg:text-xl font-bold mb-2">
                                    The Centre for University-Industry Collaboration (CUIC)
                                </p>
                                <p className="text-[rgb(200,120,120)] opacity-90">
                                    Bridges the gap between students and leading employers through specialized initiatives.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">
                                {[
                                    { title: 'Industry Partnerships', desc: 'Direct connections for internships and placements.' },
                                    { title: 'Skill-Building', desc: 'Workshops, seminars, and training programs.' },
                                    { title: 'Placement Drives', desc: 'Regular campus recruitment events.' },
                                    { title: 'Career Guidance', desc: 'Expert advice for informed career choices.' },
                                    { title: 'Internship Assistance', desc: 'Support in identifying and securing internships to gain practical industry experience and enhance job readiness.' }

                                ].map((item, i) => (
                                    <div key={i} className="p-4 bg-white rounded-xl border border-[rgb(200,120,120)] shadow-sm flex items-start gap-3">
                                        <span className="bg-[rgb(200,120,120)] text-[rgb(110,35,35)] w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
                                            {i + 1}
                                        </span>
                                        <div>
                                            <span className="font-bold text-[rgb(100,25,25)] block mb-1">{item.title}</span>
                                            <span className="text-sm text-gray-700">{item.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </OfficeContentSection>

                </div>


                {/* Placement Statistics */}
                <OfficeContentSection
                    sectionId="placement_statistics"
                    title="Placement Statistics"
                >
                    <div className="flex flex-col items-center">
                        <div className="text-base lg:text-lg text-gray-700 mb-8 text-center max-w-2xl font-medium">
                            <span className="font-bold text-[rgb(100,25,25)]">Our Results Speak for Themselves:</span> Each year, our students receive numerous placement offers from leading companies.
                        </div>
                        <img src="/placement statistics.webp" alt="Placement Statistics" className="w-full max-w-4xl mx-auto rounded-2xl shadow-xl border border-gray-100" />

                    </div>
                </OfficeContentSection>

                <section className="py-8 bg-[rgb(171,110,110)] relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

                        {/* Heading */}
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12 text-white relative inline-block">
                            OUR HIRING PARTNERS
                            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-1 w-20 bg-yellow-500"></span>
                        </h2>

                        {/* 3-Card Carousel Container */}
                        <div className="relative flex items-center justify-center gap-8 lg:gap-16 w-full max-w-none h-[450px] sm:h-[550px] lg:h-[650px]">
                            {/* Card 1 (Left - Lite Fade) */}
                            <div className="hidden md:flex max-w-[250px] lg:max-w-[400px] w-auto h-auto bg-white/40 backdrop-blur-sm rounded-2xl shadow-lg items-center justify-center p-0 opacity-40 transition-all duration-700 ease-in-out border-[3px] border-white/30 overflow-hidden">
                                <img
                                    src={logos[(currentLogoIndex - 1 + logos.length) % logos.length]}
                                    alt="Partner Logo Left"
                                    className="w-full h-full max-h-[250px] lg:max-h-[400px] object-cover grayscale opacity-50"
                                />
                            </div>

                            {/* Card 2 (Center - Clear/Active) */}
                            <div className="relative max-w-[320px] sm:max-w-[450px] lg:max-w-[600px] w-auto h-auto bg-white rounded-3xl shadow-2xl flex items-center justify-center p-0 transition-all duration-700 ease-in-out border-[6px] border-[rgb(100,25,25)] z-10 overflow-hidden">
                                <img
                                    key={currentLogoIndex}
                                    src={logos[currentLogoIndex]}
                                    alt="Active Partner Logo"
                                    className="w-full h-full max-h-[300px] sm:max-h-[450px] lg:max-h-[580px] object-cover animate-fadeInOnly"
                                />
                            </div>

                            {/* Card 3 (Right - Lite Fade) */}
                            <div className="hidden md:flex max-w-[250px] lg:max-w-[400px] w-auto h-auto bg-white/40 backdrop-blur-sm rounded-2xl shadow-lg items-center justify-center p-0 opacity-40 transition-all duration-700 ease-in-out border-[3px] border-white/30 overflow-hidden">
                                <img
                                    src={logos[(currentLogoIndex + 1) % logos.length]}
                                    alt="Partner Logo Right"
                                    className="w-full h-full max-h-[250px] lg:max-h-[400px] object-cover grayscale opacity-50"
                                />
                            </div>
                        </div>
                    </div>

                    <style>
                        {`
                        @keyframes fadeInOnly {
                            from { opacity: 0; }
                            to { opacity: 1; }
                        }
                        .animate-fadeInOnly {
                            animation: fadeInOnly 0.5s ease-out forwards;
                        }
                        `}
                    </style>
                </section>

                {/* Staff */}
                <OfficeContentSection
                    sectionId="staff"
                    title="Staff"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {(Array.isArray(data?.staff_members) ? data.staff_members : []).map((staff, index) => (
                            <StaffCard key={index} staff={{...staff,image: staff.image}} />
                        ))}
                    </div>
                </OfficeContentSection>

            </div>
        </OfficePageTemplate>
        </section>
    );
};

export default PlacementCell;