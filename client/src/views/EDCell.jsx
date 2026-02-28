import React, { useState } from 'react';
import data from '../assets/ED-cell.json';
import OfficePageTemplate from '../components/OfficePageTemplate';
import OfficeContentSection from '../components/OfficeContentSection';
import StaffCard from '../components/StaffCard';
import './EDCell.css';

const EDCell = () => {
    const [activeSection, setActiveSection] = useState('description');

    const sections = [
        { key: 'description', label: 'Description' },
        { key: 'objectives', label: 'Objectives' },
        { key: 'key_activities', label: 'Key Activities' },
        { key: 'mou', label: 'MOUs' },
        { key: 'links', label: 'Links' },
        { key: 'office_bearers', label: 'Staff' },
    ];

    const handleSectionChange = (sectionKey) => {
        setActiveSection(sectionKey);
    };

    return (
        <OfficePageTemplate
            officeName="Entrepreneurship Development Cell"
            heroSubtitle="Empowering innovation, startups, and entrepreneurial spirit"
            sections={sections}
            contactEmail="edcell@aurcc.ac.in"
            onSectionChange={handleSectionChange}
        >
            <div className="content">
                {/* Description */}
                <OfficeContentSection
                    sectionId="description"
                    title="Description"
                    icon="ℹ️"
                >
                    <div className="bg-[rgb(220,140,140)] p-6 rounded-2xl border border-[rgb(200,120,120)] shadow-sm text-left">
                        <p className="text-base lg:text-lg xl:text-xl font-medium text-gray-800 leading-relaxed italic">
                            "Entrepreneurship is the person who plays a certain price for a product to resell it at an uncertain price, hereby making decisions about obtaining and using the resources while consequently admitting the risk of enterprise."
                        </p>
                    </div>
                </OfficeContentSection>

                {/* Objectives */}
                <OfficeContentSection
                    sectionId="objectives"
                    title="Objectives"
                    icon="🎯"
                >
                    <ul className="list-disc pl-5 space-y-3 text-base lg:text-lg xl:text-xl text-gray-800 text-left">
                        {data.description.objectives.map((objective, i) => (
                            <li key={i}>{objective}</li>
                        ))}
                    </ul>
                </OfficeContentSection>

                {/* Key Activities */}
                <OfficeContentSection
                    sectionId="key_activities"
                    title="Key Activities"
                    icon="🗝️"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.description.key_activities.map((activity, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-xl p-6 shadow-sm border border-[rgb(220,140,140)] hover:shadow-md transition-all text-left"
                            >
                                <h4 className="text-lg lg:text-xl font-bold text-[rgb(100,25,25)] mb-3">{activity.name}</h4>
                                <div className="flex items-start gap-2 text-sm text-gray-600 mb-2">
                                    <span className="font-bold text-gray-800">📍 Location:</span>
                                    <span>{activity.location}</span>
                                </div>
                                <div className="text-sm lg:text-base text-gray-700">
                                    <span className="font-bold text-gray-800">📝 Details:</span>
                                    <p className="mt-1">{activity.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </OfficeContentSection>

                {/* MOU */}
                <OfficeContentSection
                    sectionId="mou"
                    title="MOUs"
                    icon="🤝"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {data.MOU.map((mou, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100 text-left">
                                <span className="text-[rgb(120,45,45)] font-bold">▶</span>
                                <span className="text-base font-medium text-gray-800">{mou}</span>
                            </div>
                        ))}
                    </div>
                </OfficeContentSection>

                {/* Links */}
                <OfficeContentSection
                    sectionId="links"
                    title="Useful Links"
                    icon="🔗"
                >
                    <div className="flex flex-wrap gap-4">
                        {data.links.map((link, i) => (
                            <a
                                key={i}
                                href={`https://${link}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-[rgb(115,40,40)] text-white font-bold rounded-full hover:bg-[rgb(110,35,35)] transition-colors shadow-sm"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </OfficeContentSection>

                {/* Office Bearers */}
                <OfficeContentSection
                    sectionId="office_bearers"
                    title="Staff"
                    icon="👥"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.office_bearers.map((member, i) => (
                            <StaffCard key={i} staff={member} />
                        ))}
                    </div>
                </OfficeContentSection>
            </div>
        </OfficePageTemplate>
    );
};

export default EDCell;
