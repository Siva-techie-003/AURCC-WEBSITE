import React from 'react';
import data from '../assets/tamil mandram.json';
import './TamilMandram.css';

const TamilMandram = () => {
    return (
        <main className="flex-grow min-h-screen">
            {/* Hero section */}
            <section className="relative w-full min-h-[35vh] sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] overflow-hidden flex items-center justify-center">
                <img src="/temple5.webp" alt="Tamil Mandram" className="absolute inset-0 w-full h-full object-cover object-center" />
                <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center z-10 px-2">
                    <div className="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 md:py-6 lg:py-8 xl:py-10 flex flex-col items-center w-full max-w-xl border border-white/30 animate-slideIn">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white drop-shadow-lg tracking-wide text-center leading-tight">{data.name}</h1>
                    </div>
                </div>
            </section>

            {/* Navigation Tabs - Retro Style */}
            <nav className="w-full text-white shadow-xl py-4 bg-[#23120b] sticky top-0 z-30">
                <div className="container mx-auto px-4">
                    <ul className="flex flex-wrap justify-center gap-4">
                        <li>
                            <a href="#overview" className="px-6 py-2 block text-sm lg:text-base font-bold bg-[#3c2f25] text-white hover:text-[#fdb827] rounded-full transition-all border border-[#4d3c2e]">
                                முகப்பு
                            </a>
                        </li>
                        <li>
                            <a href="#events" className="px-6 py-2 block text-sm lg:text-base font-bold bg-[#3c2f25] text-white hover:text-[#fdb827] rounded-full transition-all border border-[#4d3c2e]">
                                நிகழ்வுகள்
                            </a>
                        </li>
                        <li>
                            <a href="#staff" className="px-6 py-2 block text-sm lg:text-base font-bold bg-[#3c2f25] text-white hover:text-[#fdb827] rounded-full transition-all border border-[#4d3c2e]">
                                பொறுப்பாளர்
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Content section */}
            <section className="relative py-12 sm:py-20 px-4 mx-auto overflow-hidden">
                {/* Background Decorative Overlay */}
                <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{ backgroundImage: 'url(/kalvettu.webp)', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}
                ></div>

                <div className="relative z-10 max-w-5xl mx-auto space-y-12 sm:space-y-16">
                    {/* Overview Section */}
                    <div id="overview" className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#e5d5c0] animate-popIn">
                        <div className="bg-[#23120b] py-6 px-8 border-b-4 border-[#fdb827]">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#fdb827] font-bold text-center">முகப்பு</h2>
                        </div>
                        <div className="p-8 sm:p-12">
                            <p className="text-base lg:text-lg xl:text-xl text-[#3c2f25] font-medium leading-loose text-justify italic">
                                {data.முகப்பு}
                            </p>
                        </div>
                    </div>

                    {/* Events Section */}
                    <div id="events" className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#e5d5c0] animate-popIn">
                        <div className="bg-[#23120b] py-6 px-8 border-b-4 border-[#fdb827]">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#fdb827] font-bold text-center">நிகழ்வுகள்</h2>
                        </div>
                        <div className="p-8 sm:p-12">
                            <ul className="space-y-6">
                                {(Array.isArray(data?.நிகழ்வுகள்) ? data.நிகழ்வுகள் : []).map((event, index) => (
                                    <li key={index} className="flex gap-4 items-start group animate-fadeInUp">
                                        <span className="bg-[#fdb827] text-[#23120b] w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 mt-1 shadow-md group-hover:scale-110 transition-transform">{index + 1}</span>
                                        <p className="text-base lg:text-lg xl:text-xl text-[#3c2f25] font-semibold text-left">{event}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Staff Section */}
                    <div id="staff" className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#e5d5c0] animate-popIn">
                        <div className="bg-[#23120b] py-6 px-8 border-b-4 border-[#fdb827]">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#fdb827] font-bold text-center">பொறுப்பாளர்</h2>
                        </div>
                        <div className="p-8 sm:p-12 flex justify-center">
                            <div className="bg-amber-50 rounded-2xl p-8 shadow-inner border border-amber-100 max-w-lg w-full text-center hover:bg-white transition-colors group">
                                <div className="w-20 h-20 bg-[#23120b] text-[#fdb827] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:rotate-12 transition-transform">
                                    <span className="text-4xl">🔱</span>
                                </div>
                                <h3 className="text-xl lg:text-2xl font-bold text-[#23120b] mb-4 border-b-2 border-amber-200 pb-2">அவைத்தலைவர்</h3>
                                <div className="space-y-3">
                                    <p className="text-lg text-gray-800"><span className="font-bold text-[#3c2f25]">பெயர்:</span> <span className="font-medium text-emerald-900">{data.பொறுப்பாளர்.அவைத்தலைவர்.பெயர்}</span></p>
                                    <p className="text-lg text-gray-800"><span className="font-bold text-[#3c2f25]">மின்னஞ்சல்:</span> <a href={`mailto:${data.பொறுப்பாளர்.அவைத்தலைவர்['அவர்களின் மின்னஞ்சல்']}`} className="text-[rgb(110,35,35)] hover:underline">{data.பொறுப்பாளர்.அவைத்தலைவர்['அவர்களின் மின்னஞ்சல்']}</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TamilMandram;
