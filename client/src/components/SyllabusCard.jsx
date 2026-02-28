import React from 'react';
import './SyllabusCard.css';

import cseIcon from '../assets/icons/cse.png';
import mechIcon from '../assets/icons/mech.png';
import eceIcon from '../assets/icons/ece.png';
import vlsiIcon from '../assets/icons/vlsi.png';
import aiIcon from '../assets/icons/ai.png';
import mbaIcon from '../assets/icons/mba.png';
import businessAnalyticsIcon from '../assets/icons/business_analytics.png';
import eeeIcon from '../assets/icons/eee.png';
const SyllabusCard = ({ title, link }) => {

    const iconMap = {
        'COMPUTER SCIENCE': cseIcon,
        'ELECTRONICS': eceIcon,
        'ELECTRICAL': eeeIcon,
        'MECHANICAL': mechIcon,
        'ARTIFICIAL INTELLIGENCE': aiIcon,
        'VLSI': vlsiIcon,
        'MBA': mbaIcon,
        'BUSINESS ANALYTICS': businessAnalyticsIcon,
        'default': mbaIcon
    };

    const getIcon = (title = "") => {
        const name = title.toUpperCase();

        if (name.includes('VLSI')) return iconMap['VLSI'];
        if (name.includes('COMPUTER')) return iconMap['COMPUTER SCIENCE'];
        if (name.includes('ELECTRONICS') && !name.includes('ELECTRICAL')) return iconMap['ELECTRONICS'];
        if (name.includes('ELECTRICAL')) return iconMap['ELECTRICAL'];
        if (name.includes('MECHANICAL')) return iconMap['MECHANICAL'];
        if (name.includes('ARTIFICIAL INTELLIGENCE')) return iconMap['ARTIFICIAL INTELLIGENCE'];
        if (name.includes('BUSINESS ANALYTICS')) return iconMap['BUSINESS ANALYTICS'];
        if (name.includes('MBA')) return iconMap['MBA'];

        return iconMap.default;
    };

    const icon = getIcon(title);
    const isImage = typeof icon === "string" && icon !== "⚡";

    const openLink = () => {
        window.open(link, '_blank');
    };

    return (
        <div className="bg-white/90 backdrop-blur-lg border border-[rgb(200,120,120)] rounded-3xl shadow-xl transition-all duration-300 px-8 py-10 flex flex-col items-center min-h-[300px] hover:-translate-y-2 hover:shadow-2xl animate-fade-scale text-center mx-auto my-4 max-w-md w-full group">

            {/* ICON */}
            <div className="flex items-center justify-center rounded-full shadow-lg bg-white border-2 border-[rgb(100,25,25)] w-20 h-20 mb-8 group-hover:rotate-12 transition-transform">
                
                {isImage ? (
                    <img
                        src={icon}
                        alt={title}
                        className="w-10 h-10 object-contain"
                    />
                ) : (
                    <span className="text-4xl text-white">{icon}</span>
                )}

            </div>

            <h3 className="text-xl font-extrabold text-[rgb(90,20,20)] uppercase tracking-tight mb-4 leading-tight">
                {title}
            </h3>

            <button
                onClick={openLink}
                className="inline-block w-full px-8 py-3 rounded-2xl bg-[rgb(115,40,40)] text-white font-black shadow-lg hover:bg-yellow-400 hover:text-[rgb(100,25,25)] transition-all active:scale-95 mt-auto uppercase tracking-widest text-xs"
            >
                View Syllabus
            </button>

        </div>
    );
};

export default SyllabusCard;