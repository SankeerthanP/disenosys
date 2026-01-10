import React from 'react';
import { FaBuilding } from 'react-icons/fa';

import Tata from '../assets/Tata.webp';
import Ni from '../assets/Ni.webp';
import Hyu from '../assets/Hyu.webp';
import bmw from '../assets/bmw.webp';
import ford from '../assets/ford.webp';

const companies = [
    { name: "Tata Motors", logo: Tata },
    { name: "Nissan", logo: Ni },
    { name: "Hyundai", logo: Hyu },
    { name: "BMW", logo: bmw },
    { name: "Ford", logo: ford }
];

const recentPlacements = [
    { name: "Arjun Kumar", company: "Tata Motors", role: "Design Engineer" },
    { name: "Priya Sharma", company: "Nissan", role: "CAD Specialist" },
    { name: "Rahul Verma", company: "Hyundai", role: "Plastic Trims Eng." },
    { name: "Sneha Gupta", company: "BMW", role: "Surface Modeler" },
    { name: "Karthik R.", company: "Ford", role: "BIW Engineer" },
    { name: "Anjali Nair", company: "Tata Motors", role: "Product Designer" },
    { name: "Vikram Singh", company: "Nissan", role: "R&D Engineer" },
    { name: "Rohit Mehta", company: "Hyundai", role: "Quality Analyst" }
];

const Placement = () => {
    return (
        <section className="py-16 bg-white overflow-hidden font-dm-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                <h3 className="text-brand-accent font-bold tracking-wider text-sm uppercase mb-2">PLACEMENTS</h3>
                <h2 className="text-3xl font-bold text-gray-900">
                    Our Alumni Work At <span className="text-brand-accent">Top Companies</span>
                </h2>
            </div>

            {}
            <div className="border-b border-gray-100 pb-12 mb-20">
                <div className="marquee-container">
                    <div className="marquee-content">
                        {companies.concat(companies).concat(companies).map((company, index) => (
                            <div key={index} className="flex flex-col items-center gap-3 min-w-[150px] mx-8 hover:scale-110 transition-transform duration-300 cursor-pointer text-gray-400 hover:text-gray-900 grayscale hover:grayscale-0 transition-all">
                                <img src={company.logo} alt={company.name} className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
                                <span className="text-xs font-bold">{company.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {}
            <div className="mb-20">
                <div className="text-center mb-10">
                    <h3 className="text-xl font-bold text-gray-900">Recent <span className="text-brand-accent">Placements</span></h3>
                    <p className="text-gray-500 text-sm">Our students are making waves in the industry.</p>
                </div>

                <div className="relative group">
                    {}
                    <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                    <div className="marquee-container">
                        <div className="marquee-content">
                            {recentPlacements.concat(recentPlacements).map((student, index) => (
                                <div key={index} className="flex-shrink-0 w-64 bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 mx-4">
                                    <img
                                        src={`https://randomuser.me/api/portraits/men/${index + 10}.jpg`} 
                                        alt={student.name}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-brand-light"
                                    />
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">{student.name}</h4>
                                        <p className="text-xs text-gray-500 mb-1">{student.role}</p>
                                        <div className="text-xs font-bold text-brand-primary bg-brand-light px-2 py-0.5 rounded inline-block">
                                            Placed at {student.company}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="bg-brand-primary rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Start Your Success Story Today</h3>
                            <p className="text-gray-300 mb-8 text-lg">
                                Join thousands of engineers who have transformed their careers with Disenosys.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-brand-accent hover:bg-white hover:text-brand-accent text-white px-8 py-3 rounded-lg font-bold transition-colors">
                                    View Placements
                                </button>
                                <button className="border-2 border-white hover:bg-white hover:text-brand-primary text-white px-8 py-3 rounded-lg font-bold transition-colors">
                                    Talk to Expert
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl">
                                    <div className="text-3xl font-bold text-brand-cyan mb-1">100%</div>
                                    <div className="text-sm text-gray-300">Placement Support</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl">
                                    <div className="text-3xl font-bold text-brand-cyan mb-1">500+</div>
                                    <div className="text-sm text-gray-300">Hiring Partners</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl">
                                    <div className="text-3xl font-bold text-brand-cyan mb-1">50%</div>
                                    <div className="text-sm text-gray-300">Avg. Salary Hike</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl">
                                    <div className="text-3xl font-bold text-brand-cyan mb-1">4.8/5</div>
                                    <div className="text-sm text-gray-300">Student Rating</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl"></div>
                </div>
            </div>
        </section>
    );
};

export default Placement;
