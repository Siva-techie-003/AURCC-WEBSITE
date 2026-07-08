import React from 'react';
import OfficePageTemplate from '../components/OfficePageTemplate';
import OfficeContentSection from '../components/OfficeContentSection';
import StaffCard from '../components/StaffCard';
import './IIC.css';

const IIC = () => {
    const sections = [
        { key: 'description', label: 'Description' },
        { key: 'objectives', label: 'Objectives' },
        { key: 'initiatives', label: 'Initiatives' },
        { key: 'staff', label: 'Team' }
    ];

    const dummyStaff = [
        {
            name: "Mr. R. Balamurugan",
            position: "Coordinator, IIC",
            image: " "
        },
        {
            name: "Mrs. R. Rajalakshmi",
            position: "Assistant, IIC",
            image: " "
        }
    ];

    return (
        <section className="pt-[100px] sm:pt-[100px] lg:pt-[50px]">
            <OfficePageTemplate
                officeName="Institute Innovation Council (IIC)"
                heroSubtitle="Fostering a Culture of Innovation, Startups, and Entrepreneurship"
                sections={sections}
                contactEmail="iic_cell@aurcc.ac.in"
            >
                <div className="text-left space-y-16">
                    {/* Description Section */}
                    <div id="description" className="scroll-mt-32">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 font-serif uppercase mb-2">About the IIC</h2>
                            <div className="flex justify-center">
                                <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
                            </div>
                        </div>
                        <div className="max-w-6xl mx-auto space-y-6 rounded-2xl p-8 border border-[rgb(200,120,120)] bg-white">
                            <p className="text-base lg:text-lg xl:text-xl font-medium text-[rgb(100,25,25)] border-l-4 border-[rgb(115,40,40)] pl-4 py-4 rounded-r-2xl bg-gray-50">
                                <span className="font-black">The Institution's Innovation Council (IIC)</span> at Anna University Regional Campus Coimbatore is established under the aegis of the Ministry of Education (MoE) Innovation Cell, Government of India. It aims to systematically foster the culture of Innovation amongst all Higher Education Institutions (HEIs).
                            </p>
                            <p className="text-base text-gray-700 font-bold italic text-center pt-4">
                                "Nurturing creative minds, validating startup ideas, and guiding them to commercialization."
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <ul className="space-y-4">
                                    {[
                                        { title: 'Innovation Ecosystem', desc: 'Providing resources, infrastructure, and opportunities to experiment with fresh ideas.', icon: '' },
                                        { title: 'Mentorship & Support', desc: 'Connects young minds with industry experts, investors, and startup mentors.', icon: '' }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                            <div className="w-full">
                                                <h4 className="font-bold text-gray-900 text-center">{item.title}</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <ul className="space-y-4">
                                    {[
                                        { title: 'Startup Incubation', desc: 'Pre-incubation assistance including legal, branding, and technical guidance.', icon: '' },
                                        { title: 'IPR & Patents Support', desc: 'Helping innovators register patents and protect their intellectual property rights.', icon: '' }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                            <div className="w-full">
                                                <h4 className="font-bold text-gray-900 text-center">{item.title}</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Objectives Section */}
                    <div id="objectives" className="scroll-mt-32">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 font-serif uppercase mb-2">Objectives</h2>
                            <div className="flex justify-center">
                                <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
                            </div>
                        </div>
                        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-[rgb(220,140,140)] p-6 lg:p-8">
                            <ul className="list-disc pl-5 space-y-3 text-base lg:text-lg xl:text-xl text-gray-800 text-left">
                                <li>Establish and run a functional ecosystem for scouting ideas and pre-incubation of ideas.</li>
                                <li>Create vibrant local innovation ecosystems and support startup mechanisms within the institution.</li>
                                <li>Promote cognitive abilities, design thinking, and critical problem-solving skills among students.</li>
                                <li>Conduct regular workshops, seminars, and interactions with entrepreneurs, investors, and professionals.</li>
                                <li>Participate in nationwide innovation contests, hackathons, and research exhibitions.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Initiatives Section */}
                    <div id="initiatives" className="scroll-mt-32">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 font-serif uppercase mb-2">Initiatives & Events</h2>
                            <div className="flex justify-center">
                                <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
                            </div>
                        </div>
                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { title: "Smart India Hackathon (SIH)", desc: "Preparing and mentoring student teams for the annual national-level product development competition." },
                                { title: "Innovation & Startup Day", desc: "Showcasing student-led prototypes and proof of concepts to potential investors and mentors." },
                                { title: "IPR & Patent Filing Workshops", desc: "Expert talks on how to file patents, trademarks, and copyright applications for academic research." },
                                { title: "Entrepreneurship Bootcamps", desc: "Intensive training on business planning, financial modeling, and marketing for early-stage startups." }
                            ].map((initiative, idx) => (
                                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-[rgb(220,140,140)] hover:shadow-md transition-all text-left">
                                    <h4 className="text-lg lg:text-xl font-bold text-[rgb(100,25,25)] mb-3">{initiative.title}</h4>
                                    <p className="text-sm lg:text-base text-gray-700">{initiative.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Staff Section */}
                    <div id="staff" className="scroll-mt-32">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 font-serif uppercase mb-2">Our Team</h2>
                            <div className="flex justify-center">
                                <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
                            </div>
                        </div>
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                                {dummyStaff.map((staff, i) => (
                                    <StaffCard key={i} staff={staff} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </OfficePageTemplate>
        </section>
    );
};

export default IIC;
