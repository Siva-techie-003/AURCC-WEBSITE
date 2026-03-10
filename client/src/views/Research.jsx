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
  fetch("http://localhost:5000/api/research-cell")
    .then(res => res.json())
    .then(setData)
    .catch(err => console.error(err));
}, []);
    
if (!data) {
  return <p className="text-center mt-20">Loading...</p>;
}
    return (
        <OfficePageTemplate
            officeName="RESEARCH CELL"
            heroSubtitle="Fostering research and innovation across disciplines"
            sections={sections}
            contactEmail="researchcell@aurcc.ac.in"
        >
            <div className="content">
                {/* Description */}
                <OfficeContentSection
                    sectionId="description"
                    title="About the Research Cell"
                    icon="ℹ️"
                >
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-left">
                        <ul className="list-disc pl-5 space-y-4 text-base lg:text-lg xl:text-lg text-gray-800 leading-relaxed ">
                            {(Array.isArray(data?.description) ? data.description : []).map((desc, index) => (
                                <li key={index} className="whitespace-pre-wrap break-words">
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                </OfficeContentSection>

                {/* Supervisors Section */}
                <OfficeContentSection
                    sectionId="supervisors"
                    title="Scholars Details by Department"
                    icon="🎓"
                >
                    <div className="overflow-x-auto no-scrollbar shadow-lg rounded-xl border border-gray-200">
                        <table className="table-auto w-full text-left text-sm lg:text-base">
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
    );
};

export default Research;
