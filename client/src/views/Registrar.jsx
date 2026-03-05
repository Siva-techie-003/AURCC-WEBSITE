import React,{useEffect,useState} from 'react';
import './Registrar.css';

const Registrar = () => {
  const [administrators, setAdministrators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetch("http://localhost:5000/api/administrators")
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
  const BACKEND_URL = "http://localhost:5000";

  const getPhotoPath = (photo) => {
  return photo ? `${BACKEND_URL}/${photo}` : `${BACKEND_URL}/default.jpg`;
};

    return (
        <div className="bg-white min-h-screen py-12 sm:py-20 px-4 text-left">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <header className="mb-16 text-center animate-fadeIn">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-[rgb(90,20,20)] uppercase tracking-tighter font-serif mb-4">University Leadership</h1>
                    <div className="flex justify-center">
                        <span className="block w-24 sm:w-32 h-2 rounded-full bg-gradient-to-r from-[rgb(115,63,63)] via-[rgb(115,45,45)] to-[rgb(115,25,25)]"></span>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-4">
                    {administrators.map((member, index) => (
                        <div
                            key={index}
                            className="admin-card bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden flex flex-col items-center transition-all duration-300 w-full max-w-96 h-[340px] mx-auto"
                        >
                            {/* Header Section */}
                            <div className="w-full h-24 bg-[rgb(110,35,35)] relative flex justify-center">
                            </div>

                            {/* Profile Image Section */}
                            <div className="relative -mt-16 flex justify-center">
                                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-md bg-white flex items-center justify-center">
                                    <img
                                         src={getPhotoPath(member.image)}
                    alt={member.name}
                    className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full p-6 flex flex-col items-center flex-grow text-center justify-center">
                                <h2 className="text-xl font-bold text-[rgb(110,35,35)] font-serif mb-2 leading-tight uppercase">{member.name}</h2>
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm font-semibold text-gray-700 font-sans tracking-wide uppercase">{member.position}</p>
                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{member.university}</p>
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
