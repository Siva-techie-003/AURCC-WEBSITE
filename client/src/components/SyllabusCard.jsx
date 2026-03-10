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

export const getIcon = (title = "") => {
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

const SyllabusCard = ({ title, link }) => {

    const icon = getIcon(title);

    const openLink = () => {
        window.open(link, '_blank');
    };

    return (
        <div className="group flex items-center justify-between px-6 py-4 border-b border-gray-200 transition-all duration-300 hover:bg-[rgb(115,40,40)] rounded-lg">

            {/* LEFT */}
            <div className="flex items-center gap-4">

                {/* ICON CIRCLE */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[rgb(115,40,40)] bg-white transition-all duration-300 group-hover:bg-white">

                    <img
                        src={icon}
                        alt={title}
                        className="w-6 h-6 object-contain"
                    />

                </div>

                {/* TITLE */}
                <span className="text-gray-800 font-semibold transition-colors duration-300 group-hover:text-white">
                    {title}
                </span>

            </div>

            {/* BUTTON */}
            <button
                onClick={openLink}
                className="px-4 py-2 rounded-lg bg-[rgb(115,40,40)] text-white font-semibold text-sm transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-[rgb(90,20,20)]"
            >
                View Syllabus
            </button>

        </div>
    );
};

export default SyllabusCard;