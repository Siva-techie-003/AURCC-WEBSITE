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
        <main className="min-h-screen bg-gray-50 py-12 px-4 text-left">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12 text-center animate-fadeIn">
                    <h1 className="text-3xl lg:text-5xl font-black text-[rgb(90,20,20)] uppercase tracking-tighter mb-4">Upcoming Events</h1>
                    <div className="h-1.5 w-24 bg-[rgb(115,40,40)] mx-auto rounded-full"></div>
                </header>

                <section className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 animate-fadeInUp">
                    <div className="bg-[rgb(100,25,25)] p-6 flex justify-between items-center text-white">
                        <span className="text-xs font-black uppercase tracking-widest text-[rgb(180,100,100)]">Campus Events Tracker</span>
                        <span className="text-xl">📅</span>
                    </div>
                    <div className="divide-y divide-gray-50">
                        {events.length > 0 ? (
                            events.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-6 p-6 sm:p-8 hover:bg-[rgb(220,140,140)]/50 transition-all group"
                                >
                                    <div className="shrink-0 w-12 h-12 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-center justify-center text-xl group-hover:bg-[rgb(115,40,40)] group-hover:text-white transition-all">
                                        🌟
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-[rgb(100,25,25)] group-hover:translate-x-1 transition-all">
                                            {item.name}
                                        </h3>
                                        <span className="text-[10px] font-black text-[rgb(120,45,45)] uppercase tracking-widest mt-2 block opacity-60">Event Details & Registration</span>
                                    </div>
                                    <svg className="ml-auto w-5 h-5 text-gray-300 group-hover:text-[rgb(140,60,60)] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                                </a>
                            ))
                        ) : (
                            <div className="p-20 text-center">
                                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">⏳</div>
                                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">No upcoming events scheduled</p>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Events;
