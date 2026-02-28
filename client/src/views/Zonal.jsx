import React, { useState } from 'react';
import zonalData from '../assets/zonaloffice.json';
import OfficePageTemplate from '../components/OfficePageTemplate';
import OfficeContentSection from '../components/OfficeContentSection';
import StaffCard from '../components/StaffCard';
import './Zonal.css';

const Zonal = () => {
    const data = zonalData[0];
    const [currentSection, setCurrentSection] = useState('description');

    const sections = [
        { key: 'description', label: 'Description' },
        { key: 'zoneList', label: 'Zone List of Colleges' },
        { key: 'staff', label: 'Staff' }
    ];

    const handleSectionChange = (sectionKey) => {
        setCurrentSection(sectionKey);
    };

    return (
        <OfficePageTemplate
            officeName="ZONAL OFFICE"
            heroSubtitle="Liaison for Examinations & College Coordination"
            sections={sections}
            contactEmail={data.contact_us || 'zonaloffice@aurcc.ac.in'}
            onSectionChange={handleSectionChange}
        >
            <div className="content">
                {/* Description */}
                <OfficeContentSection
                    sectionId="description"
                    title="Description"
                    icon="ℹ️"
                >
                    <div className="bg-white p-6 rounded-2xl border border-[rgb(200,120,120)] shadow-sm text-left">
                        <ul className="list-disc pl-5 space-y-3 text-sm lg:text-base xl:text-lg text-gray-800 leading-relaxed font-medium">
                            {(Array.isArray(data?.description) ? data.description : []).map((desc, index) => (
                                <li key={index}>
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                </OfficeContentSection>

                {/* PDF Section */}
                <OfficeContentSection
                    sectionId="zoneList"
                    title="Zone List of Colleges"
                    icon="🏫"
                >
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                        <iframe
                            src="/zonal-list.pdf"
                            className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]"
                            frameBorder="0"
                            title="Zonal List of Colleges"
                        ></iframe>
                    </div>
                </OfficeContentSection>

                {/* Staff Section */}
                <OfficeContentSection
                    sectionId="staff"
                    title="Staff"
                    icon="👥"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {(Array.isArray(data?.staff) ? data.staff : []).map((staff, index) => (
                            <StaffCard
                                key={index}
                                staff={staff}
                            />
                        ))}
                    </div>
                </OfficeContentSection>
            </div>
        </OfficePageTemplate>
    );
};

export default Zonal;
