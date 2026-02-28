import React from 'react';
import data from '../assets/sports.json';
import './Sports.css';

const Sports = () => {
    return (
        <main className="flex-grow font-sans bg-gray-50 text-left">
            {/* Hero section */}
            <section className="relative w-full h-48 sm:h-56 md:h-72 lg:h-[50vh] overflow-hidden flex flex-col justify-end">
                <img src="/sports.webp" alt="Sports facilities" className="absolute inset-0 w-full h-full object-cover object-center" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                    <div className="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-6 py-6 md:py-10 flex flex-col items-center max-w-2xl mx-auto border border-white/30 animate-popIn">
                        <h1 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white drop-shadow-lg tracking-tight text-center mb-2">{data.name}</h1>
                        <p className="text-sm lg:text-lg text-white drop-shadow text-center font-medium opacity-90">Promoting Sportsmanship and Fitness</p>
                    </div>
                </div>
            </section>

            {/* Content sections */}
            <section className="max-w-7xl mx-auto py-12 px-4 space-y-12">
                {/* Overview Card */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all animate-fadeIn">
                    <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-5 flex items-center justify-center gap-3">
                        <span className="text-xl lg:text-2xl">📝</span>
                        <h2 className="text-xl lg:text-2xl font-bold text-white text-center">Overview</h2>
                    </div>
                    <div className="p-8">
                        <p className="text-base lg:text-lg xl:text-xl font-medium text-gray-800 leading-relaxed text-justify italic">
                            {data.description}
                        </p>
                    </div>
                </div>

                {/* Facilities Card */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all animate-fadeIn">
                    <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-5 flex items-center justify-center gap-3">
                        <span className="text-xl lg:text-2xl">🏟️</span>
                        <h2 className="text-xl lg:text-2xl font-bold text-white text-center">Facilities</h2>
                    </div>
                    <div className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-[rgb(220,140,140)]/50 rounded-2xl p-8 border border-[rgb(200,120,120)] flex flex-col items-start transition-all hover:bg-white hover:shadow-md">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl">🎯</div>
                                    <h3 className="text-xl lg:text-2xl font-black text-[rgb(100,25,25)] uppercase">Indoor Games</h3>
                                </div>
                                <ul className="space-y-4 w-full">
                                    {(Array.isArray(data?.facilities?.IndoorGames) ? data.facilities.IndoorGames : []).map((game, i) => (
                                        <li key={i} className="flex gap-4 items-center animate-fadeInUp">
                                            <span className="h-2 w-2 rounded-full bg-[rgb(220,140,140)]0"></span>
                                            <span className="text-base lg:text-lg font-bold text-gray-700">{game}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-emerald-50/50 rounded-2xl p-8 border border-emerald-100 flex flex-col items-start transition-all hover:bg-white hover:shadow-md">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl">⚽</div>
                                    <h3 className="text-xl lg:text-2xl font-black text-emerald-900 uppercase">Outdoor Games</h3>
                                </div>
                                <ul className="space-y-4 w-full">
                                    {(Array.isArray(data?.facilities?.OutdoorGames) ? data.facilities.OutdoorGames : []).map((game, i) => (
                                        <li key={i} className="flex gap-4 items-center animate-fadeInUp">
                                            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                                            <span className="text-base lg:text-lg font-bold text-gray-700">{game}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Sports;
