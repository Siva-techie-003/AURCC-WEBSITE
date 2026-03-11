import React, { useState, useEffect } from 'react';
import OfficePageTemplate from '../components/OfficePageTemplate';
import OfficeContentSection from '../components/OfficeContentSection';
import StaffCard from '../components/StaffCard';
import './Pace.css';

const Pace = () => {
    const [data, setData] = useState(null);
    const sections = [
        { key: 'description', label: 'Description' },
        { key: 'staff', label: 'Staff' }
    ];

    useEffect(() => {
        fetch('/api/pace')
            .then(res => res.json())
            .then(res => {
                if (Array.isArray(res)) {
                    setData(res[0]);
                } else {
                    setData(res);
                }
            })
            .catch(err => console.error('PACE fetch error:', err));
    }, []);

    if (!data) {
        return <p className="text-center mt-20">Loading...</p>;
    }

    return (
        <OfficePageTemplate
            officeName="PACE CELL"
            heroSubtitle="Empowering students for competitive excellence"
            sections={sections}
            contactEmail={data.contact?.email || 'pacecell@aurcc.ac.in'}
        >
            <div className="text-left space-y-16">
                {/* Description Section */}
                <div id="description" className="scroll-mt-32">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 font-serif uppercase mb-2">About the PACE Cell</h2>
                        <div className="flex justify-center">
                            <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
                        </div>
                    </div>
                    <div className="max-w-6xl mx-auto space-y-6 rounded-2xl p-8 border border-[rgb(200,120,120)]">
                        <p className="text-base lg:text-lg xl:text-xl font-medium text-[rgb(100,25,25)] border-l-4 border-[rgb(115,40,40)] pl-4 bg-white py-4 rounded-r-2xl">
                            <span className="font-black">PACE (Placement and Competitive Exam) Cell</span> at Anna University Regional Campus Coimbatore is your dedicated partner for success in government and competitive exams.
                        </p>
                        <p className="text-base text-gray-700 font-bold italic text-center pt-4">
                            "Whether you're aiming for a government job or seeking to improve your competitive exam performance,<br></br> the PACE Cell is here to guide you every step of the way."
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ul className="space-y-4">
                                {[
                                    { title: 'Expert Guidance', desc: 'Access to experienced mentors and subject matter experts for personalized support.', icon: '' },
                                    { title: 'Resources', desc: 'Books, study materials, and online tools for TNPSC, UPSC, Banking, SSC, Railway, and more.', icon: '' }
                                ].map((item, i) => (
                                   <li key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                        <div className="w-full">
                                            <h4 className="font-bold text-gray-900 text-center">{item.title}</h4>
                                            <p className="text-sm text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-4 ">
                                {[
                                    { title: 'Mock Tests', desc: 'Regular training programs, workshops, and practice exams to boost your confidence.', icon: '' },
                                    { title: 'Inclusive', desc: 'Support for students from all departments, ensuring everyone has the opportunity to excel.', icon: '' }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                        <div className="w-full">
                                            <h4 className="font-bold text-gray-900 text-center">{item.title}</h4>
                                            <p className="text-sm text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Staff Section */}
                <div id="staff" className="scroll-mt-32">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 font-serif uppercase mb-2">Our Team</h2>
                        <div className="flex justify-center">
                            <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
                        </div>
                    </div>
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                            {(Array.isArray(data?.staff) ? data.staff : []).map((staff, i) => (
                                <StaffCard key={i} staff={{ ...staff, image: staff.image }} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </OfficePageTemplate>
    );
};

export default Pace;
