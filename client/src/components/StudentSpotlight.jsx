import React from 'react';

const StudentSpotlight = () => {
    return (
        <section className="py-12 bg-brand-primary overflow-hidden font-dm-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {}
                    <div className="relative">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl h-[300px] lg:h-[400px]">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                                alt="Student learning"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-cyan/20 rounded-full blur-2xl"></div>
                    </div>

                    {}
                    <div className="relative">
                        {}
                        <div className="bg-[#3b46a5] bg-opacity-90 backdrop-blur-sm p-10 rounded-2xl shadow-2xl relative z-20 text-white transform -translate-x-0 lg:-translate-x-12 translate-y-0 lg:translate-y-12">
                            <p className="text-lg italic leading-relaxed mb-8 opacity-90">
                                "The course effectively covered basic topics and offered excellent tool usage exposure. They provide opportunities for freshers to join top OEMs. The friendly, knowledgeable faculty makes it a great platform to kickstart your career with valuable industry exposure."
                            </p>

                            <div className="flex items-center gap-4">
                                <img
                                    src="https://randomuser.me/api/portraits/men/85.jpg"
                                    alt="Rajesh Deva"
                                    className="w-14 h-14 rounded-full border-2 border-brand-cyan"
                                />
                                <div>
                                    <h4 className="font-bold text-lg">Rajesh Deva</h4>
                                    <p className="text-xs text-gray-300">Renault Group</p>
                                    <p className="text-xs text-gray-400">India</p>
                                </div>
                            </div>
                        </div>

                        {}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan rounded-lg -translate-y-8 translate-x-8 z-10 hidden lg:block"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StudentSpotlight;
