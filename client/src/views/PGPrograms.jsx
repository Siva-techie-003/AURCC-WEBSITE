import React,{useEffect,useState, useRef} from 'react';
import ProgramCard from '../components/ProgramCard';
import './ProgramsOffered.css';


const PGPrograms = () => {
    const sectionsRef = useRef(null);

    const scrollToSection = (ref) => {
        const offset = 220; // Header + Sticky Nav height
        const elementPosition = ref.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    const navSections = [
        { name: 'PG Programmes', ref: sectionsRef }
    ];

    const iconMap = {
        'COMPUTER SCIENCE': '/public/icons/cse.png',
        'ELECTRONICS': '/public/icons/ece.png',
        'ELECTRICAL': '/public/icons/eee.png',
        'MECHANICAL': '/public/icons/mech.png',
        'ARTIFICIAL INTELLIGENCE': '/public/icons/ai.png',
        'VLSI': '/public/icons/vlsi.png',
        'MBA': '/public/icons/mba.png',
        'BUSINESS ANALYTICS': '/public/icons/business_analytics.png',
        'default': '/public/icons/mba.png'
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

    // ✅ MBA FIRST
    if (
        course.includes('BUSINESS ADMINISTRATION') ||
        course.includes('BUSINESS ANALYTICS') ||
        course.includes('MBA')
    ) {
        return '/departments/mba';
    }
        if (course.includes('VLSI')) return '/departments/ece';
        if (course.includes('COMPUTER')) return '/departments/cse';
        if (course.includes('ELECTRONICS')) return '/departments/ece';
        if (course.includes('ELECTRICAL')) return '/departments/eee';
        if (course.includes('MECHANICAL')) return '/departments/mech';
        if (course.includes('ARTIFICIAL INTELLIGENCE')) return '/departments/cse';
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

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/programs")
      .then(res => res.json())
      .then(result => setData(result))
      .catch(err => console.error(err));
  }, []);

  if (!data) {
  return <p className="text-center mt-20">Loading programme...</p>;
}

    return (
        <div className="flex-grow bg-white min-h-screen text-left pt-[116px] sm:pt-[126px] lg:pt-[136px]">
            {/* Hero Section - No Gap with Header */}
            <section className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[55vh] flex items-center justify-center overflow-hidden -mt-[116px] sm:-mt-[126px] lg:-mt-[136px]">

    {/* Background Image */}
    <img
        src="/programsoffered.webp"
        alt="Postgraduate Programs"
        className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Soft Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>

    {/* Glass Card */}
    <div className="relative z-10 mx-4 px-5 sm:px-8 py-4 sm:py-6 
                    max-w-3xl w-full text-center
                    bg-[rgb(200,20,20)]/30 backdrop-blur-xl
                    border border-white/30
                    rounded-2xl
                    shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                    transition-all duration-500
                    mt-[116px] sm:mt-[126px] lg:mt-[136px]">

        <h1 className="text-xl sm:text-2xl lg:text-3xl 
                       font-black text-white 
                       tracking-tight mb-2 uppercase">
            Postgraduate Programme
        </h1>

        <div className="w-16 h-1 bg-yellow-400 mx-auto mb-3 rounded-full"></div>

        <p className="text-xs sm:text-sm lg:text-base 
                      text-gray-100 font-medium 
                      leading-relaxed max-w-2xl mx-auto">
            Advance your expertise and lead innovation with our specialized PG and management programme.
        </p>

    </div>

</section>

            <main className="max-w-7xl mx-auto py-8 sm:py-16 px-4 space-y-24">

                {/* PG Section */}
                <section ref={sectionsRef}>
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

export default PGPrograms;
