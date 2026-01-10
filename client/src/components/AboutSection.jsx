import React from 'react';
import { FaArrowRight, FaAward } from 'react-icons/fa';

const AboutSection = () => {
    return (
        <section className="py-20 bg-white font-dm-sans overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Image Collage */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 mt-8">
                                <img
                                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
                                    alt="Automotive Design"
                                    className="rounded-2xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600"
                                    alt="Classroom Training"
                                    className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="space-y-4">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
                                    alt="Team Collaboration"
                                    className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                                />
                                <div className="bg-brand-primary p-6 rounded-2xl shadow-xl text-white flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300">
                                    <span className="text-4xl font-bold text-brand-cyan mb-1">7+</span>
                                    <span className="text-sm font-medium tracking-wide">Years Of<br />Experience</span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Badge Overlay */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-light rounded-full -z-10 blur-3xl opacity-50"></div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-cyan rounded-full -z-10 blur-3xl opacity-20"></div>
                    </div>

                    {/* Right Column: Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-light text-brand-accent rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                            <FaAward /> About Us
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Transforming Engineers into <span className="text-brand-accent">Industry Leaders</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Diseñosys is India’s #1 Automotive Design Training Institute, bridging the gap between academic learning and industry requirements. We specialize in providing high-end training in Plastic Trims, BIW, and Electric Vehicle Design.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            With a curriculum curated by industry experts and a focus on hands-on live projects, we ensure our students are job-ready from day one.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="bg-brand-primary text-white px-8 py-3.5 rounded-lg font-bold hover:bg-brand-accent transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group">
                                Know More
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <div className="flex items-center -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <img
                                        key={i}
                                        src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`}
                                        alt="Student"
                                        className="w-12 h-12 rounded-full border-2 border-white"
                                    />
                                ))}
                                <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-brand-primary font-bold text-xs">
                                    2k+
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
