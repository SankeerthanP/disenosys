import React from 'react';
import AboutHero from '../components/AboutHero';
import WhoWeAre from '../components/WhoWeAre';
import MissionVision from '../components/MissionVision';
import Founder from '../components/Founder';
import CareerPlatform from '../components/CareerPlatform';
import ExpertTeam from '../components/ExpertTeam';

const About = () => {
    return (
        <div className="min-h-screen">
            <AboutHero />
            <WhoWeAre />
            <MissionVision />
            <Founder />
            <CareerPlatform />
            <ExpertTeam />
        </div>
    );
};

export default About;
