import React from 'react';
import './About.css';

const About = () => {
    // const teamMembers = [
    //     { name: "Anbumani V", department: "Dept of AI & DS", photo: "janarthanan.webp", linkedin: "https://www.linkedin.com/in/janarthanangm/", github: "https://github.com/Janarthanan-Gnanamurthy" },
    //     { name: "Dhivakar G", department: "Dept of AI & DS", photo: "subramaniyasiva.webp", linkedin: "https://www.linkedin.com/in/subramaniyasiva-s-2202a6258/", github: "https://github.com/Subramaniyasiva002" },
    //     { name: "Santhosh S", department: "Dept of AI & DS", photo: "abinandida.webp", linkedin: "https://www.linkedin.com/in/abinandida-r-377128258/", github: "https://github.com/camelia409" },
    //     { name: "Siva E", department: "Dept of AI & DS", photo: "ritik.webp", linkedin: "https://www.linkedin.com/in/ritik-naakendiran-d-b01198258/", github: "https://github.com/Ritik050105" },
    //     { name: "Suresh Krishna P", department: "Dept of AI & DS", photo: "ritik.webp", linkedin: "https://www.linkedin.com/in/ritik-naakendiran-d-b01198258/", github: "https://github.com/Ritik050105" },

    // ];

    return (
        <main>
            {/* Hero Section with Parallax Effect */}
            <section className="relative h-[45vh] flex items-center justify-center overflow-hidden bg-[#f0f6ff]">
                {/* Animated Floating Dots Background - Static in this version for performance, can be improved */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <svg width="100%" height="100%" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        {[...Array(18)].map((_, i) => (
                            <circle
                                key={i}
                                cx={Math.random() * 1200}
                                cy={Math.random() * 300}
                                r={Math.random() * 2 + 1}
                                fill="#b3c6ff"
                                opacity="0.5"
                            />
                        ))}
                    </svg>
                </div>
                <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80" alt="Tech Hero" className="absolute inset-0 w-full h-full object-cover object-center -z-10" />
                <div className="absolute inset-0 -z-10 bg-black opacity-70"></div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[rgb(115,63,63)]/80 via-[rgb(115,45,45)]/60 to-purple-800/70"></div>
                <div className="relative z-20 px-4 w-full max-w-2xl mx-auto animate-fade-in text-center">
                    <h1 className="text-2xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight relative" style={{ textShadow: '0 4px 16px #000, 0 1px 2px #000' }}>
                        Website <span style={{ color: '#fff', textShadow: '0 4px 16px #000' }}>Development Team</span>
                        <span className="block h-1 w-16 sm:w-20 lg:w-24 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full mx-auto mt-2 sm:mt-3 animate-underline"></span>
                    </h1>
                    <p className="text-base lg:text-lg xl:text-xl font-semibold mb-2" style={{ color: '#fff', textShadow: '0 2px 8px #000, 0 1px 2px #000' }}>Meet the creative minds behind our university website</p>
                </div>
            </section>

            {/* Team Section with Modern Cards */}
            <section className="py-8 sm:py-12 lg:py-16 px-4 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
                    <div className="mb-8 sm:mb-12">
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[rgb(100,25,25)] relative inline-block group">
                            OUR TEAM
                            <span className="absolute -bottom-2 sm:-bottom-3 left-0 h-1 w-full bg-yellow-500 transform origin-left transition-transform duration-300 group-hover:scale-x-110"></span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
                        {teamMembers.map((member) => (
                            <div
                                key={member.name}
                                className="bg-white rounded-xl shadow-lg overflow-hidden border border-[rgb(200,120,120)] transform hover:translate-y-[-5px] hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="relative pt-6 sm:pt-8 pb-3 sm:pb-4 flex justify-center">
                                    <div className="absolute inset-0 h-1/2 bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)]"></div>
                                    <div className="relative">
                                        <img
                                            src={`/${member.photo}`}
                                            alt={member.name}
                                            className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-cover rounded-full border-4 border-white shadow-md"
                                        />
                                    </div>
                                </div>

                                <div className="p-4 sm:p-6 text-center flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-lg lg:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] mb-2">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm lg:text-base text-gray-600">{member.department}</p>
                                    </div>

                                    <div className="flex justify-center space-x-2 sm:space-x-3 mt-3 sm:mt-4">
                                        {member.linkedin && (
                                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-[rgb(115,40,40)] hover:text-[rgb(105,30,30)] transition-colors duration-300">
                                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                </svg>
                                            </a>
                                        )}
                                        {member.github && (
                                            <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black transition-colors duration-300">
                                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Development Process Section */}
            <section className="py-8 sm:py-12 lg:py-16 px-4 bg-white text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="mb-8 sm:mb-12">
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[rgb(100,25,25)] relative inline-block group">
                            DEVELOPMENT PROCESS
                            <span className="absolute -bottom-2 sm:-bottom-3 left-0 h-1 w-full bg-yellow-500 transform origin-left transition-transform duration-300 group-hover:scale-x-110"></span>
                        </h2>
                    </div>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[rgb(200,120,120)]"></div>
                        <div className="grid grid-cols-1 gap-12">
                            {[
                                { step: 1, title: 'Planning & Design', color: 'bg-[rgb(115,40,40)]', gradient: 'from-[rgb(115,63,63)] to-[rgb(115,25,25)]', description: 'We started by analyzing user needs and planning the website architecture. Our designers created wireframes and mockups to visualize the modern interface.' },
                                { step: 2, title: 'Development', color: 'bg-[rgb(115,40,40)]', gradient: 'from-[rgb(115,63,63)] to-[rgb(115,25,25)]', description: 'Using React and Tailwind CSS, we built a responsive and modern website with attention to performance and user experience. We implemented component-based architecture for maintainability.' },
                                { step: 3, title: 'Testing & Deployment', color: 'bg-[rgb(115,40,40)]', gradient: 'from-[rgb(115,63,63)] to-[rgb(115,25,25)]', description: 'Rigorous testing was performed across different devices and browsers to ensure compatibility. The website was then deployed with continuous integration for easy updates.' },
                            ].map((process) => (
                                <div key={process.step} className="relative text-center">
                                    <div className="flex items-center justify-center mb-4 text-center">
                                        <div className={`z-10 flex items-center justify-center w-12 h-12 ${process.color} rounded-full text-white font-bold text-lg`}>{process.step}</div>
                                    </div>
                                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[rgb(200,120,120)] max-w-xl mx-auto">
                                        <div className={`bg-gradient-to-r ${process.gradient} py-3 px-6`}>
                                            <h3 className="text-lg font-semibold text-white">{process.title}</h3>
                                        </div>
                                        <div className="p-6">
                                            <p className="text-gray-600">{process.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
