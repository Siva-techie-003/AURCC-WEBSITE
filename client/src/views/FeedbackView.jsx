import React from 'react';
import './FeedbackView.css';

const FeedbackView = () => {
    const feedbackCards = [
        {
            title: "Student Feedback",
            description: "We value our students' opinions. Please share your feedback to help us improve your learning experience.",
            icon: (
                <svg className="w-12 h-12 text-[rgb(115,40,40)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm0 0V20" />
                </svg>
            ),
            formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdwC4-1dE7Xf7f5i1_2W7Q-4f4z8fG5_4_4_4_4/viewform?usp=sf_link" // Placeholder
        },
        {
            title: "Staff Feedback",
            description: "Your insights as staff members are crucial for our institutional growth. Please provide your valuable feedback.",
            icon: (
                <svg className="w-12 h-12 text-[rgb(115,40,40)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdwC4-1dE7Xf7f5i1_2W7Q-4f4z8fG5_4_4_4_4/viewform?usp=sf_link" // Placeholder
        },
        {
            title: "AICTE Feedback",
            description: "Share your feedback regarding AICTE-related processes and institutional performance.",
            icon: (
                <svg className="w-12 h-12 text-[rgb(115,40,40)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdwC4-1dE7Xf7f5i1_2W7Q-4f4z8fG5_4_4_4_4/viewform?usp=sf_link" // Placeholder
        }
    ];

    return (
        <main className="bg-white min-h-screen font-sans text-gray-800">
            {/* Hero Section */}
            <section className="relative w-full min-h-[35vh] sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] overflow-hidden flex items-center justify-center">
                <img src="/offices.webp" alt="Feedback Header" className="absolute inset-0 w-full h-full object-cover object-center" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                    <div className="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg px-6 py-8 md:px-12 md:py-10 flex flex-col items-center w-full max-w-2xl border border-white/30">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-2 leading-tight uppercase">Feedback Portal</h1>
                        <div className="w-24 h-1 bg-yellow-400 mb-4 rounded-full"></div>
                        <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white drop-shadow text-center font-medium">Your feedback drives our excellence. Choose a category below to share your thoughts.</p>
                    </div>
                </div>
            </section>

            {/* Cards Section */}
            <section className="max-w-7xl mx-auto py-16 px-4 md:px-9">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {feedbackCards.map((card, index) => (
                        <div key={index} className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
                            <div className="p-8 flex flex-col items-center text-center flex-grow">
                                <div className="mb-6 p-4 bg-[rgb(115,40,40)]/5 rounded-2xl group-hover:bg-[rgb(115,40,40)]/10 transition-colors duration-300">
                                    {card.icon}
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">{card.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                                    {card.description}
                                </p>
                                <a 
                                    href={card.formUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transform transition-all duration-300 group-hover:from-[rgb(130,70,70)] group-hover:to-[rgb(130,30,30)]"
                                >
                                    <span>Submit Feedback</span>
                                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer Note */}
            {/* <section className="bg-gray-50 py-12 px-4 mt-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h4 className="text-lg font-bold text-[rgb(115,40,40)] mb-2">Notice</h4>
                    <p className="text-gray-600 text-sm">
                        All submissions are anonymous. We use your feedback to enhance our academic and administrative standards. 
                        If you have urgent issues, please visit the respective administrative offices.
                    </p>
                </div>
            </section> */}
        </main>
    );
};

export default FeedbackView;
