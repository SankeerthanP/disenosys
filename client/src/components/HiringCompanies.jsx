import React from 'react';
import Tata from '../assets/Tata.webp';
import Ni from '../assets/Ni.webp';
import Hyu from '../assets/Hyu.webp';
import bmw from '../assets/bmw.webp';
import ford from '../assets/ford.webp';

const companies = [Tata, Ni, Hyu, bmw, ford];

const HiringCompanies = () => {
    return (
        <section className="py-20 bg-white font-dm-sans border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-16">Hiring Companies</h2>

                {}
                <div className="relative flex overflow-x-hidden group">
                    <div className="animate-marquee flex gap-12 items-center py-8 whitespace-nowrap">
                        {}
                        {companies.concat(companies).concat(companies).map((logo, index) => (
                            <div key={index} className="group relative min-w-[120px]">
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow duration-300 p-6 overflow-hidden">
                                    <img
                                        src={logo}
                                        alt="Hiring Partner"
                                        className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HiringCompanies;
