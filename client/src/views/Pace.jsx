import React, { useState } from 'react';
import paceData from '../assets/pace.json';
import OfficePageTemplate from '../components/OfficePageTemplate';
import OfficeContentSection from '../components/OfficeContentSection';
import StaffCard from '../components/StaffCard';
import './Pace.css';

const Pace = () => {
    const [currentSection, setCurrentSection] = useState('description');
    const sections = [
        { key: 'description', label: 'Description' },
        { key: 'staff', label: 'Staff' }
    ];

    return (
        <OfficePageTemplate
            officeName="PACE CELL"
            heroSubtitle="Empowering students for competitive excellence"
            sections={sections}
            contactEmail={paceData.contact?.email || 'pacecell@aurcc.ac.in'}
            onSectionChange={setCurrentSection}
        >
            <div className="text-left">
                {/* Description Section */}
                <OfficeContentSection
                    sectionId="description"
                    title="About the PACE Cell"
                    icon="🧭"
                >
                    <div className="space-y-6">
                        <p className="text-base lg:text-lg xl:text-xl font-medium text-[rgb(100,25,25)] border-l-4 border-[rgb(115,40,40)] pl-4 bg-white py-4 rounded-r-2xl">
                            <span className="font-black">PACE (Placement and Competitive Exam) Cell</span> at Anna University Regional Campus Coimbatore is your dedicated partner for success in government and competitive exams.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ul className="space-y-4">
                                {[
                                    { title: 'Expert Guidance', desc: 'Access to experienced mentors and subject matter experts for personalized support.', icon: '👨‍🏫' },
                                    { title: 'Resources', desc: 'Books, study materials, and online tools for TNPSC, UPSC, Banking, SSC, Railway, and more.', icon: '📚' }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                        <span className="text-2xl">{item.icon}</span>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{item.title}</h4>
                                            <p className="text-sm text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-4">
                                {[
                                    { title: 'Mock Tests', desc: 'Regular training programs, workshops, and practice exams to boost your confidence.', icon: '📝' },
                                    { title: 'Inclusive', desc: 'Support for students from all departments, ensuring everyone has the opportunity to excel.', icon: '🤝' }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                        <span className="text-2xl">{item.icon}</span>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{item.title}</h4>
                                            <p className="text-sm text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="text-base text-gray-700 font-medium italic text-center pt-4">
                            "Whether you're aiming for a government job or seeking to improve your competitive exam performance, the PACE Cell is here to guide you every step of the way."
                        </p>
                    </div>
                </OfficeContentSection>

                {/* Staff Section */}
                <OfficeContentSection
                    sectionId="staff"
                    title="Our Team"
                    icon="👥"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {(Array.isArray(paceData?.staff) ? paceData.staff : []).map((staff, i) => (
                            <StaffCard key={i} staff={staff} />
                        ))}
                    </div>
                </OfficeContentSection>
            </div>
        </OfficePageTemplate>
    );
};

export default Pace;
