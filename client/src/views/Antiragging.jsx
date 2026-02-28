import React from 'react';
import jsonData from '../assets/antiragging.json';
import './Antiragging.css';

const Antiragging = () => {
    return (
        <main className="bg-gradient-to-br from-[rgb(115,63,63)] via-[rgb(115,45,45)] to-white min-h-screen font-sans text-gray-800">
            {/* Hero Section */}
            <section className="relative w-full min-h-[35vh] sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] overflow-hidden flex items-center justify-center">
                <img src="/offices.webp" alt="Anti Ragging Cell" className="absolute inset-0 w-full h-full object-cover object-center" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-2">
                    <div className="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 md:py-6 lg:py-8 xl:py-10 flex flex-col items-center w-full max-w-2xl border border-white/30">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight">Anti Ragging Cell</h1>
                        <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white drop-shadow text-center font-medium">Resources, forms, and committee information for anti-ragging</p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-7xl mx-auto py-8 sm:py-12 lg:py-14 px-4 flex flex-col gap-8 sm:gap-10 lg:gap-12">
                <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-red-700 to-red-500 py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3">
                        <span className="text-lg lg:text-xl text-white">🛡️</span>
                        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center">Anti Ragging Resources</h2>
                    </div>
                    <div className="p-4 sm:p-6 md:p-8 lg:p-10 text-left">
                        <div className="bg-red-50 p-4 rounded-lg border border-red-100 mb-8 sm:mb-10">
                            <p className="text-red-800 font-semibold mb-2">Zero Tolerance Policy</p>
                            <p className="text-sm lg:text-base text-gray-700">Anna University maintains a zero-tolerance policy towards ragging. Students found guilty of ragging will face strict disciplinary action as per UGC guidelines.</p>
                        </div>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { title: 'Online Anti Ragging Affidavit Form', key: 'Online Anti Ragging Affidavit Form' },
                                { title: 'Step by Step Guide', key: 'Step by Step Guide on How to Fill An Online Anti Ragging Affidavit' },
                                { title: 'Committee Members', key: 'Anti Ragging Committe Members' },
                                { title: 'Squad Committee Members', key: 'Anti Ragging Squad Committe Members' },
                                { title: 'Online Complaint Form', key: 'Online Complaint Form' }
                            ].map((item, i) => (
                                <li key={i}>
                                    <a
                                        className="flex items-center p-4 bg-white border border-gray-200 rounded-xl hover:bg-red-50 hover:border-red-300 transition-all duration-300 shadow-sm group"
                                        href={jsonData[item.key]}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                        </div>
                                        <span className="text-[rgb(115,40,40)] font-semibold group-hover:text-red-700">{item.title}</span>
                                        <svg className="ml-auto w-5 h-5 text-gray-400 group-hover:text-red-500 transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Antiragging;
