import React from 'react';
import { FaYoutube, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const MarqueeAnnouncement = () => {
    return (
        <div className="bg-brand-primary text-white h-10 flex items-center overflow-hidden relative z-50">
            <div className="marquee-container">
                <div className="marquee-content">
                    <div className="flex gap-16 items-center flex-shrink-0 px-8">
                        <span className="text-sm font-medium tracking-wide">
                            ⏳ New Batch Starting Soon! Enroll Now & Upgrade Your Skills! 📚
                        </span>
                        <span className="text-sm font-medium tracking-wide">
                            💼 Job Assistance Included! Learn from Industry Experts! 🏆
                        </span>
                        <span className="text-sm font-medium tracking-wide">
                            🚀 Limited Seats Available! Don't Miss Out! 🚀
                        </span>
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div className="flex gap-16 items-center flex-shrink-0 px-8">
                        <span className="text-sm font-medium tracking-wide">
                            ⏳ New Batch Starting Soon! Enroll Now & Upgrade Your Skills! 📚
                        </span>
                        <span className="text-sm font-medium tracking-wide">
                            💼 Job Assistance Included! Learn from Industry Experts! 🏆
                        </span>
                        <span className="text-sm font-medium tracking-wide">
                            🚀 Limited Seats Available! Don't Miss Out! 🚀
                        </span>
                    </div>
                </div>
            </div>

            {}
            <div className="absolute right-0 h-full bg-brand-primary px-4 hidden md:flex items-center gap-4 z-10 shadow-[-10px_0_15px_-5px_rgba(0,0,0,0.3)]">
                <a href="#" className="hover:text-brand-cyan transition-colors"><FaYoutube /></a>
                <a href="#" className="hover:text-brand-cyan transition-colors"><FaInstagram /></a>
                <a href="#" className="hover:text-brand-cyan transition-colors"><FaFacebookF /></a>
                <a href="#" className="hover:text-brand-cyan transition-colors"><FaLinkedinIn /></a>
            </div>
        </div>
    );
};

export default MarqueeAnnouncement;
