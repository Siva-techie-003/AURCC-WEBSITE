import React,{useEffect,useState} from 'react';
import './COD.css';

const COD = () => {
    const [centres, setCentres] = useState([]);
  const [loading, setLoading] = useState(true);

  const BACKEND_URL = "";

  useEffect(() => {
    fetch("/api/cell-coordinators")
      .then(res => res.json())
      .then(data => {
        console.log("COD API:", data);
        setCentres(data.centres || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  if (centres.length === 0) {
    return <p className="text-center mt-20">No coordinator details available</p>;
  }

  // dual-member cards first
  const sorted = [
    ...centres.filter(e => e.members.length > 1),
    ...centres.filter(e => e.members.length === 1)
  ];

    return (
        <div className="p-4 sm:p-6 md:p-9 bg-white min-h-screen pt-[120px] sm:pt-[140px] lg:pt-[180px]">
            <div className="text-center py-4 sm:py-5">
                <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[rgb(100,25,25)] tracking-wide font-serif">CELL COORDINATORS</h1>
                <div className="flex justify-center mt-2 mb-3 sm:mb-4">
                    <span className="block w-24 sm:w-32 h-2 rounded-full bg-[#f5c842]"></span>
                </div>
            </div>

            <div className="container mx-auto font-sans flex flex-col gap-16 mb-20 px-4">
                {sorted.map((entry, index) => (
                    <section key={index} className="w-full flex flex-col items-center">
                        {/* Centered Section Header */}
                        <div className="flex flex-col items-center mb-10 w-full max-w-xl">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[rgb(110,35,35)] uppercase tracking-[0.2em] text-center">
                                {entry.centre}
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[rgb(110,35,35)] to-transparent mt-4 opacity-40"></div>
                        </div>

                        {/* Members container - Centered using flexbox */}
                        <div className="flex flex-wrap justify-center gap-10 w-full px-4">
                            {entry.members.map((member, mIdx) => (
                                <div
                                    key={mIdx}
                                    className="cod-card bg-white rounded-2xl sm:rounded-3xl shadow-md border-2 border-[rgb(90,25,25)] overflow-hidden flex items-center p-4 sm:p-8 gap-4 sm:gap-8 hover:shadow-2xl transition-all duration-500 group w-full max-w-2xl"
                                >
                                    {/* Larger Square photo frame */}
                                    <div className="flex-shrink-0 w-20 h-20 sm:w-32 sm:h-32 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[rgb(110,35,35)] shadow-md bg-gray-50">
                                        <img
                                            src={`${BACKEND_URL}/${member.photo}`}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                    
                                    {/* Member info */}
                                    <div className="flex flex-col justify-center flex-grow min-w-0 gap-1 sm:gap-2">
                                        <h4 className="text-sm sm:text-lg font-bold text-[rgb(100,25,25)] uppercase leading-tight tracking-tight break-words">
                                            {member.name}
                                        </h4>
                                        {member.position && (
                                            <h5 className="text-xs sm:text-base font-semibold text-gray-700 uppercase leading-tight tracking-tight break-words">
                                                {member.position}
                                            </h5>
                                        )}
                                        {member.coordinator && (
                                            <p className="text-[10px] sm:text-sm font-medium text-gray-500 uppercase leading-tight tracking-tight break-words">
                                                {member.coordinator}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default COD;
