import React from 'react';
import data from '../assets/fine arts.json';
import './FineArtsClub.css';

const FineArtsClub = () => {
    return (
        <main className="flex-grow font-sans bg-white">
            {/* Hero section */}
            <section className="relative w-full min-h-[35vh] sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] overflow-hidden flex items-center justify-center">
                <img src="/fac.webp" alt="Fine Arts Club" className="absolute inset-0 w-full h-full object-cover object-center" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-2">
                    <div className="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 md:py-6 lg:py-8 xl:py-10 flex flex-col items-center w-full max-w-2xl border border-white/30 animate-popIn">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight">Fine Arts Club</h1>
                        <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white drop-shadow text-center font-medium">Celebrating Creativity and Talent</p>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="container mx-auto py-8 sm:py-12 lg:py-14 px-4">
                <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10 lg:gap-12">
                    {/* Description Section */}
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-fadeIn">
                        <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3">
                            <span className="text-lg lg:text-xl text-white">🎨</span>
                            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center">LAYAM AAM RHYTHM OF ARTS MUSIC & DANCE</h2>
                        </div>
                        <div className="p-4 sm:p-6 md:p-8 lg:p-10 text-left">
                            <p className="text-base lg:text-lg xl:text-xl font-medium text-gray-800 leading-relaxed text-center italic">{data.description}</p>
                        </div>
                    </div>

                    {/* Coordinator Section */}
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-fadeIn">
                        <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3">
                            <span className="text-lg lg:text-xl text-white">🎤</span>
                            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center">Coordinator</h2>
                        </div>
                        <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex justify-center">
                            <div className="bg-white/80 rounded-xl shadow-md p-6 border border-gray-100 flex flex-col gap-2 max-w-md w-full text-center animate-fadeInUp">
                                <div className="font-bold text-lg lg:text-xl text-[rgb(110,35,35)]">{data.Coordinator.Name}</div>
                                <div className="text-sm lg:text-base text-gray-700 font-semibold">{data.Coordinator.Designation}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default FineArtsClub;
