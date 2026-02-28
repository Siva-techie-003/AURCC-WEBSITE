import React from 'react';
import directorsData from '../assets/COD.json';
import './COD.css';

const centreIcons = {
    'Zonal Office': '🗺️',
    'Academics': '📚',
    'DGATE': '🔑',
    'PACE Cell': '🧭',
    'AICTE': '🏛️',
    'Alumni': '🎓',
    'Fine Arts Club': '🎭',
    'Research': '🔬',
    'Tamil Mandram': '📜',
    'Admission cell': '📝',
    'Naan Mudhalvan': '🌟',
    'Office of Affiliation': '🔗',
    'Distant Education': '🖥️',
    'NSS': '🌱',
    'Placement Cell': '💼',
    'Exam Cell': '🗂️',
};

const COD = () => {
    const directors = directorsData.centres;

    const getCentreIcon = (centre) => centreIcons[centre] || '🎓';

    return (
        <div className="p-4 sm:p-6 md:p-9 bg-white min-h-screen">
            <div className="text-center py-4 sm:py-5">
                <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[rgb(100,25,25)] tracking-wide font-serif">CELL COORDINATORS</h1>
                <div className="flex justify-center mt-2 mb-3 sm:mb-4">
                    <span className="block w-24 sm:w-32 h-2 rounded-full bg-gradient-to-r from-[rgb(115,63,63)] via-[rgb(115,45,45)] to-[rgb(115,25,25)]"></span>
                </div>
            </div>
            <div className="container mx-auto grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-sans">
                {directors.map((director, index) => (
                    <div
                        key={index}
                        className="cod-card bg-white/60 backdrop-blur-md rounded-2xl shadow-xl flex flex-col items-center border border-[rgb(180,100,100)] transition-all duration-300 py-6 sm:py-8 px-4 text-center"
                    >
                        <div className="mb-4 text-3xl">
                            {getCentreIcon(director.centre)}
                        </div>
                        <h2 className="text-sm lg:text-base xl:text-xl font-bold text-[rgb(100,25,25)] font-sans mb-2 uppercase">{director.name}</h2>
                        <p className="text-xs lg:text-sm xl:text-base text-[rgb(110,35,35)] font-semibold font-sans">
                            {director.centre}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default COD;
