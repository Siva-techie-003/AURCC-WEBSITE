import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PageTitleUpdater() {
    const { pathname } = useLocation();

    useEffect(() => {
        const defaultDesc = "Welcome to Anna University Regional Campus Coimbatore (AURCC). Explore our academic programs, departments, and campus life.";
        const updateMetaDesc = (desc) => {
            let metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute('content', desc || defaultDesc);
            }
        };

        if (pathname === '/') {
            document.title = 'AURCC - Anna University Regional Campus Coimbatore';
            updateMetaDesc(defaultDesc);
            return;
        }

        const metaMap = {
            '/about': { title: 'About', desc: 'Learn about AURCC, our history, mission, vision, and the values that drive our institution to academic excellence.' },
            '/about-v': { title: 'About', desc: 'Discover AURCC\'s legacy, academic excellence, and our commitment to shaping the future of education.' },
            '/admissions': { title: 'Admissions', desc: 'Information on admissions for UG, PG, and PhD programs at AURCC. Find eligibility, procedures, and important dates.' },
            '/admission': { title: 'Admissions', desc: 'Information on admissions for UG, PG, and PhD programs at AURCC. Find eligibility, procedures, and important dates.' },
            '/graduation': { title: 'Graduation', desc: 'Relive the memories of graduation days at AURCC. View galleries of our proud alumni stepping into the future.' },
            '/annualday': { title: 'Annual Day', desc: 'Explore the vibrant Annual Day celebrations at AURCC featuring cultural events, awards, and student performances.' },
            '/ed-cell': { title: 'ED Cell', desc: 'Entrepreneurship Development Cell at AURCC promotes innovation and guides students to become successful entrepreneurs.' },
            '/dgate': { title: 'DGATE', desc: 'DGATE at AURCC provides guidance and coaching for competitive exams like GATE to secure a bright future.' },
            '/placement-cell': { title: 'Placement Cell', desc: 'The Placement Cell at AURCC connects students with top recruiters and provides training for successful career placements.' },
            '/research-cell': { title: 'Research Cell', desc: 'Research Cell at AURCC fosters innovation, academic research, and development activities across all departments.' },
            '/exam-cell': { title: 'Exam Cell', desc: 'Access exam schedules, results, circulars, and other related information from the AURCC Examination Cell.' },
            '/hostel': { title: 'Hostel', desc: 'AURCC provides excellent hostel facilities with a comfortable environment, dining, and amenities for students.' },
            '/nss': { title: 'NSS', desc: 'National Service Scheme (NSS) at AURCC encourages students to participate in social service and community development.' },
            '/tamilmandram': { title: 'Tamil Mandram', desc: 'Tamil Mandram at AURCC celebrates Tamil language, literature, and culture through various events and activities.' },
            '/sports': { title: 'Sports', desc: 'Explore sports facilities and achievements at AURCC. We encourage students to excel in various athletic activities.' },
            '/alumni': { title: 'Alumni', desc: 'Connect with the AURCC Alumni network. Stay updated with alumni events, achievements, and opportunities to give back.' },
            '/dean_office': { title: 'Dean Office', desc: 'Message from the Dean and information about the administrative leadership of Anna University Regional Campus Coimbatore.' },
            '/fine-arts': { title: 'Fine Arts Club', desc: 'The Fine Arts Club at AURCC nurtures creativity in students through arts, music, dance, and cultural performances.' },
            '/bis-club': { title: 'BIS Club', desc: 'Bureau of Indian Standards (BIS) Club at AURCC promotes awareness about standardization and quality among students.' },
            '/uyir-club': { title: 'Uyir Club', desc: 'Uyir Club focuses on road safety awareness, life-saving initiatives, and social responsibilities among students.' },
            '/library': { title: 'Library', desc: 'The Central Library at AURCC offers a vast collection of books, journals, and digital resources for academic growth.' },
            '/distance-education': { title: 'Distance Education', desc: 'Information about Distance Education programs offered by Anna University at the Coimbatore Regional Campus.' },
            '/office-affiliation': { title: 'Office of Affiliation', desc: 'Details regarding the affiliation process, guidelines, and affiliated colleges under Anna University Coimbatore.' },
            '/zonal': { title: 'Zonal', desc: 'Information about zonal-level sports, cultural activities, and tournaments organized by AURCC.' },
            '/pace-cell': { title: 'PACE Cell', desc: 'PACE Cell at AURCC enhances student employability through personality development and communication skills training.' },
            '/administration': { title: 'Administration', desc: 'Overview of the administrative structure and dedicated staff ensuring the smooth functioning of AURCC.' },
            '/admin/establishment': { title: 'Establishment', desc: 'Establishment section handles administrative duties, faculty affairs, and staff coordination at AURCC.' },
            '/admin/purchase-finance': { title: 'Purchase and Finance', desc: 'The Purchase and Finance department manages budgeting, procurement, and financial operations at AURCC.' },
            '/admin/student': { title: 'Student Section', desc: 'Student Section assists with scholarships, certificates, ID cards, and other essential student services at AURCC.' },
            '/aicte&moe': { title: 'AICTE & MoE', desc: 'Information regarding approvals, accreditations, and guidelines from AICTE and Ministry of Education for AURCC.' },
            '/antiragging': { title: 'Anti Ragging', desc: 'AURCC maintains a strict zero-tolerance policy towards ragging. Find details on the anti-ragging committee and rules.' },
            '/vc': { title: 'Vice Chancellor', desc: 'Message and profile of the Honorable Vice Chancellor of Anna University guiding our academic vision.' },
            '/registrar': { title: 'Registrar', desc: 'Message and profile of the Registrar of Anna University supporting the administrative and academic framework.' },
            '/hod': { title: 'Head of Departments', desc: 'Meet the Heads of Departments at AURCC who lead our academic programs with excellence and dedication.' },
            '/contact': { title: 'Contact Us', desc: 'Get in touch with Anna University Regional Campus Coimbatore. Find address, phone numbers, and email contacts.' },
            '/regulation': { title: 'Regulation', desc: 'Academic regulations, curriculum guidelines, and evaluation procedures for programs offered at AURCC.' },
            '/regulation/2021': { title: 'Regulation 2021', desc: 'Detailed academic syllabus and regulations for the 2021 batch of students at AURCC.' },
            '/regulation/2025': { title: 'Regulation 2025', desc: 'Detailed academic syllabus and regulations for the 2025 batch of students at AURCC.' },
            '/programs_offered': { title: 'Programs Offered', desc: 'Discover the diverse undergraduate and postgraduate engineering and management programs offered at AURCC.' },
            '/programs/ug': { title: 'UG Programs', desc: 'Explore the Undergraduate (B.E./B.Tech) engineering programs offered at Anna University Regional Campus Coimbatore.' },
            '/programs/pg': { title: 'PG Programs', desc: 'Explore the Postgraduate (M.E./MBA) programs designed to advance your expertise and career at AURCC.' },
            '/curriculum_syllabus': { title: 'Curriculum & Syllabus', desc: 'Access the comprehensive curriculum and syllabus for all academic programs offered at AURCC.' },
            '/student_affairs': { title: 'Student Affairs', desc: 'The Student Affairs office supports student well-being, grievances, counseling, and extracurricular engagement.' },
            '/cod': { title: 'Cell Coordinators', desc: 'Directory of Cell Coordinators managing various specialized cells and clubs at AURCC.' },
            '/administrator': { title: 'Administrator', desc: 'Information about the key administrators ensuring the effective management of the institution.' },
            '/estateoff': { title: 'Estate Office', desc: 'The Estate Office manages campus infrastructure, maintenance, and development projects at AURCC.' },
            '/grievence': { title: 'Grievance', desc: 'Student and staff Grievance Redressal mechanism at AURCC to ensure a fair and transparent campus environment.' },
            '/news': { title: 'News', desc: 'Stay updated with the latest news, announcements, and press releases from Anna University Regional Campus Coimbatore.' },
            '/events': { title: 'Events', desc: 'Upcoming and past events, workshops, seminars, and conferences held at AURCC.' },
            '/downloads': { title: 'Downloads', desc: 'Download important forms, circulars, academic calendars, and resources for students and staff.' },
            '/posh': { title: 'POSH', desc: 'Prevention of Sexual Harassment (POSH) cell at AURCC ensures a safe and inclusive workplace and campus environment.' },
            '/feedback': { title: 'Feedback', desc: 'Provide your valuable feedback and suggestions to help us improve the educational experience at AURCC.' },
            '/team': { title: 'Team', desc: 'Meet the dedicated faculty, staff, and student teams behind the successful functioning of AURCC.' },
            '/team/faculty': { title: 'Faculty Incharge', desc: 'Meet the faculty incharges who guide and mentor various academic and administrative activities at AURCC.' },
            '/team/developers': { title: 'Developers', desc: 'Meet the talented Developers who designed and built the official AURCC website.' },
            '/departments/cse': { title: 'Department of Computer Science and Engineering', desc: 'Explore the CSE department at AURCC. Learn about our curriculum, faculty, labs, and student achievements.' },
            '/departments/mech': { title: 'Department of Mechanical Engineering', desc: 'Explore the Mechanical Engineering department at AURCC. Find details on academics, research, and facilities.' },
            '/departments/mba': { title: 'Department of Master of Business Administration', desc: 'Discover the MBA program at AURCC, focusing on business leadership, management skills, and industry readiness.' },
            '/departments/eee': { title: 'Department of Electrical and Electronics Engineering', desc: 'Explore the EEE department at AURCC. Learn about our power systems, electronics labs, and academic excellence.' },
            '/departments/ece': { title: 'Department of Electronics and Communication Engineering', desc: 'Explore the ECE department at AURCC. Information on our communications, VLSI labs, and cutting-edge research.' }
        };

        const pathLower = pathname.toLowerCase();
        let pageInfo = metaMap[pathLower];

        let finalTitle = pageInfo ? pageInfo.title : null;
        let finalDesc = pageInfo ? pageInfo.desc : defaultDesc;

        // Handle dynamic paths like /graduation/2023
        if (!finalTitle) {
            if (pathLower.startsWith('/graduation/')) {
                finalTitle = `Graduation Gallery ${pathname.split('/')[2]}`;
                finalDesc = `View graduation photos and memories for the batch of ${pathname.split('/')[2]} at AURCC.`;
            } else if (pathLower.startsWith('/annualday/')) {
                finalTitle = `Annual Day Gallery ${pathname.split('/')[2]}`;
                finalDesc = `Explore the Annual Day celebrations and cultural event galleries for ${pathname.split('/')[2]} at AURCC.`;
            } else {
                finalTitle = 'Page Not Found';
                finalDesc = 'The page you are looking for does not exist on the AURCC website.';
            }
        }

        document.title = pathLower === '/' ? finalTitle : `${finalTitle} | AURCC`;
        updateMetaDesc(finalDesc);
    }, [pathname]);

    return null;
}

export default PageTitleUpdater;
