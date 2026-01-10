import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

const AboutHero = () => {
    return (
        <section className="relative bg-brand-primary h-64 md:h-80 flex items-center overflow-hidden font-dm-sans">
            {/* Abstract Background Overlay */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-cyan rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
                {/* Grid Pattern */}
                <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.1 }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">About Us</h1>
                    <div className="flex items-center justify-center gap-2 text-gray-300 text-sm md:text-base font-medium">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <FaChevronRight className="text-xs" />
                        <span className="text-brand-accent">About Us</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
