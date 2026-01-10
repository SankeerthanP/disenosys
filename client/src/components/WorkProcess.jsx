import React from 'react';
import { FaBookReader, FaUserGraduate, FaBriefcase } from 'react-icons/fa';

const steps = [
    {
        icon: <FaBookReader className="w-8 h-8 text-white" />,
        title: "LEARN",
        description: "Gain in-depth knowledge through interactive lessons.",
        color: "bg-blue-500"
    },
    {
        icon: <FaUserGraduate className="w-8 h-8 text-white" />,
        title: "GRADUATE",
        description: "Earn a recognized certificate and join the alumni network.",
        color: "bg-brand-primary"
    },
    {
        icon: <FaBriefcase className="w-8 h-8 text-white" />,
        title: "WORK",
        description: "Apply skills in industry-based projects with job assistance.",
        color: "bg-brand-accent"
    }
];

const stats = [
    { label: 'Trained Engineers', value: '5000+' },
    { label: '5-Star Reviews', value: '3800+' },
    { label: 'Live Classes Monthly', value: '200+' },
    { label: 'Corporate Partners', value: '85+' },
    { label: 'Career Benefits', value: '87%' }
];

const WorkProcess = () => {
    return (
        <section className="py-20 bg-white font-dm-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h3 className="text-brand-accent font-bold tracking-wider text-sm uppercase mb-2">OUR WORK PROCESS</h3>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Proven <span className="text-brand-accent">Placement Process</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-100 -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className={`w-24 h-24 rounded-full ${step.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300 relative z-10 border-4 border-white`}>
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-600 max-w-xs">{step.description}</p>
                        </div>
                    ))}
                </div>

                {/* Stats Grid */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                            <div className="text-3xl font-bold text-brand-primary mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkProcess;
