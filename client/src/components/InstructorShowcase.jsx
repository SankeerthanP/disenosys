import React from 'react';
import { FaCheckCircle, FaTools, FaBriefcase } from 'react-icons/fa';

const instructors = [
    {
        initials: "SK",
        name: "Senthil Kumar K",
        role: "Senior BIW Project Lead",
        description: "Senior BIW engineering leader with over 16 years of experience across global OEM and Tier-1 environments. Strong exposure to complete vehicle lifecycle activities from concept development to production support, while leading cross-functional engineering teams.",
        expertise: [
            "Body-in-White (BIW) design & development",
            "Vehicle structure engineering & system integration",
            "Project leadership & delivery ownership",
            "OEM BIW standards & production intent design"
        ],
        tools: ["CATIA V5", "Siemens NX", "OEM BIW Standards"],
        experience: "16+ Years | OEM & Tier-1 Programs"
    },
    {
        initials: "GK",
        name: "Gopala Krishna Bikumalla",
        role: "Senior Automotive System Engineer – Thermal, Interior & Exterior Systems",
        description: "Global automotive system engineer with 18+ years of experience across Europe, USA, and India. Specialized in cockpit systems, thermal and climate modules, and interior & exterior system integration for premium OEM programs.",
        expertise: [
            "Thermal & climate system engineering",
            "Interior, exterior & cockpit module design",
            "Plastic design & mold feasibility",
            "System-level integration & validation"
        ],
        tools: ["CATIA V5", "Teamcenter", "SystemWeaver", "GBOM"],
        experience: "18+ Years | Global OEM Programs (Europe, USA, India)"
    }
];

const InstructorShowcase = () => {
    return (
        <section className="py-20 bg-white font-dm-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <h3 className="text-gray-500 font-bold tracking-wider text-xs uppercase mb-2">FACULTIES</h3>
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4">
                        Meet Our <span className="text-brand-cyan">Expert Instructors</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Learn from industry leaders with real-world OEM experience in automotive engineering, system design, and product development.
                    </p>
                </div>

                <div className="space-y-20">
                    {instructors.map((inst, index) => (
                        <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                            {/* Initials Card - Alternating Position */}
                            <div className={`lg:col-span-3 flex justify-center ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                                <div className="w-48 h-48 bg-gradient-to-br from-brand-cyan to-brand-primary rounded-2xl shadow-xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-all duration-300">
                                    <span className="text-6xl font-bold text-white">{inst.initials}</span>
                                </div>
                            </div>

                            {/* Content - Always Left Aligned Text */}
                            <div className="lg:col-span-9 space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-brand-primary">{inst.name}</h3>
                                    <p className="text-brand-primary font-medium text-lg mt-1">{inst.role}</p>
                                </div>

                                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                                    {inst.description}
                                </p>

                                <div>
                                    <h4 className="font-bold text-brand-primary text-sm mb-3">Key Expertise</h4>
                                    <ul className={`grid grid-cols-1 md:grid-cols-2 gap-3 ${index % 2 !== 0 ? 'bg-gray-50 p-4 rounded-xl' : ''}`}>
                                        {inst.expertise.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                                <FaCheckCircle className="text-brand-cyan text-base flex-shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                                    <div>
                                        <h4 className="font-bold text-brand-primary text-sm mb-3 flex items-center gap-2">
                                            <FaTools className="text-gray-400" /> Tools & Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {inst.tools.map((tag, t) => (
                                                <span key={t} className="bg-gray-100 text-brand-primary text-xs font-semibold px-3 py-1 rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-primary text-sm mb-3 flex items-center gap-2">
                                            <FaBriefcase className="text-gray-400" /> Experience
                                        </h4>
                                        <div className="inline-block border border-gray-200 rounded-lg px-4 py-2 bg-gray-50">
                                            <span className="text-gray-600 text-xs font-medium">{inst.experience}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default InstructorShowcase;
