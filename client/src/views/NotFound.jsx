import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-20 text-center relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[rgb(200,120,120)] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[rgb(200,120,120)] rounded-full translate-x-1/3 translate-y-1/3 opacity-30"></div>

            <div className="max-w-2xl relative z-10 animate-scale-in">
                <header className="mb-12">
                    <h1 className="text-8xl sm:text-9xl font-black text-[rgb(100,25,25)] tracking-tighter mb-4 opacity-10">404</h1>
                    <div className="relative -mt-20">
                        <h2 className="text-3xl sm:text-5xl font-black text-[rgb(90,20,20)] uppercase tracking-tighter mb-4">Lost in Transit</h2>
                        <div className="h-1.5 w-24 bg-[rgb(115,40,40)] mx-auto rounded-full mb-8"></div>
                    </div>
                    <p className="text-lg sm:text-xl text-gray-500 font-bold max-w-md mx-auto leading-relaxed">
                        The page you're searching for seems to have moved or graduated.
                    </p>
                </header>

                <footer className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="w-full sm:w-auto px-10 py-4 bg-[rgb(100,25,25)] text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-[rgb(105,30,30)] hover:shadow-2xl transition-all active:scale-95"
                    >
                        Go Home
                    </Link>
                    <Link
                        to="/contact"
                        className="w-full sm:w-auto px-10 py-4 bg-white border-2 border-[rgb(200,120,120)] text-[rgb(100,25,25)] rounded-2xl font-black uppercase tracking-widest hover:bg-[rgb(220,140,140)] transition-all active:scale-95"
                    >
                        Report Issue
                    </Link>
                </footer>
            </div>
        </main>
    );
};

export default NotFound;
