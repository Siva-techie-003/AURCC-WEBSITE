import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PageTitleUpdater() {
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === '/') {
            document.title = 'AURCC - Anna University Regional Campus Coimbatore';
            return;
        }

        const titleMap = {
            '/': 'AURCC - Anna University Regional Campus Coimbatore',
            '/about': 'About',
            '/about-v': 'About',
            '/admissions': 'Admissions',
            '/admission': 'Admissions',
            '/graduation': 'Graduation',
            '/annualday': 'Annual Day',
            '/ed-cell': 'ED Cell',
            '/dgate': 'DGATE',
            '/placement-cell': 'Placement Cell',
            '/research-cell': 'Research Cell',
            '/exam-cell': 'Exam Cell',
            '/hostel': 'Hostel',
            '/nss': 'NSS',
            '/tamilmandram': 'Tamil Mandram',
            '/sports': 'Sports',
            '/alumni': 'Alumni',
            '/dean_office': 'Dean Office',
            '/fine-arts': 'Fine Arts Club',
            '/bis-club': 'BIS Club',
            '/uyir-club': 'Uyir Club',
            '/library': 'Library',
            '/distance-education': 'Distance Education',
            '/office-affiliation': 'Office of Affiliation',
            '/zonal': 'Zonal',
            '/pace-cell': 'PACE Cell',
            '/administration': 'Administration',
            '/admin/establishment': 'Establishment',
            '/admin/purchase-finance': 'Purchase and Finance',
            '/admin/student': 'Student Section',
            '/aicte&moe': 'AICTE & MoE',
            '/antiragging': 'Anti Ragging',
            '/vc': 'Vice Chancellor',
            '/registrar': 'Registrar',
            '/hod': 'Head of Departments',
            '/contact': 'Contact Us',
            '/regulation': 'Regulation',
            '/regulation/2021': 'Regulation 2021',
            '/regulation/2025': 'Regulation 2025',
            '/programs_offered': 'Programs Offered',
            '/programs/ug': 'UG Programs',
            '/programs/pg': 'PG Programs',
            '/curriculum_syllabus': 'Curriculum & Syllabus',
            '/student_affairs': 'Student Affairs',
            '/cod': 'Cell Coordinators',
            '/administrator': 'Administrator',
            '/estateoff': 'Estate Office',
            '/grievence': 'Grievance',
            '/news': 'News',
            '/events': 'Events',
            '/downloads': 'Downloads',
            '/posh': 'POSH',
            '/feedback': 'Feedback',
            '/team': 'Team',
            '/team/faculty': 'Faculty Incharge',
            '/team/developers': 'Student Developers',
            '/departments/cse': 'Department of Computer Science and Engineering',
            '/departments/mech': 'Department of Mechanical Engineering',
            '/departments/mba': 'Department of Master of Business Administration',
            '/departments/eee': 'Department of Electrical and Electronics Engineering',
            '/departments/ece': 'Department of Electronics and Communication Engineering'
        };

        const pathLower = pathname.toLowerCase();
        let finalTitle = titleMap[pathLower];

        // Handle dynamic paths like /graduation/2023
        if (!finalTitle) {
            if (pathLower.startsWith('/graduation/')) {
                finalTitle = `Graduation Gallery ${pathname.split('/')[2]}`;
            } else if (pathLower.startsWith('/annualday/')) {
                finalTitle = `Annual Day Gallery ${pathname.split('/')[2]}`;
            } else {
                finalTitle = 'Page Not Found';
            }
        }

        document.title = pathLower === '/' ? finalTitle : `${finalTitle} | AURCC`;
    }, [pathname]);

    return null;
}

export default PageTitleUpdater;
