import React, { useState } from 'react';
import data from '../assets/exam-cell.json';
import OfficePageTemplate from '../components/OfficePageTemplate';
import OfficeContentSection from '../components/OfficeContentSection';
import StaffCard from '../components/StaffCard';
import './ExamCell.css';

const ExamCell = () => {
    const [activeSection, setActiveSection] = useState('about');

    const sections = [
        { key: 'about', label: 'About' },
        { key: 'services', label: 'Services' },
        { key: 'staff', label: 'Staff' }
    ];

    const handleSectionChange = (sectionKey) => {
        setActiveSection(sectionKey);
    };

    return (
        <OfficePageTemplate
            officeName="EXAM CELL"
            heroSubtitle="Ensuring smooth conduct and transparency in university examinations"
            sections={sections}
            contactEmail={data.contact_us || 'examcell@aurcc.ac.in'}
            onSectionChange={handleSectionChange}
        >
            <div className="content">
                {/* About */}
                <OfficeContentSection
                    sectionId="about"
                    title="About the Exam Cell"
                    icon="ℹ️"
                >
                    <div className="text-left bg-[rgb(220,140,140)]/50 p-6 rounded-2xl border border-[rgb(200,120,120)] shadow-sm">
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[rgb(100,25,25)] mb-4">Our Mission: Ensuring fairness, transparency, and efficiency in all university examinations.</div>
                        <div className="w-20 h-1.5 bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] rounded-full mb-6"></div>
                        <p className="text-base lg:text-lg xl:text-xl font-medium text-gray-800 leading-relaxed italic">{data.description}</p>
                    </div>
                </OfficeContentSection>

                {/* Services */}
                <OfficeContentSection
                    sectionId="services"
                    title="Services"
                    icon="🛠️"
                >
                    <div className="mb-8 text-base lg:text-lg text-gray-700 text-left">We provide comprehensive support for all examination-related processes, ensuring a smooth experience for students and staff.</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.services.map((service, index) => (
                            <div key={index} className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                                <span className="text-2xl text-green-500 group-hover:scale-125 transition-transform shrink-0">✔️</span>
                                <span className="font-bold text-sm lg:text-base text-gray-800 text-left leading-snug">{service}</span>
                            </div>
                        ))}
                    </div>
                </OfficeContentSection>

                {/* Office Bearers */}
                <OfficeContentSection
                    sectionId="staff"
                    title="Staff"
                    icon="👥"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.office_bearers.map((bearer, index) => (
                            <StaffCard
                                key={index}
                                staff={{
                                    ...bearer,
                                    email: bearer.email_id || bearer.email // Support different field names
                                }}
                            />
                        ))}
                    </div>
                </OfficeContentSection>
            </div>
        </OfficePageTemplate>
    );
};

export default ExamCell;
