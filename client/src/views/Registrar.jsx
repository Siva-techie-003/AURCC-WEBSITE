import React, { useEffect, useState } from 'react';
import './Registrar.css';

const Registrar = () => {
    const [administrators, setAdministrators] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/administrators")
            .then(res => res.json())
            .then(data => {
                console.log("ADMIN API:", data); // should be ARRAY
                setAdministrators(data);
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
    const BACKEND_URL = "/public";

    const getPhotoPath = (photo) => {
        return photo ? `${BACKEND_URL}/${photo}` : `${BACKEND_URL}/default-staff.jpg`;
    };

    const toTitleCase = (str) => {
        if (!str) return "";
        const minorWords = ["of", "to", "and", "in", "the", "for", "with", "a", "an"];
        let cleaned = str.replace(/\s*,\s*/g, ", ");
        cleaned = cleaned.replace(/\s*\.\s*([A-Za-z])/g, ", $1");
        return cleaned
            .toLowerCase()
            .split(/(\s+|,|\.|\/)/)
            .map((word, index, arr) => {
                if (/^(\s+|,|\.|\/)$/.test(word) || !word) return word;
                const isFirst = index === 0 || (index > 0 && /^(\s+|,|\.|\/)$/.test(arr[index - 1]) && arr[index - 1] !== ' ');
                if (minorWords.includes(word) && !isFirst) {
                    return word;
                }
                if (word === "ias") return "I.A.S.";
                return word.charAt(0).toUpperCase() + word.slice(1);
            })
            .join("");
    };

    const renderUniversityText = (text) => {
        const formatted = toTitleCase(text);
        if (!formatted.includes(",")) return formatted;
        const index = formatted.indexOf(",");
        const part1 = formatted.slice(0, index + 1);
        const part2 = formatted.slice(index + 1).trim();
        return (
            <>
                {part1}
                <br />
                {part2}
            </>
        );
    };

    return (
        <div className="bg-white min-h-screen py-12 sm:py-20 px-4 text-left pt-[150px] sm:pt-[140px] lg:pt-[180px]">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <header className="mb-16 text-center animate-fadeIn">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-[rgb(90,20,20)] uppercase tracking-tighter font-serif mb-4">University Leadership</h1>
                    <div className="flex justify-center">
                        <span className="block w-24 sm:w-32 h-2 rounded-full bg-[#f5c842]"></span>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-4">
                    {administrators.map((member, index) => (
                        <div
                            key={index}
                            className="admin-card bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden flex flex-col items-center transition-all duration-300 w-full max-w-96 h-[380px] mx-auto"
                        >
                            {/* Header Section */}
                            <div className="w-full h-24 bg-[rgb(110,35,35)] relative flex justify-center">
                            </div>

                            {/* Profile Image Section */}
                            <div className="relative -mt-[72px] flex justify-center">
                                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white flex items-center justify-center">
                                    <img
                                        src={getPhotoPath(member.image)}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full p-6 flex flex-col items-center flex-grow text-center justify-center">
                                <h2 className="text-xl font-bold text-[rgb(110,35,35)] font-serif mb-2 leading-tight uppercase">{member.name}</h2>
                                <div className="flex flex-col gap-1 w-full items-center">
                                    <p className="text-sm font-semibold text-gray-700 font-sans tracking-wide uppercase">{member.position}</p>
                                    <p className="text-xs font-semibold text-black tracking-wide text-center w-full">{renderUniversityText(member.university)}</p>
                                    {member.email && <p className="text-xs text-blue-500 font-sans mt-2">{member.email}</p>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Registrar;
