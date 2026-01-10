import React from 'react';
import { FaArrowRight, FaUserFriends } from 'react-icons/fa';
import plasticImg from '../assets/plastic (2).webp';
import biwImg from '../assets/BIW.webp';
import cadImg from '../assets/cad (1).webp';

const programs = [
    {
        title: "PG Diploma in Plastic Trims Design",
        students: "5,957",
        image: plasticImg
    },
    {
        title: "PG Diploma in BIW Design",
        students: "4,230",
        image: biwImg
    },
    {
        title: "Masters in Automotive Body Design",
        students: "6,100",
        image: cadImg
    }
];

const PlacementPrograms = () => {
    return (
        <section className="py-20 bg-white font-dm-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h3 className="text-brand-accent font-bold tracking-wider text-sm uppercase mb-2">PROGRAMS WE OFFER</h3>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Placement <span className="text-brand-accent">Programs</span></h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Specialized courses designed to get you hired in top OEMs and Tier 1 companies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
                            <img
                                src={program.image}
                                alt={program.title}
                                className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />

                            <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                                    {program.title}
                                </h3>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-gray-300 text-sm font-medium">
                                        <FaUserFriends />
                                        <span>{program.students} Enrolled</span>
                                    </div>
                                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-brand-accent transition-colors">
                                        <FaArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlacementPrograms;
