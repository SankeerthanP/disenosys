import React, { useState } from 'react';
import { FaArrowRight, FaStar, FaClock, FaCheckCircle } from 'react-icons/fa';
import plasticImg from '../assets/plastic (2).webp';
import biwImg from '../assets/BIW.webp';
import cadImg from '../assets/cad (1).webp';
import course1 from '../assets/course_1.jpg';
import course2 from '../assets/course_2.jpg';
import course3 from '../assets/course_3.jpg';
import course4 from '../assets/course_4.jpg';
import course5 from '../assets/course_5.jpg';

const pgPrograms = [
    {
        _id: 'pg1',
        title: "PG Diploma in Plastic Trims Design",
        students: "5,957",
        image: plasticImg,
        price: "1,50,000"
    },
    {
        _id: 'pg2',
        title: "PG Diploma in BIW Design",
        students: "4,230",
        image: biwImg,
        price: "1,50,000"
    },
    {
        _id: 'pg3',
        title: "Masters in Automotive Body Design",
        students: "6,100",
        image: cadImg,
        price: "2,00,000"
    }
];

const onlineCourses = [
    {
        id: 1,
        title: "Foundations for Automotive Designers",
        image: course1,
        category: "Automobile Engineering",
        rating: 4.5,
        reviews: 120,
        duration: "6 Weeks",
        students: "1.2k",
        description: "Master the basics of automotive design, including chassis, engine, and suspension systems."
    },
    {
        id: 2,
        title: "Advanced CATIA Surface",
        image: course2,
        category: "Mechanical Engineering",
        rating: 4.8,
        reviews: 85,
        duration: "8 Weeks",
        students: "850",
        description: "Learn complex surface modeling techniques used in top-tier automotive companies with CATIA."
    },
    {
        id: 3,
        title: "Plastic Trims Engineering",
        image: course3,
        category: "Plastic Trims",
        rating: 4.7,
        reviews: 200,
        duration: "10 Weeks",
        students: "2k",
        description: "Deep dive into plastic interior and exterior trims, material selection, and manufacturing processes."
    },
    {
        id: 4,
        title: "BIW Fixture Design",
        image: course4,
        category: "BIW",
        rating: 4.6,
        reviews: 150,
        duration: "12 Weeks",
        students: "1.5k",
        description: "Understand the principles of Body-in-White fixture design, clamping, and welding standards."
    },
    {
        id: 5,
        title: "Electric Vehicle Design",
        image: course5,
        category: "Mechatronics Engineering",
        rating: 4.9,
        reviews: 300,
        duration: "14 Weeks",
        students: "2.5k",
        description: "Explore the future of mobility with comprehensive modules on EV battery packs, motors, and powertrains."
    }
];

const ProgramSwitcher = () => {
    const [activeTab, setActiveTab] = useState('pg');

    return (
        <section className="py-20 bg-gray-50 font-dm-sans" id="courses">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <h3 className="text-brand-primary font-bold tracking-wider text-xs uppercase mb-2">PROGRAMMES WE OFFER</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
                        Advance Your Career with <span className="text-brand-cyan">Expert-Led Training</span>
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
                        Explore placement-driven diplomas and flexible online certifications tailored for industry needs.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-16">
                    <div className="bg-gray-200 p-1 rounded-full flex">
                        <button
                            onClick={() => setActiveTab('pg')}
                            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'pg'
                                ? 'bg-brand-primary text-white shadow-lg'
                                : 'text-gray-600 hover:text-brand-primary'
                                }`}
                        >
                            PG Programs
                        </button>
                        <button
                            onClick={() => setActiveTab('online')}
                            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'online'
                                ? 'bg-brand-primary text-white shadow-lg'
                                : 'text-gray-600 hover:text-brand-primary'
                                }`}
                        >
                            Online Courses
                        </button>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activeTab === 'pg' ? (
                        pgPrograms.map((course) => (
                            <div key={course._id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full group cursor-pointer">
                                <div className="h-48 overflow-hidden bg-gray-100 p-8 flex items-center justify-center relative">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <span className="bg-white/90 text-brand-primary px-4 py-2 rounded-full font-bold text-sm shadow-lg">View Details</span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="text-xs text-gray-500 font-medium mb-3 flex justify-between">
                                        <span>{course.students} Enrolled</span>
                                        <span className="text-brand-accent font-bold">₹{course.price}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-brand-primary mb-6 line-clamp-2 flex-grow">{course.title}</h3>
                                    <button
                                        className="w-full bg-brand-cyan hover:bg-brand-accent hover:text-brand-primary text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                                    >
                                        View Details
                                        <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        onlineCourses.map((course) => (
                            <div key={course.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group border border-gray-100 flex flex-col">
                                <div className="relative h-48 overflow-hidden flex-shrink-0">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="mb-3 inline-block bg-brand-light px-2 py-1 rounded text-xs font-bold text-brand-primary">
                                        {course.category}
                                    </div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="flex text-yellow-400 text-sm">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} className={i < Math.floor(course.rating) ? "text-yellow-400" : "text-gray-300"} />
                                            ))}
                                        </div>
                                        <span className="text-xs text-gray-500">({course.reviews} reviews)</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-brand-accent transition-colors">
                                        {course.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
                                        {course.description}
                                    </p>
                                    <div className="mt-auto">
                                        <div className="flex items-center justify-between text-sm text-gray-500 mb-6 border-t border-gray-100 pt-4">
                                            <div className="flex items-center gap-1">
                                                <FaClock className="text-brand-accent" />
                                                <span>{course.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <FaCheckCircle className="text-green-500" />
                                                <span>{course.students} Students</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between gap-4">
                                            <button className="text-brand-primary font-bold text-sm hover:text-brand-accent transition-colors">
                                                More Info
                                            </button>
                                            <button className="bg-brand-cyan text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-brand-primary transition-colors shadow-md hover:shadow-lg">
                                                Enroll Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

            </div>
        </section>
    );
};

export default ProgramSwitcher;
