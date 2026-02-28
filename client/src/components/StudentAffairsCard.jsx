import React, { useMemo } from 'react';
import './StudentAffairsCard.css';

const StudentAffairsCard = ({ icon, title, description }) => {
    const maxLen = 180;

    const truncatedDescription = useMemo(() => {
        if (description && description.length > maxLen) {
            return description.slice(0, maxLen) + '...';
        }
        return description;
    }, [description]);

    return (
        <div className="bg-white/90 backdrop-blur-lg border border-[rgb(200,120,120)] rounded-3xl shadow-xl transition-all duration-300 px-8 py-10 flex flex-col items-center min-h-[300px] hover:-translate-y-2 hover:shadow-2xl animate-fade-scale text-center mx-auto my-4 max-w-md w-full group">
            <div className="flex items-center justify-center rounded-full shadow-lg bg-gradient-to-br from-[rgb(115,63,63)] to-[rgb(115,25,25)] w-20 h-20 mb-8 group-hover:rotate-12 transition-transform">
                <span className="text-4xl text-white">{icon}</span>
            </div>
            <h3 className="text-xl font-extrabold text-[rgb(90,20,20)] uppercase tracking-tight mb-4 leading-tight">{title}</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium" title={description}>{truncatedDescription}</p>
        </div>
    );
};

export default StudentAffairsCard;
