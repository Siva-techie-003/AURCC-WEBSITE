import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import QuickLinksSidebar from '../components/QuickLinksSidebar';
import './HomeView.css';

const HomeView = () => {
    // State for Image Gallery
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);

    // State for Testimonials
    const [currentIndex, setCurrentIndex] = useState(0);

    // State for Chatbot
    const [chatLog, setChatLog] = useState([]);
    const [userMessage, setUserMessage] = useState("");
    const [sessionId, setSessionId] = useState(null);
    const [loading, setLoading] = useState(false);
    const chatContainerRef = useRef(null);

    // State for Count Animation
    const [hasAnimated, setHasAnimated] = useState(false);
    const statsRef = useRef(null);
    const [counts, setCounts] = useState({
        alumni: 0,
        rank: 0,
        years: 0,
        placement: 0
    });
// Scroll to section if navigated with state
const location = useLocation();

useEffect(() => {
  if (location.state?.scrollTo) {
    const el = document.getElementById(location.state.scrollTo);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}, [location]);

    // Static Data
    const galleryImages = [
        { src: '/1.webp', alt: 'College Event', description: 'Annual cultural festival celebrating diverse talents' },
        { src: '/cse-girls-closeup.webp', alt: 'Students in Lab', description: 'Students collaborating on innovative projects' },
        { src: '/4.webp', alt: 'Campus View', description: 'Our beautiful campus surrounded by greenery' },
        { src: '/computer-lab.webp', alt: 'Computer Lab', description: 'State-of-the-art computer lab with latest equipment' },
        { src: '/Drone_shot.jpg', alt: 'Aerial View', description: 'Aerial view of our sprawling campus facilities' },
    ];

    const news = [
        { name: "On Going Placement Drives and Drives Completed - 2025 Batch", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/Placed%202025.jpg" },
        { name: "Engagement for Project Assistant(Pr.A1) CMRG project at Department of Mechanical Engineering - AURCC", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/388.pdf" },
        { name: "Access to Anna University E-Resource Consortium", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/382.pdf" },
        { name: "Fees for UG / PG Students - 2024 - 2025", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/352.pdf" },
        { name: "UG / PG Hostel Fee Structure for New Admission - 2024 - 2025", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/355.pdf" },
        { name: "SCOUT(Scholarship for Outstanding Undergraduate talent) Winners in Naan Mudhalvan Scheme", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/374.jpeg" },
        { name: "QS WORLD UNIVERSITY RANKINGS - 2025 - ANNA UNIVERSITY 383rd RANK", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/375.jpg" },
        { name: "Placement Statistics - 2020 Batch Students", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/373.pdf" },
        { name: "Placed Students (Batch - 2020 - 2024 )", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/Placed.jpeg" },
        { name: "JRF Application Form for MeitY Project", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/370.pdf" },
    ];

    const events = [
        { name: "FORSCH 25 - National Level TECHNO CULTURAL FEST by Dept. of Mechanical Engineering", url: "https://forsch25.com/" },
        { name: "International Womens Day Celebrations at AURCC", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/387.pdf" },
        { name: "SC - ST Fresh Scholarship form", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/364.pdf" },
        { name: "SC - ST Renewal Scholarship form", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/365.pdf" },
        { name: "BC - MBC Fresh Scholarship form", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/362.pdf" },
        { name: "BC - MBC Renewal Scholarship form", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/363.pdf" },
        { name: "SC-ST Special Higher Education Scholarship 2022-23 (Hostelers)-UG", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/347.pdf" },
        { name: "AICTE – SWANATH SCHOLARSHIP SCHEME FOR STUDENTS – 2021-22", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/312.pdf" },
        { name: "AICTE – PRAGATI SCHOLARSHIP SCHEME FOR GIRL STUDENTS - Degree - 2020-21", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/313.pdf" },
        { name: "AICTE – SAKSHAM SCHOLARSHIP SCHEME FOR SPECIALLY-ABLED STUDENT (DEGREE) - 2020-21", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/314.pdf" },
        { name: "List of the Selected Students under AICTE-Pragati Scholarship Scheme(Degree) - 2020-21", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/315.pdf" },
        { name: "Scholarship - List of Beneficiaries", url: "http://aurcc.ac.in/loginpage/loginpage/uploads/249.pdf" },
    ];

    const testimonials = [
        {
            name: 'Adithya M',
            branch: 'EEE',
            batch: '2015 Batch',
            company: 'SIEMENS',
            message: 'I am truly proud to have graduated from Anna University. The exceptional opportunities provided here enabled me to excel in every aspect, leading to my employment at Siemens, Bangalore.',
            image: "/pic1.webp",
        },
        {
            name: 'Pathi R',
            branch: 'CSE',
            batch: '2016 Batch',
            company: 'Google',
            message: 'My journey at Anna University was transformative. The rigorous curriculum and supportive faculty prepared me well for the challenges in the tech industry.',
            image: "/1.webp",
        },
        {
            name: 'Priya S',
            branch: 'Mechanical',
            batch: '2017 Batch',
            company: 'Tesla',
            message: 'The hands-on experience and industry exposure at Anna University were invaluable. It gave me the confidence to pursue my dreams and land a job at Tesla.',
            image: "/4.webp",
        },
    ];

    // Logic for Testimonials
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Logic for Image Gallery
    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    };
    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };
    const goToImage = (index) => {
        setCurrentImageIndex(index);
    };

    const handleTouchStart = (e) => {
        setTouchStartX(e.changedTouches[0].screenX);
    };
    const handleTouchEnd = (e) => {
        const endX = e.changedTouches[0].screenX;
        setTouchEndX(endX);
        if (touchStartX - endX > 50) {
            nextImage();
        } else if (endX - touchStartX > 50) {
            prevImage();
        }
    };
    //Logic for  company logo animation
    const totalDots = 12;
    const duration = 2500; // must match animation time
    const [activeDot, setActiveDot] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveDot((prev) => (prev + 1) % totalDots);
        }, duration);

        return () => clearInterval(interval);
    }, []);

    // Chatbot Logic
    const generateSessionId = () => {
        return "session-" + Math.random().toString(36).substr(2, 9);
    };

    useEffect(() => {
        setSessionId(generateSessionId());
    }, []);

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [chatLog]);

    // Count Animation Logic
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateCounts();
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, [hasAnimated]);

    const animateCounts = () => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const stepDuration = duration / steps;

        const targets = {
            alumni: 5000,
            rank: 7,
            years: 20,
            placement: 100
        };

        let currentStep = 0;

        const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const easeOutQuad = 1 - Math.pow(1 - progress, 3);

            setCounts({
                alumni: Math.floor(easeOutQuad * targets.alumni),
                rank: Math.floor(easeOutQuad * targets.rank),
                years: Math.floor(easeOutQuad * targets.years),
                placement: Math.floor(easeOutQuad * targets.placement)
            });

            if (currentStep >= steps) {
                clearInterval(interval);
                setCounts(targets);
            }
        }, stepDuration);
    };

    const sendMessage = async () => {
        if (userMessage.trim() === "") return;

        setLoading(true);
        const userInput = userMessage;
        setChatLog((prev) => [...prev, { sender: "user", message: userInput }]);
        setUserMessage("");

        try {
            const response = await fetch("https://aurcc.onrender.com/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: userInput,
                    session_id: sessionId,
                }),
            });

            if (!response.ok) throw new Error(`Server error: ${response.status}`);
            const data = await response.json();
            setChatLog((prev) => [...prev, { sender: "bot", message: data.response }]);
        } catch (error) {
            console.error("Error communicating with chatbot:", error);
            setChatLog((prev) => [...prev, { sender: "bot", message: "An error occurred. Please try again later." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="">
            <div className="pt-20 sm:pt-24 lg:pt-32">
   {/* All page content here */}

            <main className="">
                {/* Hero Section */}
                <section id='home_page' className="relative h-[300px] md:h-[400px] lg:h-[700px] flex items-center justify-center overflow-hidden ">
                    <div className="absolute inset-0 ">
                        <video
                            src="/aurcc_front_view.mp4"   // place your mp4 file in public folder
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-full w-full object-cover scale-110 transform animate-subtle-zoom"
                        />
                        <div className="absolute inset-0 opacity-35 bg-slate-950"></div>
                    </div>
                    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 mix-blend-overlay">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <pattern id="circuit-pattern" width="200" height="200" patternUnits="userSpaceOnUse">
                                <path d="M50 0 L50 50 L100 50 M150 0 L150 50 L100 50 M100 50 L100 100 M0 100 L50 100 M50 100 L50 150 L100 150 M150 150 L200 150 M150 100 L150 200" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                <circle cx="50" cy="50" r="5" fill="currentColor" />
                                <circle cx="150" cy="50" r="5" fill="currentColor" />
                                <circle cx="100" cy="100" r="5" fill="currentColor" />
                                <circle cx="50" cy="150" r="5" fill="currentColor" />
                                <circle cx="150" cy="150" r="5" fill="currentColor" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
                        </svg>
                    </div>
                    <div className="relative text-center px-4 sm:px-6 max-w-5xl mx-auto z-20">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
                            <span className="block">Welcome to</span>
                            <span className="block text-transparent bg-clip-text text-white mt-2">
                                Anna University
                            </span>
                        </h1>
                        {/* <p className="text-lg sm:text-xl md:text-2xl text-[rgb(115,40,40)] px-2">
                            Shaping Tomorrow's Leaders Today
                        </p> */}
                        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
                            <a href="#programs" className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-[rgb(100,25,25)] rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
                                Explore Programs
                            </a>
                            <a href="#about" className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] text-white rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
                                Campus Tour
                            </a>
                        </div>
                    </div>
                </section>

                {/* Floating Stats Cards */}
                <section ref={statsRef} className="container mx-auto px-4 sm:px-6 lg:px-8 relative mt-16 sm:mt-20 md:mt-24 lg:mt-12 z-30 mb-12 sm:mb-16 lg:mb-20">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {[
                            { label: 'Global Alumni', value: '5,000+', animatedValue: counts.alumni, suffix: '+', icon: <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /> },
                            { label: 'Rank in TNEA', value: '7th', animatedValue: counts.rank, suffix: 'th', icon: <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /> },
                            { label: 'Of Excellence', value: '20+ Years', animatedValue: counts.years, suffix: '+ Years', icon: <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /> },
                            { label: 'Placement Record', value: '100%', animatedValue: counts.placement, suffix: '%', icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> }
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl border-t-[8px] border-l-[10px] border-[rgb(115,40,40)]/40 p-6 sm:p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl min-h-[200px] flex flex-col justify-center items-center">
                                <div className="text-[rgb(115,40,40)] mb-4 sm:mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        {stat.icon}
                                    </svg>
                                </div>
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-3">
                                    {stat.animatedValue.toLocaleString()}{stat.suffix}
                                </div>
                                <div className="text-sm sm:text-base lg:text-lg text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="container mx-auto px-4 sm:px-8 lg:px-14 relative py-12 sm:py-16 lg:py-10 overflow-hidden scroll-mt-24 lg:scroll-mt-32">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <pattern id="dots-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="1" fill="currentColor" />
                                <circle cx="20" cy="20" r="1" fill="currentColor" />
                                <circle cx="38" cy="38" r="1" fill="currentColor" />
                                <circle cx="2" cy="38" r="1" fill="currentColor" />
                                <circle cx="38" cy="2" r="1" fill="currentColor" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#dots-pattern)" />
                        </svg>
                    </div>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Row 1: About Description + Featured Image */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-12 sm:mb-16">
                            <div className="lg:col-span-7 space-y-8">
                                <h2 className="text-2xl sm:text-3xl font-bold text-[rgb(100,25,25)] relative inline-block group">
                                    ABOUT OUR CAMPUS
                                    <span className="absolute -bottom-2 sm:-bottom-3 left-0 h-1 w-32 sm:w-40 lg:w-52 bg-yellow-500"></span>
                                </h2>
                                <div className="bg-white/80 backdrop-blur-sm shadow-xl border border-[rgb(180,100,100)] p-6 sm:p-8 rounded-xl">
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        The Regional Campus Coimbatore of Anna University, established in 2012, offers world-class education in Engineering and Technology. Nestled in a serene environment away from the city's hustle, our campus boasts state-of-the-art infrastructure and a team of highly qualified faculty members dedicated to academic excellence.
                                    </p>
                                    <p className="text-base text-gray-700 leading-relaxed mt-4">
                                        Our university is committed to holistic education with a focus on innovation, research, and industry collaboration. We provide an engaging learning environment where students can develop their technical skills, critical thinking abilities, and leadership qualities needed to excel in their chosen fields.
                                    </p>
                                </div>
                            </div>
                            <div className="lg:col-span-5">
                                <div className="relative group overflow-hidden rounded-2xl shadow-2xl border-4 border-white/50 transform hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_0_30px_rgba(115,25,25,0.3)]">
                                    <img
                                        src="/Drone_shot.jpg"
                                        alt="Campus Aerial View"
                                        className="w-full h-[300px] sm:h-[400px] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[rgb(115,25,25)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                        <p className="text-white font-black text-sm uppercase tracking-widest">Our Sprawling Campus</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 2: News & Events (Full Width) */}
                        <div className="w-full">
                            <div className="mobile-grid relative">
                                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
                                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                        <pattern id="triangle-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                                            <path d="M0 60 L30 0 L60 60 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                                        </pattern>
                                        <rect width="100%" height="100%" fill="url(#triangle-pattern)" />
                                    </svg>
                                </div>
                                {/* News Card */}
                                <div className="rounded-lg bg-white/80 backdrop-blur-sm shadow-lg overflow-hidden border border-[rgb(180,100,100)]">
                                    <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-white">News & Admissions</h3>
                                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
                                        </div>
                                    </div>
                                    <div className="p-8 max-h-[300px] overflow-hidden">
                                        <ul className="news-scroll w-full divide-y divide-gray-100">
                                            {news.map((item, idx) => (
                                                <li key={idx} className="flex font-bold items-center py-3 px-6 hover:bg-[rgb(220,140,140)] transition-colors duration-200 group cursor-pointer">
                                                    <div className="mr-3 flex-shrink-0 w-2 h-2 bg-[rgb(220,140,140)]0 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                                                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ease-out">{item.name}</a>
                                                </li>
                                            ))}
                                            <li className="flex items-center py-3 px-6 text-[rgb(115,40,40)] font-medium group cursor-pointer hover:bg-[rgb(220,140,140)]">
                                                <Link to="/news" className="flex items-center transform group-hover:translate-x-1 transition-transform duration-300">
                                                    View All Announcements
                                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Events Card */}
                                <div className="rounded-lg bg-white/80 backdrop-blur-sm shadow-lg overflow-hidden border border-[rgb(180,100,100)]">
                                    <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-white">Events & Scholarships</h3>
                                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        </div>
                                    </div>
                                    <div className="p-8 max-h-[300px] overflow-hidden">
                                        <ul className="events-scroll w-full divide-y divide-gray-100">
                                            {events.map((item, idx) => (
                                                <li key={idx} className="flex font-bold items-center py-3 px-6 hover:bg-[rgb(220,140,140)] transition-colors duration-200 group cursor-pointer">
                                                    <div className="mr-3 flex-shrink-0 w-2 h-2 bg-[rgb(220,140,140)]0 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                                                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ease-out">{item.name}</a>
                                                </li>
                                            ))}
                                            <li className="flex items-center py-3 px-6 text-[rgb(115,40,40)] font-medium group cursor-pointer hover:bg-[rgb(220,140,140)]">
                                                <Link to="/events" className="flex items-center transform group-hover:translate-x-1 transition-transform duration-300">
                                                    View All Events
                                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <QuickLinksSidebar />

                {/* Programs Offered Showcase
                <section id="programs" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <pattern id="hexagon-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
                                <path d="M50 0 L87.5 25 L87.5 75 L50 100 L12.5 75 L12.5 25 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#hexagon-pattern)" />
                        </svg>
                    </div>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 sm:mb-16 text-[rgb(100,25,25)] relative inline-block mx-auto">
                            PROGRAMS OFFERED
                            <span className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-16 sm:w-20 lg:w-24 bg-yellow-500"></span>
                        </h2>
                        <div className="mt-16 relative">
                            <div className="overflow-x-auto scrollbar-hide">
                                <div className="flex space-x-6 py-4 w-max">
                                    {[
                                        { title: 'Bachelor of Degree (COMPUTER SCIENCE AND ENGINEERING)', icon: '💻', color: 'bg-[rgb(220,140,140)]0', url: '/departments/cse' },
                                        { title: 'B.E. (ELECTRONICS AND COMMUNICATION ENGINEERING)', icon: '📡', color: 'bg-green-500', url: '/departments/ece' },
                                        { title: 'B.E. (ELECTRICAL AND ELECTRONICS ENGINEERING)', icon: '⚡', color: 'bg-yellow-500', url: '/departments/eee' },
                                        { title: 'B.E. (MECHANICAL ENGINEERING)', icon: '🛠️', color: 'bg-red-500', url: '/departments/mech' },
                                        { title: 'B.Tech. (ARTIFICIAL INTELLIGENCE AND DATA SCIENCE)', icon: '🤖', color: 'bg-purple-500', url: '/departments/cse' },
                                        { title: 'B.E. ELECTRONICS ENGINEERING (VLSI DESIGN AND TECHNOLOGY)', icon: '🔲', color: 'bg-pink-500', url: '/departments/ece' },
                                        { title: 'MASTER OF BUSINESS ADMINISTRATION', icon: '📈', color: 'bg-[rgb(220,140,140)]0', url: '/departments/mba' },
                                        { title: 'MASTER OF BUSINESS ADMINISTRATION (BUSINESS ANALYTICS)', icon: '📊', color: 'bg-[rgb(140,60,60)]', url: '/departments/mba' },
                                    ].map((prog, idx) => (
                                        <div key={idx} className="bg-white rounded-xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300 w-72">
                                            <div className={`p-4 rounded-full text-white inline-block mb-6 h-14 w-14 flex items-center justify-center text-2xl ${prog.color}`}>{prog.icon}</div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-4">{prog.title}</h3>
                                            <p className="text-gray-600 mb-6 h-20">Explore opportunities in {prog.title.toLowerCase()}.</p>
                                            <Link to={prog.url} className="text-[rgb(120,45,45)] font-semibold hover:text-[rgb(110,35,35)] transition-colors">Learn More →</Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <div className="mt-22 pb-12 relative">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-0 mt-2">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <pattern id="hexagon-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
                                <path d="M50 0 L87.5 25 L87.5 75 L50 100 L12.5 75 L12.5 25 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#hexagon-pattern)" />
                        </svg>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mt-16 sm:mb-16 text-[rgb(100,25,25)] relative inline-block mx-20">
                        PROGRAMS OFFERED
                        <span className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-16 sm:w-20 lg:w-24 bg-yellow-500"></span>
                    </h2>
                    <div className="overflow-x-auto scrollbar-hide">
                        <div className="flex space-x-8 py-4 w-max">

                            {[
                                {
                                    heading: "BACHELOR OF DEGREE",
                                    course: "Computer Science and Engineering",
                                    image: "/cse.jpg",
                                    url: "/departments/cse",
                                },
                                {
                                    heading: "BACHELOR OF DEGREE",
                                    course: "Electronics and Communication Engineering",
                                    image: "/ece.jpg",
                                    url: "/departments/ece",
                                },
                                {
                                    heading: "BACHELOR OF DEGREE",
                                    course: "Electrical and Electronics Engineering",
                                    image: "/eee.jpg",
                                    url: "/departments/eee",
                                },
                                {
                                    heading: "BACHELOR OF DEGREE",
                                    course: "Mechanical Engineering",
                                    image: "/mech.jpg",
                                    url: "/departments/mech",
                                },
                                {
                                    heading: "BACHELOR OF TECHNOLOGY",
                                    course: "Artifical Intelligence and Data Science",
                                    image: "/ai.jpg",
                                    url: "/departments/ai",
                                },
                                {
                                    heading: "BACHELOR OF DEGREE",
                                    course: "Electronics Engineering (VLSI Design & Technology)",
                                    image: "/vlsi.jpg",
                                    url: "/departments/vlsi",
                                },
                                {
                                    heading: "MASTER OF DEGREE",
                                    course: "Master of Business Administration",
                                    image: "/mba.jpg",
                                    url: "/departments/mba",
                                },
                                {
                                    heading: "MASTER OF DEGREE",
                                    course: "Master of Business Administration (BUSINESS ANALYTICS)",
                                    image: "/mba_ba.jpg",
                                    url: "/departments/mba",
                                },
                            ].map((prog, idx) => (

                                <div
                                    key={idx}
                                    className="ml-7 group bg-white rounded-2xl shadow-lg overflow-hidden w-96 
                     transform transition-all duration-500 
                     hover:-translate-y-4 hover:shadow-2xl"
                                >

                                    {/* Image Section */}
                                    <div className="h-48 w-full overflow-hidden">
                                        <img
                                            src={prog.image}
                                            alt={prog.course}
                                            className="w-full h-full object-cover 
                         transition-transform duration-700 
                         group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6 text-center">

                                        <h3 className="text-xl font-bold text-gray-500 tracking-wide">
                                            {prog.heading}
                                        </h3>

                                        <h2 className="text-base font-bold text-gray-900 mt-2 leading-snug">
                                            {prog.course}
                                        </h2>

                                        <p className="text-gray-600 mt-3 text-sm">
                                            Explore opportunities in {prog.course.toLowerCase()}.
                                        </p>

                                        <Link
                                            to={prog.url}
                                            className="inline-block mt-5 text-[rgb(120,45,45)] font-semibold 
                         relative after:block after:h-[2px] after:w-0 
                         after:bg-[rgb(120,45,45)] after:transition-all 
                         after:duration-300 group-hover:after:w-full"
                                        >
                                            Learn More →
                                        </Link>

                                    </div>
                                </div>

                            ))}

                        </div>
                    </div>
                </div>


                {/* Dean's Message */}
                <section id="deans-message" className="py-12 sm:py-16 lg:py-24 bg-[rgb(171,110,110)] text-white relative overflow-hidden scroll-mt-24 lg:scroll-mt-32">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <pattern id="wave-pattern" width="100" height="20" patternUnits="userSpaceOnUse">
                                <path d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="1" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#wave-pattern)" />
                        </svg>
                    </div>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">From the Dean's Desk</h2>
                        <div className="flex flex-col md:flex-row items-center bg-white bg-opacity-10 rounded-lg shadow-xl overflow-hidden backdrop-filter backdrop-blur-lg max-w-6xl mx-auto">
                            <div className="md:w-1/3 p-4 sm:p-6 md:p-8">
                                <img src="public/Dean.webp" alt="Dean's Photo" className="w-full h-auto object-cover rounded-lg" />
                            </div>
                            <div className="md:w-2/3 p-4 sm:p-6 md:p-8">
                                <h3 className="text-xl lg:text-2xl font-semibold mb-3 sm:mb-4">Dr. Saravanan Kumar</h3>
                                <p className="text-base text-[rgb(180,100,100)] mb-4 sm:mb-6 italic">"Empowering the next generation of innovators and leaders."</p>
                                <p className="text-base mb-3 sm:mb-4">
                                    Welcome to Anna University! Our institution stands at the forefront of technological education and research. We are dedicated to academic excellence and nurturing visionary leaders.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden w-full relative scroll-mt-24 lg:scroll-mt-32">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <pattern id="circle-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                                <circle cx="30" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
                                <circle cx="30" cy="30" r="5" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#circle-pattern)" />
                        </svg>
                    </div>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 sm:mb-16 text-[rgb(100,25,25)] relative inline-block mx-auto">
                            Gallery of Memories
                            <span className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-16 sm:w-20 lg:w-24 bg-yellow-500"></span>
                        </h2>
                        <div className="relative flex items-center justify-center">
                            <button onClick={prevImage} className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-[rgb(115,25,25)] text-white p-3 rounded-full z-30 shadow-lg group">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <div className="w-full md:w-3/4 lg:w-3/5" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                                <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                                    {galleryImages.map((image, idx) => (
                                        <div key={idx} className="flex-shrink-0 w-full px-4">
                                            <div className="relative group overflow-hidden rounded-xl shadow-2xl">
                                                <img src={image.src} alt={image.alt} className="w-full h-64 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                                    <p className="text-white text-lg md:text-xl">{image.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button onClick={nextImage} className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-[rgb(115,25,25)] text-white p-3 rounded-full z-30 shadow-lg group">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                        <div className="flex justify-center mt-8 space-x-2">
                            {galleryImages.map((_, idx) => (
                                <button key={idx} onClick={() => goToImage(idx)} className={`h-1 w-4 md:w-8 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-[rgb(115,40,40)]' : 'bg-[rgb(160,80,80)]'}`}></button>
                            ))}
                        </div>
                    </div>
                </section>
                <section id="our_recruiters" className="py-16 lg:py-24 bg-[rgb(171,110,110)] overflow-hidden relative scroll-mt-24 lg:scroll-mt-32">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">

                        {/* Heading */}
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12 text-white relative inline-block">
                            OUR RECRUITERS
                            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-1 w-20 bg-yellow-500"></span>
                        </h2>

                        {/* Slider Wrapper */}
                        <div className="relative w-full bg-[rgb(171,110,110)] overflow-hidden">

                            {/* Sliding Track */}
                            <div
                                id="logoTrack"
                                className="flex gap-8 w-max animate-[logoscroll_30s_linear_infinite]"
                            >
                                {[
                                    "/company1.jpg",
                                    "/company2.jpg",
                                    "/company3.jpg",
                                    "/company4.jpg",
                                    "/company5.jpg",
                                    "/company6.jpg",
                                    "/company7.jpg",
                                    "/company8.jpg",
                                    "/company9.jpg",
                                    "/company10.jpg",
                                    "/company11.png",
                                    "/company12.webp",
                                ]
                                    .concat([
                                        "/company1.jpg",
                                        "/company2.jpg",
                                        "/company3.jpg",
                                        "/company4.jpg",
                                        "/company5.jpg",
                                        "/company6.jpg",
                                        "/company7.jpg",
                                        "/company8.jpg",
                                        "/company9.jpg",
                                        "/company10.jpg",
                                        "/company11.png",
                                        "/company12.webp",
                                    ])
                                    .map((logo, index) => (
                                        <div
                                            key={index}
                                            className="min-w-[220px] h-[130px] bg-white rounded-2xl border-2 border-gray-200 flex items-center justify-center hover:shadow-xl hover:scale-105 transition duration-300"
                                        >
                                            <img
                                                src={logo}
                                                alt="Company Logo"
                                                className="max-h-20 object-contain"
                                            />
                                        </div>
                                    ))}
                            </div>
                        </div>

                        {/* Dots (Moved Up) */}
                        <div className="flex justify-center gap-3 mt-6">
                            {Array.from({ length: totalDots }).map((_, index) => (
                                <div
                                    key={index}
                                    className="relative w-10 h-2 bg-gray-300 rounded-full overflow-hidden"
                                >
                                    {activeDot === index && (
                                        <div
                                            className="absolute left-0 top-0 h-full bg-[rgb(120,45,45)]"
                                            style={{
                                                animation: `fillBar ${duration}ms linear forwards`
                                            }}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Keyframes Inside Same Section */}
                    <style>
                        {`
    @keyframes logoscroll {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }

    @keyframes fillBar {
      from { width: 0%; }
      to { width: 100%; }
    }
  `}
                    </style>
                </section>

                {/* Alumni Testimonials */}
                <section id="alumni" className="py-12 sm:py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <pattern id="zigzag-pattern" width="100" height="20" patternUnits="userSpaceOnUse">
                                <path d="M0 0 L20 10 L0 20 L20 30 L0 40 L20 50 L0 60 L20 70 L0 80" fill="none" stroke="currentColor" strokeWidth="1" />
                                <path d="M50 0 L70 10 L50 20 L70 30 L50 40 L70 50 L50 60 L70 70 L50 80" fill="none" stroke="currentColor" strokeWidth="1" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#zigzag-pattern)" />
                        </svg>
                    </div>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 sm:mb-16 text-[rgb(100,25,25)] relative inline-block mx-auto">
                            ALUMNI SPEAK
                            <span className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-16 sm:w-20 lg:w-24 bg-yellow-500"></span>
                        </h2>
                        <div className="relative">
                            <div className="overflow-hidden">
                                <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                                    {testimonials.map((testimonial, idx) => (
                                        <div key={idx} className="flex-shrink-0 w-full">
                                            <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 text-left">
                                                <div className="md:col-span-1 bg-gradient-to-br from-[rgb(115,63,63)] to-[rgb(115,25,25)] p-8 flex flex-col items-center justify-center">
                                                    <img src={testimonial.image} alt={testimonial.name} className="w-32 h-32 rounded-full border-4 border-white mb-4 object-cover" />
                                                    <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                                                    <p className="text-white">{testimonial.branch} | {testimonial.batch}</p>
                                                    <p className="text-white font-semibold mt-2 text-center text-sm">Placed in <span className="text-yellow-300">{testimonial.company}</span></p>
                                                </div>
                                                <div className="md:col-span-2 p-8 flex flex-col justify-center">
                                                    <svg className="w-12 h-12 text-[rgb(200,120,120)] mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                                                    <p className="text-gray-700 leading-relaxed mb-6">{testimonial.message}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button onClick={prevSlide} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-[rgb(115,25,25)] text-white p-3 rounded-full shadow-lg group z-20"><svg className="h-6 w-6 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg></button>
                            <button onClick={nextSlide} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-[rgb(115,25,25)] text-white p-3 rounded-full shadow-lg group z-20"><svg className="h-6 w-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg></button>
                        </div>
                    </div>
                </section>

                {/* Support Chatbot */}
                <button onClick={() => document.getElementById('my_modal_5').showModal()} className="fixed bottom-4 right-4 bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] text-white p-4 rounded-full shadow-lg z-50">💬 Help Desk</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box p-0 w-80 shadow-lg rounded-lg fixed bottom-20 right-4 md:right-10">
                        <div className="flex justify-between items-center bg-[rgb(115,40,40)] p-4 text-white rounded-t-lg">
                            <h2 className="text-lg font-semibold">Support Chatbot</h2>
                            <form method="dialog"><button className="btn btn-sm btn-circle btn-ghost">✕</button></form>
                        </div>
                        <div className="p-4 h-64 overflow-y-auto bg-gray-50 flex flex-col" ref={chatContainerRef}>
                            {chatLog.map((chat, idx) => (
                                <div key={idx} className={`mb-4 max-w-[80%] p-3 rounded-xl shadow-sm text-sm ${chat.sender === 'user' ? 'self-end bg-[rgb(200,120,120)] text-[rgb(100,25,25)] rounded-br-none' : 'self-start bg-white text-gray-800 rounded-bl-none border border-gray-100'}`}>
                                    {chat.message}
                                </div>
                            ))}
                            {loading && <div className="loading loading-dots loading-sm self-start ml-2"></div>}
                        </div>
                        <div className="p-4 bg-gray-100 rounded-b-lg border-t">
                            <input value={userMessage} onChange={(e) => setUserMessage(e.target.value)} onKeyUp={(e) => e.key === 'Enter' && sendMessage()} type="text" className="input input-bordered w-full h-10 text-sm" placeholder="Type your message..." />
                            <button onClick={sendMessage} className="btn btn-primary btn-sm w-full mt-2 h-10">Send</button>
                        </div>
                    </div>
                </dialog>
            </main>
            </div>
        </div>
    );
};

export default HomeView;
