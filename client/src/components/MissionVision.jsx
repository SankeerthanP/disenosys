import React from 'react';
import { FaLightbulb, FaRocket } from 'react-icons/fa';

const MissionVision = () => {
    return (
        <section className="py-16 bg-white font-dm-sans border-t border-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

                {}
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0 bg-white p-4 rounded-xl shadow-md border border-gray-100">
                        <FaLightbulb className="w-12 h-12 text-brand-primary" />
                    </div>
                    <div>
                        <div className="text-brand-primary font-bold text-xs uppercase mb-2 tracking-wider">OUR VISION</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-brand-primary mb-3">
                            Empowering Success <span className="text-brand-cyan">for Every Learner</span>
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Aspire to be the leader in enabling individual success through coaching, mentoring, and training. Our motto is high-quality, affordable education for anyone with internet access.
                        </p>
                    </div>
                </div>

                {}
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0 bg-white p-4 rounded-xl shadow-md border border-gray-100">
                        <FaRocket className="w-12 h-12 text-brand-primary" />
                    </div>
                    <div>
                        <div className="text-brand-primary font-bold text-xs uppercase mb-2 tracking-wider">OUR MISSION</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-brand-primary mb-3">
                            Transforming Knowledge <span className="text-brand-cyan">into Career Growth</span>
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Imparting Domain Knowledge to Mechanical Engineering Graduates and Automotive by Seasoned Industry Experts. Empowering Our Students to an Expert The Domain of Choice.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MissionVision;
