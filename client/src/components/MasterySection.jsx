import React from 'react';
import c0 from '../assets/c0.webp';

const MasterySection = () => {
    return (
        <section className="py-20 bg-white font-dm-sans overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid leading-tight grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {}
                    <div className="relative">
                        <div className="border-[1.5px] border-dashed border-gray-300 rounded-lg p-8 relative">
                            {}
                            <div className="absolute top-0 left-0 w-3 h-3 bg-gray-400 rounded-full -translate-x-1.5 -translate-y-1.5"></div>
                            <div className="absolute top-0 right-0 w-3 h-3 bg-gray-400 rounded-full translate-x-1.5 -translate-y-1.5"></div>
                            <div className="absolute bottom-0 left-0 w-3 h-3 bg-gray-400 rounded-full -translate-x-1.5 translate-y-1.5"></div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-gray-400 rounded-full translate-x-1.5 translate-y-1.5"></div>

                            <img
                                src={c0}
                                alt="Automotive Design Schematic"
                                className="w-full h-auto object-contain" 
                            />

                            {}
                            <div className="absolute top-10 right-10 bg-white/90 p-2 border border-gray-200 shadow-sm rounded text-[10px] text-gray-500 font-mono">
                                <div>Width: 1800mm</div>
                                <div>Height: 1450mm</div>
                            </div>
                        </div>
                    </div>

                    {}
                    <div>
                        <h3 className="text-brand-primary font-bold tracking-wider text-xs uppercase mb-4">COURSES THAT SHAPE CAREERS</h3>
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-6 leading-tight">
                            Master <span className="text-brand-cyan">Automotive Body Design</span> with Disenosys
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Learn from industry experts through meticulously curated programs designed to make you job-ready. Choose from postgraduate and online certification courses tailored to the evolving demands of the automotive industry.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MasterySection;
