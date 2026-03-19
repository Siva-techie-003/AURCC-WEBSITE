import React, { useState,useEffect } from 'react';
import OfficePageTemplate from '../components/OfficePageTemplate';
import OfficeContentSection from '../components/OfficeContentSection';
import StaffCard from '../components/StaffCard';
import './ExamCell.css';

const ExamCell = () => {
    const [data, setData] = useState(null);

    const sections = [
        { key: 'about', label: 'About' },
        { key: 'services', label: 'Services' },
        { key: 'staff', label: 'Staff' }
    ];

    useEffect(() => {
  fetch("/api/exam-cell")
    .then(res => res.json())
    .then(json => {
      console.log("API DATA:", json);
      setData(json);
    })
    .catch(err => console.error("API ERROR:", err));
}, []);
    
    if (!data) {
      return <p className="text-center mt-20">Loading...</p>;
    } 

    return (
                  <section className="pt-[100px] sm:pt-[100px] lg:pt-[50px]">

        <OfficePageTemplate
            officeName="EXAM CELL"
            heroSubtitle="Ensuring smooth conduct and transparency in university examinations"
            sections={sections}
            contactEmail="examcell@aurcc.ac.in"
        >
            <div className="content space-y-16">
                {/* About */}
<section id="about">
                    <div className="text-center mb-8 ">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[rgb(100,25,25)] uppercase mb-2">About the Exam Cell</h2>
                        <div className="flex justify-center ">
                            <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
                        </div>
                    </div>

<div className="bg-white rounded-2xl shadow-sm border border-[rgb(220,140,140)] p-6 lg:p-8">

<p className="text-base lg:text-lg xl:text-xl font-medium text-gray-800 text-left leading-relaxed">
{data.description}
</p>

</div>

</section>

                {/* Services */}
                <OfficeContentSection
                    sectionId="services"
                    title="Services"
                >
                    <div className="mb-8 text-base lg:text-lg text-gray-700 text-left">We provide comprehensive support for all examination-related processes, ensuring a smooth experience for students and staff.</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.isArray(data?.services) &&
  data.services.map((service, index)=> (
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
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.isArray(data?.office_bearers) &&
  data.office_bearers.map((bearer, index) => (
                            <StaffCard
                                key={index}
                                staff={{
                                    ...bearer,
                                    email: bearer.email_id || bearer.email,
                                    image: bearer.image // Support different field names
                                }}
                            />
                        ))}
                    </div>
                </OfficeContentSection>
            </div>
        </OfficePageTemplate>
        </section>
    );
};

export default ExamCell;
