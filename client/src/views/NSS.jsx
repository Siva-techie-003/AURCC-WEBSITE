import React, { useState, useEffect } from "react";
import "./NSS.css";

const NSS = () => {
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
  const [data, setData] = useState(null);
  const [siteSettings, setSiteSettings] = useState(null);
  // State for Image Gallery
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  useEffect(() => {
    fetch("/api/nss")
      .then((res) => res.json())
      .then((result) => {
        console.log("NSS API:", result);
        setData(result);
      })
      .catch((err) => console.error(err));

    fetch("/api/site-settings")
      .then((res) => res.json())
      .then((settings) => setSiteSettings(settings))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (!data?.activities) return;

    const interval = setInterval(() => {
      setCurrentActivityIndex((prev) => (prev + 1) % data.activities.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [data]);

  // Static Data
  const galleryImages = siteSettings?.nssGallery?.map((src, index) => ({
    src,
    alt: "NSS Activity",
    description: [
      "Engaging in social welfare and community outreach",
      "Volunteers collaborating on campus improvement projects",
      "NSS special camp highlights and team activities",
      "Development sessions for NSS student volunteers",
      "NSS volunteers participating in community service activities",
      "NSS unit awareness programs and student engagement",
      "Service to humanity through dedicated NSS programs",
      "NSS volunteers working together for a social cause",
      "Promoting social responsibility at AURCC campus",
      "Sustainable development initiatives by the NSS unit",
      "NSS group activities and community engagement",
      "The journey of service: NSS AURCC highlights"
    ][index % 12]
  })) || [];


  // Logic for Image Gallery
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };
  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
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
    <main className="flex-grow font-sans bg-white pt-[126px] sm:pt-[130px]">
      {/* Hero section */}
      <section className="relative w-full min-h-[25vh] sm:min-h-[30vh] md:min-h-[35vh] lg:min-h-[40vh] overflow-hidden flex items-center justify-center border-b-4 border-[#f5c842] bg-white">
        <img
          src={siteSettings?.nssLogo || "/public/nsslogo.png"}
          alt="National Service Scheme (NSS) Logo at AURCC"
          className="absolute inset-0 w-full h-full object-contain object-center"
        />
      </section>
      {/* Content sections */}
      <section className="container mx-auto pt-0 pb-8 sm:py-12 lg:py-14 px-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10 lg:gap-12">
          {/* About Card */}
          {/* Section Heading */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-800 font-serif uppercase mb-2">
              About
            </h2>

            <div className="flex justify-center">
              <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
            </div>
          </div>

          {/* Content Box */}
          <div className="bg-gray-100 max-w-7xl mx-auto px-4 p-9 rounded-2xl border border-[rgb(200,120,120)]">
            <div className="px-8 py-8">
              <p className="lg:text-lg xl:text-lg font-medium text-gray-500 text-center leading-relaxed">
                {data.description}
              </p>
            </div>
          </div>


          {/* Activities */}
          <div className="text-center mb-2">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-800 font-serif uppercase mb-2">
              Activities
            </h2>

            <div className="flex justify-center">
              <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
            </div>
          </div>
          <div className="max-w-md mx-auto px-4 py-4 w-full">
            <div className="overflow-hidden h-24 sm:h-28 rounded-xl bg-white border-2 border-[rgb(110,35,35)] shadow-sm flex items-center justify-center p-3 relative">
              <div className="relative w-full h-full">
                {(Array.isArray(data?.activities) ? data.activities : []).map(
                  (activity, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 flex items-center justify-center px-4 text-center text-sm sm:text-base lg:text-lg font-bold text-[rgb(110,35,35)] transition-all duration-300 ${
                        currentActivityIndex === idx
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95 pointer-events-none"
                      }`}
                    >
                      {activity}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* NSS Coordinators Card */}
          <div className="max-w-3xl mx-auto w-full bg-white/70 backdrop-blur-md rounded-2xl shadow-lg animate-fadeIn border border-gray-100 overflow-hidden">
            <div className="bg-[rgb(110,35,35)] py-3 sm:py-4 md:py-5 flex items-center justify-center gap-2 sm:gap-3">
              <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center">NSS Coordinators</h2>
            </div>
            <div className="p-4 sm:p-6 md:p-8 lg:p-10">
              <div className="flex flex-wrap justify-center gap-6">
                {(Array.isArray(data?.nss_coordinator?.['Office Bearers']) ? data.nss_coordinator['Office Bearers'] : []).map((coordinator, i) => (
                  <div
                    key={i}
                    className="w-full sm:w-64 bg-white/80 rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col justify-center items-center text-center hover:shadow-md transition-all hover:-translate-y-1 hover:border-[rgb(110,35,35)]"
                  >
                    <div className="w-24 h-40 sm:w-28 sm:h-32 mb-4">
                      <img
                        src={`/public${coordinator.Photo}`}
                        alt={coordinator.Name}
                        className="w-full h-full object-cover object-top rounded-full border-4 border-[rgb(115,25,25)] shadow-md transition-transform duration-300 hover:scale-105"
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
                    className="flex transition-transform duration-700 ease-in-out gallery-container"
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
                            <p className="text-white text-sm sm:text-lg md:text-xl font-medium leading-tight">
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

export default NSS;
