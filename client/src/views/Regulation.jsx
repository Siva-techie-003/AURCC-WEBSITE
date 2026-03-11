import React, { useState,useEffect } from 'react';
import RegulationCard from '../components/RegulationCard';
import './Regulation.css';

const Regulation = () => {
    const [regulations, setRegulations] = useState(null);

  useEffect(() => {
    fetch("/api/regulations")
      .then(res => res.json())
      .then(data => {
        console.log("REGULATION API 👉", data);
        setRegulations(data.regulations);
      })
      .catch(err => console.error(err));
  }, []);

  if (!regulations) {
    return <p className="text-center mt-20">Loading regulations...</p>;
  }

    return (
        <div className="flex-grow bg-white min-h-screen text-left pt-[120px] sm:pt-[140px] lg:pt-[120px]">
            <div className="flex-grow bg-gradient-to-br from-gray-100 via-[rgb(255, 255, 255)] to-white min-h-screen text-left">

                {/* Hero section */}
                <section className="relative w-full h-48 sm:h-60 md:h-80 lg:h-[40vh] overflow-hidden flex items-center justify-center">
                    <img
                        src="/regulation.webp"
                        alt="Regulations"
                        className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-[rgb(90,20,20)]/50"></div>
                    <div className="relative z-10 text-center animate-fadeIn px-4">
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-4">Regulations</h1>
                        <div className="h-2 w-24 bg-[rgb(220,140,140)]0 mx-auto rounded-full"></div>
                    </div>
                </section>

                <main className="max-w-7xl mx-auto py-16 px-4 space-y-20">
                    <section className="animate-fadeInUp">
                        <header className="flex flex-col md:flex-row md:items-end justify-between border-b-4 border-[rgb(100,25,25)] pb-8 mb-12 gap-6">
                            <div className="max-w-xl">
                                <h2 className="text-2xl lg:text-4xl font-black text-[rgb(90,20,20)] uppercase tracking-tight">Academic Integrity</h2>
                                <p className="text-lg text-gray-500 font-bold mt-2 italic">Essential guidelines for students under Anna University regulations.</p>
                            </div>

                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                            {regulations.map((reg, i) => (
                                <div key={i} className="group">
                                    <RegulationCard
                                        title={reg['Regulation']}
                                        pdf={`${reg["PDF Link"]}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Warning/Note Section */}
                    <section className="bg-amber-50 border-2 border-amber-200 p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row items-center gap-8 animate-fadeIn">
                        <div className="w-20 h-20 bg-amber-200 rounded-2xl flex items-center justify-center text-4xl shrink-0 animate-pulse">⚠</div>
                        <div>
                            <h3 className="text-xl font-bold text-amber-900 uppercase tracking-tight mb-2">Important Notice</h3>
                            <p className="text-amber-800 font-medium leading-relaxed">Students are required to download and carefully read the regulations relevant to their year of admission. These documents govern your academic progress, internal assessments, and end-semester examinations.</p>
                        </div>
                    </section>
                </main>
            </div>
            </div>
            );
};

            export default Regulation;
