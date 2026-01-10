import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        name: "Anto",
        role: "Dassault Systemes",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        content: "The training on automotive seats and GD&T was exceptional. The instructors have deep industry knowledge."
    },
    {
        name: "Rajesh Deva",
        role: "Renault Group",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        content: "Disenosys provided me with the right exposure to OEM standards and tool usage. Highly recommended!"
    },
    {
        name: "Karthikeyan C",
        role: "Renault Nissan",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        content: "Learning BIW surfacing with CATIA here was a game-changer for my career. The projects are very practical."
    }
];

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h3 className="text-brand-accent font-bold tracking-wider text-sm uppercase mb-2">TESTIMONIALS</h3>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Trusted by <span className="text-brand-accent">Our Learners</span></h2>
                    <div className="w-20 h-1.5 bg-brand-accent mx-auto rounded-full"></div>
                    <p className="mt-4 text-xl text-gray-600">Hear from our students who made it big.</p>
                </div>

                <Slider {...settings} className="pb-10">
                    {testimonials.map((t, i) => (
                        <div key={i} className="px-4">
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-full flex flex-col justify-between">
                                <div>
                                    <div className="flex text-yellow-400 mb-4">
                                        {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                                    </div>
                                    <p className="text-gray-600 italic mb-6">"{t.content}"</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">{t.name}</h4>
                                        <p className="text-sm text-brand-primary font-medium">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;
