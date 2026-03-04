import React, { useState,useEffect } from 'react';
import OfficePageTemplate from '../components/OfficePageTemplate';
import OfficeContentSection from '../components/OfficeContentSection';
import StaffCard from '../components/StaffCard';
import './Zonal.css';

const Zonal = () => {
        const [data, setData] = useState(null);

    const sections = [
        { key: 'description', label: 'Description' },
        { key: 'zoneList', label: 'Zone List of Colleges' },
        { key: 'staff', label: 'Staff' }
    ];

     useEffect(() => {
    fetch("http://localhost:5000/api/zonal")
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error("Zonal fetch error:", err));
  }, []);
    
          if (!data) {
        return <p className="text-center mt-20">Loading...</p>;
      }

    return (
        <OfficePageTemplate
            officeName="ZONAL OFFICE"
            heroSubtitle="Liaison for Examinations & College Coordination"
            sections={sections}
            contactEmail="zonaloffice@aurcc.ac.in"
        >
            <div className="content space-y-10">
                {/* Description */}
                <OfficeContentSection
                    sectionId="description"
                    title="Description"
                    icon="ℹ️"
                >
                    <div className="bg-white p-6 rounded-2xl border border-[rgb(200,120,120)] shadow-sm text-left">
                        <ul className="list-disc pl-5 space-y-3 text-sm lg:text-base xl:text-lg text-gray-800 leading-relaxed font-medium">
                            {(data.description || []).map((desc, i) => (
                <li key={i}>{desc}</li>
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
                            src={`http://localhost:5000/public/${data.zoneListPDF}`}
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
                        {data.staff.map((staff, i)=> (
                            <StaffCard key={i}  staff={{
                  ...staff,
                  image: staff.image
                }} />
                        ))}
                    </div>
                </OfficeContentSection>
            </div>
        </OfficePageTemplate>
    );
};

export default Zonal;
