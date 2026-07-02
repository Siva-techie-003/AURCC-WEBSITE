import React, { useState,useEffect } from 'react';
import OfficePageTemplate from '../components/OfficePageTemplate';
import OfficeContentSection from '../components/OfficeContentSection';
import StaffCard from '../components/StaffCard';
import './DistanceEdu.css';

const DistanceEdu = () => {
    const [data, setData] = useState(null);

    const sections = [
        { key: 'overview', label: 'Overview' },
        { key: 'why_choose', label: 'Why Choose' },
        { key: 'programs', label: 'Programs' },
        { key: 'specialization', label: 'Specializations' },
        { key: 'staff', label: 'Staff' }
    ];

    useEffect(() => {
  fetch("/api/distance-education")
    .then(res => res.json())
    .then(res => {
      // if backend returns array, take first item
      setData(Array.isArray(res) ? res[0] : res);
    })
    .catch(err => console.error("Distance Education fetch error:", err));
}, []);

       if (!data) {
    return <p className="text-center mt-20">Loading...</p>;
  }

    return (
                  <section className="pt-[100px] sm:pt-[100px] lg:pt-[50px]">

        <OfficePageTemplate
            officeName="DISTANCE EDUCATION"
            heroSubtitle="Flexible learning for working professionals and lifelong learners"
            sections={sections}
            contactEmail="distanceedu@aurcc.ac.in"
        >
            <div className="content space-y-16">

{/* Overview */}
<section id="overview">
                    <div className="text-center mb-8 ">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[rgb(100,25,25)] uppercase mb-2">Overview</h2>
                        <div className="flex justify-center ">
                            <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
                        </div>
                    </div>

<div className="bg-white rounded-2xl shadow-sm border border-[rgb(220,140,140)] p-6 lg:p-8">

<p className="text-base lg:text-lg xl:text-xl font-medium text-gray-800 text-left leading-relaxed">
Programme: MBA, MCA
</p>

</div>

</section>


                {/* Why Choose */}
                <OfficeContentSection
                    sectionId="why_choose"
                    title="Why Choose Distance Education?"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-[rgb(220,140,140)] transition-transform hover:-translate-y-1">
                            <svg className="w-8 h-8 text-[rgb(115,40,40)] mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                            </svg>
                            <span className="font-bold text-sm lg:text-base text-gray-800">Flexible Timings</span>
                            <span className="text-xs lg:text-sm text-gray-500 mt-2">Learn at your own pace, anytime, anywhere.</span>
                        </div>

                        <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-[rgb(220,140,140)] transition-transform hover:-translate-y-1">
                            <svg className="w-8 h-8 text-[rgb(115,40,40)] mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <rect x="3" y="7" width="18" height="12" rx="2" ry="2" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                            </svg>
                            <span className="font-bold text-sm lg:text-base text-gray-800">Career Advancement</span>
                            <span className="text-xs lg:text-sm text-gray-500 mt-2">Upgrade your skills while you work.</span>
                        </div>

                        <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-[rgb(220,140,140)] transition-transform hover:-translate-y-1">
                            <svg className="w-8 h-8 text-[rgb(115,40,40)] mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12.5V17a3 3 0 006 0v-4.5" />
                            </svg>
                            <span className="font-bold text-sm lg:text-base text-gray-800">Recognized Degrees</span>
                            <span className="text-xs lg:text-sm text-gray-500 mt-2">Degrees from Anna University, valued by employers.</span>
                        </div>

                        <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-[rgb(220,140,140)] transition-transform hover:-translate-y-1">
                            <svg className="w-8 h-8 text-[rgb(115,40,40)] mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="font-bold text-sm lg:text-base text-gray-800">Expert Faculty</span>
                            <span className="text-xs lg:text-sm text-gray-500 mt-2">Guidance from experienced professors.</span>
                        </div>
                    </div>
                </OfficeContentSection>


                {/* PROGRAMS + SPECIALIZATIONS SIDE BY SIDE */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Programs */}
                    <OfficeContentSection
                        sectionId="programs"
                        title="Programs Offered"
                    >
                        <div className="mb-6 text-base lg:text-lg text-gray-700 text-left">
                            Our flexible MBA and MCA programs are designed for working professionals and recent graduates seeking to advance their careers.
                        </div>

                        <div className="space-y-4">
                            <div className="bg-white/80 rounded-xl shadow-sm p-6 flex items-center gap-4 border border-[rgb(220,140,140)] hover:bg-white hover:shadow-md transition-all">
                                <svg className="w-8 h-8 text-[rgb(115,40,40)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12.5V17a3 3 0 006 0v-4.5" />
                                </svg>
                                <span className="font-bold text-base lg:text-lg text-[rgb(100,25,25)]">MBA</span>
                            </div>

                            <div className="bg-white/80 rounded-xl shadow-sm p-6 flex items-center gap-4 border border-[rgb(220,140,140)] hover:bg-white hover:shadow-md transition-all">
                                <svg className="w-8 h-8 text-[rgb(115,40,40)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                    <line x1="8" y1="21" x2="16" y2="21" />
                                    <line x1="12" y1="17" x2="12" y2="21" />
                                </svg>
                                <span className="font-bold text-base lg:text-lg text-[rgb(100,25,25)]">MCA</span>
                            </div>
                        </div>
                    </OfficeContentSection>


                    {/* Specializations */}
                    <OfficeContentSection
                        sectionId="specialization"
                        title="Specializations"
                    >
                        <div className="mb-6 text-base lg:text-lg text-gray-700 text-left">
                            Choose from a range of MBA specializations to tailor your learning to your career goals.
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {(Array.isArray(data?.specialization) ? data.specialization : []).map((spec, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 rounded-xl shadow-sm p-3 mt-6 mb-4 flex items-center gap-3 border border-[rgb(220,140,140)] hover:bg-white transition-colors"
                                >
                                    <svg className="w-6 h-6 text-[rgb(115,40,40)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <circle cx="12" cy="8" r="7" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
                                    </svg>
                                    <span className="font-semibold text-sm lg:text-base text-gray-800 text-left">
                                        {spec}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </OfficeContentSection>

                </div>


                {/* Staff */}
                <OfficeContentSection
                    sectionId="staff"
                    title="Staff"
                >
                    <div className="mb-8 text-base lg:text-lg text-gray-700 text-center">
                        Meet our dedicated faculty, committed to supporting your distance learning journey.
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {(Array.isArray(data?.staff) ? data.staff : []).map((staff, index) => (
                            <StaffCard key={index} staff={{...staff,image: staff.image}} />
                        ))}
                    </div>
                </OfficeContentSection>

            </div>
        </OfficePageTemplate>
        </section>
    );
};

export default DistanceEdu;