import React,{useEffect,useState} from 'react';
import './HOD.css';

const HOD = () => {
      const [hods, setHods] = useState([]);
  const [loading, setLoading] = useState(true);

  const BACKEND_URL = "";

  useEffect(() => {
    fetch("/api/hods")
      .then(res => res.json())
      .then(data => {
        console.log("HOD API:", data);
        setHods(data[0]?.departments || []);
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

  if (hods.length === 0) {
    return <p className="text-center mt-20">No HOD details available</p>;
  }

    return (
        <div className="min-h-screen bg-white py-12 px-4 text-left pt-[150px] sm:pt-[140px] lg:pt-[180px]">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-16 animate-fadeIn">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-[rgb(90,20,20)] uppercase tracking-tighter font-serif mb-4">Head of the Departments</h1>
                    <div className="flex justify-center">
                        <span className="block w-24 sm:w-32 h-2 rounded-full bg-[#f5c842]"></span>
                    </div>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {hods.map((hod, index) => (
                        <div
                            key={index}
                            className="hod-card bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden flex flex-col items-center transition-all duration-300 w-full max-w-96 h-[350px] mx-auto animate-fadeInUp"
                        >
                            {/* Header Section */}
                            <div className="w-full h-24 bg-[rgb(110,35,35)] relative flex justify-center">
                            </div>

                            {/* Profile Image Section */}
                            <div className="relative -mt-20 flex justify-center">
                                <div className="w-32 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white flex items-center justify-center">
                                    <img
                                        src={`${BACKEND_URL}/${hod.photo}`}
                                        alt={hod.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full px-2 py-4 sm:p-6 flex flex-col items-center flex-grow text-center justify-start pt-3 min-w-0">
                                <h2 className="text-xl font-bold text-[rgb(110,35,35)] font-serif mb-2 leading-tight ">{hod.name}</h2>
                                <div className="flex flex-col gap-2 w-full items-center">
                                    <div className="px-1.5 py-1 sm:px-4 sm:py-1.5 bg-[rgb(245,240,240)] rounded-full border border-[rgb(220,200,200)] flex items-center justify-center max-w-full">
                                        <span className="text-[8.5px] min-[360px]:text-[9.5px] sm:text-xs font-black text-[rgb(110,35,35)] tracking-wide text-center whitespace-nowrap">{hod.department}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HOD;
