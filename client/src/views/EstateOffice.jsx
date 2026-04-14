import React, { useState, useEffect } from "react";
import OfficePageTemplate from "../components/OfficePageTemplate";
import OfficeContentSection from "../components/OfficeContentSection";
import StaffCard from "../components/StaffCard";
import "./EstateOffice.css";

import {
  construction,
  water,
  electrical,
  road,
  garden,
  facility,
  housekeeping,
  security,
} from "../assets/icons";

// ✅ Service Cards (Using Image Icons)
const serviceCards = [
  {
    icon: construction,
    title: "Building Construction & Maintenance",
    desc: "All construction activities and upkeep of campus buildings.",
  },
  {
    icon: water,
    title: "Water & Sewage Management",
    desc: "Ensuring water supply, sewage treatment, and disposal.",
  },
  {
    icon: electrical,
    title: "Electrical System Maintenance",
    desc: "Maintenance of campus electrical supply and systems.",
  },
  {
    icon: road,
    title: "Roads & Pathways",
    desc: "Construction and maintenance of campus roads and walkways.",
  },
  {
    icon: garden,
    title: "Gardens & Lawns",
    desc: "Upkeep of lawns, gardens, and green spaces.",
  },
  {
    icon: facility,
    title: "Facility Monitoring & Rent",
    desc: "Monitoring and rent collection for central facilities.",
  },
  {
    icon: housekeeping,
    title: "Housekeeping",
    desc: "Campus-wide cleaning and housekeeping services.",
  },
  {
    icon: security,
    title: "Security",
    desc: "Ensuring safety and security across the campus.",
  },
];

const EstateOffice = () => {
  const [staffData, setStaffData] = useState([]);
  const [loading, setLoading] = useState(true);

  const sections = [
    { key: "about", label: "About" },
    { key: "services", label: "Services" },
    { key: "staff", label: "Staff" },
  ];

  useEffect(() => {
    fetch("/api/estate-office")
      .then((res) => res.json())
      .then((data) => {
        setStaffData(data.staff || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <section className="pt-[100px] sm:pt-[100px] lg:pt-[50px]">
      <OfficePageTemplate
        officeName="ESTATE OFFICE"
        heroSubtitle="Managing campus infrastructure, maintenance, and facilities"
        sections={sections}
        contactEmail="estateoffice@college.edu"
      >
        <div className="content space-y-16">
          {/* About Section */}
          <section id="about">
            <div className="text-center mb-8 ">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[rgb(100,25,25)] uppercase mb-2">
                About the Estate Office
              </h2>
              <div className="flex justify-center ">
                <span className="block w-24 h-1.5 rounded-full bg-[#f5c842]"></span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-[rgb(220,140,140)] p-6 lg:p-8">
              <p className="text-base lg:text-lg xl:text-xl font-medium text-gray-800 text-left leading-relaxed">
                The Estate Office is responsible for managing campus
                infrastructure, construction projects, building maintenance,
                water supply systems, electrical systems, roads, gardens,
                security, and overall facility monitoring to ensure smooth and
                safe operation of the institution.
              </p>
            </div>
          </section>

          {/* Services Section */}
          <OfficeContentSection sectionId="services" title="Services">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
              {serviceCards.map((service, index) => (
                <div
                  key={index}
                  className="service-card bg-white/70 backdrop-blur rounded-2xl shadow-sm border border-[rgb(220,140,140)] flex flex-col items-center text-center p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[rgb(140,60,60)] group"
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-12 h-12 object-contain mx-auto"
                    />
                  </div>

                  <h3 className="font-bold text-sm lg:text-base xl:text-lg text-[rgb(100,25,25)] mb-2 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs lg:text-sm text-gray-600 line-clamp-3">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </OfficeContentSection>

          {/* Staff Section */}
          <OfficeContentSection sectionId="staff" title="Staff">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {staffData.map((staff, index) => (
                <StaffCard
                  key={index}
                  staff={{
                    ...staff,
                    image: staff.image,
                  }}
                />
              ))}
            </div>
          </OfficeContentSection>
        </div>
      </OfficePageTemplate>
    </section>
  );
};

export default EstateOffice;
