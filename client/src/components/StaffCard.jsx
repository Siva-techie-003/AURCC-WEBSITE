import React, { useState } from 'react';
import './StaffCard.css';

const StaffCard = ({ staff }) => {
    const [showDefaultImage, setShowDefaultImage] = useState(false);

    const getImageUrl = (imagePath) => {
        if (!imagePath) return '';
        if (imagePath.startsWith('/')) {
            return imagePath;
        }
        return `/${imagePath}`;
    };

    const handleImageError = () => {
        setShowDefaultImage(true);
    };

    return (
        <div className="staff-card bg-white/60 backdrop-blur-md rounded-xl shadow-xl overflow-hidden flex flex-col items-center border border-[rgb(180,100,100)] transition-all duration-300 text-center hover:shadow-2xl touch-manipulation">
            {/* Image Section */}
            <div className="w-full flex justify-center pt-6 pb-2">
                <div className="staff-image-container w-24 h-24 rounded-full overflow-hidden border-4 border-[rgb(140,60,60)] shadow-lg bg-white flex items-center justify-center">
                    {staff.image && staff.image.trim() !== '' && !showDefaultImage ? (
                        <img
                            src={getImageUrl(staff.image)}
                            alt={staff.name}
                            className="w-full h-full object-cover"
                            onError={handleImageError}
                            loading="lazy"
                        />
                    ) : (
                        <span className="text-4xl text-[rgb(160,80,80)]">👤</span>
                    )}
                </div>
            </div>

            {/* Text Section */}
            <div className="w-full bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-4 px-3 flex flex-col items-center justify-center flex-grow">
                <h3 className="text-base font-bold text-white font-sans tracking-wide leading-tight mb-1 line-clamp-2">{staff.name}</h3>
                <p className="text-sm text-[rgb(200,120,120)] font-sans leading-tight line-clamp-2">{staff.position || staff.designation}</p>
            </div>
        </div>
    );
};

export default StaffCard;
