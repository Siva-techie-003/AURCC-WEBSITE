import React, { useState, useMemo, useEffect } from 'react';
import OfficePageTemplate from '../components/OfficePageTemplate';
import OfficeContentSection from '../components/OfficeContentSection';
import StaffCard from '../components/StaffCard';
import './DGATE.css';

const projectIcons = {
    DLAPP: '',
    KIOSK: '',
    'Cloud Based IoT Device for Virtually Opening the Gym': '',
    'AU-SMART': '',
    'Hostel Leave App': '',
    'Virtual Campus Experience': '',
};

const DGATE = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api/dgate')
            .then(res => res.json())
            .then(setData)
            .catch(console.error);
    }, []);

    const sections = [
        { key: 'overview', label: 'Overview' },
        { key: 'activities', label: 'Activities' },
        { key: 'projects', label: 'Projects' },
        { key: 'hackathon', label: 'Hackathon' },
        { key: 'staff', label: 'Staff' },
    ];

    /* ✅ SAFE activity highlights */
    const activityHighlights = useMemo(() => {
        if (!data?.description?.activities) return [];

        const act = data.description.activities;
        const highlights = [];

        act.curricular_activities?.forEach(a =>
            highlights.push(`${a.date}: ${a.name}`)
        );
        act.social_responsibilities?.forEach(a =>
            highlights.push(`${a.date}: ${a.event}`)
        );
        act.internal_activities?.forEach(a =>
            highlights.push(`Internal: ${a}`)
        );
        act.external_activities?.forEach(a =>
            highlights.push(`External: ${a}`)
        );

        return highlights;
    }, [data]);

    /* ✅ SAFE projects */
    const projectCards = useMemo(() => {
        if (!data?.description) return [];

        const completed =
            data.description.projects_completed?.map(p => ({
                name: p.name,
                description: p.description,
                icon: projectIcons[p.name] || '',
                status: 'Completed',
            })) || [];

        const ongoing =
            data.description.ongoing_projects?.map(name => ({
                name,
                description: '',
                icon: projectIcons[name] || '',
                status: 'Ongoing',
            })) || [];

        return [...completed, ...ongoing];
    }, [data]);

    /* ✅ LOADING STATE */
    if (!data) {
        return <p className="text-center mt-20">Loading...</p>;
    }

    return (
        <OfficePageTemplate
            officeName="DGATE CELL"
            heroSubtitle="Join our vibrant campus and shape your future with us!"
            sections={sections}
            contactEmail="dgatecell@aurcc.ac.in"
        >
            <div className="content space-y-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Overview */}
                        <div id="overview" className="scroll-mt-32 flex flex-col">
                            <div className="text-center lg:text-left mb-6">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 font-serif uppercase mb-2">Overview</h2>
                                <div className="flex justify-center lg:justify-start">
                                    <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
                                </div>
                            </div>
                            <div className="flex-grow rounded-2xl border border-[rgb(200,120,120)] p-8 bg-white shadow-sm">
                                <p className="text-sm lg:text-base xl:text-lg leading-relaxed text-gray-800 text-left">
                                    {data.description.DGATE}
                                </p>
                            </div>
                        </div>

                        {/* Activities */}
                        <div id="activities" className="scroll-mt-32 flex flex-col">
                            <div className="text-center lg:text-left mb-6">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 font-serif uppercase mb-2">Activities</h2>
                                <div className="flex justify-center lg:justify-start">
                                    <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
                                </div>
                            </div>
                            <div className="flex-grow rounded-2xl border border-[rgb(200,120,120)] p-8 bg-white shadow-sm overflow-hidden min-h-[250px] relative">
                                <ul className="notice-ticker absolute left-0 right-0 px-8 animate-vertical-scroll hover:animation-paused">
                                    {activityHighlights.concat(activityHighlights).map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 py-4 text-[rgb(100,25,25)] font-semibold text-sm lg:text-base border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                                            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[rgb(220,140,140)] shadow-sm animate-pulse flex-shrink-0"></span>
                                            <span className="text-left">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Projects */}
                <div id="projects" className="scroll-mt-32">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 font-serif uppercase mb-2">Projects</h2>
                        <div className="flex justify-center">
                            <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
                        </div>
                    </div>
                    <div className="max-w-6xl mx-auto">
                        <div className="overflow-x-auto no-scrollbar">
                            <div className="flex space-x-6 min-w-max py-4">
                                {projectCards.map((project, idx) => (
                                    <div key={idx} className="project-card rounded-xl p-8 w-80 flex flex-col items-start transition-all duration-300 cursor-pointer relative group border border-gray-100">
                                        <div className={`mb-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${project.status === 'Completed' ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-amber-50 text-amber-600 border border-amber-100'}`}>
                                            {project.status}
                                        </div>
                                        <h3 className="font-bold text-lg lg:text-xl text-[rgb(100,25,25)] mb-3 text-left leading-tight group-hover:text-[rgb(120,30,30)] transition-colors">
                                            {project.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 line-clamp-4 text-left leading-relaxed font-medium">
                                            {project.description}
                                        </p>
                                        <div className="mt-8 flex items-center text-[rgb(100,25,25)] font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            View Details
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
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
                            {data.staff_members.map((staff, index) => (
                                <StaffCard
                                    key={index}
                                    staff={{
                                        ...staff,
                                        email: staff.email_id,
                                        image: staff.image
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Hackathon */}
            <div id="hackathon" className="scroll-mt-32">
                <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 font-serif uppercase mb-2">Hackathon Participation</h2>
                    <div className="flex justify-center">
                        <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.description.participation_in_hackathon.map((participation, i) => (
                            <div
                                key={i}
                                className="bg-[rgba(255, 255, 255, 1)]/50 p-6 rounded-xl shadow-sm border border-[rgb(200,120,120)] transition-all hover:bg-white hover:shadow-md text-left"
                            >
                                <h4 className="text-base lg:text-lg font-bold text-[rgb(100,25,25)] mb-2">{participation.project}</h4>
                                <p className="text-sm lg:text-base text-gray-800 leading-relaxed">{participation.achievement}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </OfficePageTemplate>
    );
};

export default DGATE;
