import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Stats from '../components/Stats';
import WorkProcess from '../components/WorkProcess';
import WhyChooseUs from '../components/WhyChooseUs';
import PlacementPrograms from '../components/PlacementPrograms';
import OnlineCourses from '../components/OnlineCourses';
import Testimonials from '../components/Testimonials';
import Placement from '../components/Placement';

const Home = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <AboutSection />
            <Stats />
            <WorkProcess />
            <WhyChooseUs />
            <PlacementPrograms />
            <OnlineCourses />
            <Testimonials />
            <Placement />
        </div>
    );
};

export default Home;
