import React,{useEffect,useState} from 'react';
import SyllabusCard from '../components/SyllabusCard';
import './CurriculumSyllabus.css';

const CurriculumSyllabus = () => {

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

<div className="flex-grow bg-gray-50 min-h-screen text-left">

{/* HERO */}
<section className="relative w-full h-56 sm:h-72 md:h-96 lg:h-[50vh] flex items-center justify-center overflow-hidden">

<img
src="/syllabus.webp"
alt="Curriculum & Syllabus"
className="absolute inset-0 w-full h-full object-cover object-center"
/>

<div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>

<div className="relative z-10 mx-4 px-8 sm:px-12 py-8 sm:py-10 max-w-4xl w-full text-center bg-white/30 backdrop-blur-sm border border-white/30 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.4)]">

<h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
Syllabus
</h1>

<div className="w-20 h-1 bg-yellow-400 mx-auto mb-5 rounded-full"></div>

<p className="text-sm sm:text-lg lg:text-xl text-[rgb(90,20,20)] font-bold leading-relaxed max-w-2xl mx-auto">
Explore the detailed academic structure for all our programs.
</p>

</div>
</section>


<main className="max-w-6xl mx-auto py-16 px-4 space-y-24">

{/* UG SECTION */}
<section>

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
<section>

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