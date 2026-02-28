import React, { useState } from 'react';
import data from '../assets/office of affiliation.json';
import OfficePageTemplate from '../components/OfficePageTemplate';
import OfficeContentSection from '../components/OfficeContentSection';
import StaffCard from '../components/StaffCard';
import './OfficeOfAffiliation.css';

const OfficeOfAffiliation = () => {
    const [currentSection, setCurrentSection] = useState('description');

    const sections = [
        { key: 'description', label: 'Description' },
        { key: 'staff', label: 'Staff' }
    ];

    const handleSectionChange = (sectionKey) => {
        setCurrentSection(sectionKey);
    };

    return (
        <OfficePageTemplate
            officeName="OFFICE OF AFFILIATION"
            heroSubtitle="Facilitating Affiliation & University Liaison"
            sections={sections}
            contactEmail={data.contact_details?.email || 'affiliation@aurcc.ac.in'}
            onSectionChange={handleSectionChange}
        >
            <div className="content">
                {/* Description */}
                <OfficeContentSection
                    sectionId="description"
                    title="About the Office"
                    icon="ℹ️"
                >
                    <div className="max-w-4xl mx-auto">
                        <p className="text-base lg:text-lg xl:text-xl font-medium text-gray-800 text-left leading-relaxed">{data.description['About Office of Affiliation and its activities']}</p>
                    </div>
                </OfficeContentSection>

                {/* Staff */}
                <OfficeContentSection
                    sectionId="staff"
                    title="Staff"
                    icon="👥"
                >
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

export default OfficeOfAffiliation;
