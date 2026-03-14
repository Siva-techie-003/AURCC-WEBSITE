import React, { useState, useEffect } from 'react';
import OfficePageTemplate from '../components/OfficePageTemplate';
import StaffCard from '../components/StaffCard';
import './OfficeOfAffiliation.css';

const OfficeOfAffiliation = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/affiliation")
            .then(res => res.json())
            .then((result) => {
                setData(result);
                setLoading(false);
            })
            .catch(err => {
                console.error("Affiliation fetch error:", err);
                setLoading(false);
            });
    }, []);


    const sections = [
        { key: 'description', label: 'Description' },
        { key: 'staff', label: 'Staff' }
    ];

       /* Show loading until data arrives */
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-xl font-semibold">Loading...</p>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-xl font-semibold">No data available</p>
            </div>
        );
    }

    return (
        <OfficePageTemplate
            officeName="OFFICE OF AFFILIATION"
            heroSubtitle="Facilitating Affiliation & University Liaison"
            sections={sections}
            contactEmail="affiliation@aurcc.ac.in"
        >
            <div className="content space-y-16">
                {/* Description */}
                <div id="description" className="scroll-mt-32">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 font-serif uppercase mb-2">About the Office</h2>
                        <div className="flex justify-center">
                            <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
                        </div>
                    </div>
                    <div className="max-w-4xl mx-auto p-6 rounded-2xl border border-[rgb(200,120,120)]">
                        <p className="text-base lg:text-lg xl:text-xl font-medium text-gray-800 text-left leading-relaxed">{data.description['About Office of Affiliation and its activities']}</p>
                    </div>
                </div>

                {/* Staff */}
                <div id="staff" className="scroll-mt-32">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 font-serif uppercase mb-2">Staff</h2>
                        <div className="flex justify-center">
                            <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
                        </div>
                    </div>
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                            {(Array.isArray(data?.staff) ? data.staff : []).map((staff, index) => (
                                <StaffCard key={index} staff={{ ...staff, image: staff.image }} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </OfficePageTemplate>
    );
};

export default OfficeOfAffiliation;
