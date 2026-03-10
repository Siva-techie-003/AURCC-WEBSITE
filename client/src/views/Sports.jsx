import React, { useState, useEffect, useRef, useMemo } from 'react';
import './Sports.css';

const Sports = () => {
    // State for Image Gallery
        const [currentImageIndex, setCurrentImageIndex] = useState(0);
        const [touchStartX, setTouchStartX] = useState(0);
        const [touchEndX, setTouchEndX] = useState(0);
        const [data, setData] = useState(null);

        useEffect(() => {

fetch("http://localhost:5000/api/sports")
.then(res => res.json())
.then(result => {
  console.log(result);
  setData(result);
})
.catch(err => console.error(err));

}, []);

       // Static Data
    const galleryImages = [
        { src: 'http://localhost:5000/public/1.webp', alt: 'College Event', description: 'Annual cultural festival celebrating diverse talents' },
        { src: 'http://localhost:5000/public/cse-girls-closeup.webp', alt: 'Students in Lab', description: 'Students collaborating on innovative projects' },
        { src: 'http://localhost:5000/public/4.webp', alt: 'Campus View', description: 'Our beautiful campus surrounded by greenery' },
        { src: 'http://localhost:5000/public/computer-lab.webp', alt: 'Computer Lab', description: 'State-of-the-art computer lab with latest equipment' },
        { src: 'http://localhost:5000/public/Drone_shot.jpg', alt: 'Aerial View', description: 'Aerial view of our sprawling campus facilities' },
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
  return <p className="text-center mt-20 text-lg">Loading Sports Data...</p>;
}

    return (
        <main className="flex-grow font-sans bg-gray-50 text-left pt-[120px] sm:pt-[140px] lg:pt-[120px]">
            {/* Hero section */}
            <section className="relative w-full h-48 sm:h-56 md:h-72 lg:h-[50vh] overflow-hidden flex flex-col justify-end ">
                <img src={`http://localhost:5000/public/${data.image}`}alt="Sports facilities" className=" absolute inset-0 w-full h-full object-cover  object-center" />
                <div className="absolute top-0 left-0 w-full h-full  bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 ">
                    <div className="backdrop-blur-md bg-brown/30 rounded-2xl shadow-lg px-6 py-6 md:py-10 flex flex-col items-center max-w-2xl mx-auto border border-white/30 animate-popIn">
                        <h1 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white drop-shadow-lg tracking-tight text-center mb-2">{data.name}</h1>
                        <p className="text-sm lg:text-lg text-white drop-shadow text-center font-medium opacity-90">Promoting Sportsmanship and Fitness</p>
                    </div>
                </div>
            </section>

            {/* Content sections */}
            <section className="max-w-7xl mx-auto py-12 px-4 space-y-12">
                {/* Overview Card */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all animate-fadeIn">
                    <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-5 flex items-center justify-center gap-3">
                        
                        <h2 className="text-xl lg:text-2xl font-bold text-white text-center">Overview</h2>
                    </div>
                    <div className="p-8">
                        <p className="text-base text-gray-700 leading-relaxed">
                            {data.description}
                        </p>
                    </div>
                </div>

                {/* Facilities Card */}
               <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all animate-fadeIn">
    <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-5 flex items-center justify-center gap-3">
        <h2 className="text-xl lg:text-2xl font-bold text-white text-center">Facilities</h2>
    </div>

    <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Indoor Games */}
            <div className="bg-[rgb(220,140,140)]/50 rounded-2xl p-6 border border-[rgb(200,120,120)] flex flex-col items-start transition-all ">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl">🎯</div>
                    <h3 className="text-xl lg:text-2xl font-black text-[rgb(100,25,25)] uppercase">Indoor Games</h3>
                </div>
                <ul className="space-y-4 w-full">
                    {(Array.isArray(data?.facilities?.IndoorGames) ? data.facilities.IndoorGames : []).map((game, i) => (
                        <li key={i} className="flex gap-4 items-center animate-fadeInUp">
                            <span className="h-2 w-2 rounded-full bg-[rgb(220,140,140)]"></span>
                            <span className="text-base lg:text-lg font-bold text-gray-700">{game}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Outdoor Games */}
            <div className="bg-[rgb(220,140,140)]/50 rounded-2xl p-6 border border-[rgb(200,120,120)] flex flex-col items-start transition-all ">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl">⚽</div>
                    <h3 className="text-xl lg:text-2xl font-black text-emerald-900 uppercase">Outdoor Games</h3>
                </div>

                <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(Array.isArray(data?.facilities?.OutdoorGames) ? data.facilities.OutdoorGames : []).map((game, i) => (
                        <li key={i} className="flex gap-4 items-center animate-fadeInUp">
                            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                            <span className="text-base lg:text-lg font-bold text-gray-700">{game}</span>
                        </li>
                    ))}
                </ul>
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





            </section>
        </main>
    );
};

export default Sports;
