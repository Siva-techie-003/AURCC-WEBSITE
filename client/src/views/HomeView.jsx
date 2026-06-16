import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import QuickLinksSidebar from "../components/QuickLinksSidebar";
import "./HomeView.css";

const HomeView = () => {
  // State for Image Gallery
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // State for Testimonials
  const [currentIndex, setCurrentIndex] = useState(0);


  // State for Programs Slider
  // State for Programs Slider
  const [progIndex, setProgIndex] = useState(0);
  const progScrollRef = useRef(null);

  // Single reusable scroll function
  const scrollToIndex = (index) => {
    if (progScrollRef.current) {
      const container = progScrollRef.current;
      const card = container.querySelector(".group");
      const cardWidth = card ? card.offsetWidth + 24 : 344; // 320px card + 24px gap
      container.scrollTo({
        left: index * (cardWidth * 4), // Scroll by 4 cards
        behavior: "smooth",
      });
      setProgIndex(index);
    }
  };

  const handleProgScroll = () => {
    if (progScrollRef.current) {
      const container = progScrollRef.current;
      const card = container.querySelector(".group");
      const cardWidth = card ? card.offsetWidth + 24 : 344;
      const scrollPos = container.scrollLeft;
      const newIndex = Math.round(scrollPos / (cardWidth * 4)); // Page-based index
      if (newIndex !== progIndex && newIndex >= 0 && newIndex <= 1) {
        setProgIndex(newIndex);
      }
    }
  };

  // State for Chatbot
  const [chatLog, setChatLog] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [sessionId, setSessionId] = useState(null);
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef(null);
  const [showScrollButtons, setShowScrollButtons] = useState(false);


  // State for Count Animation
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);
  const [counts, setCounts] = useState({
    alumni: 0,
    rank: 0,
    years: 0,
    placement: 0,
  });
  // Scroll to section if navigated with state
  const location = useLocation();

  // State for Database dynamic contents
  const [tickerItems, setTickerItems] = useState([
    {
      name: "Anna University Grievances Cell",
      url: "https://www.annauniv.edu/auccgrcell/",
    },
    {
      name: "AICTE Feedback Link",
      url: "https://www.aicte.gov.in/feedback/index.php",
    },
  ]);
  const [news, setNews] = useState([
    {
      name: "CMRG 250509 - Temporary Position of Project Assistant - Dept. of EEE - Regional Campus Coimbatore-Last Date: 09.05.2026",
      url: "/forms/CMRG 250509 - Temporary Position of Project Assistant - Dept. of EEE - Regional Campus Coimbatore.pdf",
    },
    {
      name: "CMRG 250260 - Temporary Position of Project Assistant - Dept. of EEE - Regional Campus Coimbatore",
      url: "/forms/CMRG 250260 - Temporary Position of Project Assistant - Dept. of EEE - Regional Campus Coimbatore.pdf",
    },
    {
      name: "On Going Placement Drives and Drives Completed - 2025 Batch",
      url: "/forms/Placed 2025.jpg",
    },
    {
      name: "Engagement for Project Assistant(Pr.A1) CMRG project at Department of Mechanical Engineering - AURCC",
      url: "http://aurcc.ac.in/loginpage/loginpage/uploads/388.pdf",
    },
    {
      name: "Access to Anna University E-Resource Consortium",
      url: "/forms/Access to Anna University E-Resource Consortium.pdf",
    },
    {
      name: "Fees for UG / PG Students - 2024 - 2025",
      url: "/forms/Fees for UG - PG Students - 2024 - 2025.pdf",
    },
    {
      name: "UG / PG Hostel Fee Structure for New Admission - 2024 - 2025",
      url: "/forms/UG - PG Hostel Fee Structure for New Admission - 2024 - 2025.pdf",
    },
    {
      name: "SCOUT(Scholarship for Outstanding Undergraduate talent) Winners in Naan Mudhalvan Scheme",
      url: "/forms/SCOUT(Scholarship for Outstanding Undergraduate talent) Winners in Naan Mudhalvan Scheme.jpeg",
    },
    {
      name: "QS WORLD UNIVERSITY RANKINGS - 2025 - ANNA UNIVERSITY 383rd RANK",
      url: "/forms/QS WORLD UNIVERSITY RANKINGS - 2025 - ANNA UNIVERSITY 383rd RANK.jpg",
    },
    {
      name: "Placement Statistics - 2020 Batch Students",
      url: "http://aurcc.ac.in/loginpage/loginpage/uploads/373.pdf",
    },
    {
      name: "Placed Students (Batch - 2020 - 2024 )",
      url: "http://aurcc.ac.in/loginpage/loginpage/uploads/Placed.jpeg",
    },
    {
      name: "JRF Application Form for MeitY Project",
      url: "http://aurcc.ac.in/loginpage/loginpage/uploads/370.pdf",
    },
  ]);
  const [events, setEvents] = useState([
    {
      name: "Graduation Day 2026 at AURCC",
      url: "/forms/Graduation Day 2026 at AURCC.pdf",
    },
    {
      name: "Bio Research Innovation Cell organises Two Days National level conclave on \"Innovations in Agri and Food Products\"",
      url: "/forms/Bio Research Innovation Cell organises Two Days National level conclave.pdf",
    },
    {
      name: "SC - ST Fresh Scholarship form - 2025-2026",
      url: "/forms/SC - ST Fresh Scholarship form - 2025-2026.pdf",
    },
    {
      name: "SC/ST/SCC Renewal Scholarship form - 2025-2026",
      url: "/forms/SC-ST-SCC Renewal Scholarship form - 2025-2026.pdf",
    },
    {
      name: "BC - MBC Fresh Scholarship form - 2025-2026",
      url: "/forms/BC - MBC Fresh Scholarship form - 2025-2026.pdf",
    },
    {
      name: "BC - MBC Renewal Scholarship form - 2025-2026",
      url: "/forms/BC - MBC Renewal Scholarship form - 2025-2026.pdf",
    },
    {
      name: "SC-ST Special Higher Education Scholarship 2022-23 (Hostelers)-UG",
      url: "/forms/SC-ST Special Higher Education Scholarship 2022-23 (Hostelers)-UG.pdf",
    },
    {
      name: "AICTE – SWANATH SCHOLARSHIP SCHEME FOR STUDENTS – 2021-22",
      url: "/forms/AICTE – SWANATH SCHOLARSHIP SCHEME FOR STUDENTS – 2021-22.pdf",
    },
    {
      name: "AICTE – PRAGATI SCHOLARSHIP SCHEME FOR GIRL STUDENTS - Degree - 2020-21",
      url: "/forms/AICTE – PRAGATI SCHOLARSHIP SCHEME FOR GIRL STUDENTS - Degree - 2020-21.pdf",
    },
    {
      name: "AICTE – SAKSHAM SCHOLARSHIP SCHEME FOR SPECIALLY-ABLED STUDENT (DEGREE) - 2020-21",
      url: "/forms/AICTE – SAKSHAM SCHOLARSHIP SCHEME FOR SPECIALLY-ABLED STUDENT (DEGREE) - 2020-21.pdf",
    },
    {
      name: "List of the Selected Students under AICTE-Pragati Scholarship Scheme(Degree) - 2020-21",
      url: "/forms/List of the Selected Students under AICTE-Pragati Scholarship Scheme(Degree) - 2020-21.pdf",
    },
    {
      name: "Scholarship - List of Beneficiaries",
      url: "/forms/Scholarship - List of Beneficiaries.pdf",
    },
  ]);
  const [deanDesk, setDeanDesk] = useState({
    name: "Dr. M. Saravanakumar",
    credentials: "MBA., MS(IT)., M.Phil., Ph.D.,",
    designation: "Dean, Anna University Regional Campus Coimbatore",
    quote: "Empowering the next generation of innovators and leaders.",
    paragraphs: [
      "Welcome to Anna University. It gives me immense pleasure to greet you as part of an institution that has long been a beacon of excellence in technological education and research. At Anna University, we are committed to fostering a culture of innovation, integrity, and academic rigor. Our legacy is built upon a strong foundation of knowledge, discipline, and a relentless pursuit of progress.",
      "We take pride in offering a dynamic learning environment that encourages students to explore, question, and create. Our distinguished faculty members, state-of-the-art infrastructure, and industry-oriented curriculum ensure that our students are well-equipped to meet the challenges of a rapidly evolving world. We continuously strive to bridge the gap between theoretical knowledge and practical application, empowering our students to become competent professionals.",
      "At the heart of our mission lies the goal of nurturing visionary leaders who can contribute meaningfully to society. We emphasize not only technical proficiency but also ethical values, critical thinking, and leadership skills. Through various academic and co-curricular initiatives, we aim to shape individuals who are innovative, socially responsible, and globally competitive.",
      "As you embark on your journey with us, I encourage you to make the most of the opportunities available at Anna University. Engage actively in your academic pursuits, participate in collaborative learning, and strive for excellence in all that you do. I wish you a rewarding and transformative experience that will prepare you for a bright and successful future."
    ],
    image: "/DEAN_DESK.jpeg"
  });

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await fetch("/api/home");
        if (!response.ok) throw new Error("Failed to fetch home data");
        const data = await response.json();
        if (data.latestNews && data.latestNews.length > 0) {
          setTickerItems(data.latestNews);
        }
        if (data.newsAdmissions && data.newsAdmissions.length > 0) {
          setNews(data.newsAdmissions);
        }
        if (data.eventsScholarships && data.eventsScholarships.length > 0) {
          setEvents(data.eventsScholarships);
        }
        if (data.deanDesk) {
          setDeanDesk(data.deanDesk);
        }
      } catch (error) {
        console.error("Error loading home page data:", error);
      }
    };
    fetchHomeData();
  }, []);

  // Static Data
  const galleryImages = [
    {
      src: "/1.webp",
      alt: "College Event",
      description: "Annual cultural festival celebrating diverse talents",
    },
    {
      src: "/cse-girls-closeup.webp",
      alt: "Students in Lab",
      description: "Students collaborating on innovative projects",
    },
    {
      src: "/4.webp",
      alt: "Campus View",
      description: "Our beautiful campus surrounded by greenery",
    },
    {
      src: "/computer-lab.webp",
      alt: "Computer Lab",
      description: "State-of-the-art computer lab with latest equipment",
    },
    {
      src: "/Drone_shot.jpg",
      alt: "Aerial View",
      description: "Aerial view of our sprawling campus facilities",
    },
  ];

  const testimonials = [
    {
      name: "Arjun R",
      branch: "EEE",
      batch: "2019-2023",
      company: "Deloitte",
      role: "Assistant Manager",
      message:
        "My journey at the college was transformative, where supportive faculty and enriching experiences shaped my skills, confidence, and professional outlook for future success.",
      image: "/ArjunR.jpeg",
    },
    {
      name: "SUBASH S",
      branch: "CSE",
      batch: "2021-2025",
      company: "ZOHO",
      role: "Android developer",
      message: "Anna University Regional Campus, Coimbatore is a good place to study with decent infrastructure and well-equipped labs. Though the campus is smaller, it offers supportive faculty, good exposure, and valuable academic opportunities.",
      image: "/SUBASHS.png",
    },
    {
      name: "Ragul R",
      branch: "CSE",
      batch: "2020 - 2024",
      company: "HCL GUVI",
      role: "Software Engineer",
      message:
        "The college management and department staff are extremely supportive. I learned many valuable lessons from them during my time at the institution.",
      image: "/ragul.jpeg",
    },
    {
      name: "Yogananth R",
      branch: "CSE",
      batch: "2019-2023",
      company: "Deloitte",
      role: "Cloud Engineer",
      message:
        "What began as a phase of education became a meaningful journey that shaped my growth beyond academics. Anna University Coimbatore helped me discover my potential, and I remain grateful for the experiences and lessons it provided.",
      image: "/YogananthR.jpeg",
    },
    {
      name: "Lakhshitha M K",
      branch: "Mech",
      batch: "2021-2025",
      // company: "Google",
      message:
        "My journey at Anna University, Coimbatore was truly memorable, shaping me both personally and professionally. I’m grateful for the guidance and experiences that helped me achieve my dream of becoming an engineer.",
      image: "/LakhshithaMK.jpg",
    },
    {
      name: "Rajalakshmi R",
      branch: "CSE",
      batch: "2021-2025",
      company: "Deloitte",
      role: "Analyst",
      message: "AURCC gave me knowledge, confidence, and valuable opportunities through supportive faculty and skill-building programs. Fee support made my education possible, and I’m proud to be its alumnus.",
      image: "/RajalakshmiR.jpeg",
    }, {
      name: "Thangaraj P",
      branch: "Mech",
      batch: "2019-2023",
      company: "Deloitte",
      role: "Oracle Analyst",
      message: "Anna University Regional Campus, Coimbatore offers a strong academic foundation with supportive faculty and a positive learning environment. The college helped me develop technical and personal skills while preparing me well for my professional career.",
      image: "/ThangarajP.jpeg",
    },
  ];

  const [prevIndex, setPrevIndex] = useState(testimonials.length - 1);

  // Logic for Testimonials
  const nextSlide = () => {
    setCurrentIndex((prev) => {
      setPrevIndex(prev);
      return prev === testimonials.length - 1 ? 0 : prev + 1;
    });
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => {
      setPrevIndex(prev);
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };
  const goToSlide = (index) => {
    setPrevIndex(currentIndex);
    setCurrentIndex(index);
  };

  // Auto-rotate testimonials with seamless slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        setPrevIndex(prev);
        return prev === testimonials.length - 1 ? 0 : prev + 1;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // // Logic for Testimonials
  // const nextSlide = () => {
  //   setCurrentIndex((prev) =>
  //     prev === testimonials.length - 1 ? 0 : prev + 1,
  //   );
  // };
  // const prevSlide = () => {
  //   setCurrentIndex((prev) =>
  //     prev === 0 ? testimonials.length - 1 : prev - 1,
  //   );
  // };
  // const goToSlide = (index) => {
  //   setCurrentIndex(index);
  // };

  // Logic for Image Gallery
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };
  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
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

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButtons(true);
      } else {
        setShowScrollButtons(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to bottom of chat
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
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
      { threshold: 0.3 },
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
      placement: 100,
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
        placement: Math.floor(easeOutQuad * targets.placement),
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
      setChatLog((prev) => [
        ...prev,
        { sender: "bot", message: data.response },
      ]);
    } catch (error) {
      console.error("Error communicating with chatbot:", error);
      setChatLog((prev) => [
        ...prev,
        {
          sender: "bot",
          message: "An error occurred. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleScrollDown = () => {
    if (statsRef.current) {
      statsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-w-[300px] min-h-[800px] overflow-x-hidden">
      <div id="home_page" className="pt-[126px] sm:pt-[130px]">
        {/* All page content here */}

        <main className="">
          <div className="relative flex items-center bg-[rgb(115,25,25)] text-white py-1.5 sm:py-2 overflow-hidden z-20">
            {/* LATEST NEWS badge with live pulsing dot */}
            <div className="absolute left-0 top-0 bottom-0 bg-[#ffb300] text-black pr-3.5 pl-1.5 sm:pr-8 sm:pl-5 flex items-center font-extrabold z-30 text-[9px] sm:text-xs tracking-wider shadow-[4px_0_10px_rgba(0,0,0,0.3)] [clip-path:polygon(0_0,100%_0,88%_100%,0_100%)]">
              <span className="relative flex h-2 w-2 mr-1 sm:mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-red-600"></span>
              </span>
              <span className="hidden sm:inline">LATEST&nbsp;</span>NEWS
            </div>

            {/* Scrolling Ticker Content */}
            <div className="ticker-container w-full">
              <div className="ticker-content">
                {[...tickerItems, ...tickerItems].map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-6 sm:mx-10 text-yellow-300 hover:text-white whitespace-nowrap text-xs sm:text-sm font-semibold"
                  >
                    •  {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Hero Section */}
          <section
            className="relative h-[300px] md:h-[400px] lg:h-[670px] flex items-center justify-center overflow-hidden "
          >
            <div className="absolute inset-0 ">
              <video
                src="/aurcc_front_view.mp4" // place your mp4 file in public folder
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover scale-110 transform animate-subtle-zoom"
              />
              <div className="absolute inset-0 opacity-35 bg-slate-950"></div>
            </div>
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 mix-blend-overlay">
              <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <pattern
                  id="circuit-pattern"
                  width="200"
                  height="200"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M50 0 L50 50 L100 50 M150 0 L150 50 L100 50 M100 50 L100 100 M0 100 L50 100 M50 100 L50 150 L100 150 M150 150 L200 150 M150 100 L150 200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
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
              <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
                <span className="block text-4xl sm:text-7xl lg:text-8xl opacity-95">Welcome to</span>
                <span className="block text-2xl sm:text-4xl lg:text-5xl mt-2 leading-tight md:whitespace-nowrap">
                  Anna University Regional Campus Coimbatore
                </span>
              </h1>
              {/* <p className="text-lg sm:text-xl md:text-2xl text-[rgb(115,40,40)] px-2">
                            Shaping Tomorrow's Leaders Today
                        </p> */}
              <div className="mt-8 sm:mt-10 flex flex-row justify-center items-center gap-2 sm:gap-12 px-1 sm:px-4 text-center">
                <a
                  href="#programs"
                  className="inline-block px-3 sm:px-8 py-2 sm:py-4 bg-white text-[rgb(100,25,25)] rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-base min-w-[120px] sm:min-w-[150px]"
                >
                  Explore Programs
                </a>
                <button
                  onClick={() => document.getElementById("my_modal_7").showModal()}
                  className="inline-block px-3 sm:px-8 py-2 sm:py-4 bg-[rgb(100,25,25)] text-white rounded-full font-semibold border-2 border-white/20 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-base min-w-[120px] sm:min-w-[150px]"
                >
                  Campus Tour
                </button>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div
              onClick={handleScrollDown}
              className="absolute bottom-3 sm:bottom-6 left-1/2 transform -translate-x-1/2 hidden sm:flex flex-col items-center gap-1 sm:gap-2 cursor-pointer z-30 group hover:opacity-100 transition-opacity duration-300 opacity-90"
            >
              <span className="text-[10px] sm:text-[11px] font-black text-yellow-400 tracking-[0.2em] sm:tracking-[0.25em] uppercase select-none group-hover:text-white transition-colors duration-300">
                Scroll Down
              </span>
              <div className="w-4 h-7 sm:w-6 sm:h-10 border-2 border-yellow-400/80 group-hover:border-white rounded-full flex justify-center p-1 sm:p-1.5 transition-colors duration-300">
                <div className="w-0.5 sm:w-1.5 h-1.5 sm:h-3 bg-yellow-400 group-hover:bg-white rounded-full animate-scroll-wheel"></div>
              </div>
            </div>
          </section>

          {/* Floating Stats Cards */}
          <section
            ref={statsRef}
            className="container mx-auto px-4 sm:px-6 lg:px-8 relative mt-16 sm:mt-20 md:mt-24 lg:mt-12 z-30 mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-6">
              {[
                {
                  label: "Global Alumni",
                  value: "5,000+",
                  animatedValue: counts.alumni,
                  suffix: "+",
                  icon: (
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  ),
                },
                {
                  label: "Rank in TNEA",
                  value: "7th",
                  animatedValue: counts.rank,
                  suffix: "th",
                  icon: (
                    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  ),
                },
                {
                  label: "Of Excellence",
                  value: "20+ Years",
                  animatedValue: counts.years,
                  suffix: "+ Years",
                  icon: <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
                },
                {
                  label: "Placement Record",
                  value: "100%",
                  animatedValue: counts.placement,
                  suffix: "%",
                  icon: (
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  ),
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/90 backdrop-blur-sm rounded-md sm:rounded-xl shadow-2xl border-t-[4px] sm:border-t-[8px] border-l-[6px] sm:border-l-[10px] border-[rgb(115,25,25)]/80 p-2 sm:p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl min-h-[90px] sm:min-h-[180px] lg:min-h-[200px] flex flex-col justify-center items-center"
                >
                  <div className="text-[rgb(115,40,40)] mb-1 sm:mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-10 lg:h-12 lg:w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {stat.icon}
                    </svg>
                  </div>
                  <div className="text-sm sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-1 sm:mb-3">
                    {stat.animatedValue.toLocaleString()}
                    {stat.suffix}
                  </div>
                  <div className="text-[9px] sm:text-base lg:text-lg text-gray-600 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* About Section */}
          <section
            id="about"
            className="container mx-auto px-4 sm:px-8 lg:px-14 relative py-12 sm:py-16 lg:py-10 overflow-hidden scroll-mt-24 lg:scroll-mt-32"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
              <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <pattern
                  id="dots-pattern"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
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
              <div className="grid grid-cols-12 gap-2 sm:gap-16 items-center mb-12 sm:mb-16">
                <div className="col-span-12 md:col-span-7 space-y-2 sm:space-y-8">
                  <h2 className="text-base sm:text-3xl font-bold text-[rgb(100,25,25)] relative inline-block group">
                    ABOUT OUR CAMPUS
                    <span className="absolute -bottom-1 sm:-bottom-3 left-1/2 transform -translate-x-1/2 h-[1px] sm:h-1 w-16 sm:w-40 lg:w-32 bg-yellow-500"></span>
                  </h2>
                  <div className="bg-white/80 backdrop-blur-sm shadow-xl border border-[rgb(180,100,100)] p-5 sm:p-8 rounded-xl">
                    <p className="text-sm sm:text-xl text-gray-700 leading-relaxed">
                      The Regional Campus Coimbatore of Anna University,
                      established in 2012, offers world-class education in
                      Engineering and Technology. Nestled in a serene
                      environment away from the city's hustle, our campus boasts
                      state-of-the-art infrastructure and a team of highly
                      qualified faculty members dedicated to academic
                      excellence.
                    </p>
                    <p className="text-sm sm:text-xl text-gray-700 leading-relaxed mt-4">
                      Our university is committed to holistic education with a
                      focus on innovation, research, and industry collaboration.
                      We provide an engaging learning environment where students
                      can develop their technical skills, critical thinking
                      abilities, and leadership qualities needed to excel in
                      their chosen fields.
                    </p>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-5 mt-4 md:mt-10">
                  <div className="relative group overflow-hidden rounded-md sm:rounded-2xl shadow-2xl border-2 sm:border-4 border-white/50 transform hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_0_30px_rgba(115,25,25,0.3)]">
                    <img
                      src="/ANN UNIV_WIDE.jpg"
                      alt="Campus Aerial View"
                      className="w-full h-[200px] sm:h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgb(115,25,25)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-2 sm:p-6">
                      <p className="text-white font-black text-[9px] sm:text-sm uppercase tracking-widest leading-none">
                        Our Sprawling Campus
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2: News & Events (Full Width) */}
              <div className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 relative">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
                    <svg
                      width="100%"
                      height="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <pattern
                        id="triangle-pattern"
                        width="60"
                        height="60"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M0 60 L30 0 L60 60 Z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                        />
                      </pattern>
                      <rect
                        width="100%"
                        height="100%"
                        fill="url(#triangle-pattern)"
                      />
                    </svg>
                  </div>

                  {/* News Card */}
                  <div className="rounded-lg bg-white/80 backdrop-blur-sm shadow-lg overflow-hidden border border-[rgb(180,100,100)]">
                    <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-1.5 sm:py-4 px-2.5 sm:px-6 flex items-center justify-between">
                      <h3 className="text-xs sm:text-lg font-semibold text-white">
                        News & Admissions
                      </h3>
                      <div className="w-5 h-5 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 sm:w-5 sm:h-5 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="p-1 sm:p-8 max-h-[180px] sm:max-h-[300px] overflow-hidden">
                      <ul className="news-scroll w-full divide-y divide-gray-100">
                        {news.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex font-bold items-center py-1.5 sm:py-3 px-1 sm:px-6 hover:bg-[rgb(220,140,140)] transition-colors duration-200 group cursor-pointer"
                          >
                            <div className="mr-1.5 sm:mr-3 flex-shrink-0 w-1 sm:w-2 h-1 sm:h-2 bg-[rgb(220,140,140)]0 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ease-out text-[10px] sm:text-base leading-tight"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                        <li className="flex items-center py-1.5 sm:py-3 px-1 sm:px-6 text-[rgb(115,40,40)] font-medium group cursor-pointer hover:bg-[rgb(220,140,140)]">
                          <Link
                            to="/news"
                            className="flex items-center transform group-hover:translate-x-1 transition-transform duration-300 text-[10px] sm:text-base leading-tight"
                          >
                            View All Announcements
                            <svg
                              className="w-2.5 h-2.5 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Events Card */}
                  <div className="rounded-lg bg-white/80 backdrop-blur-sm shadow-lg overflow-hidden border border-[rgb(180,100,100)]">
                    <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-1.5 sm:py-4 px-2.5 sm:px-6 flex items-center justify-between">
                      <h3 className="text-xs sm:text-lg font-semibold text-white">
                        Events & Scholarships
                      </h3>
                      <div className="w-5 h-5 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 sm:w-5 sm:h-5 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="p-1 sm:p-8 max-h-[180px] sm:max-h-[300px] overflow-hidden">
                      <ul className="events-scroll w-full divide-y divide-gray-100">
                        {events.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex font-bold items-center py-1.5 sm:py-3 px-1 sm:px-6 hover:bg-[rgb(220,140,140)] transition-colors duration-200 group cursor-pointer"
                          >
                            <div className="mr-1.5 sm:mr-3 flex-shrink-0 w-1 sm:w-2 h-1 sm:h-2 bg-[rgb(220,140,140)]0 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ease-out text-[10px] sm:text-base leading-tight"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                        <li className="flex items-center py-1.5 sm:py-3 px-1 sm:px-6 text-[rgb(115,40,40)] font-medium group cursor-pointer hover:bg-[rgb(220,140,140)]">
                          <Link
                            to="/events"
                            className="flex items-center transform group-hover:translate-x-1 transition-transform duration-300 text-[10px] sm:text-base leading-tight"
                          >
                            View All Events
                            <svg
                              className="w-2.5 h-2.5 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
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


          {/* Programs Offered */}
          <div id="programs" className="mt-22 pb-12 relative scroll-mt-24 lg:scroll-mt-32">
            <div className="text-center">
              <h2 className="text-base sm:text-3xl lg:text-4xl font-bold mt-4 sm:mt-16 sm:mb-16 uppercase text-[rgb(100,25,25)] relative inline-block">
                Academic Programmes
                <span className="absolute -bottom-1 sm:-bottom-3 left-1/2 transform -translate-x-1/2 h-[1px] sm:h-1 w-16 sm:w-36 lg:w-44 bg-yellow-500"></span>
              </h2>
            </div>

            <div
              className="overflow-x-auto scrollbar-hide px-4 sm:px-8 lg:px-12"
              ref={progScrollRef}
              onScroll={handleProgScroll}
            >
              <div className="flex space-x-6 py-4 w-max">
                {[
                  { heading: "BACHELOR OF DEGREE", course: "Computer Science and Engineering", image: "/cse.jpg", url: "/departments/cse" },
                  { heading: "BACHELOR OF DEGREE", course: "Electronics and Communication Engineering", image: "/ece.jpg", url: "/departments/ece" },
                  { heading: "BACHELOR OF DEGREE", course: "Electrical and Electronics Engineering", image: "/eee.jpg", url: "/departments/eee" },
                  { heading: "BACHELOR OF DEGREE", course: "Mechanical Engineering", image: "/mech.jpg", url: "/departments/mech" },
                  { heading: "BACHELOR OF TECHNOLOGY", course: "Artifical Intelligence and Data Science", image: "/ai.jpg", url: "/departments/cse" },
                  { heading: "BACHELOR OF DEGREE", course: "Electronics Engineering (VLSI Design & Technology)", image: "/vlsi.jpg", url: "/departments/ece" },
                  { heading: "MASTER OF BUSINESS ADMINISTRATION", course: "MBA", image: "/mba.jpg", url: "/departments/mba" },
                  { heading: "MASTER OF BUSINESS ADMINISTRATION", course: "MBA Business Analytics", image: "/mba_ba.jpg", url: "/departments/mba" },
                ].map((prog, idx) => (
                  <div
                    key={idx}
                    onClick={() => scrollToIndex(idx)} //  Use unified function
                    className="group bg-white rounded-md sm:rounded-2xl shadow-lg overflow-hidden w-[140px] sm:w-[350px] lg:w-[380px] 
            transform transition-all duration-500 
            hover:-translate-y-4 hover:shadow-2xl cursor-pointer"
                  >
                    {/* Image Section */}
                    <div className="h-20 sm:h-48 w-full overflow-hidden">
                      <img
                        src={prog.image}
                        alt={prog.course}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-2 sm:p-6 text-center">
                      <h3 className="text-[8px] sm:text-xl font-bold text-gray-500 tracking-wide">
                        {prog.heading}
                      </h3>
                      <h2 className="text-[10px] sm:text-base font-bold text-gray-900 mt-1 sm:mt-2 leading-snug">
                        {prog.course}
                      </h2>
                      <p className="text-gray-600 mt-1 sm:mt-3 text-[8px] sm:text-sm leading-tight">
                        Explore opportunities in {prog.course.toLowerCase()}.
                      </p>
                      <Link
                        to={prog.url}
                        className="inline-block mt-1 sm:mt-5 text-[rgb(120,45,45)] font-semibold text-[8px] sm:text-base
               relative after:block after:h-[1px] sm:after:h-[2px] after:w-0 
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

            {/* Slider Navigation */}
            <div className="flex items-center justify-center space-x-2 sm:space-x-6 mt-4 sm:mt-10">
              {/* Left Arrow */}
              <button
                onClick={() => scrollToIndex(Math.max(0, progIndex - 1))} // ✅ Use unified function
                className={`p-1.5 sm:p-3 rounded-full border-[1px] sm:border-2 border-[rgb(120,45,45)] text-[rgb(120,45,45)] 
        hover:bg-[rgb(120,45,45)] hover:text-white transition-all duration-300 shadow-md 
        ${progIndex === 0 ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}`}
                disabled={progIndex === 0}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex space-x-1 sm:space-x-3">
                {[0, 1].map((i) => (
                  <button
                    key={i}
                    onClick={() => scrollToIndex(i)} //  Use unified function
                    className={`transition-all duration-500 rounded-full ${progIndex === i
                      ? "w-4 sm:w-8 h-2 sm:h-3 bg-[rgb(120,45,45)]"
                      : "w-2 sm:w-3 h-2 sm:h-3 bg-gray-300 hover:bg-gray-400"
                      }`}
                  />
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => scrollToIndex(Math.min(1, progIndex + 1))} //  Use unified function
                className={`p-1.5 sm:p-3 rounded-full border-[1px] sm:border-2 border-[rgb(120,45,45)] text-[rgb(120,45,45)] 
        hover:bg-[rgb(120,45,45)] hover:text-white transition-all duration-300 shadow-md 
        ${progIndex === 1 ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}`}
                disabled={progIndex === 1}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Dean's Message */}
          <section
            id="deans-message"
            className="py-12 sm:py-16 lg:py-24 bg-gray-100 text-white relative overflow-hidden scroll-mt-24 lg:scroll-mt-32"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
              {/* <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <pattern
                  id="wave-pattern"
                  width="100"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </pattern>
                <rect width="100%" height="100%" fill="url(#wave-pattern)" />
              </svg> */}

            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-12 sm:mb-12 -mt-10">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[rgb(100,25,25)] relative inline-block">
                  From the Dean's Desk
                  <span className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-16 sm:w-20 lg:w-24 bg-yellow-500"></span>
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row items-center bg-white bg-opacity-10 rounded-lg shadow-xl overflow-hidden backdrop-filter border border-[rgb(180,100,100)] backdrop-blur-lg max-w-6xl mx-auto">
                <div className="w-full sm:w-1/3 p-4 sm:p-6 md:p-8 flex items-center justify-center">
                  <img
                    src={deanDesk.image || "/DEAN_DESK.jpeg"}
                    alt="Dean's Photo"
                    className="w-48 sm:w-full h-auto object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="w-full sm:w-2/3 p-4 sm:p-6 md:p-8 text-gray-900">
                  <div className="text-center lg:text-left">
                    <div className="flex justify-center lg:justify-start items-center gap-2">
                      <h3 className="text-base sm:text-xl lg:text-2xl font-bold">
                        {deanDesk.name} <span className="text-[10px] sm:text-sm lg:text-base font-normal text-gray-700">{deanDesk.credentials}</span>
                      </h3>
                    </div>

                    <p className="text-xs sm:text-base text-gray-800 mt-1">
                      {deanDesk.designation}
                    </p>
                  </div>
                  <p className="text-center lg:text-left text-xs sm:text-base text-[rgb(100,25,25)] mt-2 sm:mt-6 mb-2 sm:mb-4 italic font-medium">
                    "{deanDesk.quote}"
                  </p>
                  <div className="h-[180px] sm:h-[250px] overflow-y-auto pr-2 sm:pr-4 scrollbar-custom border-2 border-[rgb(180,100,100)] rounded-xl p-3 sm:p-4 bg-white/5">
                    {deanDesk.paragraphs && deanDesk.paragraphs.map((para, index) => (
                      <p key={index} className="text-xs sm:text-lg mb-2 sm:mb-4 text-gray-950">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Recruiters */}

          <section
            id="our_recruiters"
            className=" bg-[url('/anna_unv_fnt.jpg')]  bg-cover bg-center bg-no-repeat py-16 lg:py-16 overflow-hidden relative scroll-mt-24 lg:scroll-mt-32"
          >
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              {/* Heading */}

              <div className="text-center mt-2 sm:mt-4">
                <h2 className="text-base sm:text-3xl lg:text-4xl font-bold text-white relative inline-block leading-tight">
                  OUR RECRUITERS
                  <span className="absolute -bottom-1 sm:-bottom-3 left-1/2 -translate-x-1/2 h-[1px] sm:h-1 w-8 sm:w-20 bg-yellow-500"></span>
                </h2>
              </div>

              {/* Slider Wrapper */}
              <div className="relative w-full mt-4 sm:mt-20 overflow-hidden">
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
                        className="min-w-[80px] sm:min-w-[220px] h-[40px] sm:h-[130px] bg-white rounded-md sm:rounded-2xl border-[1px] sm:border-2 border-gray-200 flex items-center justify-center hover:shadow-xl hover:scale-105 transition duration-300"
                      >
                        <img
                          src={logo}
                          alt="Company Logo"
                          className="max-h-4 sm:max-h-20 object-contain"
                        />
                      </div>
                    ))}
                </div>
              </div>

              {/* Dots (Moved Up) */}
              {/* <div className="flex justify-center gap-3 mt-16">
                {Array.from({ length: totalDots }).map((_, index) => (
                  <div
                    key={index}
                    className="relative w-10 h-2 bg-gray-300 rounded-full overflow-hidden"
                  >
                    {activeDot === index && (
                      <div
                        className="absolute left-0 top-0 h-full bg-[rgb(120,45,45)]"
                        style={{
                          animation: `fillBar ${duration}ms linear forwards`,
                        }}
                      />
                    )}
                  </div>
                ))}
              </div> */}
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

          {/* ATTRIBUTES OF AURCC */}
          <section className="py-20 bg-gray-100 overflow-hidden relative">
            <div className=" mt-4 ">
              <div className="text-center  mb-6 -mt-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-900 relative inline-block mb-4">
                  ATTRIBUTES OF AURCC
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-1 w-20 bg-yellow-500"></span>
                </h2>
              </div>
              <div className="container mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center">
                {/* LEFT IMAGE COLLAGE */}
                <div className="relative w-full h-[260px] sm:h-[450px] lg:h-[500px] flex items-center justify-center lg:-ml-10 -mt-2 sm:-mt-24">
                  <div className="absolute inset-0 opacity-30 text-[rgb(115,40,40)] pointer-events-none">
                    <svg
                      width="100%"
                      height="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <pattern
                        id="hexagon-pattern"
                        width="100"
                        height="100"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M50 0 L87.5 25 L87.5 75 L50 100 L12.5 75 L12.5 25 Z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                        />
                      </pattern>
                      <rect
                        width="100%"
                        height="100%"
                        fill="url(#hexagon-pattern)"
                      />
                    </svg>
                  </div>

                  {/* Big Image */}
                  <div className="absolute left-[5%] top-1 sm:top-5 lg:left-[20px] lg:top-10 bg-[rgb(115,25,25)] w-[85%] lg:w-[520px] h-[150px] sm:h-[300px] lg:h-[380px] rounded-lg sm:rounded-[25px] overflow-hidden border-[2px] sm:border-[8px] border-white shadow-xl group">
                    <img
                      src="/collegeinterior.jpg"
                      alt="students"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 animate-float"
                    />
                  </div>

                  {/* Small Image Overlapping */}
                  <div className="absolute left-[30%] top-[120px] sm:top-[220px] lg:left-[300px] lg:top-[200px] bg-[rgb(115,25,25)] w-[65%] lg:w-[400px] h-[120px] sm:h-[250px] lg:h-[300px] rounded-lg sm:rounded-[25px] overflow-hidden border-[2px] sm:border-[8px] border-white shadow-xl z-20 group">
                    <img
                      src="/studentsview.jpg"
                      alt="students"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 animate-float2"
                    />
                  </div>
                </div>
                {/* RIGHT CONTENT */}
                <div>
                  {/* <p className="text-gray-800 tracking-widest text-sm text-center font-semibold mb-6">
                  THE BRIDGE BETWEEN ONSET AND ACHIEVEMENT
                </p> */}
                  <div className="flex flex-col gap-4 sm:gap-8">
                    {/* Card 3 */}
                    <div
                      className="lg:ml-32 bg-white p-4 sm:p-6 rounded-md sm:rounded-xl shadow-md 
  hover:bg-gradient-to-r hover:from-[rgb(115,63,63)] hover:to-[rgb(115,25,25)]
  hover:text-white hover:-translate-y-2 transition-all duration-300"
                    >
                      <div className="flex gap-2 sm:gap-4">
                        <span className="text-blue-600 text-sm sm:text-xl">✔</span>

                        <div>
                          <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 leading-tight">
                            Career Development
                          </h3>

                          <p className="text-sm sm:text-base leading-relaxed text-gray-700 hover:text-white/95">
                            The Career Development supports students with mentorship, leadership training, and career guidance to shape confident professionals for future success.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div
                      className="lg:ml-16 bg-white p-4 sm:p-6 rounded-md sm:rounded-xl shadow-md
  hover:bg-gradient-to-r hover:from-[rgb(115,63,63)] hover:to-[rgb(115,25,25)]
  hover:text-white hover:-translate-y-2 transition-all duration-300"
                    >
                      <div className="flex gap-2 sm:gap-4">
                        <span className="text-blue-600 text-sm sm:text-xl">✔</span>

                        <div>
                          <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 leading-tight">
                            Placement Support
                          </h3>

                          <p className="text-sm sm:text-base leading-relaxed text-gray-700 hover:text-white/95">
                            The Placement Assistance team prepares students through aptitude training, mock interviews, and industry guidance to achieve excellent placement opportunities.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card 1 */}
                    <div
                      className="bg-white p-4 sm:p-6 rounded-md sm:rounded-xl shadow-md
  hover:bg-gradient-to-r hover:from-[rgb(115,63,63)] hover:to-[rgb(115,25,25)]
  hover:text-white hover:-translate-y-2 transition-all duration-300"
                    >
                      <div className="flex gap-2 sm:gap-4">
                        <span className="text-blue-600 text-sm sm:text-xl">✔</span>

                        <div>
                          <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 leading-tight">
                            Skill Development
                          </h3>

                          <p className="text-sm sm:text-base leading-relaxed text-gray-700 hover:text-white/95">
                            The Skill Development enhances students through technical training, innovative workshops, and real-world projects to strengthen professional abilities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Section Commented Out */}
          {false && (
            <section id="gallery" className="py-16 bg-white scroll-mt-32">
              <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-14  text-[rgb(100,25,25)] relative inline-block">
                  GALLERY OF MEMORIES
                  <span className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-16 sm:w-20 lg:w-24 bg-yellow-500"></span>
                </h2>

                <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8">
                  {/* Graduation */}
                  <Link to="/graduation">
                    <div className="group cursor-pointer overflow-hidden rounded-md sm:rounded-xl shadow-xl">
                      <img
                        src="/Gallery/Graduation/graduationmain.png"
                        className="w-full h-16 sm:h-60 object-cover group-hover:scale-110 transition duration-500"
                      />
                      <div className="bg-[rgb(115,25,25)] text-white text-center py-1 sm:py-3 font-semibold text-[6px] sm:text-base leading-tight">
                        Graduation
                      </div>
                    </div>
                  </Link>

                  {/* Annual Day */}
                  <Link to="/annualday">
                    <div className="group cursor-pointer overflow-hidden rounded-md sm:rounded-xl shadow-xl">
                      <img
                        src="/Gallery/Annualday/2024/img01.JPG"
                        className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
                      />
                      <div className="bg-[rgb(115,25,25)] text-white text-center py-1 sm:py-3 font-semibold text-[6px] sm:text-base leading-tight">
                        Annual Day
                      </div>
                    </div>
                  </Link>

                  {/* ARUA */}
                  <Link to="/culturalsday">
                    <div className="group cursor-pointer overflow-hidden rounded-xl shadow-xl">
                      <img
                        src="/fresher.jpg"
                        className="w-full h-16 sm:h-60 object-cover group-hover:scale-110 transition duration-500"
                      />
                      <div className="bg-[rgb(115,25,25)] text-white text-center py-3 font-semibold">
                        Culturals

                      </div>
                    </div>
                  </Link>


                  {/* Pongal */}
                  <Link to="/gallery/pongal">
                    <div className="group cursor-pointer overflow-hidden rounded-md sm:rounded-xl shadow-xl">
                      <img
                        src="/Pongal.jpg"
                        className="w-full h-16 sm:h-60 object-cover group-hover:scale-110 transition duration-500"
                      />
                      <div className="bg-[rgb(115,25,25)] text-white text-center py-1 sm:py-3 font-semibold text-[6px] sm:text-base leading-tight">
                        Pongal Celebration
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </section>
          )}

          {/* Alumni Testimonials */}
          <section
            id="alumni"
            className="pt-12 pb-16 sm:pb-20 lg:pb-24 bg-gray-50 relative overflow-hidden scroll-mt-24 lg:scroll-mt-32"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
              <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <pattern
                  id="zigzag-pattern"
                  width="100"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M0 0 L20 10 L0 20 L20 30 L0 40 L20 50 L0 60 L20 70 L0 80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <path
                    d="M50 0 L70 10 L50 20 L70 30 L50 40 L70 50 L50 60 L70 70 L50 80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </pattern>
                <rect width="100%" height="100%" fill="url(#zigzag-pattern)" />
              </svg>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 sm:mb-16 text-[rgb(100,25,25)] relative inline-block mx-4">
                ALUMNI SPEAK
                <span className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-16 sm:w-20 lg:w-24 bg-yellow-500"></span>
              </h2>
              <div className="relative max-w-[1800px] mx-auto px-4 xl:px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-12 lg:gap-28">
                  {/* Left Card Area */}
                  <div className="w-[85%] max-w-sm mx-auto sm:w-full sm:max-w-none relative overflow-hidden rounded-md sm:rounded-xl shadow-xl min-h-[230px] sm:min-h-[450px] xl:min-h-[300px] bg-white">
                    {testimonials.map((testimonial, idx) => {
                      // Next cards wait on the left, prev cards exit to the left
                      let positionClass =
                        "opacity-0 -translate-x-full z-0 pointer-events-none";
                      if (idx === currentIndex) {
                        positionClass =
                          "opacity-100 translate-x-0 z-10 transition-all duration-1000 ease-in-out";
                      } else if (idx === prevIndex) {
                        positionClass =
                          "opacity-0 -translate-x-full z-0 pointer-events-none transition-all duration-1000 ease-in-out";
                      }

                      return (
                        <div
                          key={`left-${idx}`}
                          className={`absolute inset-0 w-full h-full flex-shrink-0 flex flex-col sm:flex-row text-left bg-white ${positionClass}`}
                        >
                          <div className="h-[45%] sm:h-full w-full sm:w-[40%] bg-gradient-to-br from-[rgb(115,63,63)] to-[rgb(115,25,25)] p-2 sm:p-2 lg:p-3 xl:p-4 flex flex-row sm:flex-col items-center justify-center gap-3 sm:gap-0">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="rounded-md w-20 h-20 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 border-[1px] sm:border-2 border-white mb-0 sm:mb-2 mt-0 sm:mt-2 object-cover object-top shadow-lg"
                            />
                            <div className="flex flex-col items-start sm:items-center justify-center">
                              <h3 className="text-[12px] sm:text-xs lg:text-sm xl:text-base font-bold text-white text-left sm:text-center w-full mt-0 sm:mt-2 leading-tight">
                                {testimonial.name}
                              </h3>
                              <p className="text-[10px] sm:text-[10px] lg:text-xs xl:text-sm text-white text-left sm:text-center w-full leading-tight mt-0.5">
                                {testimonial.branch} | {testimonial.batch}
                              </p>
                              {testimonial.role && (
                                <p className="text-[10px] sm:text-[10px] lg:text-xs xl:text-sm text-white text-left sm:text-center w-full leading-tight mt-0.5">
                                  {testimonial.role}
                                </p>
                              )}
                              {testimonial.company && (
                                <p className="text-[10px] sm:text-[10px] lg:text-xs xl:text-sm text-white font-semibold text-left sm:text-center w-full leading-tight mt-0.5">
                                  Placed in{" "}
                                  <span className="text-yellow-300 block xl:inline">
                                    {testimonial.company}
                                  </span>
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="h-[55%] sm:h-full w-full sm:w-[60%] p-2 sm:p-6 flex flex-col justify-center">
                            <svg
                              className="w-4 h-4 sm:w-10 sm:h-10 text-[rgb(200,120,120)] mb-1 sm:mb-2"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="text-gray-700 leading-tight sm:leading-relaxed mb-1 sm:mb-4 text-[8.5px] sm:text-xs lg:text-sm">
                              {testimonial.message}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Right Card Area */}
                  <div className="hidden sm:block w-[85%] max-w-sm mx-auto sm:w-full sm:max-w-none relative overflow-hidden rounded-md sm:rounded-xl shadow-xl min-h-[230px] sm:min-h-[450px] xl:min-h-[300px] bg-white">
                    {testimonials.map((_, idx) => {
                      const rightIdx = (idx + 1) % testimonials.length;
                      const testimonial = testimonials[rightIdx];

                      // Next cards wait on the right, prev cards exit to the right
                      let positionClass =
                        "opacity-0 translate-x-full z-0 pointer-events-none";
                      if (idx === currentIndex) {
                        positionClass =
                          "opacity-100 translate-x-0 z-10 transition-all duration-1000 ease-in-out";
                      } else if (idx === prevIndex) {
                        positionClass =
                          "opacity-0 translate-x-full z-0 pointer-events-none transition-all duration-1000 ease-in-out";
                      }

                      return (
                        <div
                          key={`right-${idx}`}
                          className={`absolute inset-0 w-full h-full flex-shrink-0 flex flex-col sm:flex-row text-left bg-white ${positionClass}`}
                        >
                          <div className="h-[45%] sm:h-full w-full sm:w-[40%] bg-gradient-to-br from-[rgb(115,63,63)] to-[rgb(115,25,25)] p-2 sm:p-2 lg:p-3 xl:p-4 flex flex-row sm:flex-col items-center justify-center gap-3 sm:gap-0">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="rounded-md w-20 h-20 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 border-[1px] sm:border-2 border-white mb-0 sm:mb-2 mt-0 sm:mt-2 object-cover object-top shadow-lg"
                            />
                            <div className="flex flex-col items-start sm:items-center justify-center">
                              <h3 className="text-[12px] sm:text-xs lg:text-sm xl:text-base font-bold text-white text-left sm:text-center w-full mt-0 sm:mt-2 leading-tight">
                                {testimonial.name}
                              </h3>
                              <p className="text-[10px] sm:text-[10px] lg:text-xs xl:text-sm text-white text-left sm:text-center w-full leading-tight mt-0.5">
                                {testimonial.branch} | {testimonial.batch}
                              </p>
                              {testimonial.role && (
                                <p className="text-[10px] sm:text-[10px] lg:text-xs xl:text-sm text-white text-left sm:text-center w-full leading-tight mt-0.5">
                                  {testimonial.role}
                                </p>
                              )}
                              {testimonial.company && (
                                <p className="text-[10px] sm:text-[10px] lg:text-xs xl:text-sm text-white font-semibold text-left sm:text-center w-full leading-tight mt-0.5">
                                  Placed in{" "}
                                  <span className="text-yellow-300 block xl:inline">
                                    {testimonial.company}
                                  </span>
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="h-[55%] sm:h-full w-full sm:w-[60%] p-2 sm:p-6 flex flex-col justify-center">
                            <svg
                              className="w-4 h-4 sm:w-10 sm:h-10 text-[rgb(200,120,120)] mb-1 sm:mb-2"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="text-gray-700 leading-tight sm:leading-relaxed mb-1 sm:mb-4 text-[8.5px] sm:text-xs lg:text-sm">
                              {testimonial.message}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Support Chatbot
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className=" flex gap-1.5 sm:gap-2 fixed bottom-3 right-3 sm:bottom-6 sm:right-6 bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] text-white p-3.5 sm:p-5 rounded-full shadow-2xl z-50 transform hover:scale-110 active:scale-95 transition-all duration-300 group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p className="font-bold text-xs sm:text-xl">Chat</p>
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box p-0 w-[350px] sm:w-[400px] shadow-2xl rounded-2xl fixed bottom-24 right-4 md:right-10 overflow-hidden border border-white/20 backdrop-blur-lg">
              <div className="flex justify-between items-center bg-gradient-to-r from-[rgb(90,30,30)] to-[rgb(140,40,40)] p-5 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold leading-none">AURCC Assistant</h2>
                    <span className="text-[10px] uppercase tracking-widest opacity-70">Always online</span>
                  </div>
                </div>
                <form method="dialog">
                  <button className="hover:rotate-90 transition-transform duration-300 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </form>
              </div>

              <div
                className="p-6 h-[400px] overflow-y-auto bg-gray-50 flex flex-col gap-4"
                ref={chatContainerRef}
              >
                {chatLog.length === 0 && (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <p className="text-gray-500 font-medium">How can I help you today?</p>
                    <p className="text-xs text-gray-400 mt-1">Ask about courses, admissions, or campus life.</p>
                  </div>
                )}

                {chatLog.map((chat, idx) => (
                  <div
                    key={idx}
                    className={`max-w-[85%] p-4 rounded-2xl shadow-sm text-sm leading-relaxed ${chat.sender === "user"
                      ? "self-end bg-[rgb(115,25,25)] text-white rounded-tr-none"
                      : "self-start bg-white text-gray-800 rounded-tl-none border border-gray-100"
                      }`}
                  >
                    {chat.message}
                  </div>
                ))}
                {loading && (
                  <div className="self-start bg-white p-3 rounded-2xl border border-gray-100 flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                )}
              </div>

              <div className="p-4 bg-white border-t border-gray-100">
                <div className="flex gap-2">
                  <input
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    onKeyUp={(e) => e.key === "Enter" && sendMessage()}
                    type="text"
                    className="flex-grow px-4 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(115,25,25)]/20 transition-all border-2 border-gray-300 focus:border-[rgb(115,25,25)]"
                    placeholder="Type a message..."
                  />
                  <button
                    onClick={sendMessage}
                    className="flex items-center justify-center w-12 h-12 bg-[rgb(115,25,25)] text-white rounded-xl hover:bg-[rgb(90,20,20)] transition-all duration-300 shadow-lg shadow-[rgb(115,25,25)]/20 active:scale-90"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </dialog>
          */}

          {/* Page Navigation Arrow */}
          <div className={`fixed left-3 bottom-3 sm:left-6 sm:bottom-6 z-50 transition-all duration-500 transform ${showScrollButtons ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-12 h-12 sm:w-12 sm:h-12 bg-[rgb(115,25,25)] backdrop-blur-md text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-white hover:text-[rgb(115,25,25)] transition-all duration-300 border border-[rgb(115,25,25)]/20 active:scale-95 group"
              title="Scroll to Top"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>

        </main>
      </div>
    </div>
  );
};

export default HomeView;
