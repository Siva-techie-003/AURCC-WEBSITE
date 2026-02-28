import React, { useState, useMemo } from 'react';
import data from '../assets/DGATE-cell.json';
import OfficePageTemplate from '../components/OfficePageTemplate';
import OfficeContentSection from '../components/OfficeContentSection';
import StaffCard from '../components/StaffCard';
import './DGATE.css';

const projectIcons = {
    'DLAPP': '📱',
    'KIOSK': '🖥️',
    'Cloud Based IoT Device for Virtually Opening the Gym': '☁️',
    'AU-SMART': '📊',
    'Hostel Leave App': '🏠',
    'Virtual Campus Experience': '🌐',
    'Hostr': '🛏️',
};

const DGATE = () => {
    const [activeSection, setActiveSection] = useState('overview');

    const sections = [
        { key: 'overview', label: 'Overview' },
        { key: 'activities', label: 'Activities' },
        { key: 'projects', label: 'Projects' },
        { key: 'hackathon', label: 'Hackathon' },
        { key: 'staff', label: 'Staff' },
    ];

    const handleSectionChange = (sectionKey) => {
        setActiveSection(sectionKey);
    };

    const activityHighlights = useMemo(() => {
        const highlights = [];
        const act = data.description.activities;
        if (act.curricular_activities) {
            act.curricular_activities.forEach(a => highlights.push(`${a.date}: ${a.name}`));
        }
        if (act.social_responsibilities) {
            act.social_responsibilities.forEach(a => highlights.push(`${a.date}: ${a.event}`));
        }
        if (act.internal_activities) {
            act.internal_activities.forEach(a => highlights.push(`Internal: ${a}`));
        }
        if (act.external_activities) {
            act.external_activities.forEach(a => highlights.push(`External: ${a}`));
        }
        return highlights;
    }, []);

    const projectCards = useMemo(() => {
        const completed = (data.description.projects_completed || []).map(p => ({
            name: p.name,
            description: p.description,
            icon: projectIcons[p.name] || '✅',
            status: 'Completed',
        }));
        const ongoing = (data.description.ongoing_projects || []).map(name => ({
            name,
            description: '',
            icon: projectIcons[name] || '🚧',
            status: 'Ongoing',
        }));
        return [...completed, ...ongoing];
    }, []);

    return (
        <OfficePageTemplate
            officeName="DGATE CELL"
            heroSubtitle="Join our vibrant campus and shape your future with us!"
            sections={sections}
            contactEmail="dgatecell@aurcc.ac.in"
            onSectionChange={handleSectionChange}
        >
            <div className="content">
                {/* Overview */}
                <OfficeContentSection
                    sectionId="overview"
                    title="Overview"
                    icon="ℹ️"
                >
                    <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-gray-800 text-left">{data.description.DGATE}</p>
                </OfficeContentSection>

                {/* Activities */}
                <OfficeContentSection
                    sectionId="activities"
                    title="Activities"
                    icon="🎯"
                >
                    <div className="relative h-24 overflow-hidden mb-2 rounded-xl bg-gray-50 shadow-inner border border-gray-100 group">
                        <ul className="notice-ticker absolute w-full animate-vertical-scroll hover:animation-paused">
                            {activityHighlights.concat(activityHighlights).map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 px-6 py-4 text-[rgb(100,25,25)] font-semibold text-sm lg:text-base h-24">
                                    <span className="inline-block w-3 h-3 rounded-full bg-[rgb(220,140,140)]0 animate-pulse flex-shrink-0"></span>
                                    <span className="text-left">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </OfficeContentSection>

                {/* Projects */}
                <OfficeContentSection
                    sectionId="projects"
                    title="Projects"
                    icon="💡"
                >
                    <div className="overflow-x-auto no-scrollbar">
                        <div className="flex space-x-6 min-w-max py-4">
                            {projectCards.map((project, idx) => (
                                <div key={idx} className="project-card bg-gradient-to-br from-[rgb(115,63,63)] via-white to-[rgb(115,25,25)] rounded-xl shadow-lg p-6 w-72 flex flex-col items-start transition-all duration-300 cursor-pointer relative group">
                                    <div className="text-3xl mb-3">
                                        {project.icon}
                                    </div>
                                    <div className="font-bold text-base lg:text-lg text-[rgb(105,30,30)] mb-2 text-left">{project.name}</div>
                                    <div className="text-xs lg:text-sm text-gray-600 line-clamp-3 text-left">{project.description}</div>
                                    <div className={`absolute top-3 right-3 text-[10px] px-2 py-1 rounded-full font-bold uppercase ${project.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-[rgb(200,120,120)] text-[rgb(110,35,35)]'}`}>
                                        {project.status}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </OfficeContentSection>

                {/* Hackathon */}
                <OfficeContentSection
                    sectionId="hackathon"
                    title="Hackathon Participation"
                    icon="🏆"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.description.participation_in_hackathon.map((participation, i) => (
                            <div
                                key={i}
                                className="bg-[rgb(220,140,140)] p-6 rounded-xl shadow-sm border border-[rgb(200,120,120)] transition-all hover:bg-white hover:shadow-md text-left"
                            >
                                <h4 className="text-base lg:text-lg font-bold text-[rgb(100,25,25)] mb-2">{participation.project}</h4>
                                <p className="text-sm lg:text-base text-gray-700 leading-relaxed">{participation.achievement}</p>
                            </div>
                        ))}
                    </div>
                </OfficeContentSection>

                {/* Staff */}
                <OfficeContentSection
                    sectionId="staff"
                    title="Staff"
                    icon="👥"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.staff_members.map((staff, index) => (
                            <StaffCard
                                key={index}
                                staff={{
                                    ...staff,
                                    email: staff.email_id // Normalize field names to match StaffCard expectations
                                }}
                            />
                        ))}
                    </div>
                </OfficeContentSection>
            </div>
        </OfficePageTemplate>
    );
};

export default DGATE;
