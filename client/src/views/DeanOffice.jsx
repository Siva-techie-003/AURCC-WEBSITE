import React, { useEffect, useState } from 'react';
import './DeanOffice.css';

const DeanOffice = () => {
  const [staffMember, setStaffMember] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/dean-office")
      .then(res => res.json())
      .then(data => {
        console.log("DEAN OFFICE API:", data);
        setStaffMember(data.staff?.[0] || null);
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
        <div className="bg-white min-h-screen py-8 sm:py-12 lg:py-14 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-[rgb(100,25,25)] tracking-wide text-center uppercase mb-4">Dean Office Staff</h1>
                <div className="flex justify-center mb-10">
                    <span className="block w-24 sm:w-32 h-2 rounded-full bg-gradient-to-r from-[rgb(115,63,63)] via-[rgb(115,45,45)] to-[rgb(115,25,25)]"></span>
                </div>

                <div className="flex justify-center">
                    <div className="dean-card bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden flex flex-col items-center transition-all duration-300 w-full max-w-96 h-[340px]">
                        {/* Header Section */}
                        <div className="w-full h-24 bg-[rgb(110,35,35)] relative flex justify-center">
                        </div>

                        {/* Profile Image Section */}
                        <div className="relative -mt-16 flex justify-center">
                            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-md bg-white flex items-center justify-center">
                                <img
                                    src={`${BACKEND_URL}/${staffMember.image}`}
                                    alt={staffMember.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="w-full p-6 flex flex-col items-center flex-grow text-center justify-center">
                            <h2 className="text-xl font-bold text-[rgb(110,35,35)] font-serif mb-2 leading-tight uppercase">{staffMember.name}</h2>
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-semibold text-gray-700 font-sans tracking-wide uppercase">{staffMember.position || 'Position not available'}</p>
                                <p className="text-xs text-gray-400 font-sans italic mt-2">Office of the Dean, Regional Campus Coimbatore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeanOffice;
