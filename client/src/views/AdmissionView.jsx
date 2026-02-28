import React, { useState } from 'react';
import admissionData from '../assets/admission.json';
import OfficePageTemplate from '../components/OfficePageTemplate';
import OfficeContentSection from '../components/OfficeContentSection';
import StaffCard from '../components/StaffCard';
import './AdmissionView.css';

const AdmissionView = () => {
    const data = admissionData[0];
    const flowchartImage = '/admission-flowchart.webp';
    const [currentSection, setCurrentSection] = useState('overview');

    const sections = [
        { key: 'overview', label: 'Overview' },
        { key: 'courses_offered', label: 'Courses Offered' },
        { key: 'eligibility', label: 'Eligibility Criteria' },
        { key: 'staff', label: 'Staff' }
    ];

    const handleSectionChange = (sectionKey) => {
        setCurrentSection(sectionKey);
    };

    return (
        <OfficePageTemplate
            officeName="Admission"
            heroSubtitle="Join our vibrant campus and shape your future with us!"
            sections={sections}
            contactEmail="admissions@aurcc.ac.in"
            onSectionChange={handleSectionChange}
        >
            <div className="content">
                {/* Overview */}
                <OfficeContentSection
                    sectionId="overview"
                    title="Overview"
                    icon="ℹ️"
                >
                    <p className="text-base lg:text-lg xl:text-xl font-medium text-gray-800 mb-4 sm:mb-6">{data.description.Overview}</p>
                    <p className="text-base lg:text-lg xl:text-xl font-medium text-gray-800 mb-6 sm:mb-8">{data.description['Admissions at our Regional Campus']}</p>
                    <div className="flex justify-center">
                        <img src={flowchartImage} alt="Admission Flowchart" className="w-full md:w-3/4 lg:w-1/2 rounded shadow-lg" />
                    </div>
                </OfficeContentSection>

                {/* Courses Offered */}
                <OfficeContentSection
                    sectionId="courses_offered"
                    title="Courses Offered"
                    icon="📚"
                >
                    {Object.entries(data.courses_offered).map(([category, programs]) => (
                        <div key={category} className="mb-6 sm:mb-8 text-left">
                            <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold text-[rgb(110,35,35)] mb-3">{category}</h3>
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full border border-gray-300 text-left mb-4 rounded-xl overflow-hidden shadow-sm">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="border px-3 sm:px-4 py-3 text-xs lg:text-sm uppercase tracking-wider font-bold text-gray-700">S.No</th>
                                            <th className="border px-3 sm:px-4 py-3 text-xs lg:text-sm uppercase tracking-wider font-bold text-gray-700">Courses Offered</th>
                                            <th className="border px-3 sm:px-4 py-3 text-xs lg:text-sm uppercase tracking-wider font-bold text-gray-700">Intake</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        {(Array.isArray(programs) ? programs : []).map((course) => (
                                            <tr key={course['S.No']} className="hover:bg-gray-50 transition-colors">
                                                <td className="border px-3 sm:px-4 py-3 text-center text-sm lg:text-base text-gray-600">{course['S.No']}</td>
                                                <td className="border px-3 sm:px-4 py-3 text-sm lg:text-base text-gray-800">{course['Courses Offered']}</td>
                                                <td className="border px-3 sm:px-4 py-3 text-center text-sm lg:text-base text-gray-600 font-semibold">{course.Intake}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </OfficeContentSection>

                {/* Eligibility Criteria */}
                <OfficeContentSection
                    sectionId="eligibility"
                    title="Eligibility Criteria"
                    icon="✅"
                >
                    {Object.entries(data.eligibility_criteria).map(([program, text]) => (
                        <div key={program} className="mb-4 sm:mb-6 text-left">
                            <h3 className="text-base lg:text-lg xl:text-xl font-semibold text-[rgb(110,35,35)] mb-2">{program}</h3>
                            <p className="text-sm lg:text-base text-gray-800 leading-relaxed bg-[rgb(220,140,140)]/50 p-4 rounded-lg border border-[rgb(200,120,120)]">{text}</p>
                        </div>
                    ))}
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

export default AdmissionView;
