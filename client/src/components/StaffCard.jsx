import React, { useState } from 'react';
import './StaffCard.css';

const StaffCard = ({ staff }) => {
    const [showDefaultImage, setShowDefaultImage] = useState(false);

    const getImageUrl = (imagePath) => {
    if (!imagePath) return '';
    return `/public/${imagePath}`;
};

    const handleImageError = () => {
        setShowDefaultImage(true);
    };

    return (
        <div className="staff-card mx-auto bg-white/60 backdrop-blur-md rounded-xl shadow-xl overflow-hidden flex flex-col items-center border border-[rgb(180,100,100)] transition-all duration-300 text-center hover:shadow-2xl touch-manipulation">
            {/* Image Section */}
            <div className="w-full flex justify-center pt-3 sm:pt-6 pb-1 sm:pb-2">
                <div className="staff-image-container w-24 h-24 rounded-[20px] overflow-hidden border-4 border-[rgb(140,60,60)] shadow-lg bg-white flex items-center justify-center">
                    {staff.image && staff.image.trim() !== '' && !showDefaultImage ? (
                        <img
                            src={getImageUrl(staff.image)}
                            alt={staff.name}
                            className="w-full h-full object-cover object-[center_15%]"
                            onError={handleImageError}
                            loading="lazy"
                        />
                    ) : (
                        <span className="text-4xl text-[rgb(160,80,80)]">👤</span>
                    )}
                </div>
            </div>

            {/* Text Section */}
            <div className="w-full bg-[rgb(110,35,35)] py-2 sm:py-4 px-2 sm:px-3 flex flex-col items-center justify-center flex-grow">
                <h3 className="text-xs sm:text-base font-bold text-white font-sans tracking-wide leading-tight mb-1 line-clamp-2">{staff.name}</h3>
                <p className="text-[10px] sm:text-sm text-white font-sans leading-tight line-clamp-2">{staff.position || staff.designation}</p>
            </div>
        </div>
    );
};

export default StaffCard;
