import React, { useState, useEffect } from 'react';
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
            <div className="content space-y-16">
                {/* Description */}
                <div id="description" className="scroll-mt-32">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 font-serif uppercase mb-2">Description</h2>
                        <div className="flex justify-center">
                            <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
                        </div>
                    </div>
                    <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl border border-[rgb(200,120,120)] shadow-sm text-left">
                        <ul className="list-disc pl-5 space-y-3 text-sm lg:text-base xl:text-lg text-gray-800 leading-relaxed font-medium">
                            {(data.description || []).map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* PDF Section */}
                <div id="zoneList" className="scroll-mt-32">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 font-serif uppercase mb-2">Zone List of Colleges</h2>
                        <div className="flex justify-center">
                            <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
                        </div>
                    </div>
                    <div className="max-w-6xl mx-auto h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                        <iframe
                            src={`http://localhost:5000/public/${data.zoneListPDF}`}
                            className="w-full h-[500px] sm:h-[500px] md:h-[600px] lg:h-[700px]"
                            frameBorder="0"
                            title="Zonal List of Colleges"
                        ></iframe>
                    </div>
                </div>

                {/* Staff Section */}
                <div id="staff" className="scroll-mt-32">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 font-serif uppercase mb-2">Staff</h2>
                        <div className="flex justify-center">
                            <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
                        </div>
                    </div>
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                            {data.staff.map((staff, i) => (
                                <StaffCard key={i} staff={{
                                    ...staff,
                                    image: staff.image
                                }} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </OfficePageTemplate>
    );
};

export default Zonal;
