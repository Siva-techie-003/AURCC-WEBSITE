import React from 'react';
import directorsData from '../assets/COD.json';
import './COD.css';

const COD = () => {
    const all = directorsData.centres;

    // Dual-member cards first, single-member cards at the bottom
    const sorted = [
        ...all.filter(e => e.members.length > 1),
        ...all.filter(e => e.members.length === 1),
    ];

    return (
        <div className="p-4 sm:p-6 md:p-9 bg-white min-h-screen">
            <div className="text-center py-4 sm:py-5">
                <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[rgb(100,25,25)] tracking-wide font-serif">CELL COORDINATORS</h1>
                <div className="flex justify-center mt-2 mb-3 sm:mb-4">
                    <span className="block w-24 sm:w-32 h-2 rounded-full bg-gradient-to-r from-[rgb(115,63,63)] via-[rgb(115,45,45)] to-[rgb(115,25,25)]"></span>
                </div>
            </div>

            <div className="container mx-auto grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-sans">
                {sorted.map((entry, index) => (
                    <div
                        key={index}
                        className="cod-card bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden flex flex-col w-full mx-auto"
                    >
                        {/* Maroon header with centre name */}
                        <div className="w-full bg-[rgb(110,35,35)] flex items-center justify-center px-4 py-3 min-h-[52px]">
                            <h3 className="text-white font-bold text-sm uppercase tracking-wide text-center leading-tight">
                                {entry.centre}
                            </h3>
                        </div>

                        {/* Member rows — fixed height keeps all cards the same size */}
                        <div className="flex flex-col px-6 py-2 h-[180px] justify-center gap-1">
                            {entry.members.map((member, mIdx) => {
                                // Zigzag: even index → photo left, name right
                                //         odd index  → name left, photo right
                                const isReversed = mIdx % 2 !== 0;
                                return (
                                    <div
                                        key={mIdx}
                                        className={`flex items-center gap-4 ${isReversed ? 'flex-row-reverse' : 'flex-row'}`}
                                    >
                                        {/* Circular photo */}
                                        <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 border-[rgb(110,35,35)] shadow-sm bg-gray-100">
                                            <img
                                                src={`/${member.photo}`}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        {/* Name */}
                                        <span className={`text-base font-bold text-[rgb(100,25,25)] uppercase leading-tight ${isReversed ? 'text-right' : 'text-left'}`}>
                                            {member.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default COD;
