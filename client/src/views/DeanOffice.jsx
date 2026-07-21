import React, { useEffect, useState } from 'react';
import './DeanOffice.css';

const DeanOffice = () => {
  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/dean-office")
      .then(res => res.json())
      .then(data => {
        console.log("DEAN OFFICE API:", data);
        setStaffList(data.staff || []);
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

  const BACKEND_URL = "";

    return (
        <div className="bg-white min-h-screen py-8 sm:py-12 lg:py-14 px-4 pt-[150px] sm:pt-[140px] lg:pt-[180px]">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-[rgb(100,25,25)] tracking-wide text-center uppercase mb-4">Dean Office Staff</h1>
                <div className="flex justify-center mb-10">
                    <span className="block w-24 sm:w-32 h-2 rounded-full bg-[#f5c842]"></span>
                </div>

                <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
                    {staffList.map((member, i) => (
                        <div key={i} className="dean-card bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden flex flex-col items-center transition-all duration-300 w-[270px] sm:w-96 h-[300px] sm:h-[380px]">
                            {/* Header Section */}
                            <div className="w-full h-16 sm:h-24 bg-[rgb(110,35,35)] relative flex justify-center">
                            </div>

                            {/* Profile Image Section */}
                            <div className="relative -mt-14 sm:-mt-20 flex justify-center">
                                <div className="w-24 h-32 sm:w-32 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white flex items-center justify-center">
                                    {member.image ? (
                                        <img
                                            src={`${BACKEND_URL}/public/${member.image}`}
                                            alt=""
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "/public/default-staff.jpg";
                                            }}
                                        />
                                    ) : (
                                        <img
                                            src="/public/default-staff.jpg"
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full px-2 py-2 sm:p-6 flex flex-col items-center flex-grow text-center justify-start pt-2 sm:pt-4 min-w-0">
                                <h2 className="text-base sm:text-xl font-bold text-[rgb(110,35,35)] font-serif mb-1 sm:mb-2 leading-tight uppercase">{member.name}</h2>
                                <div className="flex flex-col gap-1 w-full items-center">
                                    <p className="text-xs sm:text-sm font-semibold text-gray-700 font-sans tracking-wide uppercase break-words w-full px-1">{member.position || 'Position not available'}</p>
                                    <p className="text-[10px] sm:text-xs font-semibold text-black font-sans mt-1 leading-snug">Office of the Dean, Regional Campus Coimbatore</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DeanOffice;
