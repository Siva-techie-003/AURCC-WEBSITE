import React, { useState,useEffect } from 'react';
import OfficePageTemplate from '../components/OfficePageTemplate';
import OfficeContentSection from '../components/OfficeContentSection';
import './Research.css';

const Research = () => {
    const [data, setData] = useState(null);

    const sections = [
        { key: 'description', label: 'Description' },
        { key: 'supervisors', label: 'Supervisors' }
    ];

    useEffect(() => {
  fetch("/api/research-cell")
    .then(res => res.json())
    .then(setData)
    .catch(err => console.error(err));
}, []);
    
if (!data) {
  return <p className="text-center mt-20">Loading...</p>;
}
    return (
        <section className="pt-[100px] sm:pt-[100px] lg:pt-[50px]">

        <OfficePageTemplate
            officeName="RESEARCH CELL"
            heroSubtitle="Fostering research and innovation across disciplines"
            sections={sections}
            contactEmail="researchcell@aurcc.ac.in"
        >
            <div className="content space-y-16">
                {/* Description */}
  <section id="description">
    <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[rgb(100,25,25)] uppercase mb-2">
            About the Research Cell
        </h2>

        <div className="flex justify-center">
            <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
        </div>
    </div>

    <div className="bg-white rounded-2xl shadow-sm border border-[rgb(220,140,140)] p-6 lg:p-8">
        <ul className="list-disc pl-5 space-y-4 text-base lg:text-lg xl:text-lg text-gray-800 leading-relaxed">
            {(Array.isArray(data?.description) ? data.description : []).map((desc, index) => (
                <li key={index} className="whitespace-pre-wrap break-words">
                    {desc}
                </li>
            ))}
        </ul>
    </div>
</section>

                {/* Supervisors Section */}
                <OfficeContentSection
                    sectionId="supervisors"
                    title="Scholars Details by Department"
                >
                    <div className="no-scrollbar shadow-lg rounded-xl border-r border-gray-200">
                        <table className="w-full text-left text-sm lg:text-base">
                            <thead className="bg-[rgb(100,25,25)] text-white uppercase tracking-wider sticky top-0">
                                <tr>
                                    <th className="px-4 py-4 font-bold border-r border-[rgb(105,30,30)]">Department</th>
                                    <th className="px-3 py-4 font-bold text-center border-r border-[rgb(105,30,30)]">Completed (FT)</th>
                                    <th className="px-3 py-4 font-bold text-center border-r border-[rgb(105,30,30)]">Completed (PT)</th>
                                    <th className="px-3 py-4 font-bold text-center border-r border-[rgb(105,30,30)]">Registered (FT)</th>
                                    <th className="px-3 py-4 font-bold text-center border-r border-[rgb(105,30,30)]">Registered (PT)</th>
                                    <th className="px-3 py-4 font-bold text-center border-r border-[rgb(105,30,30)]">Comp. Total</th>
                                    <th className="px-3 py-4 font-bold text-center border-r border-[rgb(105,30,30)]">Reg. Total</th>
                                    <th className="px-3 py-4 font-bold text-center bg-[rgb(110,35,35)]">Overall</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {(Array.isArray(data?.supervisors) ? data.supervisors : []).map((dept, index) => (
                                    <tr key={index} className="hover:bg-[rgb(220,140,140)]/30 transition-colors">
                                        <td className="px-4 py-4 font-bold text-[rgb(100,25,25)] border-r border-gray-100">{dept.department}</td>
                                        <td className="px-3 py-4 text-center border-r border-gray-100 font-medium">{dept.phdCompletedFullTime}</td>
                                        <td className="px-3 py-4 text-center border-r border-gray-100 font-medium">{dept.phdCompletedPartTime}</td>
                                        <td className="px-3 py-4 text-center border-r border-gray-100 font-medium">{dept.phdRegisteredFullTime}</td>
                                        <td className="px-3 py-4 text-center border-r border-gray-100 font-medium">{dept.phdRegisteredPartTime}</td>
                                        <td className="px-3 py-4 text-center border-r border-[rgb(220,140,140)] font-bold text-green-700 bg-green-50/20">{dept.completedFTPT}</td>
                                        <td className="px-3 py-4 text-center border-r border-[rgb(220,140,140)] font-bold text-[rgb(110,35,35)] bg-[rgb(220,140,140)]/20">{dept.registeredFTPT}</td>
                                        <td className="px-3 py-4 text-center font-extrabold text-[rgb(100,25,25)] bg-[rgb(220,140,140)]/50">{dept.completedFTPT + dept.registeredFTPT}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot className="bg-gray-100 font-bold">
                                <tr>
                                    <td className="px-4 py-4 border-t-2 border-gray-300">TOTAL</td>
                                    <td className="px-3 py-4 text-center border-t-2 border-gray-300">{data.supervisors.reduce((acc, d) => acc + d.phdCompletedFullTime, 0)}</td>
                                    <td className="px-3 py-4 text-center border-t-2 border-gray-300">{data.supervisors.reduce((acc, d) => acc + d.phdCompletedPartTime, 0)}</td>
                                    <td className="px-3 py-4 text-center border-t-2 border-gray-300">{data.supervisors.reduce((acc, d) => acc + d.phdRegisteredFullTime, 0)}</td>
                                    <td className="px-3 py-4 text-center border-t-2 border-gray-300">{data.supervisors.reduce((acc, d) => acc + d.phdRegisteredPartTime, 0)}</td>
                                    <td className="px-3 py-4 text-center border-t-2 border-gray-300 text-green-800">{data.supervisors.reduce((acc, d) => acc + d.completedFTPT, 0)}</td>
                                    <td className="px-3 py-4 text-center border-t-2 border-gray-300 text-[rgb(105,30,30)]">{data.supervisors.reduce((acc, d) => acc + d.registeredFTPT, 0)}</td>
                                    <td className="px-3 py-4 text-center border-t-2 border-gray-300 bg-[rgb(200,120,120)] text-[rgb(100,25,25)]">{data.supervisors.reduce((acc, d) => acc + (d.completedFTPT + d.registeredFTPT), 0)}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </OfficeContentSection>
            </div>
        </OfficePageTemplate>
        </section>
    );
};

export default Research;
