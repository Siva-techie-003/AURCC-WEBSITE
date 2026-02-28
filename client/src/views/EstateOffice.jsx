import React, { useState } from 'react';
import data from '../assets/EstateOff.json';
import OfficePageTemplate from '../components/OfficePageTemplate';
import OfficeContentSection from '../components/OfficeContentSection';
import StaffCard from '../components/StaffCard';
import './EstateOffice.css';

const serviceCards = [
    { icon: '🏗️', title: 'Building Construction & Maintenance', desc: 'All construction activities and upkeep of campus buildings.' },
    { icon: '💧', title: 'Water & Sewage Management', desc: 'Ensuring water supply, sewage treatment, and disposal.' },
    { icon: '💡', title: 'Electrical System Maintenance', desc: 'Maintenance of campus electrical supply and systems.' },
    { icon: '🛣️', title: 'Roads & Pathways', desc: 'Construction and maintenance of campus roads and walkways.' },
    { icon: '🌳', title: 'Gardens & Lawns', desc: 'Upkeep of lawns, gardens, and green spaces.' },
    { icon: '🏢', title: 'Facility Monitoring & Rent', desc: 'Monitoring and rent collection for central facilities.' },
    { icon: '🧹', title: 'Housekeeping', desc: 'Campus-wide cleaning and housekeeping services.' },
    { icon: '🛡️', title: 'Security', desc: 'Ensuring safety and security across the campus.' },
];

const EstateOffice = () => {
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
            officeName="ESTATE OFFICE"
            heroSubtitle="Managing campus infrastructure, maintenance, and facilities"
            sections={sections}
            contactEmail={data.contact_us}
            onSectionChange={handleSectionChange}
        >
            <div className="content">
                {/* About */}
                <OfficeContentSection
                    sectionId="about"
                    title="About the Estate Office"
                    icon="ℹ️"
                >
                    <div className="max-w-4xl mx-auto">
                        <p className="text-base lg:text-lg xl:text-xl font-medium text-gray-800 text-left leading-relaxed">{data.description}</p>
                    </div>
                </OfficeContentSection>

                {/* Services */}
                <OfficeContentSection
                    sectionId="services"
                    title="Services"
                    icon="🛠️"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
                        {serviceCards.map((service, index) => (
                            <div
                                key={index}
                                className="service-card bg-white/70 backdrop-blur rounded-2xl shadow-sm border border-[rgb(220,140,140)] flex flex-col items-center text-center p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[rgb(140,60,60)] group"
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                                <h3 className="font-bold text-sm lg:text-base xl:text-lg text-[rgb(100,25,25)] mb-2 leading-snug">{service.title}</h3>
                                <p className="text-xs lg:text-sm text-gray-600 line-clamp-3">{service.desc}</p>
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {(Array.isArray(data?.office_bearers) ? data.office_bearers : []).map((staff, index) => (
                            <StaffCard
                                key={index}
                                staff={{
                                    ...staff,
                                    email: staff.email_id || staff.email // Support different field names
                                }}
                            />
                        ))}
                    </div>
                </OfficeContentSection>
            </div>
        </OfficePageTemplate>
    );
};

export default EstateOffice;
