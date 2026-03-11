import React, { useState,useEffect } from 'react';
import OfficePageTemplate from '../components/OfficePageTemplate';
import OfficeContentSection from '../components/OfficeContentSection';
import StaffCard from '../components/StaffCard';
import './EDCell.css';

const EDCell = () => {
        const [data, setData] = useState(null);

    const sections = [
        { key: 'description', label: 'Description' },
        { key: 'objectives', label: 'Objectives' },
        { key: 'key_activities', label: 'Key Activities' },
        { key: 'mou', label: 'MOUs' },
        { key: 'links', label: 'Links' },
        { key: 'office_bearers', label: 'Staff' },
    ];

  useEffect(() => {
  fetch("/api/ed-cell")
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.error(err));
}, []);

if (!data) {
  return <p className="text-center mt-20">Loading...</p>;
}
    return (
        <OfficePageTemplate
            officeName="Entrepreneurship Development Cell"
            heroSubtitle="Empowering innovation, startups, and entrepreneurial spirit"
            sections={sections}
            contactEmail="edcell@aurcc.ac.in"
        >
            <div className="content space-y-16">

                {/* Description */}
                <OfficeContentSection
                    sectionId="description"
                    title="Description"
                >
                    <div className="bg-[rgb(220,140,140)] p-6 rounded-2xl border border-[rgb(200,120,120)] shadow-sm text-left">
                        <p className="text-base lg:text-lg xl:text-xl font-medium text-gray-800 leading-relaxed italic">
                            The Entrepreneurship Development Cell (ED Cell) promotes innovation, creativity, and entrepreneurial thinking among students. It provides a platform for aspiring entrepreneurs to develop ideas, gain mentorship, and understand the process of building successful ventures. Through workshops, seminars, industry interactions, and startup support activities, the ED Cell encourages students to transform their innovative concepts into viable business opportunities while fostering leadership, problem-solving skills, and a strong entrepreneurial mindset.
                        </p>
                    </div>
                </OfficeContentSection>


                {/* Objectives + MOUs + Key Activities */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                    {/* Objectives */}
                    <OfficeContentSection
                        sectionId="objectives"
                        title="Objectives"
                    >
                        <ul className="list-disc pl-5 space-y-3 text-base lg:text-lg xl:text-xl text-gray-800 text-left">
                            {data.description.objectives.map((objective, i) => (
                                <li key={i}>{objective}</li>
                            ))}
                        </ul>
                    </OfficeContentSection>


                    {/* Key Activities (spans full height) */}
                    <div className="lg:row-span-2">
                        <OfficeContentSection
                            sectionId="key_activities"
                            title="Key Activities"
                        >
                            <div className="grid grid-cols-1 gap-6">
                                {data.description.key_activities.map((activity, i) => (
                                    <div
                                        key={i}
                                        className="bg-white rounded-xl p-6 m-2.5 shadow-sm border border-[rgb(220,140,140)] hover:shadow-md transition-all text-left"
                                    >
                                        <h4 className="text-lg lg:text-xl font-bold text-[rgb(100,25,25)] mb-3">
                                            {activity.name}
                                        </h4>

                                        <div className="flex items-start gap-2 text-sm text-gray-600 mb-2">
                                            <span className="font-bold text-gray-800">Location:</span>
                                            <span>{activity.location}</span>
                                        </div>

                                        <div className="text-sm lg:text-base text-gray-700">
                                            <span className="font-bold text-gray-800">Details:</span>
                                            <span className="mt-1"> {activity.details}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </OfficeContentSection>
                    </div>


                    {/* MOUs */}
                    <OfficeContentSection
                        sectionId="mou"
                        title="MOUs"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {data.MOU.map((mou, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100 text-left"
                                >
                                    <span className="text-base font-medium text-gray-800">{mou}</span>
                                </div>
                            ))}
                        </div>
                    </OfficeContentSection>

                </div>


                {/* Staff */}
                <OfficeContentSection
                    sectionId="office_bearers"
                    title="Staff"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.office_bearers.map((member, i) => (
                            <StaffCard key={i} staff={{...member,image: member.image}} />
                        ))}
                    </div>
                </OfficeContentSection>

            </div>
        </OfficePageTemplate>
    );
};

export default EDCell;