import React from 'react';
import CourseHero from '../components/CourseHero';
import MasterySection from '../components/MasterySection';
import ProgramSwitcher from '../components/ProgramSwitcher';
import StudentSpotlight from '../components/StudentSpotlight';
import InstructorShowcase from '../components/InstructorShowcase';
import HiringCompanies from '../components/HiringCompanies';

const Course = () => {
    return (
        <div className="min-h-screen">
            <CourseHero />
            <MasterySection />
            <ProgramSwitcher />
            <StudentSpotlight />
            <InstructorShowcase />
            <HiringCompanies />
        </div>
    );
};

export default Course;
