import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const CareerPlatform = () => {
    return (
        <section className="py-20 bg-brand-primary text-white font-dm-sans overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="relative z-10">
                        <h3 className="text-gray-300 font-bold tracking-wider text-sm uppercase mb-4">WHY CHOOSE DISENOSYS?</h3>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            One Platform for <span className="text-brand-cyan">Lifting Your Career</span> | <span className="text-brand-cyan">Empowering Engineers</span>
                        </h2>
                        <p className="text-gray-300 text-lg mb-12 leading-relaxed">
                            We Disenosys, Are Working to Bridge This Skill Gap Between Academia and The Industry Requirements. We Have a Team of Industry Experts, With Over a Decade of Experience Who Empower Our Students to Land Their Dream Jobs in Core Automotive Companies.
                        </p>

                        <div className="relative pl-8 border-l-4 border-brand-accent">
                            <FaQuoteLeft className="text-brand-accent mb-4 text-2xl" />
                            <p className="text-xl font-bold italic mb-4">
                                Our Students Are Our Hope. We Are Dedicated to Making Their Dreams Into Reality
                            </p>
                            <FaQuoteRight className="text-brand-accent text-2xl" />
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative z-10 flex justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                            alt="Professional Team"
                            className="rounded-xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-blue-900/30 rounded-full blur-3xl"></div>
        </section>
    );
};

export default CareerPlatform;
