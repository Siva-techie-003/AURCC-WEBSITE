import React, { useState } from 'react';
import data from '../assets/distance education.json';
import OfficePageTemplate from '../components/OfficePageTemplate';
import OfficeContentSection from '../components/OfficeContentSection';
import StaffCard from '../components/StaffCard';
import './DistanceEdu.css';

const DistanceEdu = () => {
    const [activeSection, setActiveSection] = useState('overview');

    const sections = [
        { key: 'overview', label: 'Overview' },
        { key: 'why_choose', label: 'Why Choose' },
        { key: 'programs', label: 'Programs' },
        { key: 'specialization', label: 'Specializations' },
        { key: 'staff', label: 'Staff' }
    ];

    const handleSectionChange = (sectionKey) => {
        setActiveSection(sectionKey);
    };

    return (
        <OfficePageTemplate
            officeName="DISTANCE EDUCATION"
            heroSubtitle="Flexible learning for working professionals and lifelong learners"
            sections={sections}
            contactEmail="distanceedu@aurcc.ac.in"
            onSectionChange={handleSectionChange}
        >
            <div className="content">
                {/* Overview */}
                <OfficeContentSection
                    sectionId="overview"
                    title="Overview"
                    icon="ℹ️"
                >
                    <p className="text-base lg:text-lg xl:text-xl font-medium text-gray-800 text-left leading-relaxed">{data.description}</p>
                </OfficeContentSection>

                {/* Why Choose Distance Education */}
                <OfficeContentSection
                    sectionId="why_choose"
                    title="Why Choose Distance Education?"
                    icon="🌟"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-[rgb(220,140,140)] transition-transform hover:-translate-y-1">
                            <span className="text-3xl mb-3">⏰</span>
                            <span className="font-bold text-sm lg:text-base text-gray-800">Flexible Timings</span>
                            <span className="text-xs lg:text-sm text-gray-500 mt-2">Learn at your own pace, anytime, anywhere.</span>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-[rgb(220,140,140)] transition-transform hover:-translate-y-1">
                            <span className="text-3xl mb-3">💼</span>
                            <span className="font-bold text-sm lg:text-base text-gray-800">Career Advancement</span>
                            <span className="text-xs lg:text-sm text-gray-500 mt-2">Upgrade your skills while you work.</span>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-[rgb(220,140,140)] transition-transform hover:-translate-y-1">
                            <span className="text-3xl mb-3">🎓</span>
                            <span className="font-bold text-sm lg:text-base text-gray-800">Recognized Degrees</span>
                            <span className="text-xs lg:text-sm text-gray-500 mt-2">Degrees from Anna University, valued by employers.</span>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-[rgb(220,140,140)] transition-transform hover:-translate-y-1">
                            <span className="text-3xl mb-3">🤝</span>
                            <span className="font-bold text-sm lg:text-base text-gray-800">Expert Faculty</span>
                            <span className="text-xs lg:text-sm text-gray-500 mt-2">Guidance from experienced professors.</span>
                        </div>
                    </div>
                </OfficeContentSection>

                {/* Programs */}
                <OfficeContentSection
                    sectionId="programs"
                    title="Programs Offered"
                    icon="📚"
                >
                    <div className="mb-6 text-base lg:text-lg text-gray-700 text-left">Our flexible MBA and MCA programs are designed for working professionals and recent graduates seeking to advance their careers.</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white/80 rounded-xl shadow-sm p-6 flex items-center gap-4 border border-[rgb(220,140,140)] hover:bg-white hover:shadow-md transition-all">
                            <span className="text-3xl">🎓</span>
                            <span className="font-bold text-base lg:text-lg text-[rgb(100,25,25)]">MBA</span>
                        </div>
                        <div className="bg-white/80 rounded-xl shadow-sm p-6 flex items-center gap-4 border border-[rgb(220,140,140)] hover:bg-white hover:shadow-md transition-all">
                            <span className="text-3xl">💻</span>
                            <span className="font-bold text-base lg:text-lg text-[rgb(100,25,25)]">MCA</span>
                        </div>
                    </div>
                </OfficeContentSection>

                {/* Specializations */}
                <OfficeContentSection
                    sectionId="specialization"
                    title="Specializations"
                    icon="🎯"
                >
                    <div className="mb-6 text-base lg:text-lg text-gray-700 text-left">Choose from a range of MBA specializations to tailor your learning to your career goals.</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {(Array.isArray(data?.specialization) ? data.specialization : []).map((spec, index) => (
                            <div key={index} className="bg-white/80 rounded-xl shadow-sm p-4 flex items-center gap-3 border border-[rgb(220,140,140)] hover:bg-white transition-colors">
                                <span className="text-xl">🏅</span>
                                <span className="font-semibold text-sm lg:text-base text-gray-800 text-left">{spec}</span>
                            </div>
                        ))}
                    </div>
                </OfficeContentSection>

                {/* Staff */}
                <OfficeContentSection
                    sectionId="staff"
                    title="Staff"
                    icon="👥"
                >
                    <div className="mb-8 text-base lg:text-lg text-gray-700 text-center">Meet our dedicated faculty, committed to supporting your distance learning journey.</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {(Array.isArray(data?.staff) ? data.staff : []).map((staff, index) => (
                            <StaffCard key={index} staff={staff} />
                        ))}
                    </div>
                </OfficeContentSection>
            </div>
        </OfficePageTemplate>
    );
};

export default DistanceEdu;
