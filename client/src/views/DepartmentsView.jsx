import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
  const fetchDepartment = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/departments/${departmentName}`
      );
      const data = await res.json();

      if (!data) {
        navigate("/programs_offered");
        return;
      }

      setDepartment(data);
    } catch (error) {
      console.error("Error fetching department:", error);
    }
  };

  fetchDepartment();
}, [departmentName, navigate]);


const BACKEND_URL = "http://localhost:5000";

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

    useEffect(() => {
    if (!events || events.length === 0) return;

    const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === events.length - 1 ? 0 : prevIndex + 1
        );
    }, 3000); // ⏱ auto-scroll every 4 seconds

    return () => clearInterval(interval); // cleanup
    }, [events]);


    const showPreviousEvent = () => setCurrentIndex(prev => Math.max(0, prev - 1));
    const showNextEvent = () => setCurrentIndex(prev => Math.min(events.length - 1, prev + 1));

    if (!department) return null;

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <main>
                {/* Hero section */}
                <section
                    className="bg-cover bg-center relative h-64 sm:h-72 md:h-80 lg:h-96"
                    style={{ backgroundImage: `url(${BACKEND_URL}/${department.image})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[rgb(115,63,63)]/70 to-[rgb(115,25,25)]/30"></div>
                    <div className="container mx-auto h-full flex items-center relative z-10 px-3 sm:px-4 md:px-6 lg:px-9">
                        <div className="max-w-2xl">
                            <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 text-white">
                                <span className="text-white bg-clip-text text-transparent">
                                    {department.name}
                                </span>
                            </h1>
                            <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 text-gray-100 leading-relaxed">Explore our cutting-edge programs and stay ahead in the field.</p>
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
<div id="about-department" className="py-16">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 ">

    {/* Title */}
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        About The Department
      </h2>
      <div className="w-24 h-1 bg-yellow-500 mx-auto mt-3 rounded"></div>
    </div>

    {/* Content Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start ">

      {/* Left Content */}
      <div className="lg:col-span-2 bg-gray-100 p-8 rounded-xl shadow-md">

        <ul className="text-gray-700 text-justify leading-relaxed space-y-4 text-lg">
          {(department?.description || []).map((description, i) => (
            <li key={i}>{description}</li>
          ))}
        </ul>

      </div>

      {/* Right Image */}
      <div className="bg-white p-4 rounded-xl shadow-md">

        <img
          src="http://localhost:5000/Drone_shot.jpg"   // change to your image path
          alt="Department"
          className="w-full h-[450px] object-cover rounded-lg"
        />

      </div>

    </div>

  </div>
</div>

{/* Department Statistics */}
<div className="bg-[rgb(115,55,55)] py-14">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

      {/* Established */}
      <div className="flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          {department?.established}
        </h2>
        <p className="mt-2 text-white text-lg">Established</p>
      </div>

      {/* Students */}
      <div className="flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          {department?.students}
        </h2>
        <p className="mt-2 text-white text-lg">Students</p>
      </div>

      {/* Publications */}
      <div className="flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          {department?.publications}
        </h2>
        <p className="mt-2 text-white text-lg">Publications</p>
      </div>

      {/* Projects */}
      <div className="flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          {department?.projects}
        </h2>
        <p className="mt-2 text-white text-lg">Funded Projects</p>
      </div>

    </div>

  </div>
</div>
{/* Vision & Mission Section */}
<div className="bg-white py-20 px-6">
  <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12">

    {/* Vision */}
    <div className="bg-[#e6e6e6] p-16 rounded-xl shadow-lg min-h-[320px] flex flex-col justify-center">

      <h2 className="text-3xl font-semibold text-center mb-10">
        Vision
      </h2>

      <div className="flex items-start gap-6">

        {/* Icon */}
        <img
          src="http://localhost:5000/public/icons/eye-5-svgrepo-com.svg"
          alt="vision"
          className="w-16 h-16 flex-shrink-0"
        />

        {/* Vision Text */}
        <p className="text-lg text-gray-800 leading-relaxed">
          {department?.vision}
        </p>

      </div>

    </div>


    {/* Mission */}
    <div className="bg-[#e6e6e6] p-16 rounded-xl shadow-lg min-h-[320px] flex flex-col justify-center">

      <h2 className="text-3xl font-semibold text-center mb-10">
        Mission
      </h2>

      <div className="flex items-start gap-6">

        {/* Icon */}
        <img
          src="http://localhost:5000/public/icons/target-svgrepo-com.svg"
          alt="mission"
          className="w-16 h-16 flex-shrink-0"
        />

        {/* Mission List */}
        <ul className="text-lg text-gray-800 space-y-2 leading-relaxed">
          {(department?.mission || []).map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>

      </div>

    </div>

  </div>
</div>

{/* HOD Desk */}
<div className="w-full bg-[rgb(115,55,55)] py-16 px-6 lg:px-20 text-white">
    
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side - HOD Profile */}
        {(Array.isArray(department?.faculty?.hod_desk) ? department.faculty.hod_desk : []).map((staff, i) => (
            <div key={i} className="flex flex-col items-center text-center">

                <img
                    src={`${BACKEND_URL}/${staff.image}`}
                    alt={staff.name}
                    onError={handleImageError}
                    className="w-48 h-48 object-fit rounded-full border-4 border-white shadow-lg mb-6"
                />

                <h4 className="text-2xl font-bold">{staff.name}</h4>
                <p className="text-lg opacity-90">{staff.position}</p>
                <p className="text-lg opacity-90">{staff.subpos}</p>
                <p className="text-sm opacity-80">{staff.email}</p>

            </div>
        ))}

        {/* Right Side - Message */}
        <div>

            <h2 className="text-4xl font-bold mb-3">Welcome Message</h2>

            <p className="italic mb-5">
                          {department?.p1}
            </p>

            <p className="mb-2 leading-relaxed">
                {department?.p2}
            </p>

            <p className="mb-2 leading-relaxed">
                {department?.p3}
            </p>

            <p className="leading-relaxed">
                {department?.p4}
            </p>

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
                                        <div className={`flex gap-6 sm:gap-6 ${(department?.courses_offered?.length || 0) > 1 ? 'grid-cols-1 md:grid-cols-2' : 'justify-center'}`}>
                                            {(department?.courses_offered || []).map((course, index) => (
                                                <div key={index} className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] p-4 sm:p-5 md:p-6 rounded-xl border border-[rgb(180,100,100)] hover:border-[rgb(160,80,80)] transition-all duration-300 hover:shadow-md">
                                                    <div className="flex items-start space-x-2 sm:space-x-3">
                                                        <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </div>
                                                        <div className="flex-1">
                                                            <h4 className="text-base lg:text-lg font-semibold text-white mb-2">
                                                                {typeof course === 'object' ? course.name : course}
                                                            </h4>
                                                            <p className="text-xs lg:text-sm text-white">
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

                        {/* Faculty Section */}
                        <div id="faculty" className="relative px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-6 bg-gray-50 rounded-2xl overflow-hidden">
                                                  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-30 text-[rgb(115,40,40)] pointer-events-none">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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
      <rect width="100%" height="100%" fill="url(#hexagon-pattern)" />
    </svg>
  </div>
                                <div className="relative z-10 text-center mb-8 sm:mb-10 lg:mb-12 bg-white/90 backdrop-blur
    shadow-lg hover:shadow-xl
    rounded-xl
    px-6 py-4 sm:px-8 sm:py-6
    transition-all duration-300
    border border-gray-100
    text-center
    max-w-fit 
    mx-auto">
                                <h2 className="text-2xl text-center sm:text-3xl lg:text-4xl font-bold text-gray-700 relative inline-block group">
                                    OUR FACULTY
                                    <span className="absolute -bottom-2 sm:-bottom-3 left-0 h-1 w-full bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)]"></span>
                                </h2>
                            </div>
                            {/* Assistant Professors */}
                            <div>
                                <h3 className="text-2xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)]">Professors</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                                    {(Array.isArray(department?.faculty?.assistant_professors) ? department.faculty.assistant_professors : []).map((staff, i) => (
                                        <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden border border-[rgb(200,120,120)] transform transition-all duration-300 cursor-pointer min-h-[300px] max-w-[320px] w-80 flex-shrink-0 flex-grow-0 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:border-[rgb(115,40,40)]" onClick={() => showDetails(staff)}>
                                            <div className="relative pt-2 flex justify-center">
                                                <div className="absolute inset-0 h-1/2 bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)]"></div>
                                                <div className="relative">
                                                    <img src={`${BACKEND_URL}/${staff.image}`} alt={staff.name} className="w-36 h-44 object-cover rounded-full border-4 border-white shadow-lg" onError={handleImageError} />
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

                       {/* Networking Staff (ONLY for CSE Department) */}
{department?.name?.toLowerCase().includes("computer science") &&
 Array.isArray(department?.networking_staff) &&
 department.networking_staff.length > 0 && (

  <div
    id="networking-staff"
    className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 bg-white"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
      <span className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] bg-clip-text text-transparent">
        Networking Staff
      </span>
    </h2>

    <div className="flex justify-center flex-wrap gap-8">
      {department.networking_staff.map((staff, i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow-lg overflow-hidden border border-[rgb(200,120,120)]
                     transform transition-all duration-300 cursor-pointer
                     min-h-[300px] max-w-[320px] w-80
                     hover:-translate-y-3 hover:scale-[1.03]
                     hover:shadow-2xl hover:border-[rgb(115,40,40)]"
          onClick={() => showDetails(staff)}
        >
          <div className="relative pt-2 flex justify-center">
            <div className="absolute inset-0 h-1/2 bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)]"></div>
            <div className="relative">
              <img
                src={`${BACKEND_URL}/${staff.image}`}
                alt={staff.name}
                className="w-28 h-36 object-cover rounded-full border-4 border-white shadow-lg"
                onError={handleImageError}
              />
            </div>
          </div>

          <div className="p-6 text-center">
            <h4 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] mb-2">
              {staff.name}
            </h4>
            <p className="text-gray-700 font-medium">{staff.position}</p>
            {staff.email && (
              <p className="text-gray-500 text-sm">{staff.email}</p>
            )}
            <button className="mt-4 px-4 py-2 bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)]
                               text-white text-sm rounded-lg transition-all font-semibold">
              View Profile
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

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
                                                    <img src={`${BACKEND_URL}/${staff.image}`} alt={staff.name} className="w-28 h-36 object-cover rounded-full border-4 border-white shadow-lg" />
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


                        {/* Events Slider */}
                        <div id="events" className="px-4 sm:px-6 border-4 lg:px-8 max-w-7xl mx-auto py-12 bg-white">
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

<div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Research & Publications */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">

            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] text-white px-6 py-4">
                <h2 className="text-lg font-semibold">Research & Publications</h2>
            </div>

            {/* Content */}
            <div className="p-5 space-y-4 max-h-80 overflow-auto">

                {(Array.isArray(department?.research_and_publications) ? department.research_and_publications : []).map((publication, i) => (
                    <div key={i} className="flex items-start gap-3 border-b pb-3 last:border-none">

                        <span className="text-red-600 text-lg mt-1">•</span>

                        <div>
                            <h3 className="text-gray-800 font-medium text-base">
                                {publication.title}
                            </h3>

                            <p className="text-sm text-gray-500">
                                {publication.authors}
                            </p>

                            <p className="text-sm text-gray-500 italic">
                                {publication.journal} • {publication.year}
                            </p>
                        </div>

                    </div>
                ))}

            </div>
        </div>


        {/* Achievements */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">

            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] text-white px-6 py-4">
                <h2 className="text-lg font-semibold">Department Achievements</h2>
            </div>

            {/* Content */}
            <div className="p-5 space-y-4 max-h-80 overflow-auto">

                {(Array.isArray(department?.achievements) ? department.achievements : []).map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3 border-b pb-3 last:border-none">

                        <span className="text-red-600 text-lg mt-1">•</span>

                        <div>
                            <h3 className="text-gray-800 font-medium text-base">
                                {achievement.event}
                            </h3>

                            <p className="text-sm text-gray-500">
                                {achievement.organized_by}
                            </p>

                            <p className="text-sm text-gray-600 font-medium">
                                {achievement.name} • {achievement.date}
                            </p>
                        </div>

                    </div>
                ))}

            </div>

        </div>

    </div>

</div>


                        {/* Facility */}
                        <div id="facility" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 bg-white">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
                                <span className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] bg-clip-text text-transparent">World-Class Facilities</span>
                            </h2>
                            <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
                                {(Array.isArray(department?.facility) ? department.facility : []).map((facility, index) => (
                                    <div key={index} className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                                        <div className="lg:w-1/2">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] transform rotate-3 rounded-2xl"></div>
                                                <img src={`${BACKEND_URL}/${facility.image}`} alt={facility.name} className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-lg" onError={handleImageError} />
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
                                        <img src={`${BACKEND_URL}/${selectedStaff.image}`} alt={selectedStaff.name} className="w-48 h-60 rounded-xl object-cover border-4 border-[rgb(200,120,120)] shadow-md mb-4" />
                                        <h2 className="text-xl font-bold text-gray-800">{selectedStaff.name}</h2>
                                        <p className="text-[rgb(115,40,40)] font-medium">{selectedStaff.position}</p>
                                        <p className="text-gray-500 text-sm mt-1">{selectedStaff.email}</p>
                                    </div>
                                    <div className="md:w-2/3 max-h-[60vh] overflow-y-auto pr-4 scrollbar-thin text-left space-y-6">

  {/* Description */}
  {selectedStaff.description && (
    <section title="About">
      <p className="text-gray-700">{selectedStaff.description}</p>
    </section>
  )}

  {/* Education */}
  {Array.isArray(selectedStaff.education) && (
    <section title="Education">
      <ul className="space-y-2">
        {selectedStaff.education.map((edu, i) => (
          <li key={i} className="bg-gray-50 p-3 rounded-lg">
            <div className="font-medium">{edu.degree}</div>
            {edu.field && <div>{edu.field}</div>}
            <div>{edu.institution}</div>
            {edu.year && (
              <div className="text-xs text-gray-500">{edu.year}</div>
            )}
            {edu.honors && (
              <div className="text-xs text-emerald-600">
                {edu.honors.join(', ')}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  )}

  {/* Research Interests */}
  {Array.isArray(selectedStaff.research_interests) && (
    <section title="Research Interests">
      <ul className="list-disc pl-5 space-y-1">
        {selectedStaff.research_interests.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  )}

  {/* Professional Experience */}
  {Array.isArray(selectedStaff.professional_experience) && (
    <section title="Professional Experience">
      <ul className="space-y-2">
        {selectedStaff.professional_experience.map((exp, i) => (
          <li key={i} className="bg-gray-50 p-3 rounded-lg">
            <div className="font-medium">{exp.position}</div>
            <div>{exp.institution}</div>
            <div className="text-xs text-gray-500">{exp.duration}</div>
          </li>
        ))}
      </ul>
    </section>
  )}

  {/* Roles */}
  {Array.isArray(selectedStaff.roles) && (
    <section title="Roles & Responsibilities">
      <ul className="list-disc pl-5 space-y-1">
        {selectedStaff.roles.map((role, i) => (
          <li key={i}>{role}</li>
        ))}
      </ul>
    </section>
  )}

  {/* Achievements */}
  {Array.isArray(selectedStaff.achievements) && (
    <section title="Achievements">
      <ul className="list-disc pl-5 space-y-1">
        {selectedStaff.achievements.map((ach, i) => (
          <li key={i}>{ach}</li>
        ))}
      </ul>
    </section>
  )}

  {/* Publications (counts) */}
  {selectedStaff.publications && (
    <section title="Publications">
      <ul className="space-y-1">
        {Object.entries(selectedStaff.publications).map(([key, val], i) => (
          <li key={i}>
            <strong>{key}:</strong> {val}
          </li>
        ))}
      </ul>
    </section>
  )}

  {/* Abroad Visit */}
  {selectedStaff.abroad_visit && (
    <section title="International Exposure">
      <p>{selectedStaff.abroad_visit}</p>
    </section>
  )}

  {/* Links */}
  {(selectedStaff.links || selectedStaff.research_profiles || selectedStaff.additional_links || selectedStaff.academic_achievements) && (
    <section title="Profiles & Links">
      <ul className="space-y-1">
        {Object.entries({
          ...selectedStaff.links,
          ...selectedStaff.research_profiles,
          ...selectedStaff.additional_links,
          ...selectedStaff.academic_achievements,
        }).map(([key, val], i) => (
          typeof val === 'string' && (
            <li key={i}>
              <a
                href={val}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {key}
              </a>
            </li>
          )
        ))}
      </ul>
    </section>
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
