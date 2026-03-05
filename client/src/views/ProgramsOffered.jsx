import React from 'react';
import ProgramCard from '../components/ProgramCard';
import data from '../assets/programs_offered.json';
import './ProgramsOffered.css';
import cseIcon from '../assets/icons/cse.png';
import mechIcon from '../assets/icons/mech.png';
import eceIcon from '../assets/icons/ece.png';
import vlsiIcon from '../assets/icons/vlsi.png';
import aiIcon from '../assets/icons/ai.png';
import mbaIcon from '../assets/icons/mba.png';
import business_analyticsIcon from '../assets/icons/business_analytics.png';
import eeeIcon from '../assets/icons/eee.png';

const ProgramsOffered = () => {

    const iconMap = {
        'COMPUTER SCIENCE': cseIcon,
        'ELECTRONICS': eceIcon,
        'ELECTRICAL': '⚡',
        'MECHANICAL': mechIcon,
        'ARTIFICIAL INTELLIGENCE': aiIcon,
        'VLSI': vlsiIcon,
        'MBA': mbaIcon,
        'BUSINESS ANALYTICS': business_analyticsIcon,
        'default': mbaIcon
    };

    const getIcon = (course) => {
        course = course.toUpperCase();
        if (course.includes('VLSI')) return iconMap['VLSI'];
        if (course.includes('COMPUTER')) return iconMap['COMPUTER SCIENCE'];
        if (course.includes('ELECTRONICS') && !course.includes('ELECTRICAL')) return iconMap['ELECTRONICS'];
        if (course.includes('ELECTRICAL')) return iconMap['ELECTRICAL'];
        if (course.includes('MECHANICAL')) return iconMap['MECHANICAL'];
        if (course.includes('ARTIFICIAL INTELLIGENCE')) return iconMap['ARTIFICIAL INTELLIGENCE'];
        if (course.includes('BUSINESS ANALYTICS')) return iconMap['BUSINESS ANALYTICS'];
        if (course.includes('MBA')) return iconMap['MBA'];
        return iconMap.default;
    };

    const getDescription = (course) => {
        course = course.toUpperCase();
        if (course.includes('VLSI')) return 'Specialized in chip design, microelectronics, and hardware innovation.';
        if (course.includes('COMPUTER')) return 'Learn cutting-edge technologies and software development.';
        if (course.includes('ELECTRONICS') && !course.includes('ELECTRICAL')) return 'Explore communication, embedded systems, and VLSI.';
        if (course.includes('ELECTRICAL')) return 'Power systems, control, and electrical machines.';
        if (course.includes('MECHANICAL')) return 'Study mechanics, thermodynamics, and manufacturing.';
        if (course.includes('ARTIFICIAL INTELLIGENCE')) return 'Machine learning, data analytics, and AI.';
        if (course.includes('BUSINESS ANALYTICS')) return 'Business intelligence, analytics, and data-driven management.';
        if (course.includes('MBA')) return 'Master business administration and leadership.';
        return 'A comprehensive program for future leaders.';
    };

    const getLearnMoreLink = (course) => {
        course = course.toUpperCase();
        if (course.includes('VLSI')) return '/departments/ece';
        if (course.includes('COMPUTER')) return '/departments/cse';
        if (course.includes('ELECTRONICS')) return '/departments/ece';
        if (course.includes('ELECTRICAL')) return '/departments/eee';
        if (course.includes('MECHANICAL')) return '/departments/mech';
        if (course.includes('ARTIFICIAL INTELLIGENCE')) return '/departments/cse';
        if (course.includes('MBA')) return '/departments/mba';
        return '/departments';
    };

    const SectionHeader = ({ title }) => (
        <header className="flex flex-col md:flex-row md:items-end justify-between border-b-4 border-[rgb(100,25,25)] pb-8 mb-12 gap-6">
            <div className="max-w-xl">
                <h2 className="text-2xl lg:text-4xl font-black text-[rgb(90,20,20)] uppercase tracking-tight">
                    {title}
                </h2>
                <div className="h-1.5 w-20  mt-4 rounded-full"></div>
            </div>
        </header>
    );

    return (
        <div className="flex-grow bg-white min-h-screen text-left pt-[120px] sm:pt-[140px] lg:pt-[120px]">

            {/* Hero Section */}
<section className="relative w-full h-56 sm:h-72 md:h-96 lg:h-[50vh] flex items-center justify-center overflow-hidden">

    {/* Background Image */}
    <img
        src="/programsoffered.webp"
        alt="Programs Offered"
        className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Soft Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>

    {/* Glass Card */}
    <div className="relative z-10 mx-4 px-8 sm:px-12 py-8 sm:py-10 
                    max-w-4xl w-full text-center
                    bg-[rgb(200,20,20)]/30 backdrop-blur-xl
                    border border-white/30
                    rounded-3xl
                    shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                    transition-all duration-500">

        <h1 className="text-3xl sm:text-5xl lg:text-6xl 
                       font-black text-white 
                       tracking-tight mb-4">
            Academic Programs
        </h1>

        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-5 rounded-full"></div>

        <p className="text-sm sm:text-lg lg:text-xl 
                      text-gray-100 font-medium 
                      leading-relaxed max-w-2xl mx-auto">
            Empowering the next generation of engineers and management professionals.
        </p>

    </div>

</section>

            <main className="max-w-7xl mx-auto py-16 px-4 space-y-24">

                {/* UG Section */}
                <section>
                    <SectionHeader title="Undergraduate Excellence" />

                    <div
                        className="grid gap-10 justify-center
                                   [grid-template-columns:repeat(auto-fit,minmax(320px,320px))]
                                   max-w-[1100px] mx-auto"
                    >
                        {(Array.isArray(data?.['UG programmes']) ? data['UG programmes'] : []).map((programme, idx) => (
                            <ProgramCard
                                key={`ug-${idx}`}
                                title={programme['Courses Offered']}
                                intake={programme['Intake']}
                                icon={getIcon(programme['Courses Offered'])}
                                description={getDescription(programme['Courses Offered'])}
                                learnMoreLink={getLearnMoreLink(programme['Courses Offered'])}
                            />
                        ))}
                    </div>
                </section>

                {/* PG Section */}
                <section>
                    <SectionHeader title="Postgraduate Mastery" />

                    <div
                        className="grid gap-10 justify-center
                                   [grid-template-columns:repeat(auto-fit,minmax(320px,320px))]
                                   max-w-[1100px] mx-auto"
                    >
                        {(Array.isArray(data?.['PG programmes']) ? data['PG programmes'] : []).map((programme, idx) => (
                            <ProgramCard
                                key={`pg-${idx}`}
                                title={programme['Courses Offered']}
                                intake={programme['Intake']}
                                icon={getIcon(programme['Courses Offered'])}
                                description={getDescription(programme['Courses Offered'])}
                                learnMoreLink={getLearnMoreLink(programme['Courses Offered'])}
                                department={programme['Department']}
                            />
                        ))}
                    </div>
                </section>

            </main>
        </div>
    );
};

export default ProgramsOffered;
