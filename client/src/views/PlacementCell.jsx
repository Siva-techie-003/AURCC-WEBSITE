import React, { useState } from 'react';
import data from '../assets/placement-cell.json';
import OfficePageTemplate from '../components/OfficePageTemplate';
import OfficeContentSection from '../components/OfficeContentSection';
import StaffCard from '../components/StaffCard';
import './PlacementCell.css';

const PlacementCell = () => {
    const [activeSection, setActiveSection] = useState('description');

    const sections = [
        { key: 'description', label: 'Description' },
        { key: 'placement_statistics', label: 'Placement Statistics' },
        { key: 'cuic', label: 'CUIC' },
        { key: 'our_recruiters', label: 'Our Recruiters' },
        { key: 'placed_students', label: 'Placed Students' },
        { key: 'staff', label: 'Staff' }
    ];

    const handleSectionChange = (sectionKey) => {
        setActiveSection(sectionKey);
    };

    return (
        <OfficePageTemplate
            officeName="PLACEMENT CELL"
            heroSubtitle="Empowering students for career success and industry connections"
            sections={sections}
            contactEmail={data.contact_us || 'placementcell@aurcc.ac.in'}
            onSectionChange={handleSectionChange}
        >
            <div className="content">
                {/* Description */}
                <OfficeContentSection
                    sectionId="description"
                    title="About the Placement Cell"
                    icon="🎯"
                >
                    <div className="text-left">
                        <p className="text-base lg:text-lg leading-relaxed text-gray-800 mb-6">
                            <span className="font-bold text-[rgb(100,25,25)]">The Placement Cell</span> at our Regional Campus is dedicated to empowering students for career success. We provide comprehensive support for every stage of your journey.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {[
                                { title: 'Comprehensive Support', desc: 'Guidance and training for every stage of the campus recruitment process.' },
                                { title: 'Expert Team', desc: 'Coordinators, assistants, and volunteers from every department ensuring personalized attention.' },
                                { title: 'Skill Development', desc: 'Pre-placement training, mock interviews, group discussions, and workshops.' },
                                { title: 'Industry Connections', desc: 'Strong ties with top recruiters and regular campus drives.' },
                                { title: 'Career Awareness', desc: 'Information on value-added courses and opportunities in private and government sectors.' }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 p-4 bg-white rounded-xl border border-gray-100">
                                    <span className="text-[rgb(120,45,45)] font-bold">✔</span>
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
                </OfficeContentSection>

                {/* Placement Statistics */}
                <OfficeContentSection
                    sectionId="placement_statistics"
                    title="Placement Statistics"
                    icon="📊"
                >
                    <div className="flex flex-col items-center">
                        <div className="text-base lg:text-lg text-gray-700 mb-8 text-center max-w-2xl font-medium">
                            <span className="font-bold text-[rgb(100,25,25)]">Our Results Speak for Themselves:</span> Each year, our students receive numerous placement offers from leading companies.
                        </div>
                        <img src="/placement statistics.webp" alt="Placement Statistics" className="w-full max-w-4xl mx-auto h-auto rounded-2xl shadow-xl border border-gray-100" />
                    </div>
                </OfficeContentSection>

                {/* CUIC */}
                <OfficeContentSection
                    sectionId="cuic"
                    title="CUIC: Your Gateway to Top Recruiters"
                    icon="🤝"
                >
                    <div className="text-left">
                        <div className="bg-[rgb(100,25,25)] text-white p-6 rounded-2xl mb-8 shadow-md">
                            <p className="text-lg lg:text-xl font-bold mb-2">The Centre for University-Industry Collaboration (CUIC)</p>
                            <p className="text-[rgb(200,120,120)] opacity-90">Bridges the gap between students and leading employers through specialized initiatives.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            {[
                                { title: 'Industry Partnerships', desc: 'Direct connections for internships and placements.' },
                                { title: 'Skill-Building', desc: 'Workshops, seminars, and training programs.' },
                                { title: 'Placement Drives', desc: 'Regular campus recruitment events.' },
                                { title: 'Career Guidance', desc: 'Expert advice for informed career choices.' }
                            ].map((item, i) => (
                                <div key={i} className="p-4 bg-white rounded-xl border border-[rgb(200,120,120)] shadow-sm flex items-start gap-3">
                                    <span className="bg-[rgb(200,120,120)] text-[rgb(110,35,35)] w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">{i + 1}</span>
                                    <div>
                                        <span className="font-bold text-[rgb(100,25,25)] block mb-1">{item.title}</span>
                                        <span className="text-sm text-gray-700">{item.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </OfficeContentSection>

                {/* Our Recruiters */}
                <OfficeContentSection
                    sectionId="our_recruiters"
                    title="Our Recruiters"
                    icon="🏢"
                >
                    <div className="flex justify-center">
                        <img src="/recruiters.jpg" alt="Our Recruiters" className="w-full max-w-4xl mx-auto h-auto rounded-2xl shadow-xl border border-gray-100" />
                    </div>
                </OfficeContentSection>

                {/* Placed Students */}
                <OfficeContentSection
                    sectionId="placed_students"
                    title="Placed Students"
                    icon="🎓"
                >
                    <div className="flex justify-center">
                        <img src="/Placedstudents.webp" alt="Placed Students" className="w-full max-w-4xl mx-auto h-auto rounded-2xl shadow-xl border border-gray-100" />
                    </div>
                </OfficeContentSection>

                {/* Staff Members */}
                <OfficeContentSection
                    sectionId="staff"
                    title="Staff"
                    icon="👥"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {(Array.isArray(data?.staff_members) ? data.staff_members : []).map((staff, index) => (
                            <StaffCard key={index} staff={staff} />
                        ))}
                    </div>
                </OfficeContentSection>
            </div>
        </OfficePageTemplate>
    );
};

export default PlacementCell;
