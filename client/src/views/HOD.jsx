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
        <div className="min-h-screen bg-white py-12 px-4 text-left pt-[120px] sm:pt-[140px] lg:pt-[180px]">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-16 animate-fadeIn">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-[rgb(90,20,20)] uppercase tracking-tighter font-serif mb-4">Head of the Departments</h1>
                    <div className="flex justify-center">
                        <span className="block w-24 sm:w-32 h-2 rounded-full bg-gradient-to-r from-[rgb(115,63,63)] via-[rgb(115,45,45)] to-[rgb(115,25,25)]"></span>
                    </div>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {hods.map((hod, index) => (
                        <div
                            key={index}
                            className="hod-card bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden flex flex-col items-center transition-all duration-300 w-full max-w-96 h-[380px] mx-auto animate-fadeInUp"
                        >
                            {/* Header Section */}
                            <div className="w-full h-24 bg-[rgb(110,35,35)] relative flex justify-center">
                            </div>

                            {/* Profile Image Section */}
                            <div className="relative -mt-16 flex justify-center">
                                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-md bg-white flex items-center justify-center">
                                    <img
                                        src={`${BACKEND_URL}/${hod.photo}`}
                                        alt={hod.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full p-6 flex flex-col items-center flex-grow text-center justify-center">
                                <h2 className="text-xl font-bold text-[rgb(110,35,35)] font-serif mb-2 leading-tight uppercase">{hod.name}</h2>
                                <div className="flex flex-col gap-2">
                                    <div className="px-4 py-1.5 bg-[rgb(245,240,240)] rounded-full border border-[rgb(220,200,200)] flex items-center justify-center">
                                        <span className="text-xs font-bold text-[rgb(110,35,35)] uppercase tracking-wide text-center">{hod.department}</span>
                                    </div>
                                    {/* <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Head of the Department</p> */}
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
