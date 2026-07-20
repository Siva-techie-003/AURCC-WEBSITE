import React, { useState, useEffect } from 'react';
import './Events.css';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('/data/events.json')
            .then(response => response.json())
            .then(data => setEvents(data))
            .catch(err => console.error("Error loading events:", err));
    }, []);

    return (
        <main className="min-h-screen bg-gray-50 pt-[180px] sm:pt-[220px] lg:pt-[180px] pb-12 px-4 text-left animate-fadeIn">
            <div className="max-w-4xl mx-auto">
                <header className="mb-10 text-center">
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[rgb(90,20,20)] uppercase tracking-tighter mb-3">Upcoming Events</h1>
                    <div className="h-1.5 w-24 bg-[rgb(115,40,40)] mx-auto rounded-full"></div>
                </header>

                <div className="space-y-4">
                    {events.length > 0 ? (
                        events.map((item, index) => (
                            <a
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 bg-white hover:bg-[rgb(220,140,140)]/20 transition-all rounded-xl border border-gray-200/60 group shadow-sm"
                            >
                                <div className="shrink-0 w-10 h-10 rounded-lg bg-[rgb(245,240,240)] border border-[rgb(220,200,200)] flex items-center justify-center text-[rgb(110,35,35)] transition-all">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="flex-grow min-w-0">
                                    <h3 className="text-sm sm:text-base font-bold text-gray-800 group-hover:text-[rgb(100,25,25)] transition-all leading-snug break-words">
                                        {item.name}
                                    </h3>
                                    <span className="text-[9px] font-black text-[rgb(120,45,45)] uppercase tracking-wider mt-1 block opacity-60">Event Details & Registration</span>
                                </div>
                                <svg className="shrink-0 w-4 h-4 text-gray-300 group-hover:text-[rgb(140,60,60)] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                            </a>
                        ))
                    ) : (
                        <div className="p-12 text-center bg-white rounded-xl border border-gray-200">
                            <svg className="w-10 h-10 text-gray-300 mx-auto mb-3 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">No upcoming events scheduled</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Events;
