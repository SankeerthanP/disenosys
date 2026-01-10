import React from 'react';
import { FaChalkboardTeacher, FaBriefcase, FaLaptopCode, FaClock } from 'react-icons/fa';
import aboutImage from '../assets/why.webp';

const features = [
    {
        icon: <FaChalkboardTeacher className="w-6 h-6 text-brand-accent" />,
        title: '100% LIVE INTERACTIVE CLASSES',
        description: 'Engage directly with industry experts in real-time. Ask questions, get feedback, and learn collaboratively.'
    },
    {
        icon: <FaBriefcase className="w-6 h-6 text-brand-accent" />,
        title: '100% JOB ASSISTANCE',
        description: 'Our dedicated placement cell works tirelessly to connect you with top automotive companies.'
    },
    {
        icon: <FaLaptopCode className="w-6 h-6 text-brand-accent" />,
        title: 'HANDS-ON EXPERIENCE WITH 50+ PROJECTS',
        description: 'Gain practical skills by working on real-world industry projects using tools like CATIA and NX.'
    },
    {
        icon: <FaClock className="w-6 h-6 text-brand-accent" />,
        title: 'WEEKEND CLASSES FOR WORKING PROFESSIONALS',
        description: 'Designed for working professionals and students. Upgrade your skills without quitting your job.'
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-gray-50 font-dm-sans overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Image */}
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
                        <img
                            src={aboutImage}
                            alt="Automotive Components Exploded View"
                            className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Right Content */}
                    <div>
                        <h3 className="text-brand-accent font-bold tracking-wider text-sm uppercase mb-2">WHY CHOOSE US</h3>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Empowering Your Career with <span className="text-brand-accent">Expert-Led, Practical, and Flexible Learning</span>
                        </h2>

                        <div className="space-y-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4 group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                                        {/* Icon color handled manually or via class trick */}
                                        <div className="group-hover:text-white text-brand-accent transition-colors">
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
