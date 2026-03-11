import React, { useState, useEffect } from 'react';
import './NSS.css';

const NSS = () => {
    const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
    const [data, setData] = useState(null);
     // State for Image Gallery
        const [currentImageIndex, setCurrentImageIndex] = useState(0);
        const [touchStartX, setTouchStartX] = useState(0);
        const [touchEndX, setTouchEndX] = useState(0);

    useEffect(() => {
  fetch("/api/nss")
    .then(res => res.json())
    .then(result => {
      console.log("NSS API:", result);
      setData(result);
    })
    .catch(err => console.error(err));
}, []);

    useEffect(() => {
    if (!data?.activities) return;

    const interval = setInterval(() => {
        setCurrentActivityIndex((prev) => 
            (prev + 1) % data.activities.length
        );
    }, 3500);

    return () => clearInterval(interval);
}, [data]);

    const setActivity = (idx) => {
        setCurrentActivityIndex(idx);
    };

       // Static Data
    const galleryImages = [
        { src: '/public/1.webp', alt: 'College Event', description: 'Annual cultural festival celebrating diverse talents' },
        { src: '/public/cse-girls-closeup.webp', alt: 'Students in Lab', description: 'Students collaborating on innovative projects' },
        { src: '/public/4.webp', alt: 'Campus View', description: 'Our beautiful campus surrounded by greenery' },
        { src: '/public/computer-lab.webp', alt: 'Computer Lab', description: 'State-of-the-art computer lab with latest equipment' },
        { src: '/public/Drone_shot.jpg', alt: 'Aerial View', description: 'Aerial view of our sprawling campus facilities' },
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

    if (!data) {
  return <p className="text-center mt-20">Loading NSS data...</p>;
}

    return (
        <main className="flex-grow font-sans bg-gray-50">
            {/* Hero section */}
            <section className="relative w-full min-h-[35vh] sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] overflow-hidden flex items-center justify-center">
                <img src="/nsslogo.png" alt="NSS" className="absolute inset-15 w-900 h-800 object-cover object-center" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center z-10 px-2">
                    <div className="backdrop-blur-md bg-brown/30 rounded-2xl shadow-lg px-6 py-6 md:py-10 flex flex-col items-center max-w-2xl mx-auto border border-white/30 animate-popIn">
                        <h1 className="text-lg sm:text-xl lg:text-3xl xl:text-4xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight">{data.name}</h1>
                        <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-white drop-shadow text-center font-medium">Community Service. Personality Development.</p>
                    </div>
                </div>
            </section>

            {/* Content sections */}
            <section className="container mx-auto py-8 sm:py-12 lg:py-14 px-4">
                <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10 lg:gap-12">
                    {/* About Card */}
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100 overflow-hidden">
                        <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-3 sm:py-4 md:py-5 flex items-center justify-center gap-2 sm:gap-3">
                            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center">About</h2>
                        </div>
                        <div className="p-4 sm:p-6 md:p-8 lg:p-10 text-left">
                            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-base text-gray-700 leading-relaxed">{data.description}</p>
                        </div>   
                    </div>

                    {/* Activities Card with Sliding Notice Board */}
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100 overflow-hidden">
                        <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-3 sm:py-4 md:py-5 flex items-center justify-center gap-2 sm:gap-3">
                            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center">Activities</h2>
                        </div>
                        <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col items-center">
                            <div className="relative w-full max-w-xl mx-auto">
                                <div className="overflow-hidden h-20 sm:h-24 md:h-28 lg:h-32 rounded-xl bg-[rgb(220,140,140)] border border-[rgb(200,120,120)] shadow-inner flex items-center justify-center">
                                    <div className="relative w-full h-full">
                                        {(Array.isArray(data?.activities) ? data.activities : []).map((activity, idx) => (
                                            <div
                                                key={idx}
                                                className={`absolute inset-0 flex items-center justify-center px-6 text-center text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-[rgb(100,25,25)] transition-all duration-700 transform ${currentActivityIndex === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                                                    }`}
                                            >
                                                {activity}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex justify-center gap-2 mt-4">
                                    {(Array.isArray(data?.activities) ? data.activities : []).map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActivity(idx)}
                                            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${currentActivityIndex === idx ? 'bg-[rgb(110,35,35)] w-6' : 'bg-[rgb(180,100,100)] hover:bg-[rgb(160,80,80)]'
                                                }`}
                                        ></button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* NSS Coordinators Card */}
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100 overflow-hidden">
                        <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-3 sm:py-4 md:py-5 flex items-center justify-center gap-2 sm:gap-3">
                            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center">NSS Coordinators</h2>
                        </div>
                        <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {(Array.isArray(data?.nss_coordinator?.['Office Bearers']) ? data.nss_coordinator['Office Bearers'] : []).map((coordinator, i) => (
                                    <div
                                        key={i}
                                        className="bg-white/80 rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col justify-center items-center text-center hover:shadow-md transition-all hover:-translate-y-1"
                                    >
                                         <div className="w-24 h-40 sm:w-28 sm:h-32 mb-4">
                                        <img
                                          src={`/public${coordinator.Photo}`}
                                          alt={coordinator.Name}
                                        className="w-full h-full object-cover rounded-full border-4 border-[rgb(115,25,25)] shadow-md transition-transform duration-300 hover:scale-105"
                                        />
                                        </div>
                                        <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-[rgb(110,35,35)] mb-2">{coordinator.Name}</h3>
                                        <div className="text-xs lg:text-sm text-gray-700 font-semibold">{coordinator.Designation}</div>
                                    </div>
                                ))}
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
                                                <div className="w-full md:w-3/4 lg:w-3/5" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
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
                </div>
            </section>
            

            {/* Achievements Section */}
            <section id="achievements" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 ">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
                    <span className="bg-[rgb(100,25,25)] bg-clip-text text-transparent">
                        Sports Achievements
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
        </main>
    );
};

export default NSS;
