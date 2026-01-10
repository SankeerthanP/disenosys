import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaEnvelope, FaUserCircle, FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube, FaUser, FaShoppingBag, FaSignOutAlt, FaChevronDown } from 'react-icons/fa';
import AuthContext from '../context/AuthContext';
import BookingModal from './BookingModal';
import AuthModal from './AuthModal';
import logo from '../assets/logo.webp';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        logout();
        setIsDropdownOpen(false);
        navigate('/');
    };

    return (
        <div className="sticky top-0 z-50 font-dm-sans bg-white">


            {/* Main Navbar */}
            <nav className={`bg - white transition - all duration - 300 border - b border - gray - 100 ${scrolled ? 'shadow-md py-2' : 'py-4'} `}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <div className="flex-shrink-0 flex items-center gap-2">
                            <Link to="/" className="flex items-center gap-2">
                                <img src={logo} alt="Diseñosys Logo" className="h-10 w-auto object-contain" />
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/" className="text-[#0a0a2a] hover:text-brand-primary font-bold text-base transition-colors">Home</Link>
                            <Link to="/about" className="text-gray-600 hover:text-brand-primary font-bold text-base transition-colors">About</Link>
                            <Link to="/course" className="text-gray-600 hover:text-brand-primary font-bold text-base transition-colors">Course</Link>
                            <Link to="/admission" className="text-gray-600 hover:text-brand-primary font-bold text-base transition-colors">Admission</Link>
                            <Link to="/blog" className="text-gray-600 hover:text-brand-primary font-bold text-base transition-colors">Blog</Link>
                            <Link to="/contact" className="text-gray-600 hover:text-brand-primary font-bold text-base transition-colors">Contact</Link>
                        </div>

                        {/* Desktop Buttons */}
                        <div className="hidden md:flex items-center gap-4">
                            {!user?.isAdmin && (
                                <button
                                    onClick={() => setIsBookingModalOpen(true)}
                                    className="bg-[#1a1a4a] text-white px-5 py-2 rounded font-bold text-sm hover:bg-[#2a2a6a] transition-all shadow-md"
                                >
                                    Book a Demo
                                </button>
                            )}

                            {user ? (
                                <div className="relative" ref={dropdownRef}>
                                    <button
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="flex items-center gap-2 pl-4 border-l border-gray-200 focus:outline-none"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                                            {user.isAdmin ? 'A' : user.name.charAt(0).toUpperCase()}
                                        </div>
                                        <span className="text-gray-700 font-medium text-sm max-w-[100px] truncate">
                                            {user.isAdmin ? 'Admin' : user.name}
                                        </span>
                                        <FaChevronDown className={`text-gray-400 text-xs transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {/* Dropdown Menu */}
                                    {isDropdownOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 animate-fade-in">
                                            {!user.isAdmin && (
                                                <Link
                                                    to="/profile"
                                                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-primary"
                                                    onClick={() => setIsDropdownOpen(false)}
                                                >
                                                    <FaUser className="text-gray-400" /> My Profile
                                                </Link>
                                            )}

                                            {user.isAdmin && (
                                                <Link
                                                    to="/admin"
                                                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-primary"
                                                    onClick={() => setIsDropdownOpen(false)}
                                                >
                                                    <FaUserCircle className="text-gray-400" /> Admin Dashboard
                                                </Link>
                                            )}

                                            {!user.isAdmin && (
                                                <Link
                                                    to="/my-orders"
                                                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-primary"
                                                    onClick={() => setIsDropdownOpen(false)}
                                                >
                                                    <FaShoppingBag className="text-gray-400" /> My Orders
                                                </Link>
                                            )}
                                            <div className="border-t border-gray-100 my-1"></div>
                                            <button
                                                onClick={handleLogout}
                                                className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 text-left"
                                            >
                                                <FaSignOutAlt /> Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <button
                                    onClick={() => setIsAuthModalOpen(true)}
                                    className="bg-gradient-to-r from-[#29b6f6] to-[#0288d1] text-white px-6 py-2 rounded font-bold text-sm hover:shadow-lg hover:brightness-110 transition-all"
                                >
                                    Sign Up
                                </button>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-primary focus:outline-none"
                            >
                                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl z-40">
                        <div className="px-4 py-6 space-y-4">
                            <Link to="/" className="block text-base font-medium text-gray-800 hover:text-brand-primary">Home</Link>
                            <Link to="/about" className="block text-base font-medium text-gray-600 hover:text-brand-primary">About</Link>
                            <Link to="/course" className="block text-base font-medium text-gray-600 hover:text-brand-primary">Course</Link>
                            <Link to="/admission" className="block text-base font-medium text-gray-600 hover:text-brand-primary">Admission</Link>
                            <Link to="/contact" className="block text-base font-medium text-gray-600 hover:text-brand-primary">Contact</Link>
                            <div className="pt-4 flex flex-col gap-3">
                                {!user?.isAdmin && (
                                    <button
                                        onClick={() => { setIsBookingModalOpen(true); setIsOpen(false); }}
                                        className="w-full bg-[#1a1a4a] text-white py-3 rounded font-bold"
                                    >
                                        Book a Demo
                                    </button>
                                )}
                                {user ? (
                                    <>
                                        {user.isAdmin && (
                                            <Link to="/admin" className="block text-center border border-gray-200 py-3 rounded text-gray-700 font-bold hover:bg-gray-50">Admin Dashboard</Link>
                                        )}
                                        <Link to="/my-orders" className="block text-center border border-gray-200 py-3 rounded text-gray-700 font-bold hover:bg-gray-50">My Orders</Link>
                                        <button onClick={handleLogout} className="w-full border border-red-200 py-3 rounded text-red-600 font-medium hover:bg-red-50">Logout</button>
                                    </>
                                ) : (
                                    <button
                                        onClick={() => { setIsAuthModalOpen(true); setIsOpen(false); }}
                                        className="w-full text-center bg-gradient-to-r from-[#29b6f6] to-[#0288d1] text-white py-3 rounded font-bold"
                                    >
                                        Sign Up
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                type="Demo"
            />

            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
            />
        </div>
    );
};

export default Navbar;
