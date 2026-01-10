import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

const CourseHero = () => {
    return (
        <section className="relative bg-brand-primary h-[400px] flex items-center overflow-hidden font-dm-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">

                {/* Left Content */}
                <div className="text-white">
                    <h1 className="text-5xl font-bold mb-4">Courses</h1>
                    <div className="flex items-center gap-2 text-gray-300 text-sm font-medium">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <FaChevronRight className="text-xs" />
                        <span className="text-brand-accent">Courses</span>
                    </div>
                </div>

                {/* Right Image with Angle */}
                <div className="hidden lg:block absolute top-0 right-0 h-full w-1/2">
                    <div className="absolute inset-0 bg-brand-primary/20 z-10 w-full h-full"></div>
                    {/* Skewed Container for that angled look */}
                    <div className="h-full w-full relative overflow-hidden -skew-x-12 ml-20 border-l-8 border-brand-accent/30">
                        <img
                            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1600"
                            alt="Students working"
                            className="w-full h-full object-cover skew-x-12 scale-125 hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-brand-primary/90"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseHero;
