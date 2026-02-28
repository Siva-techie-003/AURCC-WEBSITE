import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import departmentData from '../assets/departments.json';
import './DepartmentsView.css';

const DepartmentsView = () => {
    const { departmentName } = useParams();
    const navigate = useNavigate();
    const [department, setDepartment] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentSection, setCurrentSection] = useState('About Department');
    const [showPopover, setShowPopover] = useState(false);
    const [selectedStaff, setSelectedStaff] = useState(null);
    const [sectionOffsets, setSectionOffsets] = useState([]);

    const handleImageError = (e) => {
        e.target.src = 'https://ui-avatars.com/api/?name=Staff&background=random&color=fff&size=200';
    };

    const sections = [
        'About Department',
        'Events',
        'Achievements',
        'Facility',
        'Faculty',
        'Administrative and Technical Staff',
        'Research and Publications',
    ];

    useEffect(() => {
        const loadDepartment = () => {
            const dept = departmentData.find(d => d.address === departmentName);
            if (!dept) {
                console.error('Department not found:', departmentName);
                navigate('/programs_offered');
                return;
            }
            setDepartment(dept);
            setCurrentIndex(0);
            setCurrentSection('About Department');
        };

        loadDepartment();
    }, [departmentName, navigate]);

    const updateSectionOffsets = () => {
        const newOffsets = sections.map(section => {
            const sectionId = section.toLowerCase().replace(/\s+/g, '-');
            const element = document.getElementById(sectionId);
            return element ? element.offsetTop : 0;
        });
        setSectionOffsets(newOffsets);
    };

    useEffect(() => {
        if (department) {
            setTimeout(updateSectionOffsets, 500); // Give time for content to render
            window.addEventListener('scroll', handleScroll);
        }
        return () => window.removeEventListener('scroll', handleScroll);
    }, [department]);

    const handleScroll = () => {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const tabHeight = document.querySelector('.sticky')?.offsetHeight || 0;
        const threshold = tabHeight + 100;

        for (let i = sectionOffsets.length - 1; i >= 0; i--) {
            if (scrollPosition >= sectionOffsets[i] - threshold) {
                setCurrentSection(sections[i]);
                break;
            }
        }
    };

    const scrollToSection = (section) => {
        const sectionId = section.toLowerCase().replace(/\s+/g, '-');
        const element = document.getElementById(sectionId);
        const tabHeight = document.querySelector('.sticky')?.offsetHeight || 0;
        if (element) {
            const offset = element.offsetTop - tabHeight - 20;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
            setCurrentSection(section);
        }
    };

    const showDetails = (staff) => {
        setSelectedStaff(staff);
        setShowPopover(true);
    };

    const events = useMemo(() => {
        if (!department?.events) return [];
        if (Array.isArray(department.events)) {
            return [...department.events].reverse();
        }
        return [];
    }, [department]);

    const currentEvent = events[currentIndex];

    const showPreviousEvent = () => setCurrentIndex(prev => Math.max(0, prev - 1));
    const showNextEvent = () => setCurrentIndex(prev => Math.min(events.length - 1, prev + 1));

    if (!department) return null;

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <main>
                {/* Hero section */}
                <section
                    className="bg-cover bg-center relative h-64 sm:h-72 md:h-80 lg:h-96"
                    style={{ backgroundImage: `url(/${department.image})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[rgb(115,63,63)]/70 to-[rgb(115,25,25)]/60"></div>
                    <div className="container mx-auto h-full flex items-center relative z-10 px-3 sm:px-4 md:px-6 lg:px-9">
                        <div className="max-w-2xl">
                            <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 text-white">
                                <span className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] bg-clip-text text-transparent">
                                    {department.name}
                                </span>
                            </h1>
                            <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 text-gray-100 leading-relaxed">Explore our cutting-edge programs and stay ahead in the field.</p>
                            <button className="bg-[rgb(115,40,40)] hover:bg-[rgb(110,35,35)] text-white py-2 px-4 sm:px-6 rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Learn More
                            </button>
                        </div>
                    </div>
                </section>

                {/* Navigation Tabs */}
                <div className="sticky top-0 z-20">
                    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                        <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-full -mt-4 sm:-mt-6 py-1 px-2 flex justify-center overflow-x-auto no-scrollbar">
                            <nav role="tablist" className="tabs flex space-x-1 md:space-x-2">
                                {sections.map((section, index) => (
                                    <button
                                        key={index}
                                        onClick={() => scrollToSection(section)}
                                        className={`font-medium px-3 sm:px-4 md:px-5 py-2 md:py-3 rounded-full text-xs sm:text-sm lg:text-base transition duration-300 whitespace-nowrap ${currentSection === section
                                            ? 'bg-[rgb(115,40,40)] text-white shadow-md'
                                            : 'text-gray-700 hover:bg-gray-100'
                                            }`}
                                    >
                                        {section}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Content sections */}
                <section className="mx-auto">
                    <div id="content-sections" className="w-full">
                        {/* About Department */}
                        <div id="about-department" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 bg-white">
                            <div className="max-w-6xl mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
                                    <div className="flex flex-col h-full">
                                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl h-full">
                                            <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-4 sm:py-5 md:py-6">
                                                <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white font-bold text-center">About Department</h2>
                                            </div>
                                            <div className="p-8 md:p-10">
                                                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">{department.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 sm:gap-8 h-full">
                                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl">
                                            <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-cyan-400 py-4 sm:py-5 md:py-6">
                                                <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white font-bold text-center">Vision</h3>
                                            </div>
                                            <div className="p-8 md:p-10">
                                                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">{department.vision}</p>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl">
                                            <div className="bg-gradient-to-r from-cyan-400 to-teal-400 py-4 sm:py-5 md:py-6">
                                                <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white font-bold text-center">Mission</h3>
                                            </div>
                                            <div className="p-8 md:p-10">
                                                <ul className="text-base lg:text-lg list-disc pl-4 sm:pl-5 text-gray-700 space-y-2 sm:space-y-3">
                                                    {(department?.mission || []).map((mission, i) => (
                                                        <li key={i} className="pl-2">{mission}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Courses Offered */}
                        <div id="courses-offered" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 bg-white">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
                                <span className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] bg-clip-text text-transparent">Courses Offered</span>
                            </h2>
                            <div className="max-w-6xl mx-auto">
                                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl">
                                    <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-6 sm:py-7 md:py-8">
                                        <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white font-bold text-center">Programs Available</h3>
                                    </div>
                                    <div className="p-8 md:p-10">
                                        <div className={`grid gap-4 sm:gap-6 ${(department?.courses_offered?.length || 0) > 1 ? 'grid-cols-1 md:grid-cols-2' : 'justify-center'}`}>
                                            {(department?.courses_offered || []).map((course, index) => (
                                                <div key={index} className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] p-4 sm:p-5 md:p-6 rounded-xl border border-[rgb(180,100,100)] hover:border-[rgb(160,80,80)] transition-all duration-300 hover:shadow-md">
                                                    <div className="flex items-start space-x-2 sm:space-x-3">
                                                        <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] rounded-full flex items-center justify-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </div>
                                                        <div className="flex-1">
                                                            <h4 className="text-base lg:text-lg font-semibold text-gray-800 mb-2">
                                                                {typeof course === 'object' ? course.name : course}
                                                            </h4>
                                                            <p className="text-xs lg:text-sm text-gray-600">
                                                                {typeof course === 'object' && course.type ? course.type : 'Full-time program with comprehensive curriculum'}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            {(department?.courses_offered?.length || 0) === 0 && (
                                                <p className="text-gray-500 italic text-center col-span-full">Information about courses will be updated soon.</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Events Slider */}
                        <div id="events" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 bg-white">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
                                <span className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] bg-clip-text text-transparent">Upcoming Events</span>
                            </h2>
                            {currentEvent ? (
                                <div className="max-w-6xl mx-auto">
                                    <div className="section-card transition-all duration-500">
                                        <div className="section-content">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between">
                                                <div className="flex-grow mb-4 md:mb-0 md:mr-8 text-left">
                                                    <h3 className="text-lg lg:text-xl xl:text-2xl font-bold mb-2 text-gray-800">{currentEvent.name}</h3>
                                                    <p className="text-sm lg:text-base xl:text-lg text-gray-600 mb-4">{currentEvent.description}</p>
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-[rgb(120,45,45)] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                        <span className="text-sm lg:text-base text-[rgb(115,40,40)] font-medium">{currentEvent.date}</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-center space-x-2 sm:space-x-3">
                                                    <button onClick={showPreviousEvent} className="p-2 rounded-full bg-gray-100 hover:bg-[rgb(200,120,120)] text-gray-600 hover:text-[rgb(115,40,40)] focus:outline-none transition-colors duration-300">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                                                    </button>
                                                    <button onClick={showNextEvent} className="p-2 rounded-full bg-gray-100 hover:bg-[rgb(200,120,120)] text-gray-600 hover:text-[rgb(115,40,40)] focus:outline-none transition-colors duration-300">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
                                        {events.map((_, index) => (
                                            <div key={index} onClick={() => setCurrentIndex(index)}
                                                className={`w-2 h-2 rounded-full cursor-pointer transition-colors duration-300 ${index === currentIndex ? 'bg-[rgb(115,40,40)]' : 'bg-gray-300 hover:bg-gray-400'}`}>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-8 sm:py-12 text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-16 sm:w-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    <p className="text-base lg:text-lg">No upcoming events to display.</p>
                                </div>
                            )}
                        </div>

                        {/* Achievements */}
                        <div id="achievements" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 bg-white">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
                                <span className="bg-gradient-to-r from-purple-600 to-[rgb(115,25,25)] bg-clip-text text-transparent">Department Achievements</span>
                            </h2>
                            <div className="max-w-6xl mx-auto">
                                <div className="relative">
                                    <div className="absolute top-0 bottom-0 left-0 right-0 -m-2 sm:-m-4 bg-gradient-to-r from-purple-50 to-[rgb(115,25,25)] rounded-3xl transform -rotate-1"></div>
                                    <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl">
                                        <div className="h-80 sm:h-96 overflow-auto px-4 sm:px-6 py-4 sm:py-6 scrollbar-thin">
                                            <div className="space-y-3 sm:space-y-4">
                                                {(Array.isArray(department?.achievements) ? department.achievements : []).map((achievement, i) => (
                                                    <div key={i} className="bg-white p-3 sm:p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 text-left">
                                                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                                                            <div>
                                                                <div className="flex items-center mb-2">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-[rgb(120,45,45)] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                                    <h3 className="text-base lg:text-lg xl:text-xl font-semibold text-gray-800">{achievement.event}</h3>
                                                                </div>
                                                                <p className="text-sm lg:text-base text-gray-600 mb-1">{achievement.organized_by}</p>
                                                                <p className="text-sm lg:text-base font-medium text-gray-800">{achievement.name}</p>
                                                            </div>
                                                            <div className="mt-3 md:mt-0 bg-[rgb(220,140,140)] text-[rgb(110,35,35)] px-2 sm:px-3 py-1 rounded-full text-xs lg:text-sm font-medium h-fit">
                                                                {achievement.date}
                                                            </div>
                                                        </div>
                                                        <div className="mt-3">
                                                            <div className="inline-flex items-center bg-purple-50 text-purple-700 px-2 sm:px-3 py-1 rounded-full text-xs lg:text-sm font-medium">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                                                                {achievement.awards}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Facility */}
                        <div id="facility" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 bg-white">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
                                <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">World-Class Facilities</span>
                            </h2>
                            <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
                                {(Array.isArray(department?.facility) ? department.facility : []).map((facility, index) => (
                                    <div key={index} className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                                        <div className="lg:w-1/2">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-200 to-teal-100 transform rotate-3 rounded-2xl"></div>
                                                <img src={`/${facility.image}`} alt={facility.name} className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-lg" onError={handleImageError} />
                                            </div>
                                        </div>
                                        <div className="lg:w-1/2 text-left">
                                            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">{facility.name}</h3>
                                            <ul className="space-y-2 sm:space-y-3">
                                                {(Array.isArray(facility?.description) ? facility.description : []).map((item, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-500 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                        <span className="text-base lg:text-lg text-gray-700">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Faculty Section */}
                        <div id="faculty" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 bg-gray-50">
                            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 relative inline-block group">
                                    OUR FACULTY
                                    <span className="absolute -bottom-2 sm:-bottom-3 left-0 h-1 w-full bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] transform origin-left transition-transform duration-300 group-hover:scale-x-110"></span>
                                </h2>
                            </div>
                            {/* HOD Desk */}
                            <div className="mb-12 sm:mb-14 lg:mb-16">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)]">Head of Department</h3>
                                <div className="flex justify-center">
                                    {(Array.isArray(department?.faculty?.hod_desk) ? department.faculty.hod_desk : []).map((staff, i) => (
                                        <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden border border-[rgb(200,120,120)] transform transition-all duration-300 cursor-pointer min-h-[380px] max-w-[320px] w-80 flex-shrink-0 flex-grow-0 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl hover:border-[rgb(115,40,40)]" onClick={() => showDetails(staff)}>
                                            <div className="relative pt-2 flex justify-center">
                                                <div className="absolute inset-0 h-1/2 bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)]"></div>
                                                <div className="relative">
                                                    <img src={`/${staff.image}`} alt={staff.name} className="w-28 h-36 sm:w-32 sm:h-40 lg:w-36 lg:h-44 object-cover rounded-full border-4 border-white shadow-lg" onError={handleImageError} />
                                                </div>
                                            </div>
                                            <div className="p-6 text-center">
                                                <h4 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] mb-2">{staff.name}</h4>
                                                <p className="text-gray-700 font-medium">{staff.position}</p>
                                                <p className="text-gray-500 text-sm">{staff.email}</p>
                                                <button className="mt-4 px-4 py-2 bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] text-white text-sm rounded-lg hover:from-[rgb(115,63,63)] hover:to-[rgb(115,25,25)] transition-all font-semibold">View Profile</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Assistant Professors */}
                            <div>
                                <h3 className="text-2xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)]">Professors</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                                    {(Array.isArray(department?.faculty?.assistant_professors) ? department.faculty.assistant_professors : []).map((staff, i) => (
                                        <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden border border-[rgb(200,120,120)] transform transition-all duration-300 cursor-pointer min-h-[380px] max-w-[320px] w-80 flex-shrink-0 flex-grow-0 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:border-[rgb(115,40,40)]" onClick={() => showDetails(staff)}>
                                            <div className="relative pt-2 flex justify-center">
                                                <div className="absolute inset-0 h-1/2 bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)]"></div>
                                                <div className="relative">
                                                    <img src={`/${staff.image}`} alt={staff.name} className="w-36 h-44 object-cover rounded-full border-4 border-white shadow-lg" onError={handleImageError} />
                                                </div>
                                            </div>
                                            <div className="p-6 text-center">
                                                <h4 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] mb-2">{staff.name}</h4>
                                                <p className="text-gray-700 font-medium">{staff.position}</p>
                                                <p className="text-gray-500 text-sm">{staff.email}</p>
                                                <button className="mt-4 px-4 py-2 bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] text-white text-sm rounded-lg hover:from-[rgb(115,63,63)] hover:to-[rgb(115,25,25)] transition-all font-semibold">View Profile</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Administrative Staff */}
                        <div id="administrative-and-technical-staff" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 bg-white">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
                                <span className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] bg-clip-text text-transparent">Administrative and Technical Staff</span>
                            </h2>
                            <div className="max-w-6xl mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
                                    {(Array.isArray(department?.admin_staff) ? department.admin_staff : []).map((staff, i) => (
                                        <div key={i} className="admin-staff-card bg-white rounded-xl shadow border border-[rgb(220,140,140)] overflow-hidden w-64 mb-6">
                                            <div className="relative pt-2 flex justify-center">
                                                <div className="absolute inset-0 h-1/2 bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)]"></div>
                                                <div className="relative">
                                                    <img src={`/${staff.image}`} alt={staff.name} className="w-28 h-36 object-cover rounded-full border-4 border-white shadow-lg" />
                                                </div>
                                            </div>
                                            <div className="p-4 text-center">
                                                <h4 className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] mb-1">{staff.name}</h4>
                                                <p className="text-sm text-gray-700 font-medium">{staff.position}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Research and Publications */}
                        <div id="research-and-publications" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 bg-white">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
                                <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Research & Publications</span>
                            </h2>
                            <div className="max-w-6xl mx-auto">
                                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl">
                                    <div className="h-96 overflow-auto p-6 scrollbar-thin">
                                        <div className="space-y-6">
                                            {(Array.isArray(department?.research_and_publications) ? department.research_and_publications : []).map((publication, i) => (
                                                <div key={i} className="p-4 border-b border-gray-100 hover:bg-purple-50 transition-colors duration-200 rounded-lg text-left">
                                                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{publication.title}</h3>
                                                    <div className="flex flex-wrap items-center gap-2 mb-3">
                                                        <div className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">{publication.year}</div>
                                                        <div className="text-gray-500 text-sm flex items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                                            {publication.authors}
                                                        </div>
                                                    </div>
                                                    <div className="text-sm text-gray-700 italic">Published in: <span className="font-medium">{publication.journal}</span></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Faculty Modal */}
                {showPopover && selectedStaff && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowPopover(false)}>
                        <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden" onClick={e => e.stopPropagation()}>
                            <div className="p-6 relative">
                                <button onClick={() => setShowPopover(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100"><svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button>
                                <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">Faculty Profile</h1>
                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="md:w-1/3 flex flex-col items-center">
                                        <img src={`/${selectedStaff.image}`} alt={selectedStaff.name} className="w-48 h-60 rounded-xl object-cover border-4 border-[rgb(200,120,120)] shadow-md mb-4" />
                                        <h2 className="text-xl font-bold text-gray-800">{selectedStaff.name}</h2>
                                        <p className="text-[rgb(115,40,40)] font-medium">{selectedStaff.position}</p>
                                        <p className="text-gray-500 text-sm mt-1">{selectedStaff.email}</p>
                                    </div>
                                    <div className="md:w-2/3 max-h-[60vh] overflow-y-auto pr-4 scrollbar-thin text-left space-y-6">
                                        {/* Education */}
                                        {selectedStaff.education?.length > 0 && (
                                            <div>
                                                <h3 className="text-lg font-semibold flex items-center mb-2"><svg className="w-5 h-5 text-[rgb(120,45,45)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>Education</h3>
                                                <ul className="space-y-2">{selectedStaff.education.map((edu, i) => <li key={i} className="bg-gray-50 p-3 rounded-lg"><div className="font-medium">{edu.degree}</div><div>{edu.institution}</div><div className="text-xs text-gray-500">{edu.year}</div></li>)}</ul>
                                            </div>
                                        )}
                                        {/* Professional Experience */}
                                        {selectedStaff.professional_experience?.length > 0 && (
                                            <div>
                                                <h3 className="text-lg font-semibold flex items-center mb-2"><svg className="w-5 h-5 text-[rgb(120,45,45)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>Professional Experience</h3>
                                                <ul className="space-y-2">{selectedStaff.professional_experience.map((exp, i) => <li key={i} className="bg-gray-50 p-3 rounded-lg"><div className="font-medium">{exp.position}</div><div>{exp.institution}</div><div className="text-xs text-[rgb(120,45,45)]">{exp.duration}</div></li>)}</ul>
                                            </div>
                                        )}
                                        {/* Achievements */}
                                        {selectedStaff.achievements?.length > 0 && (
                                            <div>
                                                <h3 className="text-lg font-semibold flex items-center mb-2"><svg className="w-5 h-5 text-[rgb(120,45,45)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>Achievements</h3>
                                                <ul className="space-y-2">{selectedStaff.achievements.map((ach, i) => <li key={i} className="flex items-start"><svg className="w-5 h-5 text-amber-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>{ach}</span></li>)}</ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default DepartmentsView;
