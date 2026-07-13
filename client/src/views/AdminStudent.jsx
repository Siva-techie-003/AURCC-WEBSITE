import React, { useState, useEffect } from 'react';

const AdminStaffCard = ({ member }) => {
    const [error, setError] = useState(false);
    return (
        <div className="admin-card bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden flex flex-col items-center transition-all duration-300 w-[270px] sm:w-96 h-[290px] sm:h-[360px]">
            <div className="w-full h-16 sm:h-24 bg-[rgb(110,35,35)] relative flex justify-center"></div>
            <div className="relative -mt-14 sm:-mt-[72px] flex justify-center">
                <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white flex justify-center items-center">
                    {member.image && !error ? (
                        <img src={`/public/${member.image}`} alt={member.name} className="w-full h-full object-cover object-top" onError={() => setError(true)} />
                    ) : (
                        <span className="text-4xl text-[rgba(110, 35, 35, 1)]">👤</span>
                    )}
                </div>
            </div>
            <div className="w-full px-2 py-2 sm:p-6 flex flex-col items-center flex-grow text-center justify-start pt-2 sm:pt-4 min-w-0">
                <h2 className="text-base sm:text-xl font-bold text-[rgb(110,35,35)] font-serif mb-1 sm:mb-2">{member.name}</h2>
                <p className="text-xs sm:text-sm font-semibold text-gray-700 font-sans break-words w-full px-1">{member.position || 'Position not available'}</p>
            </div>
        </div>
    );
};

const AdminStudent = () => {
    const [section, setSection] = useState(null);

    useEffect(() => {
        fetch("/api/administration")
            .then(res => res.json())
            .then(data => {
                setSection(
                    data.general_administration_iii.STUDENT_SECTION
                );
            });
    }, []);

    if (!section) return <p className="text-center">Loading...</p>;

    return (
        <div className="bg-white min-h-screen pt-[126px] sm:pt-[130px]">
            <div className="text-center md:py-6 py-3 bg-[rgb(110,35,35)]">
                <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold font-serif text-white tracking-wide uppercase">
                    Administrative Staff
                </h1>
            </div>
            <div className="mx-auto py-4 sm:py-6 lg:py-8 px-2 md:px-4 font-serif">
                <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8">
                    {/* Section heading */}
                    <div className="text-center">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 font-serif uppercase mb-2">General Administration-III</h2>
                        <div className="flex justify-center mb-4">
                            <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
                        </div>
                        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-600 font-serif uppercase tracking-wide">Student Section</h3>
                    </div>
                    {section.DEPUTY_MANAGER && (
                        <div className="mb-4 sm:mb-6">
                            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
                                {section.DEPUTY_MANAGER.map((member) => (
                                    <AdminStaffCard key={member.name} member={member} />
                                ))}
                            </div>
                        </div>
                    )}
                    {section.STAFFS && (
                        <div className="mb-4 sm:mb-6">
                            <h4 className="text-base lg:text-lg xl:text-2xl font-semibold mb-4 text-center font-serif tracking-wide">Staff Members</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-">
                                {section.STAFFS.map((member) => (
                                    <AdminStaffCard key={member.name} member={member} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminStudent;
