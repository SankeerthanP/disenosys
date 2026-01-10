import React from 'react';

const WhoWeAre = () => {
    return (
        <section className="py-20 bg-white font-dm-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Image Collage */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600"
                                alt="Business meeting"
                                className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=600"
                                alt="Automotive light"
                                className="rounded-2xl shadow-lg w-full h-64 object-cover"
                            />
                        </div>
                        {/* Floating Stats Card */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 text-center w-40">
                            <div className="text-gray-500 text-xs font-semibold uppercase mb-1">Students</div>
                            <div className="text-3xl font-bold text-brand-primary">1000+</div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div>
                        <h3 className="text-brand-accent font-bold tracking-wider text-sm uppercase mb-4">WHO WE ARE</h3>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6 leading-tight">
                            Empowering Engineers, <span className="text-brand-cyan">Transforming Careers</span>
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Disenosys is a premier EdTech platform established in 2019, focused on transforming careers in the Indian Automotive Industry. We offer industry-specific Post Graduate courses in Automotive Body Design, covering key domains such as BIW, Plastic Trims, Seating, and more, using leading CAD software like CATIA, NX, and Creo.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            With a mission to bridge the skills gap, we've successfully trained over 10,000 engineers and helped 500+ professionals land their dream jobs. Our expertly designed curriculum, created by industry veterans, equips students with practical, job-ready skills.
                        </p>
                        <button className="bg-brand-cyan hover:bg-brand-primary text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg shadow-brand-cyan/30">
                            Explore Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
