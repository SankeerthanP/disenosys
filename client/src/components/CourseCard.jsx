import React from 'react';

const CourseCard = ({ course }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-primary">
                    {course.category}
                </div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-3">{course.description}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-brand-accent font-bold text-lg">{course.price}</span>
                    <button className="text-sm font-semibold text-brand-primary border border-brand-primary px-4 py-2 rounded-full hover:bg-brand-primary hover:text-white transition-colors">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
