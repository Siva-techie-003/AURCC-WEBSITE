import React from 'react';
import './OfficeContentSection.css';

const OfficeContentSection = ({ sectionId, title, icon = 'ℹ️', children }) => {
    return (
        <div id={sectionId} className="bg-white/70 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg animate-fadeIn border border-gray-100 scroll-mt-20 sm:scroll-mt-28">
            <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3 rounded-t-xl sm:rounded-t-2xl">
                <span className="text-xl sm:text-2xl">{icon}</span>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center px-2">{title}</h2>
            </div>
            <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                {children}
            </div>
        </div>
    );
};

export default OfficeContentSection;
