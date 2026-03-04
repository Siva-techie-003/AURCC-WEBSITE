import React, { useState,useEffect } from 'react';
import OfficePageTemplate from '../components/OfficePageTemplate';
import OfficeContentSection from '../components/OfficeContentSection';
import StaffCard from '../components/StaffCard';
import './OfficeOfAffiliation.css';

const OfficeOfAffiliation = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
    fetch("http://localhost:5000/api/office-affiliation")
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error("Zonal fetch error:", err));
  }, []);

    const sections = [
        { key: 'description', label: 'Description' },
        { key: 'staff', label: 'Staff' }
    ];

    if (!data) {
    return <p className="text-center mt-20">Loading...</p>;
  }

    return (
        <OfficePageTemplate
            officeName="OFFICE OF AFFILIATION"
            heroSubtitle="Facilitating Affiliation & University Liaison"
            sections={sections}
            contactEmail="affiliation@aurcc.ac.in"
        >
            <div className="content">
                {/* Description */}
                <OfficeContentSection
                    sectionId="description"
                    title="About the Office"
                >
                    <div className="max-w-4xl mx-auto">
                        <p className="text-base lg:text-lg xl:text-xl font-medium text-gray-800 text-left leading-relaxed">{data.description['About Office of Affiliation and its activities']}</p>
                    </div>
                </OfficeContentSection>

                {/* Staff */}
                <OfficeContentSection
                    sectionId="staff"
                    title="Staff"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {(Array.isArray(data?.staff) ? data.staff : []).map((staff, index) => (
                            <StaffCard key={index} staff={{...staff,image: staff.image}} />
                        ))}
                    </div>
                </OfficeContentSection>
            </div>
        </OfficePageTemplate>
    );
};

export default OfficeOfAffiliation;
