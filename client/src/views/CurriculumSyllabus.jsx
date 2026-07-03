import React, { useEffect, useState, useRef } from 'react';
import SyllabusCard from '../components/SyllabusCard';
import './CurriculumSyllabus.css';

const CurriculumSyllabus = () => {

    const [data, setData] = useState(null);
    const ugRef = useRef(null);
    const pgRef = useRef(null);

    useEffect(() => {
        fetch("/api/curriculum-syllabus")
            .then(res => res.json())
            .then(resData => {
                setData(resData);
            })
            .catch(err => console.error(err));
    }, []);

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
        { name: 'UG Curriculum', ref: ugRef },
        { name: 'PG Curriculum', ref: pgRef }
    ];

    const SectionHeader = ({ title }) => (
        <header className="flex flex-col md:flex-row md:items-end justify-between border-b-4 border-[rgb(100,25,25)] pb-8 mb-12 gap-6 animate-fadeInUp">
            <div className="max-w-xl">

                <h2 className="text-2xl lg:text-4xl font-black text-[rgb(90,20,20)] uppercase tracking-tight">
                    {title}
                </h2>


            </div>
        </header>
    );

    return (

        <div className="flex-grow bg-gray-50 min-h-screen text-left pt-[116px] sm:pt-[126px] lg:pt-[136px]">

            {/* HERO - No Gap with Header */}
            <section className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[55vh] flex items-center justify-center overflow-hidden -mt-[116px] sm:-mt-[126px] lg:-mt-[136px]">

                <img
                    src="http://localhost:5000/public/syllabus.webp"
                    alt="Curriculum & Syllabus"
                    className="absolute inset-0 w-full h-full object-cover object-center"
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
               tracking-tight mb-2 uppercase text-center">
                        Curriculum & Syllabus
                    </h1>

                    <div className="w-16 h-1 bg-yellow-400 mx-auto mb-3 rounded-full"></div>

                    <p className="text-xs sm:text-sm lg:text-base 
              text-gray-100 font-medium 
              leading-relaxed max-w-2xl mx-auto">
                        Explore the detailed academic structure for all our programs.
                    </p>

                </div>
            </section>

            {/* Sticky Navigation Pill Bar - Overlapping design */}
            <div className="hidden sm:block sticky top-[116px] sm:top-[126px] lg:top-[136px] z-50 -mt-12 mb-4">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-md shadow-xl rounded-full py-2 px-3 flex justify-center overflow-x-auto no-scrollbar gap-2 border border-[rgb(220,140,140)]">
                        {navSections.map((section, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToSection(section.ref)}
                                className="font-bold px-6 py-3 rounded-full text-xs sm:text-sm lg:text-base transition-all duration-300 whitespace-nowrap text-gray-700 hover:bg-[rgb(220,140,140)] hover:text-[rgb(115,40,40)]"
                            >
                                {section.name.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <main className="max-w-6xl mx-auto py-8 sm:py-12 px-4 space-y-24">

                {/* UG SECTION */}
                <section ref={ugRef}>

                    <SectionHeader title="UG Curriculum" />

                    <div className="bg-white rounded-3xl shadow-xl border border-[rgb(200,120,120)] p-6 space-y-6">

                        {(Array.isArray(data?.['UG programmes']) ? data['UG programmes'] : []).map((programme, idx) => (

                            <SyllabusCard
                                key={`ug-${idx}`}
                                title={programme['Curriculum & Syllabus']}
                                link={programme['Link']}
                                index={programme['S.No']}
                            />

                        ))}

                    </div>

                </section>


                {/* PG SECTION */}
                <section ref={pgRef}>

                    <SectionHeader title="PG Curriculum" />

                    <div className="bg-white rounded-3xl shadow-xl border border-[rgb(200,120,120)] p-6 space-y-6">

                        {(Array.isArray(data?.['PG programmes']) ? data['PG programmes'] : []).map((programme, idx) => (

                            <SyllabusCard
                                key={`pg-${idx}`}
                                title={programme['Curriculum & Syllabus']}
                                link={programme['Link']}
                                index={programme['S.No']}
                            />

                        ))}

                    </div>

                </section>

            </main>

        </div>

    );
};

export default CurriculumSyllabus;