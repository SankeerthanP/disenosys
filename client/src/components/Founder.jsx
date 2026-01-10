import React from 'react';

const Founder = () => {
    return (
        <section className="py-20 bg-gray-50 font-dm-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Founder Images */}
                    <div className="grid grid-cols-2 gap-4 h-full">
                        <div className="space-y-4">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                                alt="Team collaboration"
                                className="w-full h-48 object-cover rounded-2xl shadow-md"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                                alt="Automotive engineering"
                                className="w-full h-64 object-cover rounded-2xl shadow-md"
                            />
                        </div>
                        <div className="flex items-center">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                                alt="Founder Portrait"
                                className="w-full h-80 object-cover rounded-2xl shadow-md"
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div>
                        <h3 className="text-brand-accent font-bold tracking-wider text-sm uppercase mb-4">MEET THE FOUNDER</h3>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6 leading-tight">
                            Inspiring Leadership, <span className="text-brand-cyan">Behind Disenosys</span>
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We are Disenosys, a leading EdTech platform established in 2019, specializing in industry-focused training for the Indian Automotive Industry. Our Post Graduate courses in Automotive Body Design cover key domains like BIW, Plastic Trims, and Seating Systems.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            So far, we have trained over 10,000 engineers and helped 500+ professionals secure their dream jobs. With a curriculum designed by industry experts, we offer 100% placement assistance.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Founder;
