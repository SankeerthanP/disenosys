import React from 'react';
import { FaArrowRight, FaWhatsapp, FaChartBar, FaUserGraduate } from 'react-icons/fa';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const [showQuiz, setShowQuiz] = React.useState(false);
    const navigate = useNavigate();

    return (
        <section className="relative w-full min-h-screen pb-16 overflow-hidden flex items-center">
            {}
            <div
                className="absolute inset-0 z-0 bg-cover bg-left md:bg-center"
                style={{
                    backgroundImage: `url('/assets/hero-bg.png')`,
                    backgroundColor: '#050518',
                }}
            />

            {}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050518]/90 via-[#050518]/70 to-transparent" />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050518] via-transparent to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full flex flex-col md:flex-row items-center">

                {}
                <div className="w-full md:w-1/2 pt-10 md:pt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Shaping Industry Ready Engineers for the Future
                        </h1>
                        <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
                            Learn automobile engineering from anywhere, anytime. Become an industry-ready professional with our online courses.
                        </p>

                        <div className="flex items-center gap-6">
                            <button
                                onClick={() => setShowQuiz(true)}
                                className="bg-gradient-to-r from-[#29b6f6] to-[#0288d1] text-white font-bold py-3 px-8 rounded flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-1"
                            >
                                Take Test <FaArrowRight />
                            </button>
                            <button
                                onClick={() => navigate('/course')}
                                className="text-white border-b border-transparent hover:border-white transition-colors pb-1"
                            >
                                View All Courses
                            </button>
                        </div>
                    </motion.div>
                </div>

                {}
                <div className="w-full md:w-1/2 relative mt-12 md:mt-0 h-[500px] md:h-auto flex justify-center md:justify-end">

                    {}
                    <motion.img
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        src="/assets/hero-student.png"
                        alt="Student"
                        className="relative z-10 h-full max-h-[500px] md:max-h-[600px] object-contain"
                    />

                    {}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: -50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="absolute top-20 left-4 md:left-10 bg-white p-3 rounded-xl shadow-xl z-20 flex items-center gap-3 animate-float"
                    >
                        <div className="bg-cyan-100 p-2 rounded-lg text-brand-cyan">
                            <FaChartBar size={20} />
                        </div>
                        <div>
                            <div className="font-bold text-gray-900 leading-none">250k</div>
                            <div className="text-xs text-gray-500 font-medium">Assisted Student</div>
                        </div>
                    </motion.div>

                    {}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="absolute top-40 right-4 bg-white p-3 rounded-xl shadow-xl z-20 flex items-center gap-3 animate-float-delayed"
                    >
                        <div className="bg-orange-100 p-2 rounded-lg text-orange-500">
                            <FaUserGraduate size={20} />
                        </div>
                        <div>
                            <div className="font-bold text-gray-900 leading-none">Congratulations</div>
                            <div className="text-xs text-gray-500 font-medium">Your admission completed</div>
                        </div>
                    </motion.div>

                    {}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        className="absolute bottom-20 left-0 md:left-20 bg-white p-4 rounded-xl shadow-xl z-20 animate-float"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Student" className="w-8 h-8 rounded-full border-2 border-green-400" />
                            <div>
                                <div className="text-xs font-bold text-gray-800">Advanced CATIA Surface</div>
                                <div className="text-[10px] text-gray-500">Today at 12.00 PM</div>
                            </div>
                        </div>
                        <button className="w-full bg-[#29b6f6] text-white text-xs font-bold py-1.5 rounded hover:bg-[#0288d1] transition-colors">
                            Join Now
                        </button>
                    </motion.div>
                </div>
            </div>

            {}
            <div className="absolute bottom-0 left-0 right-0 z-10 w-full overflow-hidden leading-none">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(140%)] h-[60px] md:h-[100px] fill-white">
                    <path d="M985.66,92.83C906.67,72,823.78,31,432.84,2.45,129.56-23.23,0,51.84,0,51.84V120H1200V0C1200,0,1130.63,115.68,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>

            {}
            <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform animate-bounce-slow"
            >
                <FaWhatsapp size={32} />
            </a>

            {}
            {showQuiz && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full relative"
                    >
                        <button
                            onClick={() => setShowQuiz(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                        >
                            ✕
                        </button>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaChartBar className="text-brand-primary text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Skill Assessment</h3>
                            <p className="text-gray-600 mb-6">
                                Take a quick 15-minute quiz to evaluate your automotive engineering knowledge.
                            </p>

                            <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
                                <div className="flex items-center gap-3 mb-2">
                                    <FaClock className="text-brand-accent" />
                                    <span className="text-sm font-medium text-gray-700">Duration: 15 Minutes</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaUserGraduate className="text-brand-accent" />
                                    <span className="text-sm font-medium text-gray-700">Level: Intermediate</span>
                                </div>
                            </div>

                            <button className="w-full bg-brand-primary text-white font-bold py-3 rounded-xl hover:bg-brand-dark transition-colors shadow-lg shadow-blue-500/30">
                                Start Quiz
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </section>
    );
};

export default Hero;
