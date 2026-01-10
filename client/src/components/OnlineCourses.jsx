import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaClock, FaCheckCircle, FaStar } from 'react-icons/fa';
import course1 from '../assets/course_1.jpg';
import course2 from '../assets/course_2.jpg';
import course3 from '../assets/course_3.jpg';
import course4 from '../assets/course_4.jpg';
import course5 from '../assets/course_5.jpg';

const courses = [
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

const categories = [
    "All Courses",
    "Plastic Trims",
    "Mechatronics Engineering",
    "Mechanical Engineering",
    "BIW",
    "Automobile Engineering",
    "Launching Soon"
];

const OnlineCourses = () => {
    const [activeCategory, setActiveCategory] = useState("All Courses");
    const navigate = useNavigate();

    const filteredCourses = activeCategory === "All Courses"
        ? courses
        : courses.filter(course => course.category === activeCategory);

    return (
        <section className="py-16 bg-gray-50 font-dm-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {}
                <div className="text-center mb-12">
                    <h3 className="text-brand-accent font-bold tracking-wider text-sm uppercase mb-2">ONLINE COURSES</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Explore Our <span className="text-brand-accent">Online Courses</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover structured learning paths designed for real-world applications.
                    </p>
                </div>

                {}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                ? 'bg-brand-primary text-white shadow-lg'
                                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.map((course) => (
                        <div key={course.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group border border-gray-100 flex flex-col">
                            <div className="relative h-48 overflow-hidden flex-shrink-0">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-accent transition-colors">
                                    {course.title}
                                </h3>

                                <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
                                    {course.description}
                                </p>

                                <div className="mt-auto">
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
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button
                        onClick={() => navigate('/course')}
                        className="bg-brand-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-accent transition-colors shadow-lg hover:shadow-xl"
                    >
                        View All Courses
                    </button>
                </div>
            </div>
        </section >
    );
};

export default OnlineCourses;
