import React, { useState, useEffect, useRef, useMemo } from 'react';
import data from '../assets/tamil mandram.json';
import './TamilMandram.css';

const TamilMandram = () => {
    // State for Image Gallery
            const [currentImageIndex, setCurrentImageIndex] = useState(0);
            const [touchStartX, setTouchStartX] = useState(0);
            const [touchEndX, setTouchEndX] = useState(0);
    
           // Static Data
        const galleryImages = [
            { src: '/1.webp', alt: 'College Event', description: 'Annual cultural festival celebrating diverse talents' },
            { src: '/cse-girls-closeup.webp', alt: 'Students in Lab', description: 'Students collaborating on innovative projects' },
            { src: '/4.webp', alt: 'Campus View', description: 'Our beautiful campus surrounded by greenery' },
            { src: '/computer-lab.webp', alt: 'Computer Lab', description: 'State-of-the-art computer lab with latest equipment' },
            { src: '/Drone_shot.jpg', alt: 'Aerial View', description: 'Aerial view of our sprawling campus facilities' },
        ];
    
        // Logic for Image Gallery
        const nextImage = () => {
            setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
        };
        const prevImage = () => {
            setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
        };
        const goToImage = (index) => {
            setCurrentImageIndex(index);
        };
    
        const handleTouchStart = (e) => {
            setTouchStartX(e.changedTouches[0].screenX);
        };
        const handleTouchEnd = (e) => {
            const endX = e.changedTouches[0].screenX;
            setTouchEndX(endX);
            if (touchStartX - endX > 50) {
                nextImage();
            } else if (endX - touchStartX > 50) {
                prevImage();
            }
        };
    



    return (
        <main className="flex-grow min-h-screen">
            {/* Hero section */}
            <section className="relative w-full min-h-[35vh] sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] overflow-hidden flex items-center justify-center">
                <img src="/temple5.webp" alt="Tamil Mandram" className="absolute inset-0 w-full h-full object-cover blur-[1.5px]
" />
                <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center z-10 px-2">
                    <div className=" backdrop-blur-md bg-brown/30 rounded-2xl shadow-lg px-6 py-6 md:py-10 flex flex-col items-center w-cover max-w-5xl mx-auto border border-white/30 animate-popIn">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white drop-shadow-lg tracking-wide text-center leading-tight">{data.name}</h1>
                    </div>
                </div>
            </section>

            {/* Navigation Tabs - Retro Style */}
            <nav className="w-full text-white shadow-xl py-4 bg-[#23120b] sticky top-0 z-30">
                <div className="container mx-auto px-4">
                    <ul className="flex flex-wrap justify-center gap-4">
                        <li>
                            <a href="#overview" className="px-6 py-2 block text-sm lg:text-base font-bold bg-[#3c2f25] text-white hover:text-[#fdb827] rounded-full transition-all border border-[#4d3c2e]">
                                முகப்பு
                            </a>
                        </li>
                        <li>
                            <a href="#events" className="px-6 py-2 block text-sm lg:text-base font-bold bg-[#3c2f25] text-white hover:text-[#fdb827] rounded-full transition-all border border-[#4d3c2e]">
                                நிகழ்வுகள்
                            </a>
                        </li>
                        <li>
                            <a href="#staff" className="px-6 py-2 block text-sm lg:text-base font-bold bg-[#3c2f25] text-white hover:text-[#fdb827] rounded-full transition-all border border-[#4d3c2e]">
                                பொறுப்பாளர்
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Content section */}
            <section className="relative py-12 sm:py-20 px-4 mx-auto overflow-hidden">
                {/* Background Decorative Overlay */}
                <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{ backgroundImage: 'url(/kalvettu.webp)', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}
                ></div>

                <div className="relative z-10 max-w-5xl mx-auto space-y-12 sm:space-y-16">
                    {/* Overview Section */}
                    <div id="overview" className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#e5d5c0] animate-popIn">
                        <div className="bg-[#23120b] py-6 px-8 border-b-4 border-[#fdb827]">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#fdb827] font-bold text-center">முகப்பு</h2>
                        </div>
                        <div className="p-8 sm:p-12">
                            <p className="text-base lg:text-lg xl:text-xl text-[#3c2f25] font-medium leading-loose text-justify italic">
                                {data.முகப்பு}
                            </p>
                        </div>
                    </div>

                    {/* Events Section */}
                    <div id="events" className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#e5d5c0] animate-popIn">
                        <div className="bg-[#23120b] py-6 px-8 border-b-4 border-[#fdb827]">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#fdb827] font-bold text-center">நிகழ்வுகள்</h2>
                        </div>
                        <div className="p-8 sm:p-12">
                            <ul className="space-y-6">
                                {(Array.isArray(data?.நிகழ்வுகள்) ? data.நிகழ்வுகள் : []).map((event, index) => (
                                    <li key={index} className="flex gap-4 items-start group animate-fadeInUp">
                                        <span className="bg-[#fdb827] text-[#23120b] w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 mt-1 shadow-md group-hover:scale-110 transition-transform">{index + 1}</span>
                                        <p className="text-base lg:text-lg xl:text-xl text-[#3c2f25] font-semibold text-left">{event}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Staff Section */}
                    <div id="staff" className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#e5d5c0] animate-popIn">
                        <div className="bg-[#23120b] py-6 px-8 border-b-4 border-[#fdb827]">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#fdb827] font-bold text-center">பொறுப்பாளர்</h2>
                        </div>
                        <div className="p-8 sm:p-12 flex justify-center">
                            <div className="bg-amber-50 rounded-2xl p-8 shadow-inner border border-amber-100 max-w-lg w-full text-center hover:bg-white transition-colors group">
                                <img src="/mani.webp" alt="manisekaran" className="w-24 h-28 text-[#fdb827]flex items-center justify-center mx-auto mb-6 shadow-lg " />
                                <h3 className="text-xl lg:text-2xl font-bold text-[#23120b] mb-4 border-b-2 border-amber-200 pb-2">அவைத்தலைவர்</h3>
                                <div className="space-y-3">
                                    <p className="text-lg text-gray-800"><span className="font-bold text-[#3c2f25]">பெயர்:</span> <span className="font-medium text-emerald-900">{data.பொறுப்பாளர்.அவைத்தலைவர்.பெயர்}</span></p>
                                    <p className="text-lg text-gray-800"><span className="font-bold text-[#3c2f25]">மின்னஞ்சல்:</span> <a href={`mailto:${data.பொறுப்பாளர்.அவைத்தலைவர்['அவர்களின் மின்னஞ்சல்']}`} className="text-[rgb(110,35,35)] hover:underline">{data.பொறுப்பாளர்.அவைத்தலைவர்['அவர்களின் மின்னஞ்சல்']}</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                     {/* Gallery Section */}
                <section id="gallery" className="overflow-hidden w-full relative">
                   
                       
                   
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 sm:mb-16 text-[rgb(100,25,25)] relative inline-block mx-auto">
                            Gallery of Memories
                            <span className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-16 sm:w-20 lg:w-24 bg-yellow-500"></span>
                        </h2>
                        <div className="relative flex items-center justify-center">
                            <button onClick={prevImage} className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-[rgb(115,25,25)] text-white p-3 rounded-full z-30 shadow-lg group">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <div className="w-full md:w-6/7 lg:w-5/6 xl:w-4/5" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                                <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                                    {galleryImages.map((image, idx) => (
                                        <div key={idx} className="flex-shrink-0 w-full px-4">
                                            <div className="relative group overflow-hidden rounded-xl shadow-2xl">
                                                <img src={image.src} alt={image.alt} className="w-full h-54 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                                    <p className="text-white text-lg md:text-xl">{image.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button onClick={nextImage} className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-[rgb(115,25,25)] text-white p-3 rounded-full z-30 shadow-lg group">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                        <div className="flex justify-center mt-8 space-x-2">
                            {galleryImages.map((_, idx) => (
                                <button key={idx} onClick={() => goToImage(idx)} className={`h-1 w-4 md:w-8 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-[rgb(115,40,40)]' : 'bg-[rgb(160,80,80)]'}`}></button>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Achievements Section */}
                <section id="achievements" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 ">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
                        <span className="bg-[rgb(100,25,25)] bg-clip-text text-transparent">
                            Our Achievements
                        </span>
                    </h2>
                
                    <div className="max-w-6xl mx-auto">
                        <div className="relative">
                            <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl">
                                <div className="h-80 sm:h-96 overflow-auto px-4 sm:px-6 py-4 sm:py-6 scrollbar-thin">
                                    <div className="space-y-3 sm:space-y-4">
                
                                        {(Array.isArray(data?.achievements) ? data.achievements : []).map((achievement, i) => (
                                            <div key={i} className="bg-white p-3 sm:p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 text-left">
                
                                                <div className="flex flex-col md:flex-row md:items-center justify-between">
                                                    <div>
                                                        <div className="flex items-center mb-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-[rgb(120,45,45)] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                            <h3 className="text-base lg:text-lg xl:text-xl font-semibold text-gray-800">
                                                                {achievement.event}
                                                            </h3>
                                                        </div>
                
                                                        <p className="text-sm lg:text-base text-gray-600 mb-1">
                                                            {achievement.organized_by}
                                                        </p>
                
                                                        <p className="text-sm lg:text-base font-medium text-gray-800">
                                                            {achievement.name}
                                                        </p>
                                                    </div>
                
                                                    <div className="mt-3 md:mt-0 bg-[rgb(220,140,140)] text-[rgb(110,35,35)] px-2 sm:px-3 py-1 rounded-full text-xs lg:text-sm font-medium h-fit">
                                                        {achievement.date}
                                                    </div>
                                                </div>
                
                                                <div className="mt-3">
                                                    <div className="inline-flex items-center bg-purple-50 text-purple-700 px-2 sm:px-3 py-1 rounded-full text-xs lg:text-sm font-medium">
                                                        {achievement.awards}
                                                    </div>
                                                </div>
                
                                            </div>
                                        ))}
                
                                        {(data?.achievements?.length === 0 || !data?.achievements) && (
                                            <p className="text-gray-500 italic text-center">
                                                No achievements available.
                                            </p>
                                        )}
                
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
            </section>
        </main>
    );
};

export default TamilMandram;
