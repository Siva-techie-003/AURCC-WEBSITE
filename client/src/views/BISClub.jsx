import React, { useState, useEffect, useRef, useMemo } from 'react';
import './BISClub.css';

const BISClub = () => {
    // State for Image Gallery
            const [currentImageIndex, setCurrentImageIndex] = useState(0);
            const [touchStartX, setTouchStartX] = useState(0);
            const [touchEndX, setTouchEndX] = useState(0);
            const data = {
                name: "BUREAU OF INDIAN STANDARDS CLUB",
                description: [
                    "Young and vibrant students are the future and form the foundation on which a strong, vibrant and dynamic nation is built. The values towards which the students community are exposed to in their formative years get inculcated in their young minds and serve as a force multiplier that has the capacity to transform the future of a nation. Quality consciousness, based on standardization, is one of the pillars of accelerated economic development and priming students to appreciate the significance of quality, standards and standardization can serve as a catalyst to improve societal awareness on these subjects.",
                    "BIS has taken the initiative of creating Standards Clubs in educational institutions comprising teachers and students as members. Through a variety of activities under these Clubs, young talents get learning opportunities in the field of quality and standardization. Though in its nascent stage, the Standards Club have already garnered prominence and are being enthusiastically promoted by educational institutions to students by providing opportunities to better their professional and personal growth.",
                    "The activities of the standards club are co-ordinated by a core group which consist of a faculty mentor, student leader and student members."
                ],
                Coordinator: {
                    Name: "Dr. R. Sathiya Moorthy",
                    Designation: "Coordinator",
                    Email: "bisclubaurcc@gmail.com",
                    Image: "sathiyamoorthy.webp"
                }
            };
    
           // Static Data
        const galleryImages = [
            {
                src: '/Bis/1.jpg',
                alt: 'BIS Club Activity',
                description: 'Students participating in BIS Standards Club activities and training.'
            },
            {
                src: '/Bis/2.jpg',
                alt: 'BIS Club Activity',
                description: 'Awareness program on quality control and Indian standards.'
            },
            {
                src: '/Bis/3.jpg',
                alt: 'BIS Club Activity',
                description: 'Standards writing competition and student presentations.'
            },
            {
                src: '/Bis/4.jpg',
                alt: 'BIS Club Activity',
                description: 'Interactive learning sessions on standardization processes.'
            },
            {
                src: '/Bis/5.jpg',
                alt: 'BIS Club Activity',
                description: 'Industrial exposure visit highlighting quality assurance.'
            },
            {
                src: '/Bis/6.jpg',
                alt: 'BIS Club Activity',
                description: 'Core group meetings and faculty-mentor coordination.'
            },
            {
                src: '/Bis/7.jpg',
                alt: 'BIS Club Activity',
                description: 'Fostering quality consciousness and national building among student volunteers.'
            },
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
        <main className="flex-grow font-sans bg-white pt-[126px] sm:pt-[130px]">
            {/* Hero section */}
            <section className="relative w-full min-h-[35vh] sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] overflow-hidden flex items-center justify-center">
                <img src="/sing.jpg" alt="BIS Club" className="absolute inset-0 w-full h-full object-cover  blur-[0.5px]" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-2">
                    <div className=" backdrop-blur-md bg-brown/30 rounded-2xl shadow-lg px-6 py-6 md:py-10 flex flex-col items-center w-full max-w-2xl mx-auto border border-white/30 animate-popIn">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight">Bureau of Indian Standards Club</h1>
                        <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white drop-shadow text-center font-medium">Promoting Standards and Quality consciousness</p>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="container mx-auto py-8 sm:py-12 lg:py-14 px-4">
                <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10 lg:gap-12">
                    {/* Description Section */}
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-fadeIn">
                        <div className="bg-[rgb(110,35,35)] py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3">
                            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center">{data.name || "BIS CLUB"}</h2>
                        </div>
                        <div className="p-4 sm:p-6 md:p-8 lg:p-10 text-left flex flex-col gap-4">
                            {Array.isArray(data.description) ? (
                                data.description.map((para, idx) => (
                                    <p key={idx} className="text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed">
                                        {para}
                                    </p>
                                ))
                            ) : (
                                <p className="text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed">
                                    {data.description}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Coordinator Section */}
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-fadeIn">
                        <div className="bg-[rgb(110,35,35)] py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3">
                            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center">Coordinator</h2>
                        </div>
                        <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex justify-center">
                            <div className="bg-white/80 rounded-xl shadow-md p-6 border border-gray-100 flex flex-col gap-2 max-w-md w-full text-center animate-fadeInUp">
                                <img src={`/${data.Coordinator.Image}`} alt={data.Coordinator.Name} className="w-28 h-32  object-cover mx-auto " />
                                <div className="font-bold text-lg lg:text-xl text-[rgb(110,35,35)]">{data.Coordinator.Name}</div>
                                <div className="text-sm lg:text-base text-gray-700 font-semibold">{data.Coordinator.Designation}</div>
                                <div className="text-sm lg:text-base text-gray-700 font-semibold">{data.Coordinator.Email}</div>
                            </div>
                        </div>
                    </div>

                    {/* Gallery Section */}
                    <section id="gallery" className="overflow-hidden w-full relative bis-gallery-section">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 sm:mb-16 text-[rgb(100,25,25)] relative inline-block mx-auto">
                                Gallery of Memories
                                <span className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-16 sm:w-20 lg:w-24 bg-yellow-500"></span>
                            </h2>
                            <div className="relative flex items-center justify-center">
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-[rgb(115,25,25)] text-white p-3 rounded-full z-30 shadow-lg group"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 group-hover:-translate-x-1 transition-transform"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 19l-7-7 7-7"
                                        />
                                    </svg>
                                </button>
                                <div
                                    className="w-full md:w-11/12 lg:w-5/6"
                                    onTouchStart={handleTouchStart}
                                    onTouchEnd={handleTouchEnd}
                                >
                                    <div
                                        className="flex transition-transform duration-700 ease-in-out bis-gallery-container"
                                        style={{
                                            "--current-index": currentImageIndex,
                                            gap: "var(--frame-gap)",
                                        }}
                                    >
                                        {galleryImages.map((image, idx) => (
                                            <div key={idx} className="flex-shrink-0" style={{ width: "var(--frame-width)" }}>
                                                <div className="relative group overflow-hidden rounded-2xl shadow-xl bg-gray-900 flex items-center justify-center" style={{ height: "var(--frame-height)" }}>
                                                    <img
                                                        src={image.src}
                                                        alt={image.alt}
                                                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 sm:p-8">
                                                        <p className="text-white text-sm sm:text-lg md:text-xl font-medium leading-tight text-left">
                                                            {image.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-[rgb(115,25,25)] text-white p-3 rounded-full z-30 shadow-lg group"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex justify-center mt-8 space-x-2">
                                {galleryImages.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => goToImage(idx)}
                                        className={`h-1 w-4 md:w-8 rounded-full transition-colors ${idx === currentImageIndex ? "bg-[rgb(115,40,40)]" : "bg-[rgb(160,80,80)]"}`}
                                    ></button>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </section>   
        </main>
    );
};

export default BISClub;
