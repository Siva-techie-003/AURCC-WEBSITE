import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load components for performance
const HomeView = lazy(() => import('./views/HomeView'));
const AboutView = lazy(() => import('./views/AboutView'));
const DepartmentsView = lazy(() => import('./views/DepartmentsView'));
const AdmissionView = lazy(() => import('./views/AdmissionView'));
const EDCell = lazy(() => import('./views/EDCell'));
const DGATE = lazy(() => import('./views/DGATE'));
const PlacementCell = lazy(() => import('./views/PlacementCell'));
const Research = lazy(() => import('./views/Research'));
const About = lazy(() => import('./views/About'));
const ExamCell = lazy(() => import('./views/ExamCell'));
const Hostel = lazy(() => import('./views/Hostel'));
const NSS = lazy(() => import('./views/NSS'));
const TamilMandram = lazy(() => import('./views/TamilMandram'));
const Sports = lazy(() => import('./views/Sports'));
const Alumni = lazy(() => import('./views/Alumni'));
const DeanOffice = lazy(() => import('./views/DeanOffice'));
const FineArtsClub = lazy(() => import('./views/FineArtsClub'));
const Library = lazy(() => import('./views/Library'));
const DistanceEdu = lazy(() => import('./views/DistanceEdu'));
const OfficeOfAffiliation = lazy(() => import('./views/OfficeOfAffiliation'));
const Zonal = lazy(() => import('./views/Zonal'));
const Pace = lazy(() => import('./views/Pace'));
const Admin = lazy(() => import('./views/Admin'));
const AicteAndMoe = lazy(() => import('./views/AicteAndMoe'));
const Antiragging = lazy(() => import('./views/Antiragging'));
const VC = lazy(() => import('./views/VC'));
const Registrar = lazy(() => import('./views/Registrar'));
const HOD = lazy(() => import('./views/HOD'));
// const Organogram = lazy(() => import('./views/Organogram'));
const Contact = lazy(() => import('./views/Contact'));
const Regulation = lazy(() => import('./views/Regulation'));
const ProgramsOffered = lazy(() => import('./views/ProgramsOffered'));
const CurriculumSyllabus = lazy(() => import('./views/CurriculumSyllabus'));
const StudentAffairs = lazy(() => import('./views/StudentAffairs'));
const COD = lazy(() => import('./views/COD'));
const EstateOffice = lazy(() => import('./views/EstateOffice'));
const ScienceHumanities = lazy(() => import('./views/ScienceHumanities'));
const Grievance = lazy(() => import('./views/Grievance'));
const News = lazy(() => import('./views/News'));
const Events = lazy(() => import('./views/Events'));
const Downloads = lazy(() => import('./views/Downloads'));
const POSH = lazy(() => import('./views/POSH'));
const NotFound = lazy(() => import('./views/NotFound'));

function App() {
    return (
        <div className="App min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <Suspense fallback={<div className="flex items-center justify-center p-20 text-[rgb(115,40,40)] font-bold animate-pulse">Loading Institutional Assets...</div>}>
                    <Routes>
                        <Route path="/" element={<HomeView />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/about-v" element={<AboutView />} />
                        <Route path="/departments/:departmentName" element={<DepartmentsView />} />
                        <Route path="/admissions" element={<AdmissionView />} />
                        <Route path="/admission" element={<AdmissionView />} />
                        <Route path="/ed-cell" element={<EDCell />} />
                        <Route path="/dgate" element={<DGATE />} />
                        <Route path="/placement-cell" element={<PlacementCell />} />
                        <Route path="/research-cell" element={<Research />} />
                        <Route path="/exam-cell" element={<ExamCell />} />
                        <Route path="/hostel" element={<Hostel />} />
                        <Route path="/nss" element={<NSS />} />
                        <Route path="/tamilmandram" element={<TamilMandram />} />
                        <Route path="/sports" element={<Sports />} />
                        <Route path="/alumni" element={<Alumni />} />
                        <Route path="/dean_office" element={<DeanOffice />} />
                        <Route path="/fine-arts" element={<FineArtsClub />} />
                        <Route path="/library" element={<Library />} />
                        <Route path="/distance-education" element={<DistanceEdu />} />
                        <Route path="/office-affiliation" element={<OfficeOfAffiliation />} />
                        <Route path="/zonal" element={<Zonal />} />
                        <Route path="/pace-cell" element={<Pace />} />
                        <Route path="/administration" element={<Admin />} />
                        <Route path="/aicte&moe" element={<AicteAndMoe />} />
                        <Route path="/antiragging" element={<Antiragging />} />
                        <Route path="/VC" element={<VC />} />
                        <Route path="/Registrar" element={<Registrar />} />
                        <Route path="/HOD" element={<HOD />} />
                        {/* <Route path="/organogram" element={< />} /> */}
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/regulation" element={<Regulation />} />
                        <Route path="/programs_offered" element={<ProgramsOffered />} />
                        <Route path="/curriculum_syllabus" element={<CurriculumSyllabus />} />
                        <Route path="/student_affairs" element={<StudentAffairs />} />
                        <Route path="/COD" element={<COD />} />
                        <Route path="/administrator" element={<Registrar />} />
                        <Route path="/EstateOff" element={<EstateOffice />} />
                        <Route path="/s&h" element={<ScienceHumanities />} />
                        <Route path="/Grievence" element={<Grievance />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/downloads" element={<Downloads />} />
                        <Route path="/posh" element={<POSH />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </div>
    );
}

export default App;
