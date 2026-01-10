import React from 'react';
import { FaTimes, FaCheckCircle, FaBookOpen, FaAward, FaCalendarAlt, FaRupeeSign } from 'react-icons/fa';

const CourseDetailsModal = ({ isOpen, onClose, course, onApply }) => {
    if (!isOpen || !course) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-fade-in font-dm-sans">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10 bg-white/80 p-2 rounded-full"
                >
                    <FaTimes size={24} />
                </button>

                {/* Header Image */}
                <div className="relative h-64 bg-gray-100">
                    <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                        <div className="p-8 text-white w-full">
                            <div className="inline-block px-3 py-1 bg-brand-accent text-brand-primary text-xs font-bold rounded-full mb-2">
                                {course.category}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-2">{course.title}</h2>
                            <div className="flex items-center gap-6 text-sm text-gray-200">
                                <span className="flex items-center gap-1"><FaCheckCircle className="text-green-400" /> {course.students}</span>
                                {/* Mocking extra data if not present in schema */}
                                <span className="flex items-center gap-1"><FaAward /> Certified Course</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <FaBookOpen className="text-brand-primary" /> About this Course
                            </h3>
                            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                {course.description}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">What you'll learn</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {[
                                    "Industry Standard Design Practices",
                                    "Hands-on Tool Mastery",
                                    "Real-world Project Experience",
                                    "Portfolio Development",
                                    "Interview Preparation",
                                    "Industry Certification"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-gray-700">
                                        <FaCheckCircle className="text-brand-accent flex-shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / details */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 sticky top-4">
                            <div className="flex items-end gap-2 mb-6">
                                <span className="text-3xl font-bold text-gray-900 flex items-center">
                                    <FaRupeeSign size={24} />{course.price}
                                </span>
                                <span className="text-gray-500 text-sm mb-1 line-through">₹{(parseInt(course.price.replace(/,/g, '')) * 1.5).toLocaleString()}</span>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center justify-between text-gray-600 text-sm border-b border-gray-200 pb-3">
                                    <span className="flex items-center gap-2"><FaCalendarAlt /> Duration</span>
                                    <span className="font-bold text-gray-900">3-6 Months</span>
                                </div>
                                <div className="flex items-center justify-between text-gray-600 text-sm border-b border-gray-200 pb-3">
                                    <span className="flex items-center gap-2"><FaBookOpen /> Mode</span>
                                    <span className="font-bold text-gray-900">Online/Hybrid</span>
                                </div>
                            </div>

                            <button
                                onClick={onApply}
                                className="w-full bg-brand-primary text-white font-bold py-3.5 rounded-lg hover:bg-brand-accent hover:text-brand-primary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Apply Now
                            </button>
                            <p className="text-xs text-center text-gray-400 mt-4">
                                Limited seats available for next batch.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsModal;
