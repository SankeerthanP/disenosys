import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaClock, FaCheckCircle, FaStar, FaSpinner } from 'react-icons/fa';
import BookingModal from './BookingModal';
import CourseDetailsModal from './CourseDetailsModal';
import AuthContext from '../context/AuthContext';

const categories = [
    "All Courses",
    "Plastic Trims",
    "Mechatronics Engineering",
    "Mechanical Engineering",
    "BIW",
    "Automobile Engineering",
];

const OnlineCourses = () => {
    const [activeCategory, setActiveCategory] = useState("All Courses");
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [showBookingModal, setShowBookingModal] = useState(false);
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const { data } = await axios.get('/api/courses');
                // Filter only Online courses if needed, assuming backend returns all
                // Based on seed, 'type' is 'Online'. Or we can filter by absence of 'PG' type
                const onlineOnly = data.filter(c => c.type === 'Online' || !c.type || c.category === 'Online Course' || categories.includes(c.category));
                setCourses(onlineOnly);
                setLoading(false);
            } catch (err) {
                setError('Failed to load courses');
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    const handleViewDetails = (course) => {
        setSelectedCourse(course);
        setShowDetailsModal(true);
    };

    const handleEnroll = (course) => {
        if (!user) {
            navigate('/login');
            return;
        }
        setSelectedCourse(course);
        setShowBookingModal(true);
    };

    const handleModalApply = () => {
        setShowDetailsModal(false);
        if (!user) {
            navigate('/login');
            return;
        }
        setTimeout(() => {
            setShowBookingModal(true);
        }, 300);
    };

    const filteredCourses = activeCategory === "All Courses"
        ? courses
        : courses.filter(course => course.category === activeCategory);

    if (loading) return <div className="flex justify-center py-20"><FaSpinner className="animate-spin text-4xl text-brand-primary" /></div>;
    if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

    return (
        <section className="py-16 bg-gray-50 font-dm-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h3 className="text-brand-accent font-bold tracking-wider text-sm uppercase mb-2">ONLINE COURSES</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Explore Our <span className="text-brand-accent">Online Courses</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover structured learning paths designed for real-world applications.
                    </p>
                </div>

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

                {courses.length === 0 ? (
                    <div className="text-center text-gray-500">No courses found.</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCourses.map((course) => (
                            <div key={course._id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group border border-gray-100 flex flex-col">
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

                                    <div className="mb-3 inline-block bg-brand-light px-2 py-1 rounded text-xs font-bold text-brand-primary">
                                        {course.category}
                                    </div>

                                    <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
                                        {course.description}
                                    </p>

                                    <div className="mt-auto">
                                        <div className="flex items-center justify-between gap-4">
                                            <button
                                                onClick={() => handleViewDetails(course)}
                                                className="text-brand-primary font-bold text-sm hover:text-brand-accent transition-colors"
                                            >
                                                More Info
                                            </button>
                                            <button
                                                onClick={() => handleEnroll(course)}
                                                className="bg-brand-cyan text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-brand-primary transition-colors shadow-md hover:shadow-lg"
                                            >
                                                Enroll Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="text-center mt-12">
                    <button
                        onClick={() => navigate('/course')}
                        className="bg-brand-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-accent transition-colors shadow-lg hover:shadow-xl"
                    >
                        View All Courses
                    </button>
                </div>
            </div>

            <CourseDetailsModal
                isOpen={showDetailsModal}
                onClose={() => setShowDetailsModal(false)}
                course={selectedCourse}
                onApply={handleModalApply}
            />

            <BookingModal
                isOpen={showBookingModal}
                onClose={() => setShowBookingModal(false)}
                type="Course Application"
                courseName={selectedCourse?.title}
                courseId={selectedCourse?._id}
                price={selectedCourse?.price || "4,999"}
            />
        </section >
    );
};

export default OnlineCourses;
