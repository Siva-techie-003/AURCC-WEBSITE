import React from 'react';
import { Link } from 'react-router-dom';
import './ProgramCard.css';

const ProgramCard = ({ title, intake, icon, description, learnMoreLink, department }) => {

const isImage =
  typeof icon === "string" &&
  (icon.endsWith(".png") ||
   icon.endsWith(".jpg") ||
   icon.endsWith(".webp") ||
   icon.endsWith(".svg"));   // ✅ ADD THIS

    return (
        <div className="bg-white/90 backdrop-blur-lg border border-[rgb(200,120,120)] 
                        rounded-xl sm:rounded-2xl shadow-xl transition-all duration-300 
                        px-4 sm:px-6 md:px-8 py-6 sm:py-8 
                        flex flex-col items-center 
                        min-h-[280px] sm:min-h-[320px] md:min-h-[340px] 
                        hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl 
                        animate-fade-scale text-center mx-auto my-4 max-w-md w-full group">

{/* ICON */}
<div className="flex items-center justify-center rounded-full shadow-lg border-[rgba(110,35,35)] border-2
                bg-gradient-to-br from-[rgb(255, 255, 255)] to-[rgb(0, 0, 0)] 
                w-16 h-16 mb-5 group-hover:rotate-12 transition-transform">

  {isImage ? (
      <img
          src={icon}
          alt={title}
          className="w-10 h-10 object-contain"
      />
  ) : (
      <span className="text-3xl text-white">
          {icon}
      </span>
  )}

</div>

            {/* TITLE */}
            <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-gray-900 
                           mb-2 leading-tight uppercase tracking-tight">
                {title}
            </h3>

            {/* DEPARTMENT */}
            {department && (
                <div className="text-xs text-[rgb(110,35,35)] 
                                font-black uppercase tracking-widest mb-2 opacity-70">
                    {department}
                </div>
            )}

            {/* DESCRIPTION */}
            <p className="text-gray-600 mb-4 text-sm sm:text-base md:text-lg 
                          min-h-[40px] sm:min-h-[48px] 
                          leading-relaxed font-medium">
                {description}
            </p>

            {/* INTAKE */}
            <div className="text-xs sm:text-sm text-[rgb(105,30,30)] font-bold 
                            mb-6 mt-auto px-4 py-1.5 
                            bg-[rgb(220,140,140)] 
                            rounded-full border border-[rgb(200,120,120)]">
                Intake: {intake}
            </div>

            {/* BUTTON */}
            <Link
                to={learnMoreLink}
                className="inline-block w-full sm:w-auto px-8 py-3 rounded-2xl 
                           bg-[rgb(115,40,40)] text-white font-black shadow-lg 
                           hover:bg-yellow-400 hover:text-[rgb(100,25,25)] 
                           transition-all active:scale-95 uppercase tracking-widest text-xs sm:text-sm">
                Learn More
            </Link>
        </div>
    );
};

export default ProgramCard;