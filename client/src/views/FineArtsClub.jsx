import React, { useState, useEffect, useRef, useMemo } from 'react';
import './FineArtsClub.css';

const DEFAULT_FINE_ARTS_IMAGES = [
    "/public/fineart_club/1.png",
    "/public/fineart_club/2.png",
    "/public/fineart_club/3.png",
    "/public/fineart_club/4.png",
    "/public/fineart_club/5.png",
    "/public/fineart_club/6.png",
    "/public/fineart_club/7.png",
    "/public/fineart_club/8.png",
    "/public/fineart_club/9.png",
    "/public/fineart_club/10.png",
    "/public/fineart_club/11.png",
    "/public/fineart_club/12.png",
    "/public/fineart_club/13.png",
    "/public/fineart_club/14.png",
    "/public/fineart_club/15.png",
    "/public/fineart_club/16.png",
    "/public/fineart_club/17.png",
    "/public/fineart_club/18.jpg",
    "/public/fineart_club/19.jpg",
    "/public/fineart_club/20.jpg",
    "/public/fineart_club/Picture4.jpg",
    "/public/fineart_club/Picture5.jpg",
    "/public/fineart_club/Picture6.jpg",
    "/public/fineart_club/Picture7.jpg",
    "/public/fineart_club/Picture8.jpg",
    "/public/fineart_club/Picture9.jpg",
    "/public/fineart_club/Picture11.jpg",
    "/public/fineart_club/Picture12.jpg",
    "/public/fineart_club/Picture13.jpg",
    "/public/fineart_club/Picture14.jpg",
    "/public/fineart_club/Picture15.jpg"
];

const FineArtsClub = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);
    const [data, setData] = useState(null);
    const [siteSettings, setSiteSettings] = useState(null);

    useEffect(() => {
        fetch("/api/finearts")
            .then(res => res.json())
            .then(result => {
                console.log("Fine Arts Data:", result);
                setData(result);
            })
            .catch(err => console.error(err));

        fetch("/api/site-settings")
            .then((res) => res.json())
            .then((settings) => setSiteSettings(settings))
            .catch((err) => console.error(err));
    }, []);

    // Dynamic Gallery Data - combines all images from settings or defaults to all 31 folder images
    const imageList = useMemo(() => {
        if (siteSettings?.fineArtsGallery && siteSettings.fineArtsGallery.length > 0) {
            const set = new Set(siteSettings.fineArtsGallery);
            const combined = [...siteSettings.fineArtsGallery];
            for (const img of DEFAULT_FINE_ARTS_IMAGES) {
                if (!set.has(img)) {
                    combined.push(img);
                }
            }
            return combined;
        }
        return DEFAULT_FINE_ARTS_IMAGES;
    }, [siteSettings]);

    const galleryImages = useMemo(() => {
        return imageList.map((src, index) => ({
            src,
            alt: `Fine Arts Club Memory ${index + 1}`,
            description: 'Celebrating our vibrant creativity and passion for the arts'
        }));
    }, [imageList]);

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
        return <p className="text-center mt-20">Loading Fine Arts Club...</p>;
    }

    return (
        <main className="flex-grow font-sans bg-white pt-[106px] sm:pt-[130px]">
            {/* Hero section */}
            <section className="relative w-full min-h-[35vh] sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] overflow-hidden flex items-center justify-center">
                <img src="/sing.jpg" alt="Fine Arts Club" className="absolute inset-0 w-full h-full object-cover  blur-[0.5px]" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-2">
                    <div className=" backdrop-blur-md bg-brown/30 rounded-2xl shadow-lg px-6 py-6 md:py-10 flex flex-col items-center w-full max-w-2xl mx-auto border border-white/30 animate-popIn">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight">Fine Arts Club</h1>
                        <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white drop-shadow text-center font-medium">Celebrating Creativity and Talent</p>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="container mx-auto py-8 sm:py-12 lg:py-14 px-4">
                <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10 lg:gap-12">
                    {/* Description Section */}
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-fadeIn">
                        <div className="bg-[rgb(110,35,35)] py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3">
                            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center">Overview of LAYAM RHYTHM</h2>
                        </div>
                        <div className="p-4 sm:p-6 md:p-8 lg:p-10 text-left">
                            <p className="text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed">{data.description}</p>
                        </div>
                    </div>

                    {/* Coordinator Section */}
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-fadeIn">
                        <div className="bg-[rgb(110,35,35)] py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3">
                            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center">Coordinator</h2>
                        </div>
                        <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex justify-center">
                            <div className="bg-white/80 rounded-xl shadow-md p-6 border border-gray-100 flex flex-col gap-2 max-w-md w-full text-center animate-fadeInUp">
                                <img src={`/${data.Coordinator.photo}`} alt={data.Coordinator.Name} className="w-28 h-32 object-cover object-top mx-auto" />
                                <div className="font-bold text-lg lg:text-xl text-[rgb(110,35,35)]">{data.Coordinator.Name}</div>
                                <div className="text-sm lg:text-base text-gray-700 font-semibold">{data.Coordinator.Designation}</div>
                                <div className="text-sm lg:text-base text-gray-700 font-semibold">{data.Coordinator.Department}</div>
                                <div className="text-sm lg:text-base text-gray-700 font-semibold">{data.Coordinator.Email}</div>
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
                            <div className="relative flex items-center justify-center py-10 overflow-hidden" style={{ "--current-index": currentImageIndex }}>
                                <button onClick={prevImage} className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-[rgb(115,25,25)] text-white p-3 rounded-full z-30 shadow-lg group">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                                </button>
                                <div className="w-full" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                                    <div className="gallery-container">
                                        {galleryImages.map((image, idx) => (
                                            <div key={idx} className={`gallery-frame ${idx === currentImageIndex ? 'active' : ''}`}>
                                                <div className="relative group overflow-hidden rounded-xl shadow-2xl h-full w-full">
                                                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
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
                            <div className="flex flex-wrap justify-center mt-8 gap-1.5 max-w-3xl mx-auto px-4">
                                {galleryImages.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => goToImage(idx)}
                                        aria-label={`Go to slide ${idx + 1}`}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${
                                            idx === currentImageIndex
                                                ? 'w-6 bg-[rgb(115,40,40)] scale-110'
                                                : 'w-2 bg-[rgb(200,140,140)] hover:bg-[rgb(160,80,80)]'
                                        }`}
                                    ></button>
                                ))}
                            </div>

                            {/* All Photos Grid Section */}
                            <div className="mt-16 text-left">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[rgb(110,35,35)]/20 pb-4 mb-8 gap-2">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-[rgb(100,25,25)]">
                                            All Photos Collection ({galleryImages.length})
                                        </h3>
                                        <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
                                            Click any photo to view in the featured showcase above
                                        </p>
                                    </div>
                                    <div className="text-xs font-semibold text-[rgb(115,40,40)] bg-[rgb(245,235,235)] px-3 py-1.5 rounded-full self-start sm:self-auto">
                                        Showing 1 - {galleryImages.length} of {galleryImages.length}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                                    {galleryImages.map((image, idx) => (
                                        <div
                                            key={idx}
                                            onClick={() => {
                                                goToImage(idx);
                                                const el = document.getElementById("gallery");
                                                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                                            }}
                                            className={`group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border-2 bg-gray-100 ${
                                                idx === currentImageIndex
                                                    ? "border-[rgb(115,25,25)] ring-2 ring-[rgb(115,25,25)]/40 scale-[1.02]"
                                                    : "border-transparent hover:scale-105"
                                            }`}
                                        >
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                                                <span className="text-white text-xs font-medium">
                                                    Photo #{idx + 1}
                                                </span>
                                            </div>
                                            {idx === currentImageIndex && (
                                                <div className="absolute top-2 left-2 bg-[rgb(115,25,25)] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                                                    Active
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    );
};

export default FineArtsClub;
